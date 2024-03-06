import { Root, ToggleGroup, ToggleItem } from '@radix-ui/react-toolbar'
import type { AllHTMLAttributes, ComponentProps, ReactNode } from 'react'

import { Orientations, Variants } from './Toolbar.constants'

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
  /** Indicates if the toolbar should take all the available width. */
  fullWidth?: boolean
  /** The orientation of the toolbar. */
  orientation?: `${Orientations}`
  /** The variant of the toggles to use. */
  variant?: `${Variants}`
}

export interface ToolbarToggleGroupProps
  extends Omit<
    ComponentProps<typeof ToggleGroup> & AllHTMLAttributes<HTMLDivElement>,
    'asChild' | 'type'
  > {
  /** The toggles to display inside of the group. */
  children: ReactNode
  /**
   * The uncontrolled value of the toggle group (i.e. the value of the default
   * toggled toggle).
   *
   * Pass a string for a single toggle group and an array of strings for a
   * `multiple` toggle group.
   */
  defaultValue?: Array<string> | string
  /**
   * Prevents the user from interacting with any of the toggles in the toggle
   * group.
   */
  disabled?: boolean
  /**
   * The accessible label of the toggle group.
   *
   * If provided, this will be used as the `aria-label` and the `title` of the
   * toggle group.
   */
  label?: string
  /**
   * Indicates if multiple toggles can be toggled at the same time inside of the
   * toggle group.
   */
  multiple?: boolean
  /**
   * Event handler called when the value of the toggle group (i.e. the toggled
   * toggle) changes.
   */
  onValueChange?: (value: Array<string> | string) => void
  /**
   * The controlled value of the toggle group (i.e. the value of the toggled
   * toggle).
   *
   * Must be used in conjunction with `onValueChange`.
   *
   * Pass a string for a single toggle group and an array of strings for a
   * `multiple` toggle group.
   */
  value?: Array<string> | string
}

export interface ToolbarToggleProps
  extends Omit<
    ComponentProps<typeof ToggleItem> & AllHTMLAttributes<HTMLButtonElement>,
    'asChild'
  > {
  /**
   * The content of the toggle.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /** Indicates if the toggle is disabled. */
  disabled?: boolean
  /** An icon to display on the left of the toggle. */
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
   * The content of the toggle.
   *
   * Use this when you only need to display text in a toggle.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the toggle.
   */
  label?: string
  /** Event handler called when the toggle is clicked. */
  onToggle?: (toggled: boolean) => void
  /**
   * The value of the toggle.
   */
  value: string
}

export type ToolbarSeparatorProps = AllHTMLAttributes<HTMLDivElement>
