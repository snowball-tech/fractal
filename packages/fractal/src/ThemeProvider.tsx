'use client'

import { type ReactNode, createContext } from 'react'

import { DEFAULT_THEME, Themes } from './constants'

export const ThemeContext = createContext<{
  theme: Themes
}>({ theme: DEFAULT_THEME })

type Props = {
  children: ReactNode
  theme: Themes
}
export default function ThemeProvider({
  children,
  theme = DEFAULT_THEME,
}: Props) {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  )
}
