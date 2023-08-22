import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors } from './Card.constants'

export interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the card. */
  children: ReactNode
  /** The background color of the card. */
  color?: `${Colors}`
  /** indicates if the card should take all the available width or not. */
  fullWidth?: boolean
  /**
   * An icon to display at the top of the card (to the left of the title if
   * there is one).
   */
  icon?: ReactNode
  /** A title to display at the top of the card. */
  title?: string
}
