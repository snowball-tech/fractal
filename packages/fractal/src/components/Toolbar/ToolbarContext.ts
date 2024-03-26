import { createContext } from 'react'

import { DEFAULT_ORIENTATION, Orientations } from './Toolbar.constants'

export const ToolbarContext = createContext<{
  disabled: boolean
  orientation: `${Orientations}`
}>({
  disabled: false,
  orientation: DEFAULT_ORIENTATION,
})
