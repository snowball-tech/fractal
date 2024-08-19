import type {
  CheckboxProps,
  CheckboxProps as RxCheckboxProps,
} from '@radix-ui/react-checkbox'

import type { ReactNode } from 'react'

import { Colors, Variants } from './InputCheckbox.constants'

export interface InputCheckboxProps extends Omit<RxCheckboxProps, 'asChild'> {
  /**
   * The controlled checked state of the checkbox.
   *
   * Must be used in conjunction with `onCheckedChange`.
   */
  checked?: CheckboxProps['checked']
  /**
   * The content of the checkbox.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /** The color of the checkbox to use. */
  color?: `${Colors}`
  /**
   * The checked state of the checkbox when it is initially rendered.
   *
   * Use this when you do not need to control its checked state.
   */
  defaultChecked?: CheckboxProps['defaultChecked']
  /** Prevents the user from interacting with the checkbox. */
  disabled?: boolean
  /** Indicates if the checkbox should take all the available width. */
  fullWidth?: boolean
  /**
   * A unique HTML id for the checkbox.
   *
   * This allows to link the checkbox with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /**
   * The content of the checkbox.
   *
   * Use this when you only need to display text in a checkbox.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the checkbox.
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
  /**
   * The name of the checkbox.
   *
   * It is used to reference the checkbox in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /**
   * Prevent the user from interacting with the checkbox but keep a
   * non-disabled visual state.
   */
  readOnly?: boolean
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
  /** The variant of the checkbox to use. */
  variant?: `${Variants}`
  /** Event handler called when the checked state of the checkbox changes. */
  onCheckedChange?: (checked: CheckboxProps['checked']) => void
}
