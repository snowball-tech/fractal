import type { SelectContentProps as RxSelectContentProps } from '@radix-ui/react-select'

import type { AllHTMLAttributes, ReactNode } from 'react'

export type CombinedRefs = {
  container: HTMLDivElement | null
  dropdown: HTMLDivElement | null
  trigger: HTMLButtonElement | null
}

export interface SelectProps
  extends Omit<AllHTMLAttributes<HTMLSelectElement>, 'label' | 'onSelect'> {
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
  description?: ReactNode
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
  dropdown?: Partial<
    { className?: string } & Omit<RxSelectContentProps, 'asChild'>
  >
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
  label?: ReactNode
  /**
   * The element to use to display the label.
   *
   * If none is given, it will be automatically determined based on the type of
   * the label. A `string` label will be displayed as a `label`, anything else
   * will be displayed as a `div`.
   *
   * This is useful for markup validity reasons, but note that you will lose the
   * ability to click on the label to toggle the select as well as the
   * accessibility improvements.
   */
  labelElement?: keyof HTMLElementTagNameMap
  /**
   * The name of the select.
   *
   * It is used to reference the selected value of the select in a form
   * submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /**
   * The controlled open state of the select.
   *
   * Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean
  /** A text to display when there is no selected value. */
  placeholder?: string
  /**
   * Indicates if the select dropdown must be portaller into the body or
   * inserted in place after the trigger box.
   */
  portalled?: boolean
  /**
   * Indicates if the select items are displayed in "hover the rainbow" mode.
   */
  rainbow?: boolean
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
  /** Event handler called when the select dropdown is closed. */
  onClose?: () => void
  /** Event handler called when the select dropdown is opened. */
  onOpen?: () => void
  /** Event handler called when a value is selected. */
  onSelect?: (newValue: string) => void
}

export interface SelectEmptyProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'label'> {
  /**
   * The content of the empty select item.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /**
   * The label/content of the empty select item.
   *
   * If this is a `ReactNode`, then its "text only" content will be used as the
   * accessible label.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the button that will be used as the `aria-label`
   * and `title` for the dropdown item.
   * Otherwise, the "text only" content of the children will be used as the
   * accessible label.
   */
  label?: ReactNode
  /**
   * The element to use to display the label.
   *
   * If none is given, it will be automatically determined based on the type of
   * the label. A `string` label will be displayed as a `label`, anything else
   * will be displayed as a `div`.
   *
   * This is useful for markup validity reasons, but note that you will lose the
   * accessibility improvements.
   */
  labelElement?: keyof HTMLElementTagNameMap
  /** The value of the empty element. */
  value?: string
}

export interface SelectItemProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'label'> {
  /** The value of the select option. */
  value: string
  /**
   * The content of the select item.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /** Prevents the user from selecting this option. */
  disabled?: boolean
  /**
   * The content of the select item.
   *
   * If this is a `ReactNode`, then its "text only" content will be used as the
   * accessible label.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the button that will be used as the `aria-label`
   * and `title` for the dropdown item.
   * Otherwise, the "text only" content of the children will be used as the
   * accessible label.
   */
  label?: ReactNode
  /**
   * The element to use to display the label.
   *
   * If none is given, it will be automatically determined based on the type of
   * the label. A `string` label will be displayed as a `label`, anything else
   * will be displayed as a `div`.
   *
   * This is useful for markup validity reasons, but note that you will lose the
   * accessibility improvements.
   */
  labelElement?: keyof HTMLElementTagNameMap
  /** Indicates if the item is displayed in "hover the rainbow" mode. */
  rainbow?: boolean
}

export interface SelectItemGroupProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'label'> {
  /** The select options to display inside of the group. */
  children: ReactNode
  /** The label of the select options group. */
  label: ReactNode
  /** Indicates if the whole group should be disabled. */
  disabled?: boolean
  /**
   * The element to use to display the label.
   *
   * If none is given, it will be automatically determined based on the type of
   * the label. A `string` label will be displayed as a `label`, anything else
   * will be displayed as a `div`.
   *
   * This is useful for markup validity reasons, but note that you will lose the
   * accessibility improvements.
   */
  labelElement?: keyof HTMLElementTagNameMap
  /**
   * Indicates if the items in the group are displayed in "hover the rainbow"
   * mode.
   */
  rainbow?: boolean
}

export type SelectItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>
