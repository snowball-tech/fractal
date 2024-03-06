import { createContext } from 'react'

import {
  DEFAULT_ORIENTATION,
  DEFAULT_VARIANT,
  Orientations,
  Variants,
} from './Toolbar.constants'

export const ToolbarContext = createContext<{
  disabled: boolean
  orientation: `${Orientations}`
  variant: `${Variants}`
}>({
  disabled: false,
  orientation: DEFAULT_ORIENTATION,
  variant: DEFAULT_VARIANT,
})
