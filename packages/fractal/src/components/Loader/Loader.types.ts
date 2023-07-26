import type { AllHTMLAttributes } from 'react'

import { Sizes } from './Loader.constants'

export interface LoaderProps
  extends Omit<AllHTMLAttributes<HTMLOrSVGElement>, 'size'> {
  /** The wanted size of the loader. */
  size?: `${Sizes}`
}
