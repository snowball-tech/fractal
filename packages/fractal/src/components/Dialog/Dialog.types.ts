import { DialogContentProps as RxDialogContentProps } from '@radix-ui/react-dialog'

import type { AllHTMLAttributes, ReactNode } from 'react'

import type { PaperProps } from '../Paper'

import { Positions } from './Dialog.constants'

export type CombinedRefs = {
  container: HTMLDivElement | null
  content: HTMLDivElement | null
  trigger: HTMLElement | null
}

export interface DialogProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'content'> {
  /** The content of the dialog. */
  children: ReactNode
  /**
   * The label of the small "x" close button in the top right corner of the
   * dialog (if it is dismissable).
   */
  closeButtonLabel?: string
  /** Indicates if the dialog should be condensed, i.e. smaller paddings. */
  condensed?: boolean
  /**
   * Configure the content area of the dialog.
   */
  content?: {
    className?: string
  }
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
  /** Indicates if the dialog should be full width. */
  fullWidth?: boolean
  /**
   * Indicates if the dialog is a modal.
   *
   * When set to true, interaction with outside elements will be disabled and
   * only dialog content will be visible to screen readers.
   */
  modal?: boolean
  /**
   * The controlled open state of the dialog.
   *
   * Must be used in conjunction with `onToggle`.
   */
  open?: boolean
  /** The color of the overlay background. */
  overlayStyle?: 'dark' | 'light' | 'none'
  /**
   * The positioning of the modal and the overlay.
   *
   *  - 'fixed' will position the modal and the overlay relative to the
   *    viewport.
   *  - 'absolute' will position the modal and the overlay relative to the
   *    closest (relatively) positioned ancestor.
   */
  position?: `${Positions}`
  /** Options to customize the root element of the dialog. */
  root?: Partial<AllHTMLAttributes<HTMLDivElement>>
  /**
   * Indicates the behavior of the scrollbar in the content of the dialog.
   *
   * If `true`, the scrollbars will only be displayed on hover.
   * Otherwise they will always be visible if they are present.
   */
  scrollbarOnHover?: boolean
  /** A title to display at the top of the dialog. */
  title?: string
  /**
   * The trigger of the dialog.
   *
   * If you don't pass any, you will have to handle the open state yourself.
   */
  trigger?: ReactNode
  /**
   * The props of the paper wrapper inside of the dialog.
   */
  wrapper?: Partial<PaperProps>
  /** Event handler called when the dialog is closed. */
  onClose?: () => void
  /** Event handler called when the dialog is dismissed. */
  onDismiss?: () => void
  /**
   * Event handler called when an interaction is made outside of the dialog.
   */
  onInteractOutside?: RxDialogContentProps['onInteractOutside']
  /** Event handler called when the dialog is opened. */
  onOpen?: () => void
  /**
   * Event handler called when a point/click is made outside of the dialog.
   */
  onPointerDownOutside?: RxDialogContentProps['onPointerDownOutside']
  /**
   * Event handler called when the dialog is opened or closed.
   */
  onToggle?: (open: boolean) => void
}
