import type { AllHTMLAttributes } from 'react'

export interface BadgeProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The number to display in the badge. */
  count?: number | undefined
  /** The number above which we will display "+xx" */
  limit?: number | undefined
}
