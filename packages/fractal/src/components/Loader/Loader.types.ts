import type { AllHTMLAttributes } from 'react'

import { Sizes } from './Loader.constants'

export interface LoaderProps
  extends Omit<AllHTMLAttributes<HTMLOrSVGElement>, 'size'> {
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
