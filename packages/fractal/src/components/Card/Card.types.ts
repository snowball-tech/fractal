import type { AllHTMLAttributes, ReactNode } from 'react'

import type { AlternateFontSizes, Colors, FontSizes } from './Card.constants'

export interface CardProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'title'> {
  /** The content of the card. */
  children?: ReactNode
  /** The background color of the card. */
  color?: `${Colors}`
  /** Indicates if we can dismiss the card. */
  dismissable?: boolean
  /**
   * The label of the small "x" dimiss button in the top right corner of the
   * card (if it is dismissable).
   */
  dismissButtonLabel?: string
  /**
   * Indicate the font size of the title and the body of the card.
   * 1 is `body-1` and 2 is `body-2`.
   */
  fontSize?: 1 | 2 | `${AlternateFontSizes}` | `${FontSizes}`
  /**
   * An icon to display at the top of the card (to the left of the title if
   * there is one).
   */
  icon?: ReactNode
  /** A title to display at the top of the card. */
  title?: ReactNode
  /** Event handler called when the card is dismissed. */
  onDismiss?: () => void
}
