import { createContext } from 'react'

import { DEFAULT_ORIENTATION, Orientations } from './Menu.constants'

export const MenuContext = createContext<{
  condensed: boolean
  disabled: boolean
  orientation: `${Orientations}`
}>({ condensed: false, disabled: false, orientation: DEFAULT_ORIENTATION })
