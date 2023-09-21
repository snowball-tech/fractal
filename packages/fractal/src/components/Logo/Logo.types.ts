import type { AllHTMLAttributes } from 'react'

import { BrandColors, PictoColors, Sizes } from './Logo.constants'

export interface LogoProps
  extends Omit<AllHTMLAttributes<HTMLOrSVGElement>, 'size'> {
  /** The color of the brand name text. */
  brandVariant?: keyof typeof BrandColors
  /** The color of the picto. */
  pictoVariant?: keyof typeof PictoColors
  /** The wanted size of the loader. */
  size?: `${Sizes}`
}
