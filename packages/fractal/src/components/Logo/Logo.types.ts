import type { AllHTMLAttributes } from 'react'

import { Sizes } from './Logo.constants'

export interface LogoProps
  extends Omit<AllHTMLAttributes<HTMLOrSVGElement>, 'size'> {
  /** The wanted size of the loader. */
  size?: `${Sizes}`
}
