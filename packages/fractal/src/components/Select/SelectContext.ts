'use client'

import { createContext } from 'react'

export const SelectContext = createContext<{
  disabled: boolean
  rainbow: boolean
}>({ disabled: false, rainbow: true })
