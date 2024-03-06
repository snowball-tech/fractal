import { createContext } from 'react'

export const MenuGroupContext = createContext<{
  disabled: boolean
}>({ disabled: false })
