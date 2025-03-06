import type { AllHTMLAttributes, ElementType, ReactNode } from 'react'

import { Variants } from './Typography.constants'

export interface TypographyProps extends AllHTMLAttributes<HTMLElement> {
  /** The text to display. */
  children?: ReactNode
  /** The HTML element to use to display your text. */
  element?: ElementType
  /**
   * Indicates to inline all styles (including resets, font, ...) or only the
   * needed ones.
   *
   * Only used with `inlineStyle` enabled.
   */
  fullStyle?: boolean
  /**
   * Indicates to inline the styles instead of using any CSS classes.
   *
   * The typical usage for this is when creating HTML for an email.
   */
  inlineStyle?: boolean
  /** The variant of typography (style and size) to use. */
  variant?: `${Variants}`
  /**
   * Force the XS variation of typography.
   * In particular of headings.s
   *
   * This is useful when inlining styles.
   */
  xs?: boolean

  /**
   * Disable Sendgrid click tracking.
   * This will output a `clicktracking="off"` attribute to the `a` element.
   *
   * Of course this is only useful for a Typography component that outputs an
   * `a` element with an `href` attribute (i.e. a link).
   */
  disableClickTracking?: boolean
}
