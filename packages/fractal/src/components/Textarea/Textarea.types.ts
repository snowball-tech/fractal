import type { ChangeEvent, ReactNode } from 'react'
import type { TextareaAutosizeProps } from 'react-textarea-autosize'

export interface TextareaProps
  extends Omit<TextareaAutosizeProps, 'onChange' | 'onHeightChange'> {
  /** Indicates if the textarea must be focused on render. */
  autoFocus?: boolean
  /**
   * The value of the textarea when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: number | string
  /** An helpful message to describe the textarea to the user. */
  description?: string
  /** Prevents the user from interacting with the textarea. */
  disabled?: boolean
  /**
   * If a boolean: indicates that the field is in error.
   *
   * If a string: an error message to display below the input if there is an
   * error.
   *
   * This will also change the display of the input to give an error feedback
   * (red border).
   *
   * Note that the description (if there is one) will be replaced by the error
   * message when provided.
   */
  error?: boolean | string
  /** Indicates if the textarea should take all the available width. */
  fullWidth?: boolean
  /**
   * An icon to display on the bottom right corner of the textarea.
   *
   * If you also define a `onIconClick` handler, the icon will be a button.
   */
  icon?: ReactNode
  /**
   * A unique HTML id for the textarea.
   *
   * This allows to link the textarea with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the textarea. */
  label?: string
  /** The maximum number of rows the textarea can have. */
  maxRows?: number
  /** The minimum number of rows the textarea must have. */
  minRows?: number
  /**
   * The name of the textarea.
   *
   * It is used to reference the textarea in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /**
   * Event handler called when the textarea value is changed with the new
   * string value.
   */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>, newValue: string) => void
  /** Event handler called when the textarea is resized. */
  onHeightChange?: TextareaAutosizeProps['onHeightChange']
  /**
   * Event handler called when the icon on the bottom right corner is clicked.
   */
  onIconClick?: () => void
  /** A string to display when the textarea is empty. */
  placeholder?: string
  /** Prevents the user to change the value of the textarea. */
  readOnly?: boolean
  /** Indicates if the textarea must be filled. */
  required?: boolean
  /**
   * Indicates if the content of the textarea should be selected when the
   * textarea is focused.
   */
  selectOnFocus?: boolean
  /**
   * If a boolean: indicates that the field is in success.
   *
   * If a string: a message to display when the textarea has a valid value.
   *
   * This will also change the display of the input to give an success feedback
   * (green border).
   *
   * Note that the description (if there is one) will be replaced by the success
   * message when provided.
   */
  success?: boolean | string
  /**
   * The controlled value of the textarea.
   *
   * Must be used in conjunction with `onChange`.
   */
  value?: number | string
}
