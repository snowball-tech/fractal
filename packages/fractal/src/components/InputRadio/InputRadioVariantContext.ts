import { createContext } from 'react'

import { DEFAULT_VARIANT, Variants } from './InputRadio.constants'

export const InputRadioVariantContext =
  createContext<`${Variants}`>(DEFAULT_VARIANT)
