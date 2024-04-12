'use client'

import { createContext } from 'react'

export const SelectGroupContext = createContext<{
  disabled: boolean
}>({ disabled: false })
