import {
  ToggleGroupItemProps as RxToggleGroupItemProps,
  ToggleGroupImplProps as RxToggleGroupProps,
} from '@radix-ui/react-toggle-group'
import type { ReactNode } from 'react'

import { Variants } from '@/components/Toggle/Toggle.constants'

export interface ToggleGroupProps extends RxToggleGroupProps {
  /** The toggles to display inside of the toggle group. */
  children: ReactNode
  /**
   * The uncontrolled value of the toggle group (i.e. the value of the default
   * toggled toggle).
   *
   * Pass a string for a `single` typed toggle group and an array of strings for
   * a `multiple` typed toggle group.
   */
  defaultValue?: Array<string> | string
  /**
   * Prevents the user from interacting with any of the toggles in the toggle
   * group.
   */
  disabled?: boolean
  /** Indicates if the toggle group should take all the available width. */
  fullWidth?: boolean
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
  /** The display orientation of the contained toggles. */
  orientation?: RxToggleGroupProps['orientation']
  /**
   * The controlled value of the toggle group (i.e. the value of the toggled
   * toggle).
   *
   * Must be used in conjunction with `onValueChange`.
   *
   * Pass a string for a `single` typed toggle group and an array of strings for
   * a `multiple` typed toggle group.
   */
  value?: Array<string> | string
  /** The variant of the toggles to use. */
  variant?: `${Variants}`
}

export interface ToggleGroupItemProps extends RxToggleGroupItemProps {
  /**
   * The content of the toggle item.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /** Prevents the user from interacting with the toggle. */
  disabled?: boolean
  /** Indicates if the toggle should take all the available width. */
  fullWidth?: boolean
  /** The icon to display in the left of the toggle. */
  icon?: ReactNode
  /**
   * Indicates if you want to only display the icon.
   * The label still is mandatory and will be used as an `aria-label` for
   * accessibility.
   */
  iconOnly?: boolean
  /**
   * The content of the toggle item.
   *
   * Use this when you only need to display text in a toggle item.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the toggle item.
   */
  label?: string
  /** Event handler called when the toggle is clicked. */
  onToggle?: (toggled: boolean) => void
  /** The value submitted in the submitted form. */
  value: string
}
