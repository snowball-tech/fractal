import CloseIcon from '@iconscout/react-unicons/dist/icons/uil-times'
import * as RxPopover from '@radix-ui/react-popover'
import * as RxScrollArea from '@radix-ui/react-scroll-area'
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

import { Button } from '@/components/Button'
import { Paper } from '@/components/Paper'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { DEFAULT_ELEVATION, GROUP_NAME } from './Popover.constants'
import type { CombinedRefs, PopoverProps } from './Popover.types'

/**
 * `Popover` component is used to display a popoverion to the user.
 *
 * See https://www.radix-ui.com/primitives/docs/components/popover for more
 * information.
 */
export const Popover = forwardRef<CombinedRefs, PopoverProps>(
  (
    {
      align,
      children,
      closeButtonLabel = 'Close',
      disabled = false,
      elevation = DEFAULT_ELEVATION,
      fullWidth = false,
      onClose,
      onCloseButtonClick,
      onInteractOutside,
      onOpen,
      onOpenChange,
      open,
      popover = {},
      side,
      toggleOnTriggerClick = true,
      trigger,
      width = 'fit',
      withArrow = true,
      withCloseButton = false,
      withScroll = true,
      ...props
    }: PopoverProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      get container() {
        return containerRef?.current ?? null
      },

      get content() {
        return contentRef?.current ?? null
      },

      get trigger() {
        return triggerRef?.current ?? null
      },
    }))

    const hasTriggerElement = Boolean(trigger)
    const hasTrigger = hasTriggerElement
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

      if (isFunction(onOpenChange) && wasOpened !== isOpened) {
        onOpenChange(isOpened)
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
      // We don't want to reopen the popover based on the `handleOpenChange`
      // function. So we don't include it in the dependencies.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children, open])

    const handleInteractOutside: RxPopover.DismissableLayerProps['onInteractOutside'] =
      (event) => {
        const { target } = event
        if (target === window || target === null || target === undefined) {
          return
        }

        if (
          containerRef?.current?.contains(target as Element) ||
          contentRef?.current?.contains(target as Element)
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
              ? 'w-[var(--radix-popper-anchor-width,"100%")] min-w-fit'
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
        <RxPopover.Root
          {...(disabled ? { open: false } : { open: isOpen })}
          modal={false}
          onOpenChange={handleOpenChange}
        >
          <RxPopover.Trigger
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
                  'w-full',
                  disabled
                    ? `${PREFIX}-${GROUP_NAME}__trigger__content--disabled`
                    : '',
                )}
                element={toggleOnTriggerClick ? 'button' : 'div'}
              >
                {trigger}
              </Typography>
            )}
          </RxPopover.Trigger>

          <RxPopover.Portal>
            {isOpen && (
              <RxPopover.Content
                ref={contentRef}
                align={align}
                asChild
                className={cn(
                  `${PREFIX}-${GROUP_NAME}__popover`,
                  'pointer-events-auto relative z-50 data-[side="bottom"]:mt-1 data-[side="left"]:mr-1 data-[side="right"]:ml-1 data-[side="top"]:mb-1',
                  widthClassNames,
                  !hasChildren
                    ? `${PREFIX}-${GROUP_NAME}__popover--empty invisible`
                    : '',
                  popover?.className,
                )}
                side={side}
                style={{
                  display: undefined,
                  ...widthStyle,
                  ...(popover.style ?? {}),
                }}
                onInteractOutside={handleInteractOutside}
                {...omit(
                  [
                    'align',
                    'asChild',
                    'className',
                    'side',
                    'style',
                    'onInteractOutside',
                  ],
                  popover,
                )}
              >
                <Paper className="relative" elevation={elevation}>
                  {withCloseButton && (
                    <RxPopover.Close
                      asChild
                      className={cj(`${PREFIX}-${GROUP_NAME}__close`)}
                    >
                      <div className="flex justify-end text-right">
                        <Button
                          icon={<CloseIcon />}
                          iconOnly
                          label={closeButtonLabel}
                          variant="text"
                          onClick={onCloseButtonClick}
                        />
                      </div>
                    </RxPopover.Close>
                  )}

                  {withScroll ? (
                    <RxScrollArea.Root
                      className={`${PREFIX}-${GROUP_NAME}__popover__scrollarea`}
                      {...(props.dir !== undefined
                        ? { dir: props.dir as RxScrollArea.Direction }
                        : {})}
                      type="hover"
                    >
                      <RxScrollArea.Viewport
                        className={cj(
                          `${PREFIX}-${GROUP_NAME}__popover__scrollarea__viewport`,
                          `relative h-full max-h-[calc(var(--radix-popper-available-height)-theme(spacing.4))] w-full overflow-auto [&:has(+_.${PREFIX}-${GROUP_NAME}__popover__scrollarea__scrollbar--y)]:w-[calc(100%-theme(spacing.1)+theme(spacing.quarter))]`,
                        )}
                        style={{
                          overflowY: undefined,
                        }}
                      >
                        {children}
                      </RxScrollArea.Viewport>

                      <RxScrollArea.Scrollbar
                        className={cj(
                          `${PREFIX}-${GROUP_NAME}__popover__scrollarea__scrollbar--y`,
                          '[data-orientation="vertical"]:w-1 flex touch-none select-none rounded-r-sm bg-grey-90 p-quarter transition-background-color duration-300 ease-out hover:bg-grey-70',
                        )}
                        orientation="vertical"
                      >
                        <RxScrollArea.Thumb
                          className={cj(
                            `${PREFIX}-${GROUP_NAME}__popover__scrollarea__scrollbar--y__thumb`,
                            'before:l-1/2 relative !w-half flex-1 rounded-sm bg-grey-30 before:absolute before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-empty',
                          )}
                        />
                      </RxScrollArea.Scrollbar>
                    </RxScrollArea.Root>
                  ) : (
                    children
                  )}

                  {withArrow && <RxPopover.Arrow />}
                </Paper>
              </RxPopover.Content>
            )}
          </RxPopover.Portal>
        </RxPopover.Root>
      </div>
    )
  },
)
Popover.displayName = 'Popover'

export default Popover
