import { createContext } from 'react'

import { DEFAULT_ORIENTATION, Orientations } from './Dropdown.constants'

export const DropdownContext = createContext<{
  disabled: boolean
  from: 'dropdown' | 'menu'
  orientation: `${Orientations}`
}>({ disabled: false, from: 'dropdown', orientation: DEFAULT_ORIENTATION })
