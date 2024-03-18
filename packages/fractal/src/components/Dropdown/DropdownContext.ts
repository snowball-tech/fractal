import { createContext } from 'react'

export const DropdownContext = createContext<{
  condensed: boolean
  disabled: boolean
}>({ condensed: false, disabled: false })
