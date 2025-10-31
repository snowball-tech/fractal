import type { ButtonProps } from '@/components/Button/Button.types'
import type {
  CombinedRefs as DialogCombinedRefs,
  DialogProps,
} from '@/components/Dialog/Dialog.types'

export type CombinedRefs = {
  cancel: HTMLButtonElement | null
  confirm: HTMLButtonElement | null
} & DialogCombinedRefs

export interface ConfirmProps
  extends Omit<DialogProps, 'disabled' | 'dismissable' | 'modal'> {
  /**
   * The configuration of the cancel button.
   *
   * You must provide at least a `label` or a `children` prop.
   */
  cancel:
    | string
    | false
    | Omit<ButtonProps, 'href' | 'onClick' | 'target' | 'type' | 'variant'>
  /**
   * The configuration of the confirmation button.
   *
   * You must provide at least a `label` or a `children` prop.
   */
  confirm:
    | string
    | Omit<ButtonProps, 'href' | 'onClick' | 'target' | 'type' | 'variant'>
  /**
   * The event handler called when the confirm dialog is dismissed or the
   * "Cancel" button is pressed.
   */
  onCancel?: ButtonProps['onClick']
  /** The event handler called when the "Confirm" button is pressed. */
  onConfirm?: ButtonProps['onClick']
}
