'use client'

import {
  type ForwardedRef,
  type MouseEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'

import isFunction from 'lodash/fp/isFunction'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import type { CombinedRefs as DialogCombinedRefs } from '@/components/Dialog/Dialog.types'

import { Button } from '@/components/Button/Button'
import { Dialog } from '@/components/Dialog/Dialog'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { CombinedRefs, ConfirmProps } from './Confirm.types'

import { GROUP_NAME } from './Confirm.constants'

export const Confirm = forwardRef<CombinedRefs, ConfirmProps>(
  (
    { cancel, children, confirm, onCancel, onConfirm, ...props }: ConfirmProps,
    ref?: ForwardedRef<CombinedRefs>,
  ) => {
    const dialogRef = useRef<DialogCombinedRefs>(null)
    const cancelRef = useRef<HTMLButtonElement>(null)
    const confirmRef = useRef<HTMLButtonElement>(null)

    useImperativeHandle(ref, () => ({
      get container() {
        return dialogRef?.current?.container ?? null
      },

      get content() {
        return dialogRef?.current?.content ?? null
      },

      get trigger() {
        return dialogRef?.current?.trigger ?? null
      },

      get cancel() {
        return cancelRef?.current ?? null
      },
      get confirm() {
        return confirmRef?.current ?? null
      },
    }))

    const handleDismiss = (event: MouseEvent<HTMLElement>) => {
      if (isFunction(onCancel)) {
        onCancel(event)
      }
      if (isFunction(props.onDismiss)) {
        props.onDismiss(event)
      }
    }

    return (
      <Dialog
        ref={dialogRef}
        className={cn(`${PREFIX}-${GROUP_NAME}`, props.className)}
        {...omit(['className', 'dismissable', 'modal', 'onDismiss'], props)}
        dismissable
        modal
        onDismiss={handleDismiss}
      >
        <div className="flex w-full flex-col gap-5">
          <div className={`${PREFIX}-${GROUP_NAME}__content`}>{children}</div>
          <div
            className={cj(
              `${PREFIX}-${GROUP_NAME}__actions`,
              'flex flex-col gap-1 md:flex-row md:justify-end to-md:items-center',
            )}
          >
            {cancel && (
              <Button
                ref={cancelRef}
                className="to-md:w-full"
                variant="secondary"
                onClick={onCancel}
                {...(isString(cancel)
                  ? { label: cancel }
                  : omit(
                      ['href', 'onClick', 'target', 'type', 'variant'],
                      cancel,
                    ))}
              />
            )}

            <Button
              ref={confirmRef}
              className="to-md:w-full"
              onClick={onConfirm}
              {...(isString(confirm)
                ? { label: confirm }
                : omit(
                    ['href', 'onClick', 'target', 'type', 'variant'],
                    confirm,
                  ))}
            />
          </div>
        </div>
      </Dialog>
    )
  },
)
Confirm.displayName = 'Confirm'

export default Confirm
