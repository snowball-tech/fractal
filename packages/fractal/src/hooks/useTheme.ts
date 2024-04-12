'use client'

import isEmpty from 'lodash/fp/isEmpty'
import { useContext } from 'react'

import { ThemeContext } from '@/ThemeProvider'
import { DEFAULT_THEME, Themes } from '@/constants'

export default function useTheme(
  themeOverride?: Themes,
  { fail = false, log = false } = {},
) {
  if (!isEmpty(themeOverride)) {
    return themeOverride
  }

  // Try to load the context.
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const themeContext = useContext(ThemeContext)

    return themeContext.theme
  } catch (error) {
    if (log) {
      console.warn(
        '[FRACTAL][THEME] Unable to load the global theme as no ThemeProvider has been found!',
      )
    }

    if (fail) {
      throw error
    }
  }

  return DEFAULT_THEME
}
