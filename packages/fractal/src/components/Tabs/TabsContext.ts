import { createContext } from 'react'

import {
  DEFAULT_ORIENTATION,
  DEFAULT_POSITION,
  Orientations,
  Positions,
} from './Tabs.constants'

export const TabsContext = createContext<{
  disabled: boolean
  large: boolean
  orientation: `${Orientations}`
  tabsPosition: `${Positions}`
}>({
  disabled: false,
  large: false,
  orientation: DEFAULT_ORIENTATION,
  tabsPosition: DEFAULT_POSITION,
})
