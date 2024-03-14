'use client'

import AngleRightIcon from '@iconscout/react-unicons/dist/icons/uil-angle-right'
import * as RxScrollArea from '@radix-ui/react-scroll-area'
import type { DismissableLayerProps } from '@radix-ui/react-select'
import { useClickOutside } from '@react-hookz/web'
import constant from 'lodash/fp/constant'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import {
  ForwardedRef,
  KeyboardEvent,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { Paper } from '@/components/Paper/Paper'
import { Popover } from '@/components/Popover/Popover'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import {
  DEFAULT_SUB_MENU_ELEVATION,
  GROUP_NAME,
  Orientations,
} from './Menu.constants'
import type { SubMenuCombinedRefs, SubMenuProps } from './Menu.types'
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
      content,
      defaultOpen = false,
      disabled = false,
      elevation = DEFAULT_SUB_MENU_ELEVATION,
      icon,
      label,
      popover = true,
      onClose,
      onInteractOutside,
      onOpen,
      onSubMenuOpenChange,
      open,
      side,
      triggerOnHover = true,
      withIndicator = true,
      withScroll = true,
      ...props
    }: SubMenuProps,
    ref: ForwardedRef<SubMenuCombinedRefs>,
  ) => {
    const triggerRef = useRef<HTMLElement>(null)
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

    useEffect(() => {
      if (open === true && hasChildren) {
        display()
      } else {
        hide()
      }
      // We don't want to reopen the menu based on the `handleOpenChange`
      // function. So we don't include it in the dependencies.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children, open])

    const { disabled: menuDisabled, orientation } = useContext(MenuContext)
    const { disabled: groupDisabled } = useContext(MenuGroupContext)

    const isDisabled = disabled || groupDisabled || menuDisabled

    const handleSubMenuInteractOutside: DismissableLayerProps['onInteractOutside'] =
      (event) => {
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

    const timeout = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
      if (triggerOnHover) {
        if (timeout.current !== null) {
          clearTimeout(timeout.current)
          timeout.current = null
        }

        display()
      }
    }

    const handleMouseLeave = () => {
      if (triggerOnHover) {
        timeout.current = setTimeout(hide, 200)
      }
    }

    useClickOutside(nonPopoverRef, () => {
      hide()
    })

    const trigger = (
      <Typography
        ref={triggerRef}
        aria-label={label}
        className={cj(
          `${PREFIX}-${GROUP_NAME}__sub-menu__trigger`,
          'flex w-full flex-row items-center justify-between gap-1',
          'rounded-sm p-2 outline-none transition-background-color duration-300 ease-out',
          icon ? `${PREFIX}-${GROUP_NAME}__sub-menu__trigger--with-icon` : '',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__sub-menu__trigger--disabled pointer-events-none cursor-not-allowed !bg-transparent text-disabled`
            : 'cursor-pointer text-dark',
          props.className,
        )}
        data-highlighted={active || isOpen || undefined}
        element="div"
        role="menuitem"
        tabIndex={-1}
        title={label}
        // eslint-disable-next-line no-nested-ternary
        {...(!popover
          ? { onClick: display }
          : triggerOnHover
            ? { onMouseEnter: handleMouseEnter }
            : {})}
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
        <Typography element="label">{label}</Typography>
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
          disabled
            ? `${PREFIX}-${GROUP_NAME}__sub-menu__items--disabled`
            : alternatingBgColorLightClassNames,
        )}
        element="div"
      >
        <MenuGroupContext.Provider value={{ disabled }}>
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
          !hasChildren
            ? `${PREFIX}-${GROUP_NAME}__sub-menu__content--empty invisible`
            : '',
          content?.className,
        )}
        {...omit(['className'], content)}
      >
        {withScroll ? (
          <RxScrollArea.Root
            className={`${PREFIX}-${GROUP_NAME}__sub-menu__content__scrollarea`}
            {...(props.dir !== undefined
              ? { dir: props.dir as RxScrollArea.Direction }
              : {})}
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

    return !popover ? (
      <div
        ref={nonPopoverRef}
        className="alternatee relative rounded-sm outline-none transition-background-color duration-300 ease-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>{trigger}</div>

        <Paper
          className={cj(
            'absolute left-[calc(100%+theme(spacing.2))] top-0 z-50 p-0',
            isOpen ? '' : 'hidden',
          )}
          elevation={elevation}
        >
          <div className={subMenuClassName}>{wrappedElement}</div>
        </Paper>
      </div>
    ) : (
      <Popover
        align={align}
        className="alternatee rounded-sm"
        disabled={disabled}
        elevation={elevation}
        fullWidth
        popover={{
          className: subMenuClassName,
        }}
        side={
          // eslint-disable-next-line no-nested-ternary
          !isEmpty(side)
            ? side
            : orientation === Orientations.Vertical
              ? 'right'
              : 'bottom'
        }
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
        {...omit(['className'], props)}
        onMouseLeave={handleMouseLeave}
      >
        {wrappedElement}
      </Popover>
    )
  },
)
SubMenu.displayName = 'SubMenu'

export default SubMenu
