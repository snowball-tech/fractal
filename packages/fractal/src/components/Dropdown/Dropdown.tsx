'use client'

import * as RxDropdown from '@radix-ui/react-dropdown-menu'
import * as RxScrollArea from '@radix-ui/react-scroll-area'
import { UilAngleDown as AngleDownIcon } from '@tooni/iconscout-unicons-react'

import {
  type CSSProperties,
  type ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import isFunction from 'lodash/fp/isFunction'
import isNumber from 'lodash/fp/isNumber'
import noop from 'lodash/fp/noop'
import omit from 'lodash/fp/omit'

import { Elevations } from '@/components/Paper/Paper.constants'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import type { CombinedRefs, DropdownProps } from './Dropdown.types'

import { DEFAULT_ELEVATION, GROUP_NAME } from './Dropdown.constants'
import { DropdownContext } from './DropdownContext'

/**
 * `Dropdown` component displays a dropdown menu when a trigger is clicked.
 *
 * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu for
 * more information.
 */
export const Dropdown = forwardRef<CombinedRefs, DropdownProps>(
  (
    {
      align,
      asSelect = false,
      children,
      condensed = false,
      defaultOpen = false,
      disabled = false,
      dropdown = {},
      elevation = DEFAULT_ELEVATION,
      fullWidth = false,
      onClick,
      onClose,
      onInteractOutside,
      onMenuOpenChange,
      onOpen,
      open,
      side,
      toggleOnTriggerClick = true,
      trigger,
      triggerAsButton = true,
      width = 'fit',
      withIndicator = true,
      withScroll = true,
      ...props
    }: DropdownProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      get container() {
        return containerRef?.current ?? null
      },

      get dropdown() {
        return dropdownRef?.current ?? null
      },

      get trigger() {
        return triggerRef?.current ?? null
      },
    }))

    const hasTriggerElement = Boolean(trigger)
    const hasTrigger = hasTriggerElement || withIndicator
    const hasChildren = Boolean(children)

    const [isOpen, setIsOpen] = useState(
      open === true || (!hasTrigger && hasChildren && open !== false),
    )

    const handleOpenChange = (isOpened: boolean) => {
      if (disabled) {
        return
      }

      const wasOpened = isOpen
      setIsOpen(isOpened)

      if (isFunction(onMenuOpenChange) && wasOpened !== isOpened) {
        onMenuOpenChange(isOpened)
      }

      if (!wasOpened && isOpened && isFunction(onOpen)) {
        onOpen()
      }

      if (wasOpened && !isOpened && isFunction(onClose)) {
        onClose()
      }
    }

    useEffect(() => {
      if (open === true || (!hasTrigger && hasChildren && open !== false)) {
        handleOpenChange(true)
      } else {
        handleOpenChange(false)
      }
      // We don't want to reopen the dropdown based on the `handleOpenChange`
      // function. So we don't include it in the dependencies.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasChildren, hasTrigger, open])

    const handleDropdownInteractOutside: DropdownProps['onInteractOutside'] = (
      event,
    ) => {
      const { target } = event
      if (target === window || target === null || target === undefined) {
        return
      }

      if (
        containerRef?.current?.contains(target as Element) ||
        dropdownRef?.current?.contains(target as Element)
      ) {
        event.preventDefault()
      }

      if (isFunction(onInteractOutside)) {
        onInteractOutside(event)
      }
    }

    let widthClassNames = 'max-w-[var(--radix-popper-available-width)]'
    let widthStyle: CSSProperties = {}
    if (isNumber(width)) {
      widthClassNames = 'max-w-full'
      widthStyle = { minWidth: `${width}px`, width: `${width}px` }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (width.startsWith('*')) {
        if (hasTriggerElement) {
          const widthValue = width.slice(1)
          widthStyle = {
            minWidth: `calc(${widthValue} * var(--radix-popper-anchor-width))`,
            width: `calc(${widthValue} * var(--radix-popper-anchor-width))`,
          }
        } else {
          widthClassNames = 'w-fit'
          console.warn(
            'The `width` prop is set to a fraction but no `trigger` is provided! Falling back to `auto` (which will fit the content)...',
          )
        }
      } else {
        switch (width) {
          case 'fit': {
            widthClassNames = 'w-fit'
            break
          }

          case 'full': {
            widthClassNames = 'w-[var(--radix-popper-available-width)]'
            break
          }

          default: {
            widthClassNames = hasTriggerElement
              ? 'w-[var(--radix-popper-anchor-width,"100%")]'
              : 'w-fit'
            break
          }
        }

        if (width === 'trigger' && !hasTriggerElement) {
          console.warn(
            'The `width` prop is set to `trigger` but no `trigger` is provided! Falling back to `auto` (which will fit the content)...',
          )
        }
      }
    }

    const elevationClassNames = {
      [Elevations.Bordered]: 'rounded-sm shadow-none',

      [Elevations.Elevated]: 'rounded-sm shadow-subtle ml-quarter mb-quarter',

      [Elevations.Higher]: 'rounded-sm shadow-brutal ml-quarter mb-half',
    }

    const contentElement = (
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__dropdown__wrapper`,
          alternatingBgColorLightClassNames,
          condensed
            ? `${PREFIX}-${GROUP_NAME}__dropdown__wrapper--condensed`
            : '',
        )}
        element="div"
        variant="body-1"
      >
        <DropdownContext.Provider
          value={{
            condensed,
            disabled,
          }}
        >
          {children}
        </DropdownContext.Provider>
      </Typography>
    )

    return (
      <div
        ref={containerRef}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          isOpen
            ? `${PREFIX}-${GROUP_NAME}--opened`
            : `${PREFIX}-${GROUP_NAME}--closed`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width w-full` : 'sm:w-fit',
          props.className,
        )}
        {...omit(['className', 'onClick'], props)}
      >
        <RxDropdown.Root
          {...(defaultOpen ? { defaultOpen: true } : {})}
          {...(disabled ? { open: false } : { open: isOpen })}
          modal={false}
          onOpenChange={handleOpenChange}
        >
          <RxDropdown.Trigger
            asChild={hasTrigger}
            className={cj(
              `${PREFIX}-${GROUP_NAME}__trigger`,
              'text-color-unset w-full appearance-none text-left outline-hidden',
              width === 'fit' || width === 'full'
                ? ''
                : 'max-w-[var(--radix-dropdown-menu-content-available-width)]',
              fullWidth ? `${PREFIX}-${GROUP_NAME}__trigger--full-width` : '',
              hasTrigger
                ? 'flex items-center'
                : 'invisible h-0 max-h-0 border-y-0 py-0',
              disabled
                ? `${PREFIX}-${GROUP_NAME}__trigger--disabled text-disabled cursor-default`
                : '!cursor-pointer',
              toggleOnTriggerClick ? '' : '!cursor-default',
              asSelect
                ? 'border-normal py-unset transition-border-color data-with-placeholder:text-placeholder flex h-6 max-h-6 min-h-6 items-center rounded-sm border-1 px-2 duration-300 ease-out'
                : 'bg-unset px-unset py-unset border-none',
              asSelect && !disabled
                ? 'border-normal hover:shadow-hover cursor-pointer bg-white hover:border-1'
                : '',
              asSelect && disabled
                ? 'border-disabled bg-disabled-light cursor-not-allowed'
                : '',
              asSelect && !disabled && isOpen
                ? 'hover:shadow-over border-primary shadow-primary'
                : '',
            )}
            disabled={!toggleOnTriggerClick}
            onPointerDown={
              hasTrigger
                ? noop
                : (event) => {
                    event.preventDefault()
                    event.stopPropagation()
                  }
            }
          >
            {hasTrigger && (
              <Typography
                className={cj(
                  `${PREFIX}-${GROUP_NAME}__trigger__content`,
                  'flex h-full w-full items-center justify-between',
                  disabled
                    ? `${PREFIX}-${GROUP_NAME}__trigger__content--disabled`
                    : '',
                )}
                disabled={!toggleOnTriggerClick}
                element={
                  toggleOnTriggerClick && triggerAsButton ? 'button' : 'div'
                }
                onClick={onClick}
              >
                {trigger}

                {withIndicator && (
                  <div
                    className={cj(
                      `${PREFIX}-${GROUP_NAME}__trigger__indicator`,
                      'flex h-full items-center self-center transition-transform duration-300 ease-out',
                      isOpen ? 'rotate-180' : '',
                    )}
                  >
                    <AngleDownIcon className="h-full" />
                  </div>
                )}
              </Typography>
            )}
          </RxDropdown.Trigger>

          <RxDropdown.Portal>
            {isOpen && (
              <RxDropdown.Content
                ref={dropdownRef}
                align={align || (withIndicator ? 'end' : 'center')}
                asChild
                className={cn(
                  `${PREFIX}-${GROUP_NAME}__dropdown`,
                  elevationClassNames[elevation],
                  'border-normal pointer-events-auto relative z-50 overflow-hidden border-1 bg-white p-1 data-[side="bottom"]:mt-1 data-[side="left"]:mr-1 data-[side="right"]:ml-1 data-[side="top"]:mb-1',
                  widthClassNames,
                  hasChildren
                    ? ''
                    : `${PREFIX}-${GROUP_NAME}__dropdown--empty invisible`,
                  dropdown?.className,
                )}
                loop
                side={side}
                style={{
                  display: undefined,
                  ...widthStyle,
                  ...dropdown.style,
                }}
                onInteractOutside={handleDropdownInteractOutside}
                {...omit(
                  [
                    'align',
                    'asChild',
                    'className',
                    'side',
                    'style',
                    'onInteractOutside',
                  ],
                  dropdown,
                )}
              >
                {withScroll ? (
                  <RxScrollArea.Root
                    className={`${PREFIX}-${GROUP_NAME}__dropdown__scrollarea`}
                    {...(props.dir === undefined
                      ? {}
                      : {
                          dir: props.dir as RxScrollArea.ScrollAreaProps['dir'],
                        })}
                    type="hover"
                  >
                    <RxScrollArea.Viewport
                      className={cj(
                        `${PREFIX}-${GROUP_NAME}__dropdown__scrollarea__viewport`,
                        `relative h-full max-h-[calc(var(--radix-popper-available-height)-theme(spacing.4))] w-full overflow-auto [&:has(+_.${PREFIX}-${GROUP_NAME}__dropdown__scrollarea__scrollbar--y)]:w-[calc(100%-theme(spacing.1)+theme(spacing.quarter))]`,
                      )}
                      style={{
                        overflowY: undefined,
                      }}
                    >
                      {contentElement}
                    </RxScrollArea.Viewport>

                    <RxScrollArea.Scrollbar
                      className={cj(
                        `${PREFIX}-${GROUP_NAME}__dropdown__scrollarea__scrollbar--y`,
                        'bg-grey-90 p-quarter transition-background-color hover:bg-grey-70 flex touch-none rounded-r-sm duration-300 ease-out select-none data-[orientation="vertical"]:w-1',
                      )}
                      orientation="vertical"
                    >
                      <RxScrollArea.Thumb
                        className={cj(
                          `${PREFIX}-${GROUP_NAME}__dropdown__scrollarea__scrollbar--y__thumb`,
                          'before:l-1/2 !w-half bg-grey-30 before:content-empty relative flex-1 rounded-sm before:absolute before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2',
                        )}
                      />
                    </RxScrollArea.Scrollbar>
                  </RxScrollArea.Root>
                ) : (
                  contentElement
                )}
              </RxDropdown.Content>
            )}
          </RxDropdown.Portal>
        </RxDropdown.Root>
      </div>
    )
  },
)
Dropdown.displayName = 'Dropdown'

export default Dropdown
