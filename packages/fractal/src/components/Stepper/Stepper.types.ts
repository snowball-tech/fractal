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
  /**
   * A function to get the accessible label text representing the current value
   * in a human-readable format.
   *
   * If not provided, the value label will be read as "<current>/<length>".
   */
  getValueLabel?: (current: number, length: number) => string
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
