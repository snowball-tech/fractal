import {
  type DropdownMenuContentProps as RxDropdownMenuContentProps,
  type DropdownMenuSubContentProps as RxDropdownMenuSubContentProps,
  DropdownMenuItem,
  Root,
  Sub,
  SubTrigger,
} from '@radix-ui/react-dropdown-menu'

import type {
  AllHTMLAttributes,
  ComponentProps,
  CSSProperties,
  ForwardedRef,
  MouseEvent,
  ReactNode,
} from 'react'

import type {
  InputRadioGroupProps,
  InputRadioProps,
} from '@/components/InputRadio/InputRadio.types'

import { Elevations } from '../Paper/Paper.constants'

export type CombinedRefs = {
  container: HTMLDivElement | null
  dropdown: HTMLDivElement | null
  trigger: HTMLElement | null
}

export type SubDropdownCombinedRefs = {
  content: HTMLDivElement | null
  trigger: HTMLElement | null
}

export interface DropdownProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * The content of the dropdown menu.
   *
   * For the best result, please use the `DropdownItem`, `DropdownItemGroup`,
   * `DropdownItemSeparator`, `SubDropdown` or `DropdownRadioGroup` components.
   */
  children: ReactNode
  /** Indicates where to align the dropdown relative to the trigger. */
  align?: RxDropdownMenuContentProps['align']
  /** Indicates if you want to display the trigger styled as an select input. */
  asSelect?: boolean
  /**
   * Indicates if the dropdown should be condensed (less spacing in dropdown and
   * items).
   */
  condensed?: boolean
  /** Indicates if the dropdown should be opened by default. */
  defaultOpen?: boolean
  /** Indicates if the dropdown menu is disabled. */
  disabled?: boolean
  /**
   * Options to tweak the dropdown.
   * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content
   *
   * You can on top of that add the `className` and `style` properties to
   * customize the style of the dropdown.
   */
  dropdown?: Partial<
    {
      className?: string
      style?: CSSProperties
    } & Omit<
      RxDropdownMenuContentProps,
      'align' | 'asChild' | 'onInteractOutside' | 'side'
    >
  >
  /**
   * The elevation level of the dropdown.
   *
   * 1 (bordered) is a non elevated bordered block
   * 2 (elevated) is a lightly raised (small shadow) bordered block
   * 3 (higher) is a raised bordered block
   */
  elevation?: `${Elevations}`
  /** Indicates if the dropdown should take all the available width. */
  fullWidth?: boolean
  /**
   * Indicates if the dropdown menu is open.
   *
   * Can be used to force a state of the dropdown or when using a custom
   * (non-text) trigger.
   */
  open?: boolean
  /** The preferred side of the trigger to render the popover. */
  side?: RxDropdownMenuContentProps['side']
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
   * Indicates if you want the trigger to be wrapped in a `button` element.
   *
   * This is useful when you provide a button as trigger yourself.
   */
  triggerAsButton?: boolean
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
   *  - '*number' (a number prefixed with the '*' character): the width of
   *    the popover will be the provided fraction of the width of the trigger.
   *    For example '*0.5' will make the popover width half the width of the
   *    trigger.
   */
  width?: number | string | 'auto' | 'fit' | 'full' | 'trigger'
  /**
   * Indicates if the trigger should have an indicator (up/down (depending on
   * the opening status of the dropdown) chevron on the right of the label).
   */
  withIndicator?: boolean
  /** Indicates if the dropdown should have a scroll integrated. */
  withScroll?: boolean
  /** The event handler triggered when the trigger is clicked. */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
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
}

export interface DropdownItemProps
  extends Omit<
    AllHTMLAttributes<HTMLAnchorElement> &
      ComponentProps<typeof DropdownMenuItem>,
    'asChild' | 'onClick' | 'onSelect'
  > {
  /** Indicates if the item should be displayed as active. */
  active?: boolean
  /**
   * The content of the item.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /**
   * Indicates if the dropdown item should be condensed (less spacing in item).
   *
   * If you pass the `condensed` prop to the `Dropdown`, `DropdownItemGroup` or
   * `SubDropdown` component, you don't need to pass it to each `DropdownItem`
   * component, they will inherit it automatically.
   */
  condensed?: boolean
  /** Indicates if the item is disabled. */
  disabled?: boolean
  /** The URL to open when clicking on the item. */
  href?: string
  /** An icon to display on the left of the item. */
  icon?: ReactNode
  /**
   * The content of the item.
   *
   * Use this when you only need to display text in a item.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the item.
   */
  label?: string
  /** Indicates where you want to open the link (if a `href` is provided). */
  target?: HTMLAnchorElement['target']
  /**
   * The value of the dropdown item.
   *
   * If none is given, then the textual content of the item will be used as
   * value.
   */
  value?: string
  /** The event handler to call when the item is clicked. */
  onClick?: ComponentProps<typeof DropdownMenuItem>['onSelect']
  onSelect?: ComponentProps<typeof DropdownMenuItem>['onSelect']
}

