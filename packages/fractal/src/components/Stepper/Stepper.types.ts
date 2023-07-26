import { AllHTMLAttributes } from 'react'

export interface StepperProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The current step. */
  current?: number
  /** Indicates if you want to highlight the current step. */
  highlighted?: boolean
  /** The number of steps. */
  length: number
}
