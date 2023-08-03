import { AllHTMLAttributes } from 'react'

export interface ProgressProps extends AllHTMLAttributes<HTMLDivElement> {
  /**
   * A function to get the accessible label text representing the current value
   * in a human-readable format.
   *
   * If not provided, the value label will be read as the numeric value as a
   * percentage of the max value.
   */
  getValueLabel?: (value: number, max: number) => string
  /** The maximum progress value. */
  max?: number
  /** The current progress value. */
  value?: number
}
