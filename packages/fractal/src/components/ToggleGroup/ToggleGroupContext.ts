'use client'

import { createContext } from 'react'

import { DEFAULT_VARIANT, Variants } from '@/components/Toggle/Toggle.constants'

export const ToggleGroupContext = createContext<{
  disabled: boolean
  variant: `${Variants}`
}>({ disabled: false, variant: DEFAULT_VARIANT })
