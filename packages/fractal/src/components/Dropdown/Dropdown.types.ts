import {
  DropdownMenuItem,
  Root,
  type DropdownMenuContentProps as RxDropdownMenuContentProps,
} from '@radix-ui/react-dropdown-menu'
import type {
  AllHTMLAttributes,
  CSSProperties,
  ComponentProps,
  ReactNode,
} from 'react'

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
  /** Indicates if the dropdown should be opened by default. */
  defaultOpen?: boolean
  /** Indicates if the dropdown menu is disabled. */
  disabled?: boolean
  /**
   * Options to tweak the position of the dropdown.
   * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content
   *
   * You can on top of that add the `className` and `style` properties to
   * customize the style of the dropdown.
   */
  dropdown?: Partial<
    Omit<RxDropdownMenuContentProps, 'asChild' | 'onInteractOutside'> & {
      className?: string
      style?: CSSProperties
    }
  >
  /** Indicates if the dropdown should take all the available width. */
  fullWidth?: boolean
  /** Event handler called when the dropdown is closed. */
  onClose?: () => void
  /**
   * Event handler called when an interaction is made outside of the dropdown.
   */
  onInteractOutside?: RxDropdownMenuContentProps['onInteractOutside']
  /**
   * Event handler called when the dropdown is opened or closed.
   */
  onMenuOpenChange?: ComponentProps<typeof Root>['onOpenChange']
  /** Event handler called when the dropdown is opened. */
  onOpen?: () => void
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
   *  - a number: the width of the dropdown will be the number of pixels
   *    provided.
   *  - '*<number>' (a number prefixed with the '*' character): the width of
   *    the popover will be the provided fraction of the width of the trigger.
   *    For example '*0.5' will make the popover width half the width of the
   *    trigger.
   */
  width?: 'auto' | 'fit' | 'full' | 'trigger' | number | string
  /** Indicates if the trigger should have an indicator (arrow). */
  withIndicator?: boolean
}

export interface DropdownItemProps
  extends Omit<
    ComponentProps<typeof DropdownMenuItem> &
      AllHTMLAttributes<HTMLAnchorElement>,
    'asChild' | 'onClick'
  > {
  /**
   * The content of the menu item.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /** Indicates if the menu item is disabled. */
  disabled?: boolean
  /** The URL to open when clicking on the item. */
  href?: string
  /** An icon to display on the left of the menu item. */
  icon?: ReactNode
  /**
   * The content of the menu item.
   *
   * Use this when you only need to display text in a menu item.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the menu item.
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
