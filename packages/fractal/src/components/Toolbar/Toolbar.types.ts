import { Root } from '@radix-ui/react-toolbar'

import type { AllHTMLAttributes, ComponentProps, ReactNode } from 'react'

import type { ButtonProps } from '@/components/Button/Button.types'
import type {
  CombinedRefs as DropdownCombinedRefs,
  DropdownItemGroupProps,
  DropdownItemProps,
  DropdownItemSeparatorProps,
  DropdownProps,
} from '@/components/Dropdown/Dropdown.types'
import type { PaperProps } from '@/components/Paper/Paper.types'
import type { SelectProps } from '@/components/Select/Select.types'

import { Orientations } from './Toolbar.constants'

export type CombinedRefs = DropdownCombinedRefs

export interface ToolbarProps
  extends Omit<
    AllHTMLAttributes<HTMLDivElement> & ComponentProps<typeof Root>,
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
  elevation?: PaperProps['elevation']
  /** Indicates if the toolbar should take all the available width. */
  fullWidth?: boolean
  /** The orientation of the toolbar. */
  orientation?: `${Orientations}`
}

export type ToolbarButtonProps = {
  /** Indicates if the toolbar button is active. */
  active?: boolean
} & Omit<ButtonProps, 'truncate' | 'variant' | 'wrap'>

export type ToolbarDropdownProps = {
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
  label: ReactNode
} & Omit<
  DropdownProps,
  | 'children'
  | 'condensed'
  | 'label'
  | 'toggleOnTriggerClick'
  | 'trigger'
  | 'triggerAsButton'
> &
  Pick<ToolbarButtonProps, 'active' | 'icon' | 'iconOnly' | 'iconPosition'>

export type ToolbarDropdownItemProps = Omit<DropdownItemProps, 'condensed'>

export type ToolbarDropdownItemGroupProps = Omit<
  DropdownItemGroupProps,
  'condensed'
>

export type ToolbarDropdownItemSeparatorProps = DropdownItemSeparatorProps

export type ToolbarSelectProps = SelectProps

export type ToolbarSeparatorProps = AllHTMLAttributes<HTMLDivElement>
