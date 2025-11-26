import type { AllHTMLAttributes, ReactNode } from 'react'

export interface BadgeProps extends AllHTMLAttributes<HTMLDivElement> {
  /**
   * The content of the badge. If provided, the `count` and `limit` props will
   * be ignored.
   */
  children?: ReactNode
  /** The number to display in the badge if no children is provided. */
  count?: number | undefined
  /**
   * The accessible label of the badge.
   *
   * If provided, this will be used as the `aria-label` and the `title` of the
   * badge.
   */
  label?: string
  /** The number above which we will display "+xx" */
  limit?: number | undefined
}
