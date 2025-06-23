import type { ForwardedRef } from 'react'

import { ButtonProps } from '@/components/Button/Button.types'
import { DialogProps } from '@/components/Dialog/Dialog.types'

export interface ConfirmProps
  extends Omit<DialogProps, 'disabled' | 'dismissable' | 'modal'> {
  /**
   * The configuration of the cancel button.
   *
   * You must provide at least a `label` or a `children` prop.
   */
  cancel:
    | ({
        ref?: ForwardedRef<HTMLElement>
      } & Omit<ButtonProps, 'href' | 'onClick' | 'target' | 'type' | 'variant'>)
    | string
    | false
  /**
   * The configuration of the confirmation button.
   *
   * You must provide at least a `label` or a `children` prop.
   */
  confirm:
    | ({
        ref?: ForwardedRef<HTMLElement>
      } & Omit<ButtonProps, 'href' | 'onClick' | 'target' | 'type' | 'variant'>)
    | string
  /**
   * The event handler called when the confirm dialog is dismissed or the
   * "Cancel" button is pressed.
   */
  onCancel?: ButtonProps['onClick']
  /** The event handler called when the "Confirm" button is pressed. */
  onConfirm?: ButtonProps['onClick']
}
