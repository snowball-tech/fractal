import type { AllHTMLAttributes, MouseEvent, ReactNode } from 'react'

import { Variants } from './Button.constants'

export interface ButtonProps
  extends Omit<
    AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    'onClick'
  > {
  /** Indicates if the button should be in fact a link (`a` element). */
  asLink?: boolean
  /** Prevents the user from interacting with the button. */
  disabled?: boolean
  /** Indicates if the button should take all the available width. */
  fullWidth?: boolean
  /** The URL to link to when the button is clicked when `asLink` is used. */
  href?: string
  /** The icon to display in the button. */
  icon?: ReactNode
  /**
   * Indicates if you want to only display the icon.
   * The label still is mandatory and will be used as an `aria-label` for
   * accessibility.
   */
  iconOnly?: boolean
  /** The position of the icon in the button. */
  iconPosition?: 'left' | 'right'
  /** The label of the button. */
  label: string
  /** Event handler called when the button is clicked. */
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  /** The `target` attribute of the `a` element when `asLink` is used. */
  target?: string
  /** The type of button. */
  type?: 'button' | 'reset' | 'submit'
  /** The variant of the button to use. */
  variant?: `${Variants}`
}
