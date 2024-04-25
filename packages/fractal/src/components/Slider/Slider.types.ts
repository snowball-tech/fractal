import { AllHTMLAttributes } from 'react'

import { Orientations } from './Slider.constants'

export interface SliderProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'defaultValue' | 'value'> {
  /**
   * The current value of the slider when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: Array<number> | number
  /** Prevents the user from interacting with the slider. */
  disabled?: boolean
  /**
   * A unique HTML id for the slider.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /**
   * Indicates if the slider is visually reversed (max on the left and min on
   * the right).
   */
  inverted?: boolean
  /** The accessible label of the slider thumb. */
  label?: string
  /** The maximum slider value. */
  max?: number
  /** The minimum slider value. */
  min?: number
  /** The minimum permitted steps between multiple thumbs. */
  minStepsBetweenThumbs?: number
  /**
   * The name of the slider.
   *
   * It is used to reference the value of the slider in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /** Event handler called when the value of the slider changes. */
  onValueChange?: (value: Array<number> | number) => void
  /**
   * Event handler called when the value of the slider changes at the end of
   * the interaction.
   *
   * Useful when you need to capture only the final change.
   */
  onValueCommit?: (value: Array<number> | number) => void
  /** The orientations of the slider. */
  orientation?: `${Orientations}`
  /** The interval between each value of the slider. */
  step?: number
  /** The current slider value. */
  value?: Array<number> | number
}
