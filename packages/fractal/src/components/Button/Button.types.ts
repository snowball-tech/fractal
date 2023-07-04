import type { HTMLAttributes, MouseEvent, ReactNode } from 'react'

import { Variants } from './Button.constants'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** When `true`, prevents the user from interacting with the button. */
  disabled?: boolean
  /* The icon to display in the button (if any). */
  icon?: ReactNode
  /** The position of the icon in the button. */
  iconPosition?: 'left' | 'right'
  /** The label of the button. */
  label: string
  /** Event handler called when the button is clicked. */
  onClick?: (event: MouseEvent) => void
  /** The variant of the button  to use. */
  variant?: `${Variants}`
}
