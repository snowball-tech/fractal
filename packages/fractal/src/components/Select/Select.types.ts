import type { SelectContentProps as RxSelectContentProps } from '@radix-ui/react-select'
import type { AllHTMLAttributes, ReactNode } from 'react'

export type CombinedRefs = {
  container: HTMLDivElement | null
  dropdown: HTMLDivElement | null
  trigger: HTMLButtonElement | null
}

export interface SelectProps
  extends Omit<AllHTMLAttributes<HTMLSelectElement>, 'onSelect'> {
  /** Indicates if the select must be opened on render. */
  autoFocus?: boolean
  /** The elements to display in the select dropdown. */
  children?: ReactNode
  /**
   * The selected option of the select when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: string
  /** An helpful message to describe the select to the user. */
  description?: string
  /** Prevents the user from interacting with the select. */
  disabled?: boolean
  /**
   * The custom display of the selected value.
   *
   * Use this if you need more control on what is displayed in the select when
   * a value is selected.
   * If none is given, the selected value text will be displayed as is.
   */
  displayedValue?: ReactNode
  /**
   * Options to tweak the position of the select dropdown.
   * See https://www.radix-ui.com/primitives/docs/components/select#content
   *
   * You can on top of that add the `className` property to customize the style
   * of the dropdown.
   */
  dropdown?: RxSelectContentProps & { className?: string }
  /** Indicates if the select should take all the available width. */
  fullWidth?: boolean
  /**
   * A unique HTML id for the select.
   *
   * This allows to link the select with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the select. */
  label?: string
  /**
   * The name of the select.
   *
   * It is used to reference the selected value of the select in a form
   * submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /** Event handler called when the select dropdown is closed. */
  onClose?: () => void
  /** Event handler called when the select dropdown is opened. */
  onOpen?: () => void
  /** Event handler called when a value is selected. */
  onSelect?: (newValue: string) => void
  /**
   * The controlled open state of the select.
   *
   * Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean
  /** A text to display when there is no selected value. */
  placeholder?: string
  /** Prevents the user to change the selected value. */
  readOnly?: boolean
  /** Indicates if a value must be selected. */
  required?: boolean
  /**
   * The controlled value of the select.
   *
   * Must be used in conjunction with `onSelect`.
   */
  value?: string
}

export interface SelectEmptyProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The content of the empty indicator. */
  children: ReactNode
  /** The value of the empty element. */
  value?: string
}

export interface SelectItemProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The label of the select option. */
  children: ReactNode
  /** Prevents the user from selecting this option. */
  disabled?: boolean
  /** The value of the select option. */
  value: string
}

export interface SelectItemGroupProps
  extends AllHTMLAttributes<HTMLDivElement> {
  /** The select options to display inside of the group. */
  children: ReactNode
  /** Indicates if the whole group should be disabled. */
  disabled?: boolean
  /** The label of the select options group. */
  label: string
}

export type SelectItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>