export interface DropdownItemGroupProps
  extends AllHTMLAttributes<HTMLDivElement> {
  /** The dropdown items to display inside of the group. */
  children: ReactNode
  /** The label of the dropdown items group. */
  label: string
  /**
   * Indicates if the dropdown item group should be condensed (less spacing in
   * group and items).
   *
   * If you pass the `condensed` prop to the `Dropdown` or `SubDropdown`
   * component, you don't need to pass it to each `DropdownItemGroup` component,
   * they will inherit it automatically.
   */
  condensed?: boolean
  /** Indicates if the whole group should be disabled. */
  disabled?: boolean
}

export interface SubDropdownProps
  extends Omit<
    AllHTMLAttributes<HTMLDivElement> & ComponentProps<typeof Sub>,
    'asChild' | 'content' | 'onClick'
  > {
  /**
   * The content of the dropdown's sub-dropdown.
   *
   * For the best result, please use the `DropdownItem`, `DropdownItemGroup`,
   * `DropdownItemSeparator`, `SubDropdown` or `DropdownRadioGroup` components.
   */
  children: ReactNode
  /**
   * Indicates if the sub-dropdown should be condensed (less spacing in
   * sub-dropdown trigger/label).
   *
   * If you pass the `condensed` prop to the `Dropdown` or `DropdownItemGroup`
   * component, you don't need to pass it to each `SubDropdown` component, they
   * will inherit it automatically.
   */
  condensed?: boolean
  /**
   * Indicates if the sub-dropdown items should be condensed (less spacing in
   * sub-dropdown items).
   */
  condensedItems?: boolean
  /**
   * Options to tweak the dropdown's sub-dropdown content.
   * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subcontent
   *
   * You can on top of that add the `className` and `style` properties to
   * customize the style of the sub-dropdown content.
   */
  content?: Partial<
    {
      className?: string
      style?: CSSProperties
    } & Omit<RxDropdownMenuSubContentProps, 'asChild' | 'onInteractOutside'>
  >
  /** Indicates if the dropdown's sub-dropdown should be opened by default. */
  defaultOpen?: boolean
  /** Indicates if the dropdown's sub-dropdown is disabled. */
  disabled?: boolean
  /** An icon to display on the left of the sub-dropdown label. */
  icon?: ReactNode
  /**
   * Indicates if the dropdown's sub-dropdown is open.
   *
   * Can be used to force a state of the dropdown's sub-dropdown or when using a
   * custom (non-text) trigger.
   */
  open?: boolean
  /**
   * Indicates if the dropdown's sub-dropdown trigger should have an
   * indicator (right chevron on the right of the label).
   */
  withIndicator?: boolean
  /** Indicates if the sub-dropdown should have a scroll integrated. */
  withScroll?: boolean
  /** The event handler to call when the sub-dropdown is clicked. */
  onClick?: ComponentProps<typeof SubTrigger>['onSelect']
  /** Event handler called when the dropdown's sub-dropdown is closed. */
  onClose?: () => void
  /**
   * Event handler called when an interaction is made outside of the dropdown's
   * sub-dropdown.
   */
  onInteractOutside?: RxDropdownMenuSubContentProps['onInteractOutside']
  /** Event handler called when the dropdown's submenu is opened. */
  onOpen?: () => void
  /**
   * Event handler called when the dropdown's sub-dropdown is opened or closed.
   */
  onSubMenuOpenChange?: ComponentProps<typeof Sub>['onOpenChange']
}

export type DropdownRadioGroupProps = {
  /**
   * Indicates if the radio group should be condensed (less spacing in radio
   * group and radio items).
   *
   * If you pass the `condensed` prop to the `Dropdown`, `DropdownItemGroup` or
   * 'SubDropdown` component, you don't need to pass it to each `RadioGroup` or
   * `RadioItem` component, they will inherit it automatically.
   */
  condensed?: boolean
  ref?: ForwardedRef<HTMLElement>
} & Omit<InputRadioGroupProps, 'fullWidth' | 'orientation' | 'variant'>

export type DropdownRadioItemProps = {
  /**
   * Indicates if the radio item should be condensed (less spacing in radio
   * item).
   *
   * If you pass the `condensed` prop to the `Dropdown`, `DropdownItemGroup`,
   * 'SubDropdown` or `DropdownRadioGroup` component, you don't need to pass it
   * to each RadioItem` component, they will inherit it automatically.
   */
  condensed?: boolean
  ref?: ForwardedRef<HTMLElement>
} & Omit<InputRadioProps, 'fullWidth'>

export type DropdownItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>
