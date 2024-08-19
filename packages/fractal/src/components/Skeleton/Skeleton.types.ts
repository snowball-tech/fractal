import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors, Shapes } from './Skeleton.constants'

export interface SkeletonProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The shape of the skeleton. */
  shape: `${Shapes}`
  /** The optional content you may want to display inside of the skeleton. */
  children?: ReactNode
  /** The color of the skeleton. */
  color?: `${Colors}`
}
