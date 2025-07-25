'use client'

import { createContext } from 'react'

export const SelectGroupContext = createContext<{
  disabled: boolean
  rainbow: boolean
}>({ disabled: false, rainbow: true })
