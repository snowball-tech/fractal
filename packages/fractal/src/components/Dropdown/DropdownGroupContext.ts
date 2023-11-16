import { createContext } from 'react'

export const DropdownGroupContext = createContext<{
  disabled: boolean
}>({ disabled: false })
