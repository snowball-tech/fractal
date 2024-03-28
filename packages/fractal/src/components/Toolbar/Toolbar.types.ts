import { Root } from '@radix-ui/react-toolbar'
import type { AllHTMLAttributes, ComponentProps, ReactNode } from 'react'

import { ButtonProps } from '@/components/Button'
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

export type ToolbarButtonProps = Omit<
  ButtonProps,
  'truncate' | 'variant' | 'wrap'
> & {
  /** Indicates if the toolbar button is active. */
  active?: boolean
}

export type ToolbarDropdownProps = Omit<
  DropdownProps,
  'children' | 'condensed' | 'trigger' | 'triggerAsButton'
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
