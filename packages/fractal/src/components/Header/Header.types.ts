import type { AllHTMLAttributes, MouseEvent, ReactNode } from 'react'

export interface HeaderProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The avatar to display on the right of the header in wide mode. */
  avatar?: ReactNode
  /**
   * Indicates of you want to display the back button on the left of the header
   * in responsive mode.
   */
  back?: boolean
  /** The content to display in the middle header in wide mode. */
  children?: ReactNode
  /** The logo to display on the left of the header in wide mode. */
  logo?: ReactNode
  /**
   * The hamburger menu to display on the right of the header in responsive
   * mode.
   */
  menu?: ReactNode
  /** The event handler called when the back button is clicked. */
  onBack?: () => void
  /** The event handler called when the header is clicked. */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  /** The event handler called when the logo is clicked. */
  onLogoClick?: (event: MouseEvent<HTMLDivElement>) => void
  /** The event handler called when the title is clicked. */
  onTitleClick?: (event: MouseEvent<HTMLDivElement>) => void
  /** The title to display in the header in responsive mode. */
  title: string
}
