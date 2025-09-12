import type { AllHTMLAttributes } from 'react'

import { Modes, Sizes } from './Loader.constants'

export interface LoaderProps
  extends Omit<AllHTMLAttributes<HTMLOrSVGElement>, 'as' | 'size'> {
  /** The type of the loader. */
  as?: `${Modes}`
  /**
   * The accessible label of the loader.
   *
   * If provided, this will be used as the `aria-label` and the `title` of the
   * loader.
   */
  label?: string
  /** The wanted size of the loader. */
  size?: `${Sizes}`
}
