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
    | string
    | Omit<
        ButtonProps,
        'fullWidth' | 'href' | 'onClick' | 'target' | 'type' | 'variant'
      >
  /**
   * The configuration of the confirmation button.
   *
   * You must provide at least a `label` or a `children` prop.
   */
  confirm:
    | string
    | Omit<
        ButtonProps,
        'fullWidth' | 'href' | 'onClick' | 'target' | 'type' | 'variant'
      >
  /**
   * The event handler called when the confirm dialog is dismissed or the
   * "Cancel" button is pressed.
   */
  onCancel?: () => void
  /** The event handler called when the "Confirm" button is pressed. */
  onConfirm?: () => void
}
