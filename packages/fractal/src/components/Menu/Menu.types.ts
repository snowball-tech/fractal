import type { AllHTMLAttributes, CSSProperties, ReactNode } from 'react'

import type { PaperProps } from '@/components/Paper/Paper.types'
import type { PopoverProps } from '@/components/Popover/Popover.types'

import { Orientations } from './Menu.constants'

export type CombinedRefs = {
  container: HTMLDivElement | null
  menu: HTMLDivElement | null
}

export type SubMenuCombinedRefs = {
  content: HTMLDivElement | null
  trigger: HTMLElement | null
}

export interface MenuProps extends AllHTMLAttributes<HTMLDivElement> {
  /**
   * The content of the menu.
   *
   * For the best result, please use the `MenuItem`, `MenuItemGroup`,
   * `MenuItemSeparator` or `SubMenu`.
   */
  children: ReactNode
  /**
   * Indicates if the menu should be condensed (less spacing in menu and items).
   */
  condensed?: boolean
  /** Indicates if the menu is disabled. */
  disabled?: boolean
  /**
   * The elevation level of the menu.
   *
   * 1 (bordered) is a non elevated bordered block
   * 2 (elevated) is a lightly raised (small shadow) bordered block
   * 3 (higher) is a raised bordered block
   */
  elevation?: PaperProps['elevation']
  /**
   * Indicates that the menu is embedded somewhere and that you would like to
   * get rid of the default styling (background, border, elevation, ...).
   */
  embedded?: boolean
  /** Indicates if the menu should take all the available width. */
  fullWidth?: boolean
  /**
   * Options to tweak the menu.
   *
   * You can add the `className` and `style` properties to customize the style
   * of the menu itself.
   */
  menu?: {
    className?: string
    style?: CSSProperties
  }
  /** The orientations of the menu. */
  orientation?: `${Orientations}`
  /**
   * Indicates if the menu items are displayed in "hover the rainbow" mode.
   */
  rainbow?: boolean
}

export interface MenuItemProps extends AllHTMLAttributes<HTMLDivElement> {
  /** Indicates if the menu item is active. */
  active?: boolean
  /**
   * The content of the menu item.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /**
   * Indicates if the menu item should be condensed (less spacing in item).
   *
   * If you pass the `condensed` prop to the `Menu`, `MenuItemGroup` or
   * `SubMenu` component, you don't need to pass it to each `MenuItem`
   * component, they will inherit it automatically.
   */
  condensed?: boolean
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
  /**
   * Indicates if the menu item is displayed in "hover the rainbow" mode.
   */
  rainbow?: boolean
  /** Indicates where you want to open the link (if a `href` is provided). */
  target?: HTMLAnchorElement['target']
  /**
   * Event handler called when the menu item is activated (either with the mouse
   * by a click or with the keyboard by pressing enter or space).
   */
  onActivate?: () => void
}

export interface MenuItemGroupProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The menu items to display inside of the group. */
  children: ReactNode
  /** The label of the menu items group. */
  label: string
  /**
   * Indicates if the menu item group should be condensed (less spacing in group
   * and items).
   *
   * If you pass the `condensed` prop to the `Menu` or `SubMenu` component, you
   * don't need to pass it to each `MenuItemGroup` component, they will inherit
   * it automatically.
   */
  condensed?: boolean
  /** Indicates if the whole group should be disabled. */
  disabled?: boolean
  /**
   * Indicates if the menu item group is displayed in "hover the rainbow" mode.
   */
  rainbow?: boolean
}

export type MenuItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>

export interface SubMenuProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'content' | 'popover'> {
  /**
   * The content of the sub-menu.
   *
   * For the best result, please use the `MenuItem`, `MenuItemGroup`,
   * `MenuItemSeparator` or `SubMenu`.
   */
  children: ReactNode
  /** Indicates if the sub-menu (trigger/label) is active. */
  active?: boolean
  /**
   * Indicates where to align the sub-menu content relative to the trigger
   * (label).
   */
  align?: PopoverProps['align']
  /**
   * Indicates if the sub-menu should be condensed (less spacing in sub-menu
   * trigger/label).
   *
   * If you pass the `condensed` prop to the `Menu` or `MenuItemGroup`
   * component, you don't need to pass it to each `SubMenu` component, they will
   * inherit it automatically.
   */
  condensed?: boolean
  /**
   * Indicates if the sub-menu items should be condensed (less spacing in
   * sub-menu items).
   */
  condensedItems?: boolean
  /** Indicates if the sub-menu should be opened by default. */
  defaultOpen?: boolean
  /** Indicates if the sub-menu is disabled. */
  disabled?: boolean
  /**
   * The elevation level of the sub-menu.
   *
   * 1 (bordered) is a non elevated bordered block
   * 2 (elevated) is a lightly raised (small shadow) bordered block
   * 3 (higher) is a raised bordered block
   */
  elevation?: PaperProps['elevation']
  /** An icon to display on the left of the sub-menu label. */
  icon?: ReactNode
  /**
   * Indicates if the sub-menu is open.
   *
   * Can be used to force a state of the sub-menu or when using a custom
   * (non-text) trigger (label).
   */
  open?: boolean
  /**
   * Indicates if you want the sub-menu to be in a popover but in a simple div
   * instead.
   *
   * There are some usecases (e.g. blocknotejs.org) where the focus trap of the
   * popover from RadixUI is causing some issue.
   * With this option you can fallback to a simpler "hidden div + absolute
   * positioning" trick to display the sub-menu.
   */
  popover?: boolean
  /**
   * Options to tweak the sub-menu popup, trigger and content.
   *
   * You can use the `className` and `style` properties to customize the style
   * of the sub-menu popup, trigger (element and wrapper) and content (element,
   * wrapper and positionner (in non popover mode)).
   */
  popup?: {
    className?: string
    content?: {
      className?: string
      positionner?: {
        className?: string
        style?: CSSProperties
      }
      style?: CSSProperties
      wrapper?: {
        className?: string
        style?: CSSProperties
      }
    }
    style?: CSSProperties
    trigger?: {
      className?: string
      style?: CSSProperties
      wrapper?: {
        className?: string
        style?: CSSProperties
      }
    }
  }
  /**
   * Indicates if the sub-menu items are displayed in "hover the rainbow" mode.
   */
  rainbow?: boolean
  /**
   * The preferred side of the trigger (label) to render the popover.
   *
   * If no value is given, the popover will be rendered on the right side of the
   * trigger (label) on a vertical menu and on the bottom side of the trigger
   * (label) on a horizontal menu.
   */
  side?: PopoverProps['side']
  /**
   * Indicates if we want to trigger the sub-menu display when hovering the
   * trigger (label).
   */
  triggerOnHover?: boolean
  /**
   * Indicates if the sub-menu trigger (label) should have an indicator (right
   * chevron on the right of the label).
   */
  withIndicator?: boolean
  /** Indicates if the sub-menu should have a scroll integrated. */
  withScroll?: boolean
  /** Event handler called when the sub-menu is closed. */
  onClose?: () => void
  /**
   * Event handler called when an interaction is made outside of the sub-menu.
   */
  onInteractOutside?: PopoverProps['onInteractOutside']
  /** Event handler called when the submenu is opened. */
  onOpen?: () => void
  /**
   * Event handler called when the sub-menu is opened or closed.
   */
  onSubMenuOpenChange?: PopoverProps['onOpenChange']
}
