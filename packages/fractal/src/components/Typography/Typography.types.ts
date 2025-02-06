import type { AllHTMLAttributes, ElementType, ReactNode } from 'react'

import { Variants } from './Typography.constants'

export interface TypographyProps extends AllHTMLAttributes<HTMLElement> {
  /** The text to display. */
  children?: ReactNode
  /** The HTML element to use to display your text. */
  element?: ElementType
  /**
   * Indicates to inline the styles instead of using Tailwind CSS classes.
   *
   * The typical usage for this is when creating HTML for an email.
   */
  inlineStyle?: boolean
  /** The variant of typography (style and size) to use. */

  /**
   * Indicates to use the special typography sizes for emails.
   * Only used with `inlineStyle` enabled.
   *
   * If you don't pass any value, it will be enabled when `inlineStyle` is true.
   * If you want to use `inlineStyle` but not the email variant, pass `false`.
   */
  emailVariant?: boolean

  variant?: `${Variants}`
  /**
   * Force the XS variation of typography.
   * In particular of headings.
   *
   * This is useful when inlining styles.
   */
  xs?: boolean
}
