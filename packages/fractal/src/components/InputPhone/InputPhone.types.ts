import type { CountryCode } from 'libphonenumber-js'
import type { HTMLAttributes } from 'react'

export type CountryDetails = {
  countryCode: CountryCode
  countryName: string
  flag: string
  prefix: string
}

export type PhoneNumber = {
  countryCode?: CountryCode | undefined
  number: string
}

export type Prefix = {
  countryCode?: CountryCode | undefined
  prefix: string
}

export interface InputPhoneProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    'defaultValue' | 'onChange' | 'placeholder'
  > {
  /** Indicates if the phone input must be focused on render. */
  autoFocus?: boolean
  /**
   * The value of the phone input when it is initially rendered.
   *
   * Should be a valid `PhoneNumber` object containing the country code
   * (`countryCode`) and the internationally formatted phone number (`number`).
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: PhoneNumber
  /** An helpful message to describe the phone input to the user. */
  description?: string
  /** Prevents the user from interacting with the phone input. */
  disabled?: boolean
  /**
   * An error message to display below the phone input if there is an
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
   * A unique HTML id for the phone input.
   *
   * This allows to link each phone field with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the phone input. */
  label?: string
  /**
   * The name of the phone input.
   *
   * It is used to reference each phone field in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /**
   * Event handler called when the phone value is changed.
   *
   * The new value is sent in the `PhoneNumber` format containing the country
   * code (`countryCode`) and the internationally formatted phone number
   * (`number`).
   */
  onChange?: (newPhoneNumber: PhoneNumber, isValid?: boolean) => void
  /** A string to display when the text input is empty. */
  placeholder?: string
  /** Prevents the user to change the value of the phone input. */
  readOnly?: boolean
  /** Indicates if the phone input must be filled. */
  required?: boolean
  /** The placeholder to display in the search bar. */
  searchPlaceholder?: string
  /**
   * A message to display when the phone input has a valid value.
   *
   * This will also change the display of the input to give an success feedback
   * (green border).
   */
  success?: string
  /** Indicates if you want to receive `onChange` events even if the phone
   * number is invalid.
   */
  updateOnInvalid?: boolean
  /**
   * The controlled value of the phone input.
   *
   * Should be a valid `PhoneNumber` object containing the country code
   * (`countryCode`) and the internationally formatted phone number (`number`).
   *
   * Must be used in conjunction with `onChange`.
   */
  value?: PhoneNumber
  /** Indicates if you want to make the user pick a prefix or not. */
  withPrefix?: boolean
}
