import type { AllHTMLAttributes, MouseEvent, ReactNode } from 'react'

export interface HeaderProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content to display in the middle of the header. */
  children?: ReactNode
  /** The content to display on the left of the header. */
  left?: ReactNode
  /** The event handler called when the header is clicked. */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  /** The content to display on the right of the header. */
  right?: ReactNode
}
