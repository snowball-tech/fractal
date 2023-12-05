import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors, Sizes } from './Tag.constants'

export interface TagProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'size'> {
  /**
   * The content of the tag.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /** The color of the tag to use. */
  color?: `${Colors}`
  /** Indicates if the tag is disabled. */
  disabled?: boolean
  /** Indicates if the tag should take all the available width. */
  fullWidth?: boolean
  /**
   * The content of the tag.
   *
   * Use this when you only need to display text in a tag.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the tag.
   */
  label?: string
  /** The size of the tag. */
  size?: `${Sizes}`
}
