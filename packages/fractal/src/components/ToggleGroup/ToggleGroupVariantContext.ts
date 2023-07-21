import { createContext } from 'react'

import { DEFAULT_VARIANT, Variants } from '../Toggle/Toggle.constants'

export const ToggleGroupVariantContext =
  createContext<`${Variants}`>(DEFAULT_VARIANT)
