import type { AllHTMLAttributes, FormEventHandler, ReactNode } from 'react'

export interface InputTextProps extends AllHTMLAttributes<HTMLInputElement> {
  /** Indicates if the input text must be focused on render. */
  autoFocus?: boolean
  /**
   * The value of the input text when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: string
  /** An helpful message to describe the input text to the user. */
  description?: string
  /** Prevents the user from interacting with the input text. */
  disabled?: boolean
  /**
   * An error message to display below the input if there is an error.
   *
   * This will also change the display of the input to give an error feedback
   * (red border and special red icon).
   *
   * Note that the description (if there is one) will be replaced by the error
   * message when provided.
   *
   * The icon (if there is one) will also be replaced  by a specific error icon.
   */
  error?: string
  /** The icon to display in the input text (if any). */
  icon?: ReactNode
  /** The position of the icon in the input text. */
  iconPosition?: 'left' | 'right'
  /**
   * A unique HTML id for the input text.
   *
   * This allows to link the input text with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the input text. */
  label?: string
  /**
   * The name of the input text.
   *
   * It is used to reference the input text in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /** Event handler called when the input text value is changed. */
  onChange?: FormEventHandler<HTMLInputElement>
  /** A string to display when the input text is empty. */
  placeholder?: string
  /** Prevents the user to change the value of the input text. */
  readOnly?: boolean
  /** Indicates if the input text must be filled. */
  required?: boolean
  /**
   * Indicates if you want to use the input in a standalone mode, i.e without
   * wrapping it with a `RadixUI.Form.Field` element.
   */
  standalone?: boolean
  /**
   * A message to display when the input text has a valid value.
   *
   * This will also change the display of the input to give an success feedback
   * (green border and special green icon).
   *
   * Note that the icon (if there is one) will be replaced by a specific success
   * icon.
   */
  success?: string
  /**
   * The type of the input text.
   *
   * Must be a valid HTML5 type for an `&lt;input /&gt;` element.
   *
   * Note that some valid HTML5 type for an `&lt;input /&gt;` element are not
   * supported in this component because they are not relevant for a text input
   * (e.g. `checkbox`, `number`, `tel`, `date`, `week`, ...).
   * If you need a specific type, please use the appropriate component instead
   * (e.g. `&lt;InputCheckbox /&gt;`, `&lt;InputNumber /&gt;`,
   * `&lt;InputTelephone /&gt;`, `&lt;DatePicker /&gt;`, ...).
   */
  type?: 'email' | 'password' | 'search' | 'text' | 'url'
  /**
   * The controlled value of the input text.
   *
   * Must be used in conjunction with `onChange`.
   */
  value?: string
}
