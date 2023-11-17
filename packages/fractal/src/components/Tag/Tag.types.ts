import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors, Sizes } from './Tag.constants'

export interface TagProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'size'> {
  /** The text to display in the tag. */
  children: ReactNode
  /** The color of the tag to use. */
  color?: `${Colors}`
  /** Indicates if the tag is disabled. */
  disabled?: boolean
  /** Indicates if the tag should take all the available width. */
  fullWidth?: boolean
  /** The size of the tag. */
  size?: `${Sizes}`
}
