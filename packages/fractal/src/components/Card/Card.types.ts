import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors, Elevations } from './Card.constants'

export interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the card. */
  children: ReactNode
  /** The background color of the card. */
  color?: `${Colors}`
  /**
   * The elevation level of the card.
   *
   * 0 (flat) is a non elevated flat card
   * 1 (bordered) is a non elevatec bordered card
   * 2 (low) is a lightly raised (small shadow) bordered card
   * 3 (high) is a highly raised (big shadow) heavily bordered card
   */
  elevation?: `${Elevations}`
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
