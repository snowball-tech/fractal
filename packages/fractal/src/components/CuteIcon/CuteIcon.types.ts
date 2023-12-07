import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors } from './CuteIcon.constants'

export interface CuteIconProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The color of the bubble. */
  color?: `${Colors}`
  /** The icon to display. */
  icon: ReactNode
}
