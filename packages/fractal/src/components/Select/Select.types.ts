import type {
  SelectContentProps as RxSelectContentProps,
  SelectProps as RxSelectProps,
} from '@radix-ui/react-select'
import type { AllHTMLAttributes, ReactNode } from 'react'

export interface SelectProps extends AllHTMLAttributes<HTMLSelectElement> {
  /** Indicates if autocompletion is possible in this select. */
  autoComplete?: string
  /** Indicates if the select must be opened on render. */
  autoFocus?: boolean
  /**
   * The selected option of the select when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: string
  /** An helpful message to describe the select to the user. */
  description?: string
  /** The reading direction of the select. */
  dir?: RxSelectProps['dir']
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
   * Options to tweak the position the select dropdown.
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
      RxSelectContentProps,
      'collisionBoundary' | 'hideWhenDetached' | 'sticky'
    >
  >
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
  /** Event handler called when the select dropdown is opened. */
  onOpenChange?: (isOpen: boolean) => void
  /** Event handler called when the selected value is changed. */
  onValueChange?: (newValue: string) => void
  /**
   * The controlled open state of the select.
   *
   * Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean
  /** A text to display when there is no selected value. */
  placeholder?: string
  /** Indicates if a value must be selected. */
  required?: boolean
  /**
   * The controlled value of the select.
   *
   * Must be used in conjunction with `onChange`.
   */
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
  /** The label of the select options group. */
  label: string
}

export type SelectItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>
