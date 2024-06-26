import {
  RadioGroupProps as RxRadioGroupProps,
  RadioGroupItemProps as RxRadioProps,
} from '@radix-ui/react-radio-group'
import type { ReactNode } from 'react'

import { Variants } from './InputRadio.constants'

export interface InputRadioGroupProps extends RxRadioGroupProps {
  /** The radio buttons to display inside of the radio group. */
  children: ReactNode
  /**
   * Indicates if the radio group should be condensed (less spacing in group and
   * items).
   */
  condensed?: boolean
  /**
   * The uncontrolled value of the radio group (i.e. the value of the default
   * selected radio button).
   */
  defaultValue?: string
  /**
   * Prevents the user from interacting with any of the radio button in the
   * radio group.
   */
  disabled?: boolean
  /** Indicates if the radio group should take all the available width. */
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

export interface InputRadioProps extends RxRadioProps {
  /**
   * The content of the radio.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /**
   * Indicates if the radio should be condensed (less spacing in radio).
   *
   * If you pass the `condensed` prop to the `InputRadioGroup` component, you
   * don't need to pass it to each `InputRadio` component, they will inherit it
   * automatically.
   */
  condensed?: boolean
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
  /**
   * The content of the radio.
   *
   * Use this when you only need to display text in a radio.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the radio.
   */
  label?: string
  /**
   * Output the label as a `div` element instead of a `label` element.
   *
   * This is useful for markup validity reasons, but note that you will lose the
   * ability to toggle the radio by clicking on the label as well as the
   * accessibility improvements.
   */
  labelAsDiv?: boolean
  /** The value submitted in the submitted form. */
  value: string
}
