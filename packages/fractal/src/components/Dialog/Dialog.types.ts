import { DialogContentProps as RxDialogContentProps } from '@radix-ui/react-dialog'
import type { AllHTMLAttributes, ReactNode } from 'react'

import { Positions } from './Dialog.constants'

export type CombinedRefs = {
  container: HTMLDivElement | null
  content: HTMLDivElement | null
  trigger: HTMLElement | null
}

export interface DialogProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the dialog. */
  children: ReactNode
  /**
   * The label of the small "x" close button in the top right corner of the
   * dialog (if it is dismissable).
   */
  closeButtonLabel?: string
  /**
   * The open state of the dialog when it is initially rendered.
   *
   * Use this when you do not need to control its open state.
   */
  defaultOpen?: boolean
  /** Prevents the user to open the modal. */
  disabled?: boolean
  /** Indicates if we can dismiss the dialog. */
  dismissable?: boolean
  /**
   * Indicates if the dialog is a modal.
   *
   * When set to true, interaction with outside elements will be disabled and
   * only dialog content will be visible to screen readers.
   */
  modal?: boolean
  /** Event handler called when the dialog is closed. */
  onClose?: () => void
  /** Event handler called when the dialog is dismissed. */
  onDismiss?: () => void
  /**
   * Event handler called when an interaction is made outside of the dropdown.
   */
  onInteractOutside?: RxDialogContentProps['onInteractOutside']
  /** Event handler called when the dialog is opened. */
  onOpen?: () => void
  /**
   * Event handler called when the dialog is opened or closed.
   */
  onToggle?: (open: boolean) => void
  /**
   * The controlled open state of the dialog.
   *
   * Must be used in conjunction with `onToggle`.
   */
  open?: boolean
  /**
   * The positioning of the modal and the overlay.
   *
   *  - 'fixed' will position the modal and the overlay relative to the
   *    viewport.
   *  - 'absolute' will position the modal and the overlay relative to the
   *    closest (relatively) positioned ancestor.
   */
  position?: `${Positions}`
  /** A title to display at the top of the dialog. */
  title?: string
  /**
   * The trigger of the dialog.
   *
   * If you don't pass any, you will have to handle the open state yourself.
   */
  trigger?: ReactNode
}
