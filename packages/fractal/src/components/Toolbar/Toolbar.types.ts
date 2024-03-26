import { Root } from '@radix-ui/react-toolbar'
import type {
  AllHTMLAttributes,
  ComponentProps,
  MouseEvent,
  ReactNode,
} from 'react'

import type {
  CombinedRefs as DropdownCombinedRefs,
  DropdownItemGroupProps,
  DropdownItemProps,
  DropdownItemSeparatorProps,
  DropdownProps,
} from '@/components/Dropdown/Dropdown.types'
import { Paper } from '@/components/Paper/Paper'
import { SelectProps } from '@/components/Select'

import { Orientations } from './Toolbar.constants'

export type CombinedRefs = DropdownCombinedRefs

export interface ToolbarProps
  extends Omit<
    ComponentProps<typeof Root> & AllHTMLAttributes<HTMLDivElement>,
    'asChild' | 'dir' | 'loop' | 'size'
  > {
  /**
   * The tools to display in the toolbar.
   *
   * You can use `ToolbarToggle` inside of `ToolbarToggleGroup`, `Button`,
   * `Typography`, `Select`, ... whatever you want.
   */
  children?: ReactNode
  /** Indicates if the toolbar is disabled. */
  disabled?: boolean
  elevation?: ComponentProps<typeof Paper>['elevation']
  /** Indicates if the toolbar should take all the available width. */
  fullWidth?: boolean
  /** The orientation of the toolbar. */
  orientation?: `${Orientations}`
}

export interface ToolbarButtonProps
  extends Omit<AllHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Indicates if the toolbar button is active. */
  active?: boolean
  /**
   * The content of the toolbar button.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /** Indicates if the toolbar button is disabled. */
  disabled?: boolean
  /** An icon to display in the toolbar button. */
  icon?: ReactNode
  /**
   * Indicates if you want to only display the icon.
   * The label still is mandatory and will be used as an `aria-label` for
   * accessibility.
   */
  iconOnly?: boolean
  /** The position of the icon relative to the label. */
  iconPosition?: 'left' | 'right'
  /**
   * The content of the toolbar button.
   *
   * Use this when you only need to display text in a toolbar button.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the toolbar button.
   */
  label?: string
  /** Event handler called when the toolbar button is clicked. */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export type ToolbarDropdownProps = Omit<
  DropdownProps,
  'children' | 'condensed' | 'trigger'
> &
  Pick<ToolbarButtonProps, 'active' | 'icon' | 'iconOnly' | 'iconPosition'> & {
    /**
     * The content of the toolbar dropdown menu.
     *
     * For the best result, please use the `ToolbarDropdownItem`, `ToolbarDropdownItemGroup`,
     * `ToolbarDropdownItemSeparator` or `ToolbarSubDropdown` components.
     */
    children: ReactNode
    /**
     * The label of the toolbar dropdown menu.
     */
    label: string
  }

export type ToolbarDropdownItemProps = Omit<DropdownItemProps, 'condensed'>

export type ToolbarDropdownItemGroupProps = Omit<
  DropdownItemGroupProps,
  'condensed'
>

export type ToolbarDropdownItemSeparatorProps = DropdownItemSeparatorProps

export type ToolbarSelectProps = SelectProps

export type ToolbarSeparatorProps = AllHTMLAttributes<HTMLDivElement>
