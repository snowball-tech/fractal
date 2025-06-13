import type { AllHTMLAttributes, ReactNode } from 'react'

export interface ScrollAreaProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the scroll area. */
  children: ReactNode
  /** The CSS for the content wrapper. */
  contentClassName?: string
  /** Indicates if we should display the horizontal scrollbar. */
  horizontal?: boolean
  /**
   * Indicates the behavior of the scrollbar.
   *
   * If `true`, the scrollbars will only be displayed on hover.
   * Otherwise they will always be visible (if they are present).
   */
  scrollbarOnHover?: boolean
  /** Indicates if we should display the vertical scrollbar. */
  vertical?: boolean
}
