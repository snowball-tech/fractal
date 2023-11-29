import { createContext } from 'react'

import { DEFAULT_ORIENTATION, Orientations } from './Tabs.constants'

export const TabsContext = createContext<{
  disabled: boolean
  orientation: `${Orientations}`
}>({ disabled: false, orientation: DEFAULT_ORIENTATION })
