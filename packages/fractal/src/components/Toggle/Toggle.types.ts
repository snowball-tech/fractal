import type { AllHTMLAttributes, ReactNode } from 'react'

import { Variants } from './Toggle.constants'

export interface ToggleProps
  extends Omit<AllHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * The toggled state of the toggle when it is initially rendered.
   *
   * Use this when you do not need to control its toggled state.
   */
  defaultToggled?: boolean
  /** Prevents the user from interacting with the toggle. */
  disabled?: boolean
  /** Indicates if the toggle should take all the available width. */
  fullWidth?: boolean
  /** The icon to display in the left n the toggle. */
  icon?: ReactNode
  /** The label of the toggle. */
  label: string
  /** Event handler called when the toggle is clicked. */
  onToggle?: (toggled: boolean) => void
  /**
   * The controlled toggled state of the toggle.
   *
   * Must be used in conjunction with `onToggle`.
   */
  toggled?: boolean
  /** The variant of the toggle to use. */
  variant?: `${Variants}`
}
