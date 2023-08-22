import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors, Elevations } from './Card.constants'

export interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the card. */
  children: ReactNode
  /** The background color of the card. */
  color?: `${Colors}`
  /** Indicates if we can dismiss the card. */
  dismissable?: boolean
  /**
   * The elevation level of the card.
   *
   * 0 (flat) is a non elevated flat card
   * 1 (bordered) is a non elevated bordered card
   * 2 (low) is a lightly raised (small shadow) bordered card
   * 3 (high) is a highly raised (big shadow) heavily bordered card
   */
  elevation?: `${Elevations}`
  /**
   * An icon to display at the top of the card (to the left of the title if
   * there is one).
   */
  icon?: ReactNode
  /** Event handler called when the card is dismissed. */
  onDismiss?: () => void
  /** A title to display at the top of the card. */
  title?: string
}
