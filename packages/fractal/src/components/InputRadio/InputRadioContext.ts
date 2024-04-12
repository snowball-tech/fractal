'use client'

import { createContext } from 'react'

import { DEFAULT_VARIANT, Variants } from './InputRadio.constants'

export const InputRadioContext = createContext<{
  condensed: boolean
  disabled: boolean
  required: boolean
  variant: `${Variants}`
}>({
  condensed: false,
  disabled: false,
  required: false,
  variant: DEFAULT_VARIANT,
})
