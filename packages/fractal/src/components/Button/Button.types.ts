import type { HTMLAttributes, MouseEvent, ReactNode } from 'react'

import { Sizes, Variants } from './Button.constants'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** The content of the button. */
  children: ReactNode
  /** When `true`, prevents the user from interacting with the button. */
  disabled?: boolean
  /** Event handler called when the button is clicked. */
  onClick?: (event: MouseEvent) => void
  /** The size of the button. */
  size?: `${Sizes}`
  /** The variant of the button  to use. */
  variant?: `${Variants}`
}
