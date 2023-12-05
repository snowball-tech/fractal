import type { AllHTMLAttributes, ReactNode } from 'react'

import { Variants } from './Toggle.constants'

export interface ToggleProps
  extends Omit<AllHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * The content of the menu item.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
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
  /** The icon to display in the left of the toggle. */
  icon?: ReactNode
  /**
   * Indicates if you want to only display the icon.
   * The label still is mandatory and will be used as an `aria-label` for
   * accessibility.
   */
  iconOnly?: boolean
  /**
   * The content of the toggle.
   *
   * Use this when you only need to display text in a toggle.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the toggle.
   */
  label?: string
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
