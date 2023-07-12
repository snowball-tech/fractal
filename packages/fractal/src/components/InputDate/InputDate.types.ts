export type DateFormat = {
  day?: number
  month?: number
  year?: number
}

export type Placeholders = {
  day?: string
  month?: string
  year?: string
}

export type Descriptions = {
  day?: string
  month?: string
  year?: string
}

export interface InputDateProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'defaultValue' | 'onChange' | 'placeholder'
  > {
  /** Indicates if the first empty date field must be focused on render. */
  autoFocus?: boolean
  /**
   * The value of the date input when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: DateFormat
  /** An helpful message to describe each field of the date input. */
  descriptions?: Descriptions
  /** Prevents the user from interacting with the date input. */
  disabled?: boolean
  /**
   * An error message to display below the date input if there is an
   * error.
   *
   * This will also change the display of the input to give an error feedback
   * (red border).
   *
   * Note that the description (if there is one) will be replaced by the error
   * message when provided.
   */
  error?: string
  /**
   * A unique HTML id for the date input.
   *
   * This allows to link each date field with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the date input. */
  label?: string
  /**
   * The name of the date input.
   *
   * It is used to reference each date field in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /** Event handler called when the date value is changed. */
  onChange?: (newDate: DateFormat) => void
  /** Event handler called when one of the field of the date is changed. */
  onFieldChange?: (type: 'day' | 'month' | 'year', newDay: number) => void
  /**
   * A string to display in each of the date field when the value is
   * empty.
   */
  placeholders?: Placeholders
  /** Prevents the user to change the value of the date input. */
  readOnly?: boolean
  /** Indicates if the date input must be filled. */
  required?: boolean
  /**
   * A message to display when the birth dae input has a valid value.
   *
   * This will also change the display of the input to give an success feedback
   * (green border).
   */
  success?: string
  /**
   * The controlled value of the date input.
   *
   * Must be used in conjunction with `onChange`.
   */
  value?: DateFormat
}
