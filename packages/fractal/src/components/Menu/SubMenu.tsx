'use client'

import * as RxScrollArea from '@radix-ui/react-scroll-area'
import { useClickOutside } from '@react-hookz/web'
import { UilAngleRight as AngleRightIcon } from '@tooni/iconscout-unicons-react'

import {
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { onlyText } from 'react-children-utilities'

import constant from 'lodash/fp/constant'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import type { PopoverProps } from '@/components/Popover/Popover.types'

import { Paper } from '@/components/Paper/Paper'
import { Popover } from '@/components/Popover/Popover'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import type { SubMenuCombinedRefs, SubMenuProps } from './Menu.types'

import {
  DEFAULT_SUB_MENU_ELEVATION,
  GROUP_NAME,
  Orientations,
} from './Menu.constants'
import { MenuContext } from './MenuContext'
import { MenuGroupContext } from './MenuGroupContext'

/**
 * `SubMenu` component is used to display a sub-menu in a menu.
 */
export const SubMenu = forwardRef<SubMenuCombinedRefs, SubMenuProps>(
  (
    {
      active = false,
      align = 'start',
      children,
      condensed = false,
      condensedItems = false,
      defaultOpen = false,
      disabled = false,
      elevation = DEFAULT_SUB_MENU_ELEVATION,
      icon,
      label,
      labelElement,
      onClose,
      onInteractOutside,
      onOpen,
      onSubMenuOpenChange,
      open,
      popover = true,
      popup,
      rainbow = true,
      side,
      triggerOnHover = true,
      withIndicator = true,
      withScroll = true,
      ...props
    }: SubMenuProps,
    ref?: ForwardedRef<SubMenuCombinedRefs>,
  ) => {
    const triggerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      get content() {
        return contentRef?.current ?? null
      },

      get trigger() {
        return triggerRef?.current ?? null
      },
    }))

    const nonPopoverRef = useRef<HTMLDivElement>(null)

    const hasChildren = Boolean(children)

    const [isOpen, setIsOpen] = useState(open === true && hasChildren)

    const handleOpenChange = (isOpened: boolean) => {
      if (disabled) {
        return
      }

      const wasOpened = isOpen
      setIsOpen(constant(isOpened))

      if (isFunction(onSubMenuOpenChange) && wasOpened !== isOpened) {
        onSubMenuOpenChange(isOpened)
      }

      if (!wasOpened && isOpened && isFunction(onOpen)) {
        onOpen()
      }

      if (wasOpened && !isOpened && isFunction(onClose)) {
        onClose()
      }
    }

    const display = () => {
      handleOpenChange(true)
    }

    const hide = () => {
      handleOpenChange(false)
    }

    const toggle = () => {
      handleOpenChange(!isOpen)
    }

    useEffect(() => {
      if (open === true && hasChildren) {
        display()
      } else {
        hide()
      }
      // We don't want to reopen the menu based on the `display` or `hide`
      // functions. So we don't include it in the dependencies.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasChildren, open])

    const {
      condensed: menuCondensed,
      disabled: menuDisabled,
      orientation,
      rainbow: menuRainbow,
    } = useContext(MenuContext)
    const {
      condensed: groupCondensed,
      disabled: groupDisabled,
      rainbow: groupRainbow,
    } = useContext(MenuGroupContext)

    const isDisabled = disabled || groupDisabled || menuDisabled
    const isCondensed = condensed || groupCondensed || menuCondensed
    const isRainbow = rainbow && groupRainbow && menuRainbow

    const handleSubMenuInteractOutside: PopoverProps['onInteractOutside'] = (
      event,
    ) => {
      const { target } = event
      if (target === window || target === null || target === undefined) {
        return
      }

      if (
        triggerRef?.current?.contains(target as Element) ||
        contentRef?.current?.contains(target as Element)
      ) {
        event.preventDefault()
      }

      if (isFunction(onInteractOutside)) {
        onInteractOutside(event)
      }
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (isFunction(props.onKeyDown)) {
        props.onKeyDown(event)
      }

      if (event.key === 'Enter' || event.key === ' ') {
        display()
      }
    }

    const handleMouseEnter = () => {
      if (triggerOnHover) {
        display()
      }
    }

    const handleMouseLeave = () => {
      if (triggerOnHover) {
        hide()
      }
    }

    useClickOutside(nonPopoverRef, () => {
      hide()
    })

    const labelText = isString(label) ? label : onlyText(label)

    const trigger = (
      <Typography
        ref={triggerRef}
        aria-label={labelText}
        className={cj(
          `${PREFIX}-${GROUP_NAME}__sub-menu__trigger`,
          'flex w-full flex-row items-center gap-1',
          'rounded-sm outline-none transition-background-color duration-300 ease-out',
          isCondensed ? 'max-h-6 px-2 py-1' : 'p-2',
          icon ? `${PREFIX}-${GROUP_NAME}__sub-menu__trigger--with-icon` : '',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__sub-menu__trigger--disabled pointer-events-none cursor-not-allowed !bg-transparent text-disabled`
            : 'cursor-pointer text-dark',
          popup?.trigger?.className,
        )}
        element="div"
        role="menuitem"
        tabIndex={-1}
        title={labelText}
        {...(popover
          ? triggerOnHover
            ? {
                onClick: (event) => event.preventDefault(),
                onMouseEnter: handleMouseEnter,
              }
            : {}
          : { onClick: toggle })}
        style={popup?.trigger?.style}
        onKeyDown={handleKeyDown}
      >
        {icon && (
          <div
            className={cj(
              `${PREFIX}-${GROUP_NAME}__item__icon`,
              'max-h-3 max-w-3',
            )}
          >
            {icon}
          </div>
        )}

        <Typography
          className={cj(
            'flex-1',
            disabled ? `cursor-not-allowed` : 'cursor-pointer',
          )}
          element={labelElement || (isString(label) ? 'label' : 'div')}
        >
          {label}
        </Typography>

        {withIndicator && (
          <div
            className={cj(
              `${PREFIX}-${GROUP_NAME}__sub-menu__indicator`,
              'max-h-3 max-w-3',
            )}
          >
            <AngleRightIcon />
          </div>
        )}
      </Typography>
    )

    const contentElement = (
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__sub-menu__items`,
          'relative overflow-hidden rounded-sm p-1',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__sub-menu__items--disabled`
            : isRainbow
              ? alternatingBgColorLightClassNames
              : '',
        )}
        element="div"
      >
        <MenuGroupContext.Provider
          value={{
            condensed: condensedItems,
            disabled: isDisabled,
            rainbow: isRainbow,
          }}
        >
          {children}
        </MenuGroupContext.Provider>
      </Typography>
    )

    const wrappedElement = (
      <div
        ref={contentRef}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__sub-menu__content`,
          'w-full',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__sub-menu__content--disabled`
            : '',
          hasChildren
            ? ''
            : `${PREFIX}-${GROUP_NAME}__sub-menu__content--empty invisible`,
          popup?.content?.className,
        )}
        style={popup?.content?.style}
      >
        {withScroll ? (
          <RxScrollArea.Root
            className={`${PREFIX}-${GROUP_NAME}__sub-menu__content__scrollarea`}
            {...(props.dir === undefined
              ? {}
              : { dir: props.dir as RxScrollArea.ScrollAreaProps['dir'] })}
            type="hover"
          >
            <RxScrollArea.Viewport
              className={cj(
                `${PREFIX}-${GROUP_NAME}__sub-menu__content__scrollarea__viewport`,
                `relative h-full max-h-[calc(var(--radix-popper-available-height)-theme(spacing.4))] w-full overflow-auto [&:has(+_.${PREFIX}-${GROUP_NAME}__sub-menu__content__scrollarea__scrollbar--y)]:w-[calc(100%-theme(spacing.1)+theme(spacing.quarter))]`,
              )}
              style={{
                overflowY: undefined,
              }}
            >
              {contentElement}
            </RxScrollArea.Viewport>

            <RxScrollArea.Scrollbar
              className={cj(
                `${PREFIX}-${GROUP_NAME}__sub-menu__content__scrollarea__scrollbar--y`,
                'flex touch-none select-none rounded-r-sm bg-grey-90 p-quarter transition-background-color duration-300 ease-out hover:bg-grey-70 data-[orientation="vertical"]:w-1',
              )}
              orientation="vertical"
            >
              <RxScrollArea.Thumb
                className={cj(
                  `${PREFIX}-${GROUP_NAME}__sub-menu__content__scrollarea__scrollbar--y__thumb`,
                  'before:l-1/2 relative !w-half flex-1 rounded-sm bg-grey-30 before:absolute before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-empty',
                )}
              />
            </RxScrollArea.Scrollbar>
          </RxScrollArea.Root>
        ) : (
          contentElement
        )}
      </div>
    )

    const subMenuClassName = cn(
      `${PREFIX}-${GROUP_NAME}__sub-menu`,
      isDisabled ? `${PREFIX}-${GROUP_NAME}__sub-menu--disabled` : '',
      'pointer-events-auto relative z-50 overflow-hidden rounded-sm p-0 data-[side="bottom"]:mt-1 data-[side="left"]:mr-2 data-[side="right"]:ml-2 data-[side="top"]:mb-1',
    )

    return popover ? (
      <Popover
        align={align}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__sub-menu__popup`,
          `${PREFIX}-${GROUP_NAME}__sub-menu__popup--popover`,
          isRainbow
            ? 'alternatee'
            : !isDisabled
              ? 'hover:bg-decorative-pink-90'
              : '',
          'rounded-sm',
          props.className,
        )}
        data-highlighted={active || isOpen || undefined}
        disabled={disabled}
        elevation={elevation}
        fullWidth
        popover={{
          className: subMenuClassName,
          style: popup?.style,
        }}
        side={
          isEmpty(side)
            ? orientation === Orientations.Vertical
              ? 'right'
              : 'bottom'
            : side
        }
        style={{
          ...props.style,
          ...popup?.style,
        }}
        trigger={trigger}
        withArrow={false}
        withCloseButton={false}
        withScroll={withScroll}
        onClose={onClose}
        onInteractOutside={handleSubMenuInteractOutside}
        onOpen={onOpen}
        onOpenChange={handleOpenChange}
        {...(defaultOpen ? { defaultOpen: true } : {})}
        {...(disabled ? { open: false } : { open: isOpen })}
        onMouseLeave={handleMouseLeave}
        {...omit(['className', 'style'], props)}
      >
        {wrappedElement}
      </Popover>
    ) : (
      <div
        ref={nonPopoverRef}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__sub-menu__popup`,
          `${PREFIX}-${GROUP_NAME}__sub-menu__popup--non-popover`,
          'alternatee',
          'relative rounded-sm outline-none transition-background-color duration-300 ease-out',
          props.className,
          popup?.className,
        )}
        data-highlighted={active || isOpen || undefined}
        style={{
          ...props.style,
          ...popup?.style,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...omit(['className', 'style'], props)}
      >
        <div
          className={cn(
            `${PREFIX}-${GROUP_NAME}__sub-menu__popup__trigger-wrapper`,
            popup?.trigger?.wrapper?.className,
          )}
          style={popup?.trigger?.wrapper?.style}
        >
          {trigger}
        </div>

        <div
          className={cn(
            `${PREFIX}-${GROUP_NAME}__sub-menu__popup__content-positionner`,
            'absolute left-full top-0 z-[5000] pl-2',
            isOpen ? '' : 'hidden',
            popup?.content?.positionner?.className,
          )}
          style={popup?.content?.positionner?.style}
        >
          <Paper
            className={cn(
              `${PREFIX}-${GROUP_NAME}__sub-menu__popup__content-wrapper`,
              'p-0',
              popup?.content?.wrapper?.className,
            )}
            elevation={elevation}
            style={popup?.content?.wrapper?.style}
          >
            <div className={subMenuClassName}>{wrappedElement}</div>
          </Paper>
        </div>
      </div>
    )
  },
)
SubMenu.displayName = 'SubMenu'

export default SubMenu
