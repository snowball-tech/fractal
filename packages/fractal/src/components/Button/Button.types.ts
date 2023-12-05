import type { AllHTMLAttributes, MouseEvent, ReactNode } from 'react'

import { Variants } from './Button.constants'

export interface ButtonProps
  extends Omit<
    AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    'onClick'
  > {
  /**
   * The content of the button.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
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
  /**
   * The label of the button.
   *
   * Use this when you only need to display text in a button.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the button that will be used as the `aria-label`
   * and `title` for the button.
   */
  label?: string
  /** Event handler called when the button is clicked. */
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  /** The `target` attribute of the `a` element (when a `href` is provided). */
  target?: string
  /** The type of button. */
  type?: 'button' | 'reset' | 'submit'
  /** The variant of the button to use. */
  variant?: `${Variants}`
}
