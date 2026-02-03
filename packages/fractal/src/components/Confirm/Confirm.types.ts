import type { MouseEvent, ReactNode } from 'react'

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
   * The actions to display in the confirm dialog.
   *
   * This will override the default "cancel" and "confirm" actions and the
   * `cancel` and `confirm` props will be ignored.
   */
  actions: ReactNode
  /**
   * The configuration of the cancel button.
   *
   * You must provide at least a `label` or a `children` prop.
   *
   * Note: this prop is ignored if `actions` is provided.
   */
  cancel: string | false | ButtonProps
  /**
   * The configuration of the confirmation button.
   *
   * You must provide at least a `label` or a `children` prop.
   *
   * Note: this prop is ignored if `actions` is provided.
   */
  confirm: string | ButtonProps
  /**
   * Indicates if the actions should be fixed at the bottom of the dialog
   * (`true`) or at the bottom of the content (`false`).
   *
   * Particularly useful with a `fullHeight` content.
   */
  fixedActions?: boolean
  /**
   * The event handler called when the confirm dialog is dismissed or the
   * "Cancel" button is pressed.
   */
  onCancel?: (event: MouseEvent<HTMLElement>, dismissed: boolean) => void
  /** The event handler called when the "Confirm" button is pressed. */
  onConfirm?: ButtonProps['onClick']
}
