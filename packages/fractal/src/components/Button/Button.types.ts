import type {
  AllHTMLAttributes,
  ElementType,
  MouseEvent,
  ReactNode,
} from 'react'

import { Themes } from '@/constants'

import { Variants } from './Button.constants'

export interface ButtonProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'onClick' | 'wrap'> {
  /**
   * The content of the button.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /** Prevents the user from interacting with the button. */
  disabled?: boolean
  /**
   * The HTML element to use to display your button.
   *
   * Note that this is ignored if you provide a `href` or an `onClick` props.
   * `href` will make the button an `a` element and `onClick` will make it a
   * `button` element.
   */
  element?: ElementType
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
   * Indicates to inline the styles instead of using Tailwind CSS classes.
   *
   * The typical usage for this is when creating HTML for an email.
   */
  inlineStyle?: boolean
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
  onClick?: (event: MouseEvent<HTMLElement>) => void
  /** The `target` attribute of the `a` element (when a `href` is provided). */
  target?: string
  /**
   * Force the theme of the button.
   *
   * If none is given, it will use the one provided by the Context/Provider.
   */
  theme?: Themes
  /**
   * Indicates if the label should be truncated if the size of the button is to
   * wide.
   */
  truncate?: boolean
  /** The type of button. */
  type?: 'button' | 'reset' | 'submit'
  /**
   * Indicates if you want to remove underlining.
   *
   * If none is given (the default), underlining will be automatically applied
   * according to the variant.
   * You can force it to `false` to remove underlining.
   */
  underlined?: boolean
  /** The variant of the button to use. */
  variant?: `${Variants}`
  /**
   * Indicates if the label should be wrapper if the size of the button is to
   * wide.
   */
  wrap?: boolean
}
