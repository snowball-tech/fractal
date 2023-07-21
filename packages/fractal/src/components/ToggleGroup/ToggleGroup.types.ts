import {
  ToggleGroupItemProps as RxToggleGroupItemProps,
  ToggleGroupImplProps as RxToggleGroupProps,
} from '@radix-ui/react-toggle-group'
import type { ReactNode } from 'react'

import { Variants } from '../Toggle/Toggle.constants'

export interface ToggleGroupProps extends RxToggleGroupProps {
  /** The toggles to display inside of the toggle group. */
  children: ReactNode
  /**
   * The controlled value of the toggle group (i.e. the value of the default
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
   * Event handler called when the value of the toggle group (i.e. the toggled
   * toggle) changes.
   */
  onValueChange?: (value: Array<string> | string) => void
  /** The display orientation of the contained toggles. */
  orientation?: RxToggleGroupProps['orientation']
  /**
   * The type of toggle group.
   *
   * `single` indicates that only one toggle can be toggled at a time.
   * `multiple` indicates that multiple toggles can be toggled at a time.
   */
  type?: 'multiple' | 'single'
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
  /** Prevents the user from interacting with the toggle. */
  disabled?: boolean
  /** Indicates if the toggle should take all the available width. */
  fullWidth?: boolean
  /** The icon to display in the left of the toggle. */
  icon?: ReactNode
  /** The label of the toggle. */
  label: string
}
