import { createContext } from 'react'

import { DEFAULT_ORIENTATION, Orientations } from './Menu.constants'

export const MenuContext = createContext<{
  disabled: boolean
  orientation: `${Orientations}`
}>({ disabled: false, orientation: DEFAULT_ORIENTATION })
