import type { AllHTMLAttributes } from 'react'

export interface BadgeProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The number to display in the badge. */
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
