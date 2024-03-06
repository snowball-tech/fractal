import type { AllHTMLAttributes, ReactNode } from 'react'

import { Orientations } from './Menu.constants'

export interface MenuProps extends AllHTMLAttributes<HTMLDivElement> {
  /**
   * The content of the menu.
   *
   * For the best result, please use the `MenuItem` components.
   */
  children: ReactNode
  /** Indicates if the menu is disabled. */
  disabled?: boolean
  /** Indicates if the menu should take all the available width. */
  fullWidth?: boolean
  /** The orientations of the menu. */
  orientation?: `${Orientations}`
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
  /** Indicates where you want to open the link (if a `href` is provided). */
  target?: HTMLAnchorElement['target']
}

export interface MenuItemGroupProps extends AllHTMLAttributes<HTMLDivElement> {
  /** The menu items to display inside of the group. */
  children: ReactNode
  /** Indicates if the whole group should be disabled. */
  disabled?: boolean
  /** The label of the menu items group. */
  label: string
}

export type MenuItemSeparatorProps = AllHTMLAttributes<HTMLDivElement>
