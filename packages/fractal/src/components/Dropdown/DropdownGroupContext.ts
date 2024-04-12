'use client'

import { createContext } from 'react'

export const DropdownGroupContext = createContext<{
  condensed: boolean
  disabled: boolean
}>({ condensed: false, disabled: false })
