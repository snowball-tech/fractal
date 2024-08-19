'use client'

import { type ForwardedRef, forwardRef } from 'react'

import isFunction from 'lodash/fp/isFunction'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import type { CombinedRefs } from '@/components/Dialog/Dialog.types'

import { Button } from '@/components/Button'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { ConfirmProps } from './Confirm.types'

import { Dialog } from '../Dialog'
import { GROUP_NAME } from './Confirm.constants'

export const Confirm = forwardRef<CombinedRefs, ConfirmProps>(
  (
    { cancel, children, confirm, onCancel, onConfirm, ...props }: ConfirmProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const handleDismiss = () => {
      if (isFunction(onCancel)) {
        onCancel()
      }
      if (isFunction(props.onDismiss)) {
        props.onDismiss()
      }
    }

    return (
      <Dialog
        ref={ref}
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
              'flex flex-row justify-end gap-1',
            )}
          >
            <Button
              variant="secondary"
              onClick={onCancel}
              {...(isString(cancel)
                ? { label: cancel }
                : omit(
                    [
                      'fullWidth',
                      'href',
                      'onClick',
                      'target',
                      'type',
                      'variant',
                    ],
                    cancel,
                  ))}
            />
            <Button
              onClick={onConfirm}
              {...(isString(confirm)
                ? { label: confirm }
                : omit(
                    [
                      'fullWidth',
                      'href',
                      'onClick',
                      'target',
                      'type',
                      'variant',
                    ],
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
