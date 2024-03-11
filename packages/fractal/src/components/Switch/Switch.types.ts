import type { SwitchProps as RxSwitchProps } from '@radix-ui/react-switch'
import type { ReactNode } from 'react'

export interface SwitchProps
  extends Omit<RxSwitchProps, 'asChild' | 'onCheckedChange'> {
  /**
   * The controlled checked state of the switch.
   *
   * Must be used in conjunction with `onCheckedChange`.
   */
  checked?: boolean
  /**
   * The content of the switch.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /**
   * The checked state of the switch when it is initially rendered.
   *
   * Use this when you do not need to control its checked state.
   */
  defaultChecked?: boolean
  /** Prevents the user from interacting with the switch. */
  disabled?: boolean
  /**
   * A unique HTML id for the switch.
   *
   * This allows to link the switch with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /**
   * The content of the switch.
   *
   * Use this when you only need to display text in a switch.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the switch.
   */
  label?: string
  /**
   * The labels of the switch if you want to display two labels.
   *
   * The first element of the array will be the label for the unchecked state
   * (presented on the left of the switch) and the second element will be the
   * label for the checked state (presented on the right of the switch).
   */
  labels?: Array<string>
  /**
   * The name of the switch.
   *
   * It is used to reference the switch in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /** Event handler called when the switch is clicked. */
  onToggle?: (newState: boolean) => void
  /**
   * Indicates that the user must check the switch before continuing (e.g.
   * sending a form).
   */
  required?: boolean
  /** The position of the switch compared to the label. */
  switchPosition?: 'left' | 'right'
  /**
   * The value submitted in the submitted form.
   *
   * Default value (`on`) should be good most of the time.
   */
  value?: string
}
