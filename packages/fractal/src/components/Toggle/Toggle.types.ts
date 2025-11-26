import type { AllHTMLAttributes, ReactNode } from 'react'

import { Variants } from './Toggle.constants'

export interface ToggleProps
  extends Omit<
    AllHTMLAttributes<HTMLButtonElement>,
    'label' | 'onToggle' | 'type'
  > {
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
   * The label/content of the toggle.
   *
   * If this is a `ReactNode`, then its "text only" content will be used as the
   * accessible label.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the toggle that will be used as the `aria-label`
   * and `title` for the toggle.
   * Otherwise, the "text only" content of the children will be used as the
   * accessible label.
   */
  label?: ReactNode
  /**
   * The element to use to display the label.
   *
   * If none is given, it will be automatically determined based on the type of
   * the label. A `string` label will be displayed as a `label`, anything else
   * will be displayed as a `div`.
   *
   * This is useful for markup validity reasons, but note that you will lose the
   * ability to toggle the toggle by clicking on the label as well as the
   * accessibility improvements.
   */
  labelElement?: keyof HTMLElementTagNameMap
  /**
   * The controlled toggled state of the toggle.
   *
   * Must be used in conjunction with `onToggle`.
   */
  toggled?: boolean
  /** The variant of the toggle to use. */
  variant?: `${Variants}`
  /** Event handler called when the toggle is clicked. */
  onToggle?: (toggled: boolean) => void
}
