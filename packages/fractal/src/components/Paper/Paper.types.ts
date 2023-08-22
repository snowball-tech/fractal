import type { AllHTMLAttributes, ReactNode } from 'react'

import { Elevations } from './Paper.constants'

export interface PaperProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the paper. */
  children: ReactNode
  /**
   * The elevation level of the paper.
   *
   * 1 (bordered) is a non elevated bordered paper
   * 2 (low) is a lightly raised (small shadow) bordered paper
   */
  elevation?: `${Elevations}`
}
