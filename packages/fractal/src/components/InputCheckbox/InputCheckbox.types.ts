import type {
  CheckedState,
  CheckboxProps as RxCheckboxProps,
} from '@radix-ui/react-checkbox'

import { Variants } from './InputCheckbox.constants'

export interface InputCheckboxProps extends RxCheckboxProps {
  /**
   * The controlled checked state of the checkbox.
   *
   * Must be used in conjunction with `onCheckedChange`.
   */
  checked?: CheckedState
  /**
   * The checked state of the checkbox when it is initially rendered.
   *
   * Use this when you do not need to control its checked state.
   */
  defaultChecked?: CheckedState
  /** Prevents the user from interacting with the checkbox. */
  disabled?: boolean
  /**
   * A unique HTML id for the checkbox.
   *
   * This allows you to link the checkbox with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the checkbox. */
  label: string
  /**
   * The name of the checkbox.
   *
   * It is used to reference the checkbox in a form submission.
   */
  name?: string
  /** Event handler called when the checked state of the checkbox changes. */
  onCheckedChange?: (checked: CheckedState) => void
  /**
   * Indicates that the user must check the checkbox before continuing (e.g.
   * sending a form).
   */
  required?: boolean
  /**
   * The value submitted in the submitted form.
   *
   * Default value (`on`) should be good most of the time.
   */
  value?: string
  /** The variant of the checkbox (color) to use. */
  variant?: `${Variants}`
}
