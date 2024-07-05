import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors } from './Card.constants'

export interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the card. */
  children?: ReactNode
  /** The background color of the card. */
  color?: `${Colors}`
  /**
   * The label of the small "x" dimiss button in the top right corner of the
   * card (if it is dismissable).
   */
  dismissButtonLabel?: string
  /** Indicates if we can dismiss the card. */
  dismissable?: boolean
  /**
   * Indicate the font size of the title and the body of the card.
   * 1 is `body-1` and 2 is `body-2`.
   */
  fontSize?: 1 | 2
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
