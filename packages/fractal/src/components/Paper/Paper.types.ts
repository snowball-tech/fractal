import type { AllHTMLAttributes, ElementType, ReactNode } from 'react'

import { Themes } from '@/constants'

import type { AlternateElevations, Elevations } from './Paper.constants'

export interface PaperProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the paper. */
  children: ReactNode
  /** The HTML element to use to display your paper. */
  element?: ElementType
  /**
   * The elevation level of the paper.
   *
   * 1 (bordered) is a non elevated bordered block
   * 2 (elevated) is a lightly raised (small shadow) bordered block
   * 3 (higher) is a raised bordered block
   */
  elevation?: 1 | 2 | 3 | `${AlternateElevations}` | `${Elevations}`
  /**
   * Indicates to inline all styles (including resets, font, ...) or only the
   * needed ones.
   *
   * Only used with `inlineStyle` enabled.
   */
  fullStyle?: boolean
  /**
   * Indicates to inline the styles instead of using Tailwind CSS classes.
   *
   * The typical usage for this is when creating HTML for an email.
   */
  inlineStyle?: boolean
  /**
   * Force the theme of the paper.
   *
   * If none is given, it will use the one provided by the Context/Provider.
   */
  theme?: Themes
}
