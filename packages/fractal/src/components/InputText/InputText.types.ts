import type { AllHTMLAttributes, ChangeEvent, ReactNode } from 'react'

export interface InputTextProps
  extends Omit<AllHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix'> {
  /** Indicates if the text input must be focused on render. */
  autoFocus?: boolean
  /**
   * The value of the text input when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: number | string
  /** An helpful message to describe the text input to the user. */
  description?: string
  /** Prevents the user from interacting with the text input. */
  disabled?: boolean
  /**
   * If a boolean: indicates that the field is in error.
   *
   * If a string: an error message to display below the input if there is an
   * error.
   *
   * This will also change the display of the input to give an error feedback
   * (red border and red suffix).
   *
   * Note that the description (if there is one) will be replaced by the error
   * message when provided.
   */
  error?: boolean | string
  /** Indicates if the text input should take all the available width. */
  fullWidth?: boolean
  /**
   * A unique HTML id for the text input.
   *
   * This allows to link the text input with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the text input. */
  label?: string
  /**
   * The name of the text input.
   *
   * It is used to reference the text input in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /**
   * Event handler called when the text input value is changed with the new
   * string value.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, newValue: string) => void
  /** A string to display when the text input is empty. */
  placeholder?: string
  /** The prefix (icon or text) to display to the left of the text input. */
  prefix?: ReactNode
  /** Prevents the user to change the value of the text input. */
  readOnly?: boolean
  /** Indicates if the text input must be filled. */
  required?: boolean
  /**
   * If a boolean: indicates that the field is in success.
   *
   * If a string: a message to display when the text input has a valid value.
   *
   * This will also change the display of the input to give an success feedback
   * (green border and green suffix.
   *
   * Note that the description (if there is one) will be replaced by the success
   * message when provided.
   */
  success?: boolean | string
  /** The suffix (icon or text) to display to the right of the text input. */
  suffix?: ReactNode
  /**
   * The type of the text input.
   *
   * Must be a valid HTML5 type for an `input` element.
   */
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'
  /**
   * The controlled value of the text input.
   *
   * Must be used in conjunction with `onChange`.
   */
  value?: number | string
}
