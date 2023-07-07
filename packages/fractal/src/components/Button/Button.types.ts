import type { AllHTMLAttributes, MouseEvent, ReactNode } from 'react'

import { Variants } from './Button.constants'

export interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  /** Prevents the user from interacting with the button. */
  disabled?: boolean
  /** The icon to display in the button (if any). */
  icon?: ReactNode
  /** The position of the icon in the button. */
  iconPosition?: 'left' | 'right'
  /** The label of the button. */
  label: string
  /** Event handler called when the button is clicked. */
  onClick?: (event: MouseEvent) => void
  /** The type of button. */
  type?: 'button' | 'reset' | 'submit'
  /** The variant of the button to use. */
  variant?: `${Variants}`
}
