import type { AllHTMLAttributes, ReactNode } from 'react'

import { Themes } from '@/constants'

import { Elevations } from './Paper.constants'

export interface PaperProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the paper. */
  children: ReactNode
  /**
   * The elevation level of the paper.
   *
   * 1 (bordered) is a non elevated bordered block
   * 2 (elevated) is a lightly raised (small shadow) bordered block
   * 3 (higher) is a raised bordered block
   */
  elevation?: `${Elevations}`
  /**
   * Force the theme of the paper.
   *
   * If none is given, it will use the one provided by the Context/Provider.
   */
  theme?: Themes
}
