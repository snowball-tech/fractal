import {
  Content,
  DropdownMenuItem,
  Root,
  MenuRadioGroupProps as RxDropdownRadioGroupProps,
  MenuRadioItemProps as RxDropdownRadioItemProps,
} from '@radix-ui/react-dropdown-menu'
import type { AllHTMLAttributes, ComponentProps, ReactNode } from 'react'

export interface DropdownProps extends AllHTMLAttributes<HTMLDivElement> {
  /**
   * The content of the dropdown menu.
   *
   * For the best result, please use the `DropdownItem` components.
   */
  children: ReactNode
  /** Indicates if the dropdown menu is disabled. */
  disabled?: boolean
  onMenuOpenChange?: ComponentProps<typeof Root>['onOpenChange']
  /**
   * Indicates if the dropdown menu is open.
   *
   * Can be used to force a state of the dropdown or when using a custom
   * (non-text) trigger.
   */
  open?: boolean
  /**
   * The side to open the dropdown too.
   *
   * If none is given, it will be chosen automatically based on the available
   * space.
   */
  side?: ComponentProps<typeof Content>['side']
  /** The trigger of the dropdown menu. */
  trigger?: ReactNode
  /** Indicates if the trigger should have an indicator (arrow). */
  withIndicator?: boolean
}

export interface DropdownItemProps
  extends Omit<
    ComponentProps<typeof DropdownMenuItem>,
    'asChild' | 'onClick' | 'onSelect'
  > {
  /** Indicates if the menu item is disabled. */
  disabled?: boolean
  /** An icon to display on the left of the menu item. */
  icon?: ReactNode
  /**
   * The content of the menu item.
   */
  label?: string
  /** The event handler to call when the menu item is clicked. */
  onClick?: ComponentProps<typeof DropdownMenuItem>['onSelect']
}

export interface DropdownItemGroupProps
  extends AllHTMLAttributes<HTMLDivElement> {
  /** The dropdown items to display inside of the group. */
  children: ReactNode
  /** The label of the dropdown items group. */
  label: string
}

export interface DropdownRadioGroupProps extends RxDropdownRadioGroupProps {
  /** The radio buttons to display inside of the radio group. */
  children: ReactNode
  /**
   * The uncontrolled value of the radio group (i.e. the value of the default
   * selected radio button).
   */
  defaultValue?: string
  /**
   * Prevents the user from interacting with any of the radio button in the
   * radio group.
   */
  disabled?: boolean
  /**
   * Event handler called when the value of the radio group (i.e. the selected
   * radio button) changes.
   */
  onValueChange?: (value: string) => void
  /**
   * The controlled value of the radio group (i.e. the value of the selected
   * radio button).
   *
   * Must be used in conjunction with `onValueChange`.
   */
  value?: string
}

export interface DropdownRadioItemProps extends RxDropdownRadioItemProps {
  /** Prevents the user from interacting with the radio button. */
  disabled?: boolean
  /**
   * A unique HTML id for the radio button.
   *
   * This allows to link the radio button with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the radio button. */
  label: string
  /** The value submitted in the submitted form. */
  value: string
}

export type DropdownItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>
