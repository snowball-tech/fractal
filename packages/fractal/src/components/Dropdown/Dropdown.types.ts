import {
  DropdownMenuItem,
  Root,
  DropdownMenuContentProps as RxDropdownMenuContentProps,
} from '@radix-ui/react-dropdown-menu'
import type { AllHTMLAttributes, ComponentProps, ReactNode } from 'react'

import type {
  InputRadioGroupProps,
  InputRadioProps,
} from '@/components/InputRadio/InputRadio.types'

export type CombinedRefs = {
  container: HTMLDivElement | null
  dropdown: HTMLDivElement | null
  trigger: HTMLElement | null
}

export interface DropdownProps extends AllHTMLAttributes<HTMLDivElement> {
  /**
   * The content of the dropdown menu.
   *
   * For the best result, please use the `DropdownItem` components.
   */
  children: ReactNode
  /** Indicates if the dropdown menu is disabled. */
  disabled?: boolean
  /**
   * Options to tweak the position of the autocomplete dropdown.
   * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content
   *
   * You can on top of that add the `className` property to customize the style
   * of the dropdown.
   */
  dropdown?: Partial<
    Omit<RxDropdownMenuContentProps, 'asChild'> & { className?: string }
  >
  /** Indicates if the dropdown should take all the available width. */
  fullWidth?: boolean
  /** Event handler called when the autocomplete dropdown is closed. */
  onClose?: () => void
  /**
   * Event handler called when an interaction is made outside of the dropdown.
   */
  onInteractOutside?: RxDropdownMenuContentProps['onInteractOutside']
  /** Event handler called when a key is pressed inside of the dropdown. */
  onKeyDown?: RxDropdownMenuContentProps['onKeyDown']
  /**
   * Event handler called when the autocomplete dropdown is opened or closed.
   */
  onMenuOpenChange?: ComponentProps<typeof Root>['onOpenChange']
  /** Event handler called when the autocomplete dropdown is opened. */
  onOpen?: () => void
  /**
   * Event handler called when a click/touch is made outside of the dropdown.
   */
  onPointerDownOutside?: RxDropdownMenuContentProps['onPointerDownOutside']
  /**
   * Indicates if the dropdown menu is open.
   *
   * Can be used to force a state of the dropdown or when using a custom
   * (non-text) trigger.
   */
  open?: boolean
  /**
   * Indicates if you want to toggle the dropdown when clicking on the trigger
   * (if provided of course).
   *
   * If you pass this to `false`, you will have to handle the opening/closing of
   * the dropdown on your own.
   */
  toggleOnTriggerClick?: boolean
  /** The trigger of the dropdown menu. */
  trigger?: ReactNode
  /**
   * Indicates how to compute the width of the dropdown:
   *  - `fit`: the width of the dropdown will be computed in order to fit the
   *    content of the dropdown;
   *  - `trigger`: the width of the dropdown will be the same as the trigger;
   *  - `full`: the width of the dropdown will take as much space as available;
   *  - `auto`: the width of the dropdown will be computed using the best
   *    option;
   */
  width?: 'auto' | 'fit' | 'full' | 'trigger' | number
  /** Indicates if the trigger should have an indicator (arrow). */
  withIndicator?: boolean
}

export interface DropdownItemProps
  extends Omit<
    ComponentProps<typeof DropdownMenuItem> &
      AllHTMLAttributes<HTMLAnchorElement>,
    'asChild' | 'onClick'
  > {
  /** Indicates if the menu item is disabled. */
  disabled?: boolean
  /** The URL to open when clicking on the item. */
  href?: string
  /** An icon to display on the left of the menu item. */
  icon?: ReactNode
  /**
   * The content of the menu item.
   */
  label?: string
  /** The event handler to call when the menu item is clicked. */
  onClick?: ComponentProps<typeof DropdownMenuItem>['onSelect']
  /** Indicates where you want to open the link (if a `href` is provided). */
  target?: HTMLAnchorElement['target']
  /**
   * The value of the dropdown item.
   *
   * If none is given, then the textual content of the item will be used as
   * value.
   */
  value?: string
}

export interface DropdownItemGroupProps
  extends AllHTMLAttributes<HTMLDivElement> {
  /** The dropdown items to display inside of the group. */
  children: ReactNode
  /** Indicates if the whole group should be disabled. */
  disabled?: boolean
  /** The label of the dropdown items group. */
  label: string
}

export type DropdownRadioGroupProps = Omit<
  InputRadioGroupProps,
  'fullWidth' | 'orientation' | 'variant'
>

export type DropdownRadioItemProps = Omit<InputRadioProps, 'fullWidth'>

export type DropdownItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>
