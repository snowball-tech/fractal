import {
  RadioGroupProps as RxRadioGroupProps,
  RadioProps as RxRadioProps,
} from '@radix-ui/react-radio-group'
import type { ReactNode } from 'react'

import { Variants } from './InputRadio.constants'

export interface InputRadioProps extends RxRadioProps {
  /** Prevents the user from interacting with the radio button. */
  disabled?: boolean
  /** Indicates if the radio button should take all the available width. */
  fullWidth?: boolean
  /**
   * A unique HTML id for the radio button.
   *
   * This allows to link the radio button with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the radio button. */
  label: string
  /** The value submitted in the submitted form. */
  value: string
}

export interface InputRadioGroupProps extends RxRadioGroupProps {
  /** The radio buttons to display inside of the radio group. */
  children: ReactNode
  /**
   * The controlled value of the radio group (i.e. the value of the default
   * selected radio button).
   */
  defaultValue?: string
  /**
   * Prevents the user from interacting with any of the radio button in the
   * radio group.
   */
  disabled?: boolean
  /** Indicates if the radio group  should take all the available width. */
  fullWidth?: boolean
  /**
   * The name of the radio group.
   *
   * It is used to reference the value of the selected radio button in a form
   * submission.
   *
   * If none is given, one will be generated.
   */
  name?: string
  /**
   * Event handler called when the value of the radio group (i.e. the selected
   * radio button) changes.
   */
  onValueChange?: (value: string) => void
  /** The display orientation of the contained radio buttons. */
  orientation?: RxRadioGroupProps['orientation']
  /**
   * Indicates that the user must check a radio button inside of the radio group
   * before continuing (e.g. sending a form).
   */
  required?: boolean
  /**
   * The controlled value of the radio group (i.e. the value of the selected
   * radio button).
   *
   * Must be used in conjunction with `onValueChange`.
   */
  value?: string
  /** The variant of the radio button to use. */
  variant?: `${Variants}`
}
