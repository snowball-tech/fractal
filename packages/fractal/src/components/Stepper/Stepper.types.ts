import { AllHTMLAttributes } from 'react'

export interface StepperProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The current step. */
  current?: number
  /**
   * Indicates how you want to display the current step.
   *
   * - `step`: The current step will be displayed as a fixed step.
   * - `progress`: The current step will be displayed as a progress bar.
   */
  currentAs?: 'progress' | 'step'
  /** Indicates if you want to highlight the current step. */
  highlighted?: boolean
  /** The number of steps. */
  length: number
  /**
   * When displaying the current step as a progress bar, the maximum value of
   * the progress bar.
   */
  max?: number
  /**
   * When displaying the current step as a progress bar, the current value of
   * the progress bar.
   */
  value?: number
}
