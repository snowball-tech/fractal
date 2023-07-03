import type {
  CheckedState,
  CheckboxProps as RxCheckboxProps,
} from '@radix-ui/react-checkbox'

import { Variants } from './Checkbox.constants'

export interface CheckboxProps extends RxCheckboxProps {
  /**
   * The controlled checked state of the checkbox.
   *
   * Must be used in conjunction with `onCheckedChange`.
   */
  checked?: CheckedState
  /**
   * The checked state of the checkbox when it is initially rendered.
   * Use when you do not need to control its checked state.
   */
  defaultChecked?: CheckedState
  /** When `true`, prevents the user from interacting with the checkbox. */
  disabled?: boolean
  /** A unique HTML id for the checkbox. */
  id?: string
  /** The label of the checkbox. */
  label: string
  /**
   * The name of the checkbox. Submitted with its owning form as part of a
   * name/value pair
   */
  name?: string
  /** Event handler called when the checked state of the checkbox changes. */
  onCheckedChange?: (checked: CheckedState) => void
  /** When `true`, indicates that the user must check the checkbox before the owning form can be submitted. */
  required?: boolean
  /** The value given as data when submitted with a name. */
  value?: string
  /** The variant of the checkbox (color) to use. */
  variant?: `${Variants}`
}
