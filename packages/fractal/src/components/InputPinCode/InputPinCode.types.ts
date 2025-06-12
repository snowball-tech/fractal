import type {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  KeyboardEvent,
} from 'react'

import type { InputTextProps } from '@/components/InputText/InputText.types'

export interface InputPinCodeProps
  extends Omit<
    InputTextProps,
    | 'button'
    | 'fullWidth'
    | 'onBlur'
    | 'onButtonClick'
    | 'onFocus'
    | 'onKeyDown'
    | 'placeholder'
    | 'prefix'
    | 'suffix'
    | 'type'
    | 'withButton'
  > {
  /** Indicates if the first pin code field must be focused on render. */
  autoFocus?: boolean
  /**
   * The value of the pin code input when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: string
  /** An helpful message to describe the pin code input. */
  description?: string
  /** Prevents the user from interacting with the pin code input. */
  disabled?: boolean
  /**
   * An error message to display below the pin code input if there is an
   * error.
   * You can also pass `true` to just display the error feedback (red border)
   * without any message.
   *
   * This will also change the display of each fields to give an error feedback
   * (red border).
   *
   * Note that the description (if there is one) will be replaced by the error
   * message when provided.
   */
  error?: boolean | string
  /**
   * A unique HTML id for the pin code input.
   *
   * This allows to link each digit field with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the pin code input. */
  label?: string
  /** The length of the expected pin code (number of fields). */
  length?: number
  /**
   * The name of the pin code input.
   *
   * It is used to reference each digit field in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /**
   * A string to display in each of the digit field when the value is
   * empty.
   */
  placeholders?: string | Array<string>
  /** Prevents the user to change the value of the pin code input. */
  readOnly?: boolean
  /** Indicates if the pin code input must be filled. */
  required?: boolean
  /**
   * Indicates if the pin code input can/must be split into multiple lines at
   * `splitAt` index (or in the middle rounded to the top if no `splitAt` is
   * provided)
   *
   * If `true`, the pin code input will never be split
   * If `false` (or not given), the pin code input will always be split
   * If `'auto'`, the pin code input will be split on small
   * screens (< sm) at
   */
  split?: boolean | 'auto'
  /** The index at which the pin code input must be split (if `split` is not
   * `false` or empty). */
  splitAt?: number
  /**
   * A message to display when the pin code input has a valid value.
   * You can also pass `true` to just display the success feedback (green
   * border) without any message.
   *
   * This will also change the display of the input to give an success feedback
   * (green border).
   */
  success?: boolean | string
  /**
   * The controlled value of the pin code input.
   *
   * Must be used in conjunction with `onChange`.
   */
  value?: string
  /** The wrapper of the pin code inputs. */
  wrapper?: Partial<{
    className: string
  }>
  /**
   * Event handler called when one of the field of the pin code input is
   * blurred.
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>, index: number) => void
  /** Event handler called when the pin code value is changed. */
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | ClipboardEvent<HTMLInputElement>,
    newCode: string,
  ) => void
  /** Event handler called when all the fields has been filled. */
  onComplete?: (newCode: string) => void
  /**
   * Event handler called when one of the field of the pin code input is
   * changed.
   */
  onFieldChange?: (
    event: ChangeEvent<HTMLInputElement> | ClipboardEvent<HTMLInputElement>,
    index: number,
    newDigit: string,
  ) => void
  /**
   * Event handler called when one of the field of the pin code input is
   * focused.
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>, index: number) => void
  /**
   * Event handler called when a key is pressed in one of the field of the pin
   * code input.
   */
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>, index: number) => void
}
