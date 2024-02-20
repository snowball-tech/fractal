'use client'

import CloseIcon from '@iconscout/react-unicons/dist/icons/uil-times'
import * as RxDialog from '@radix-ui/react-dialog'
import type { DismissableLayerProps } from '@radix-ui/react-select'
import isFunction from 'lodash/fp/isFunction'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'
import {
  type ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { Button } from '@/components/Button'
import { Paper } from '@/components/Paper'
import { ScrollArea } from '@/components/ScrollArea'
import { Typography } from '@/components/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { DEFAULT_POSITION, GROUP_NAME } from './Dialog.constants'
import type { CombinedRefs, DialogProps } from './Dialog.types'

/**
 * `Dialog` component allow do display dialogs to the user over the current page
 * content.
 *
 * See https://www.radix-ui.com/primitives/docs/components/dialog for more
 * information.
 */
export const Dialog = forwardRef<CombinedRefs, DialogProps>(
  (
    {
      children,
      closeButtonLabel = 'Close',
      defaultOpen,
      disabled = false,
      dismissable = true,
      modal = true,
      onClose,
      onDismiss,
      onInteractOutside,
      onKeyDown,
      onOpen,
      onPointerDownOutside,
      onToggle,
      open,
      position = DEFAULT_POSITION,
      title,
      trigger,
      ...props
    }: DialogProps,
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

    const hasTrigger = Boolean(trigger)
    const hasChildren = Boolean(children)

    const [isOpen, setIsOpen] = useState(open === true || defaultOpen === true)

    const handleOpenChange = (isOpened: boolean) => {
      if (disabled) {
        return
      }

      const wasOpened = isOpen
      setIsOpen(isOpened)

      if (isFunction(onToggle) && wasOpened !== isOpened) {
        onToggle(isOpened)
      }

      if (!wasOpened && isOpened && isFunction(onOpen)) {
        onOpen()
      }

      if (wasOpened && !isOpened && isFunction(onClose)) {
        onClose()
      }
    }

    useEffect(() => {
      if (open === true || defaultOpen === true) {
        handleOpenChange(true)
      } else {
        handleOpenChange(false)
      }
      // We don't want to reopen the dialog based on the `handleOpenChange`
      // function. So we don't include it in the dependencies.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    const handleDialogInteractOutside: DismissableLayerProps['onInteractOutside'] =
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

    return (
      <div
        ref={containerRef}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          isOpen
            ? `${PREFIX}-${GROUP_NAME}--opened`
            : `${PREFIX}-${GROUP_NAME}--closed`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
        )}
      >
        <RxDialog.Root
          {...(disabled ? { open: false } : { open: isOpen })}
          modal={modal}
          onOpenChange={handleOpenChange}
        >
          <RxDialog.Trigger
            asChild={!isString(trigger)}
            className={cj(
              `${PREFIX}-${GROUP_NAME}__trigger`,
              isString(trigger)
                ? 'appearance-none border-none bg-unset px-unset py-unset text-left text-color-unset outline-none'
                : '',
              !hasTrigger
                ? 'invisible h-0 max-h-0 border-y-0 py-0'
                : 'flex items-center',
              disabled
                ? `${PREFIX}-${GROUP_NAME}__trigger--disabled cursor-default text-disabled`
                : 'cursor-pointer',
            )}
          >
            {hasTrigger && trigger}
          </RxDialog.Trigger>

          <RxDialog.Portal>
            {isOpen && (
              <>
                <RxDialog.Overlay
                  className={cj(
                    `${PREFIX}-${GROUP_NAME}__overlay`,
                    'inset-0 bg-[rgba(255,251,244,0.8)]',
                  )}
                  style={{ position }}
                />

                <RxDialog.Content
                  ref={contentRef}
                  aria-describedby={undefined}
                  asChild
                  className={cn(
                    `${PREFIX}-${GROUP_NAME}__content`,
                    props.className,
                  )}
                  onInteractOutside={handleDialogInteractOutside}
                  {...(isFunction(onKeyDown) ? { onKeyDown } : {})}
                  {...(isFunction(onPointerDownOutside)
                    ? { onPointerDownOutside }
                    : {})}
                  {...omit(
                    ['className', 'onInteractOutside', 'asChild'],
                    props,
                  )}
                >
                  <Paper
                    className="left-1/2 top-1/2 flex size-fit -translate-x-1/2 -translate-y-1/2 flex-col gap-3"
                    elevation="2"
                    style={{ position }}
                  >
                    <div className="flex flex-row">
                      <RxDialog.Title
                        asChild
                        className={cj(
                          `${PREFIX}-${GROUP_NAME}__title`,
                          'flex-1',
                        )}
                      >
                        <Typography variant="heading-4">{title}</Typography>
                      </RxDialog.Title>

                      {dismissable && (
                        <RxDialog.Close
                          asChild
                          className={cj(`${PREFIX}-${GROUP_NAME}__dismiss`)}
                        >
                          <div className="text-right">
                            <Button
                              icon={<CloseIcon />}
                              iconOnly
                              label={closeButtonLabel}
                              variant="text"
                              onClick={onDismiss}
                            />
                          </div>
                        </RxDialog.Close>
                      )}
                    </div>
                    {hasChildren && (
                      <ScrollArea orientation="both">{children}</ScrollArea>
                    )}
                  </Paper>
                </RxDialog.Content>
              </>
            )}
          </RxDialog.Portal>
        </RxDialog.Root>
      </div>
    )
  },
)
Dialog.displayName = 'Dialog'

export default Dialog
