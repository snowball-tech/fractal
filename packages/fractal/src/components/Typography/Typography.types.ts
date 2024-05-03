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
  variant?: `${Variants}`
}
