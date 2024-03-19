'use client'

import AngleDownIcon from '@iconscout/react-unicons/icons/uil-angle-down'
import * as RxDropdown from '@radix-ui/react-dropdown-menu'
import * as RxScrollArea from '@radix-ui/react-scroll-area'
import type { DismissableLayerProps } from '@radix-ui/react-select'
import isFunction from 'lodash/fp/isFunction'
import isNumber from 'lodash/fp/isNumber'
import noop from 'lodash/fp/noop'
import omit from 'lodash/fp/omit'
import {
  type CSSProperties,
  type ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Dropdown.constants'
import type { CombinedRefs, DropdownProps } from './Dropdown.types'
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
      children,
      condensed = false,
      defaultOpen = false,
      disabled = false,
      dropdown = {},
      fullWidth = false,
      onClose,
      onInteractOutside,
      onMenuOpenChange,
      onOpen,
      open,
      toggleOnTriggerClick = true,
      trigger,
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
    }, [children, open])

    const handleDropdownInteractOutside: DismissableLayerProps['onInteractOutside'] =
      (event) => {
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
          case 'fit':
            widthClassNames = 'w-fit'
            break

          case 'full':
            widthClassNames = 'w-[var(--radix-popper-available-width)]'
            break

          case 'auto':
          case 'trigger':
          default:
            widthClassNames = hasTriggerElement
              ? 'w-[var(--radix-popper-anchor-width,"100%")]'
              : 'w-fit'
            break
        }

        if (width === 'trigger' && !hasTriggerElement) {
          console.warn(
            'The `width` prop is set to `trigger` but no `trigger` is provided! Falling back to `auto` (which will fit the content)...',
          )
        }
      }
    }

    const contentElement = (
      <Typography
        className={alternatingBgColorLightClassNames}
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
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          props.className,
        )}
        {...omit(['className'], props)}
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
              'appearance-none border-none bg-unset px-unset py-unset text-left text-color-unset outline-none',
              width === 'fit' || width === 'full'
                ? ''
                : 'max-w-[var(--radix-dropdown-menu-content-available-width)]',
              !hasTrigger
                ? 'invisible h-0 max-h-0 border-y-0 py-0'
                : 'flex items-center',
              disabled
                ? `${PREFIX}-${GROUP_NAME}__trigger--disabled cursor-default text-disabled`
                : '!cursor-pointer',
              !toggleOnTriggerClick ? '!cursor-default' : '',
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
                  disabled
                    ? `${PREFIX}-${GROUP_NAME}__trigger__content--disabled`
                    : '',
                )}
                element={toggleOnTriggerClick ? 'button' : 'div'}
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
                align={dropdown.align ?? withIndicator ? 'end' : 'center'}
                asChild
                className={cn(
                  `${PREFIX}-${GROUP_NAME}__dropdown`,
                  'pointer-events-auto relative z-50 overflow-hidden rounded-sm border-1 border-normal bg-white p-1 data-[side="bottom"]:mt-1 data-[side="left"]:mr-1 data-[side="right"]:ml-1 data-[side="top"]:mb-1',
                  widthClassNames,
                  !hasChildren
                    ? `${PREFIX}-${GROUP_NAME}__dropdown--empty invisible`
                    : '',
                  dropdown?.className,
                )}
                loop
                style={{
                  display: undefined,
                  ...widthStyle,
                  ...(dropdown.style ?? {}),
                }}
                onInteractOutside={handleDropdownInteractOutside}
                {...omit(
                  [
                    'asChild',
                    'className',
                    'style',
                    'align',
                    'onInteractOutside',
                  ],
                  dropdown,
                )}
              >
                {withScroll ? (
                  <RxScrollArea.Root
                    className={`${PREFIX}-${GROUP_NAME}__dropdown__scrollarea`}
                    {...(props.dir !== undefined
                      ? { dir: props.dir as RxScrollArea.Direction }
                      : {})}
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
                        'flex touch-none select-none rounded-r-sm bg-grey-90 p-quarter transition-background-color duration-300 ease-out hover:bg-grey-70 data-[orientation="vertical"]:w-1',
                      )}
                      orientation="vertical"
                    >
                      <RxScrollArea.Thumb
                        className={cj(
                          `${PREFIX}-${GROUP_NAME}__dropdown__scrollarea__scrollbar--y__thumb`,
                          'before:l-1/2 relative !w-half flex-1 rounded-sm bg-grey-30 before:absolute before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-empty',
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
