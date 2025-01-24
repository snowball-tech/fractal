'use client'

import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import * as RxScrollArea from '@radix-ui/react-scroll-area'
import { UilAngleRight as AngleRightIcon } from '@tooni/iconscout-unicons-react'

import {
  ForwardedRef,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import type {
  DropdownProps,
  SubDropdownCombinedRefs,
  SubDropdownProps,
} from './Dropdown.types'

import { GROUP_NAME } from './Dropdown.constants'
import { DropdownContext } from './DropdownContext'
import { DropdownGroupContext } from './DropdownGroupContext'
/**
 * `SubDropdown` component is used to display a submenu in a dropdown.
 *
 * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#sub
 * for more information.
 */
export const SubDropdown = forwardRef<
  SubDropdownCombinedRefs,
  SubDropdownProps
>(
  (
    {
      children,
      condensed = false,
      condensedItems = false,
      content,
      defaultOpen = false,
      disabled = false,
      icon,
      label,
      onClick,
      onClose,
      onInteractOutside,
      onOpen,
      onSubMenuOpenChange,
      open,
      withIndicator = true,
      withScroll = true,
      ...props
    }: SubDropdownProps,
    ref: ForwardedRef<SubDropdownCombinedRefs>,
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

    const hasChildren = Boolean(children)

    const [isOpen, setIsOpen] = useState(open === true)

    const handleOpenChange = (isOpened: boolean) => {
      if (disabled) {
        return
      }

      const wasOpened = isOpen
      setIsOpen(isOpened)

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

    useEffect(() => {
      if (open === true) {
        handleOpenChange(true)
      } else {
        handleOpenChange(false)
      }
      // We don't want to reopen the dropdown based on the `handleOpenChange`
      // function. So we don't include it in the dependencies.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasChildren, open])

    const { condensed: dropdownCondensed, disabled: dropdownDisabled } =
      useContext(DropdownContext)
    const { condensed: groupCondensed, disabled: groupDisabled } =
      useContext(DropdownGroupContext)

    const isDisabled = disabled || groupDisabled || dropdownDisabled
    const isCondensed = condensed || groupCondensed || dropdownCondensed

    const handleSubMenuInteractOutside: DropdownProps['onInteractOutside'] = (
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

    const contentElement = (
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__sub-menu__items`,
          disabled
            ? `${PREFIX}-${GROUP_NAME}__sub-menu__items--disabled`
            : alternatingBgColorLightClassNames,
        )}
        element="div"
      >
        <DropdownGroupContext.Provider
          value={{ condensed: condensedItems, disabled }}
        >
          {children}
        </DropdownGroupContext.Provider>
      </Typography>
    )

    return (
      <RxDropdownMenu.Sub
        {...(defaultOpen ? { defaultOpen: true } : {})}
        {...(disabled ? { open: false } : { open: isOpen })}
        onOpenChange={handleOpenChange}
      >
        <RxDropdownMenu.SubTrigger
          asChild
          className={cn(
            `${PREFIX}-${GROUP_NAME}__sub-menu`,
            'flex w-full flex-row items-center gap-1',
            'transition-background-color rounded-sm outline-hidden duration-300 ease-out',
            isCondensed ? 'max-h-6 px-2 py-1' : 'p-2',
            icon ? `${PREFIX}-${GROUP_NAME}__sub-menu__with-icon` : '',
            isDisabled
              ? `${PREFIX}-${GROUP_NAME}__sub-menu--disabled text-disabled cursor-not-allowed !bg-transparent`
              : 'text-dark cursor-pointer',
            props.className,
          )}
          onClick={onClick}
          {...omit(['className'], props)}
        >
          <div
            className={cj(
              `${PREFIX}-${GROUP_NAME}__sub-menu__label`,
              'alternatee',
              'flex w-full flex-row items-center gap-1',
              disabled
                ? `${PREFIX}-${GROUP_NAME}__sub-menu__label--disabled text-disabled cursor-not-allowed`
                : 'cursor-pointer',
            )}
          >
            {icon && (
              <div
                className={cj(
                  `${PREFIX}-${GROUP_NAME}__sub-menu__icon`,
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
              element="label"
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
          </div>
        </RxDropdownMenu.SubTrigger>

        <RxDropdownMenu.Portal>
          <RxDropdownMenu.SubContent
            ref={contentRef}
            className={cn(
              `${PREFIX}-${GROUP_NAME}__sub-menu__content`,
              'border-normal pointer-events-auto relative z-50 -mt-1 overflow-hidden rounded-sm border-1 bg-white p-1 data-[side="bottom"]:mt-1 data-[side="left"]:mr-2 data-[side="right"]:ml-2 data-[side="top"]:mb-1',
              hasChildren
                ? ''
                : `${PREFIX}-${GROUP_NAME}__sub-menu__content--empty invisible`,
              content?.className,
            )}
            loop
            style={{
              display: undefined,
              ...content?.style,
            }}
            onInteractOutside={handleSubMenuInteractOutside}
            {...omit(
              ['asChild', 'className', 'style', 'onInteractOutside'],
              content,
            )}
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
                    'bg-grey-90 p-quarter transition-background-color hover:bg-grey-70 flex touch-none rounded-r-sm duration-300 ease-out select-none data-[orientation="vertical"]:w-1',
                  )}
                  orientation="vertical"
                >
                  <RxScrollArea.Thumb
                    className={cj(
                      `${PREFIX}-${GROUP_NAME}__sub-menu__content__scrollarea__scrollbar--y__thumb`,
                      'before:l-1/2 !w-half bg-grey-30 before:content-empty relative flex-1 rounded-sm before:absolute before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2',
                    )}
                  />
                </RxScrollArea.Scrollbar>
              </RxScrollArea.Root>
            ) : (
              contentElement
            )}
          </RxDropdownMenu.SubContent>
        </RxDropdownMenu.Portal>
      </RxDropdownMenu.Sub>
    )
  },
)
SubDropdown.displayName = 'SubDropdown'

export default SubDropdown
