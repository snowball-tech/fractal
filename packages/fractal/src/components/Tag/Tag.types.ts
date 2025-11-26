import type { AllHTMLAttributes, ReactNode } from 'react'

import { Colors, Sizes } from './Tag.constants'

export interface TagProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'label' | 'size'> {
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
   * The label/content of the tag.
   *
   * If this is a `ReactNode`, then its "text only" content will be used as the
   * accessible label.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the tag that will be used as the `aria-label` and
   * `title` for the tag.
   * Otherwise, the "text only" content of the children will be used as the
   * accessible label.
   */
  label?: ReactNode
  /** The size of the tag. */
  size?: `${Sizes}`
}
