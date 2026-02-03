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
import { ScrollArea } from '@/components/ScrollArea/ScrollArea'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { CombinedRefs, ConfirmProps } from './Confirm.types'

import { GROUP_NAME } from './Confirm.constants'

export const Confirm = forwardRef<CombinedRefs, ConfirmProps>(
  (
    {
      actions: customActions,
      cancel,
      children,
      confirm,
      fixedActions = true,
      fullHeight = false,
      onCancel,
      onConfirm,
      scrollable = true,
      ...props
    }: ConfirmProps,
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
        onCancel(event, true)
      }
      if (isFunction(props.onDismiss)) {
        props.onDismiss(event)
      }
    }

    const actions = (
      <div
        className={cj(
          `${PREFIX}-${GROUP_NAME}__actions`,
          'flex h-fit flex-col gap-1 pb-quarter md:flex-row md:justify-end to-md:items-center',
          fixedActions
            ? props.condensed
              ? 'pr-one-and-half'
              : 'pr-[calc(theme(spacing.3)-theme(spacing.half))]'
            : '',
        )}
      >
        {customActions || (
          <>
            {cancel && (
              <Button
                ref={cancelRef}
                className="to-md:w-full"
                variant="secondary"
                onClick={(event) => onCancel?.(event, false)}
                {...(isString(cancel) ? { label: cancel } : cancel)}
              />
            )}

            <Button
              ref={confirmRef}
              className="to-md:w-full"
              onClick={onConfirm}
              {...(isString(confirm) ? { label: confirm } : confirm)}
            />
          </>
        )}
      </div>
    )

    const content = (
      <div
        className={cj(
          `${PREFIX}-${GROUP_NAME}__content`,
          'flex w-full flex-col gap-5',
          fullHeight ? 'flex-1' : '',
          fixedActions ? 'min-h-0' : '',
        )}
      >
        {children}

        {!fixedActions && actions}
      </div>
    )

    return (
      <Dialog
        ref={dialogRef}
        className={cn(`${PREFIX}-${GROUP_NAME}`, props.className)}
        fullHeight={fullHeight}
        {...omit(
          ['className', 'dismissable', 'modal', 'onDismiss', 'scrollable'],
          props,
        )}
        dismissable
        modal
        scrollable={false}
        onDismiss={handleDismiss}
      >
        {scrollable ? (
          <ScrollArea
            className={fullHeight ? 'flex-1' : ''}
            contentClassName={cn(
              'visible flex flex-col w-full',
              fullHeight ? 'h-full' : '',
              props.condensed
                ? 'gap-3 pr-one-and-half'
                : 'gap-5 pr-[calc(theme(spacing.3)-theme(spacing.half))]',
              props.contentClassName,
            )}
            scrollbarOnHover={props.scrollbarOnHover}
          >
            {content}
          </ScrollArea>
        ) : (
          content
        )}

        {fixedActions && actions}
      </Dialog>
    )
  },
)
Confirm.displayName = 'Confirm'

export default Confirm
