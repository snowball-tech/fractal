import type { DropdownMenuContentProps as RxDropdownMenuContentProps } from '@radix-ui/react-dropdown-menu'

import type {
  AllHTMLAttributes,
  ChangeEvent,
  ForwardedRef,
  ReactNode,
} from 'react'

import type {
  CombinedRefs as DropdownCombinedRefs,
  DropdownItemGroupProps,
  DropdownItemProps,
} from '@/components/Dropdown/Dropdown.types'

import { InputTextProps } from '@/components/InputText/InputText.types'

export type CombinedRefs = {
  container: HTMLDivElement | null
  dropdown: DropdownCombinedRefs | null
  input: HTMLInputElement | null
}

export interface AutocompleteProps
  extends Omit<InputTextProps, 'onBlur' | 'onSelect'> {
  /** Indicates if the autocomplete input must be focused on render. */
  autoFocus?: boolean
  /** The elements to display in the autocomplete dropdown. */
  children?: ReactNode
  /**
   * The value of the autocomplete when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: number | string
  /** An helpful message to describe the autocomplete to the user. */
  description?: string
  /** Prevents the user from interacting with the autocomplete. */
  disabled?: boolean
  /**
   * Options to tweak the position of the autocomplete dropdown.
   * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content
   *
   * You can on top of that add the `className` property to customize the style
   * of the dropdown.
   */
  dropdown?: Partial<
    { className?: string; ref?: ForwardedRef<HTMLDivElement | null> } & Omit<
      RxDropdownMenuContentProps,
      'asChild'
    >
  >
  /**
   * An error message to display below the autocomplete if there is
   * an error.
   *
   * This will also change the display of the input to give an error feedback
   * (red border and red suffix).
   *
   * Note that the description (if there is one) will be replaced by the error
   * message when provided.
   */
  error?: string
  /** Indicates if the autocomplete should take all the available width. */
  fullWidth?: boolean
  /**
   * A unique HTML id for the autocomplete.
   *
   * This allows to link the input with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the autocomplete. */
  label?: string
  /**
   * The name of the autocomplete.
   *
   * It is used to reference the input in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /** Indicates if the dropdown should be opened at the beginning. */
  open?: boolean
  /** A string to display when the autocomplete is empty. */
  placeholder?: string
  /** The prefix (icon or text) to display to the left of the autocomplete. */
  prefix?: ReactNode
  /** Prevents the user to change the value of the autocomplete. */
  readOnly?: boolean
  /** Indicates if the autocomplete must be filled. */
  required?: boolean
  /**
   * A message to display when the autocomplete has a valid value.
   *
   * This will also change the display of the input to give an success feedback
   * (green border and green suffix).
   *
   * Note that the description (if there is one) will be replaced by the success
   * message when provided.
   */
  success?: string
  /** The suffix (icon or text) to display to the right of the autocomplete. */
  suffix?: ReactNode
  /**
   * The controlled value of the autocomplete.
   *
   * Must be used in conjunction with `onChange`.
   */
  value?: number | string
  /**
   * Event handler called when the autocomplete input AND the dropdown have lost
   * focus.
   */
  onBlur?: () => void
  /**
   * Event handler called when the autocomplete input value is changed or a
   * value is selected.
   */
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | null,
    newValue: string,
  ) => void
  /** Event handler called when the autocomplete dropdown is closed. */
  onClose?: () => void
  /**
   * Event handler called when the autocomplete input value is changed with the
   * new string value.
   */
  onInputChange?: (
    event: ChangeEvent<HTMLInputElement>,
    newValue: string,
  ) => void
  /** Event handler called when the autocomplete dropdown is opened. */
  onOpen?: () => void
}

export interface AutocompleteLoadingProps
  extends AllHTMLAttributes<HTMLDivElement> {
  /**
   * The content of the loading item.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /**
   * Indicates if you want to display an icon.
   *
   * You can pass either a boolean to use/disable the default icon or an icon of
   * your choice.
   */
  icon?: boolean | ReactNode
  /**
   * The content of the loading item.
   *
   * Use this when you only need to display text in a loading item.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the loading item.
   */
  label?: string
  /** Indicates if you want the icon to spin. */
  spin?: boolean
}

export interface AutocompleteEmptyProps
  extends AllHTMLAttributes<HTMLDivElement> {
  /**
   * The content of the empty item.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /**
   * The content of the empty item.
   *
   * Use this when you only need to display text in an empty item.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the empty item.
   */
  label?: string
}

export type AutocompleteItemProps = DropdownItemProps

export type AutocompleteItemGroupProps = DropdownItemGroupProps

export type AutocompleteItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>
