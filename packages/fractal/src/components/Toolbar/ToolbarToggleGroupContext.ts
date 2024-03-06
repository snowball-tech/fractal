import { createContext } from 'react'

export const ToolbarToggleGroupContext = createContext<{
  disabled: boolean
}>({ disabled: false })
