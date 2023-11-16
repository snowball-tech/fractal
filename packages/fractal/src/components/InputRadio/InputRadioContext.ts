import { createContext } from 'react'

import { DEFAULT_VARIANT, Variants } from './InputRadio.constants'

export const InputRadioContext = createContext<{
  disabled: boolean
  required: boolean
  variant: `${Variants}`
}>({ disabled: false, required: false, variant: DEFAULT_VARIANT })
