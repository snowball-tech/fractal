'use client'

import { createContext } from 'react'

import { DEFAULT_ORIENTATION, Orientations } from './Menu.constants'

export const MenuContext = createContext<{
  condensed: boolean
  disabled: boolean
  orientation: `${Orientations}`
  rainbow: boolean
}>({
  condensed: false,
  disabled: false,
  orientation: DEFAULT_ORIENTATION,
  rainbow: true,
})
