'use client'

import { type ForwardedRef, type MouseEvent, forwardRef } from 'react'

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
              'flex flex-col gap-1 md:flex-row md:justify-end to-md:items-center',
            )}
          >
            {cancel && (
              <Button
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
