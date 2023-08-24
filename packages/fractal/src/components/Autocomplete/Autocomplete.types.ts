import type {
  DropdownMenuContentProps as RxDropdownMenuContentProps,
  DropdownMenuItemProps as RxDropdownMenuItemProps,
} from '@radix-ui/react-dropdown-menu'
import type { AllHTMLAttributes, ChangeEvent, ReactNode } from 'react'

import { InputTextProps } from '../InputText/InputText.types'

export type CombinedRefs = {
  container: HTMLDivElement | null
  dropdown: HTMLDivElement | null
  input: HTMLInputElement | null
}

export interface AutocompleteProps extends Omit<InputTextProps, 'onSelect'> {
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
   * Options to tweak the position of the select dropdown.
   *
   * - `collisionBoundary` is the container or list of containers) used to
   *   compute collision (if none is given, then the viewport is used);
   * - `hideWhenDetached` indicates if the dropdown must be hidden when the
   *   trigger is fully occluded;
   * - `sticky` indicates if the dropdown is kept in the the boundary as long as
   *   the trigger is (at least partially) in the boundary (`partial`) or always
   *   kept in the boundary regardless of the trigger (`always`).
   */
  dropdown?: Partial<
    Pick<
      RxDropdownMenuContentProps,
      'collisionBoundary' | 'hideWhenDetached' | 'sticky'
    > & { className?: string }
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
  /**
   * Event handler called when the autocomplete input value is changed or a
   * value is selected.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, newValue: string) => void
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
}

export interface AutocompleteLoadingProps
  extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the loader. */
  children: ReactNode
  /**
   * Indicates if you want to display an icon.
   *
   * You can pass either a boolean to use/disable the default icon or an icon of
   * your choice.
   */
  icon?: ReactNode | boolean
  /** Indicates if you want the icon to spin. */
  spin?: boolean
}

export interface AutocompleteEmptyProps
  extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the empty indicator. */
  children: ReactNode
}

export interface AutocompleteItemProps extends RxDropdownMenuItemProps {
  /** The label of the autocomplete item. */
  children: ReactNode
  /** Prevents the user from selecting this item. */
  disabled?: boolean
  /**
   * The value of the autocomplete item.
   *
   * If none is given, then the textual content of the item will be used as
   * value.
   */
  value?: string
}

export interface AutocompleteItemGroupProps
  extends AllHTMLAttributes<HTMLDivElement> {
  /** The autocomplete items to display inside of the group. */
  children: ReactNode
  /** The label of the autocomplete items group. */
  label: string
}

export type AutocompleteItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>
