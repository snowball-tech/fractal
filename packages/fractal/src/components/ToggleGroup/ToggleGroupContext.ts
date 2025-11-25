'use client'

import { createContext } from 'react'

import { DEFAULT_VARIANT, Variants } from '../Toggle/Toggle.constants'

export const ToggleGroupContext = createContext<{
  disabled: boolean
  grouped: boolean
  orientation: 'horizontal' | 'vertical'
  variant: `${Variants}`
}>({
  disabled: false,
  grouped: false,
  orientation: 'vertical',
  variant: DEFAULT_VARIANT,
})
