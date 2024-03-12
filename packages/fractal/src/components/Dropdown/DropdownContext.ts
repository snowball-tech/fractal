import { createContext } from 'react'

export const DropdownContext = createContext<{
  disabled: boolean
}>({ disabled: false })
