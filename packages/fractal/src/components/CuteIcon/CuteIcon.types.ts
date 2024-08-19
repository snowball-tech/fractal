import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors } from './CuteIcon.constants'

export interface CuteIconProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The icon to display. */
  icon: ReactNode
  /** The color of the bubble. */
  color?: `${Colors}`
}
