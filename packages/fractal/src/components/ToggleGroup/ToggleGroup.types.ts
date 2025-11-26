import {
  ToggleGroupItemProps as RxToggleGroupItemProps,
  ToggleGroupMultipleProps as RxToggleGroupProps,
} from '@radix-ui/react-toggle-group'

import type { ReactNode } from 'react'

import { Variants } from '../Toggle/Toggle.constants'

export interface ToggleGroupProps
  extends Omit<RxToggleGroupProps, 'defaultValue' | 'type' | 'value'> {
  /** The toggles to display inside of the toggle group. */
  children: ReactNode
  /**
   * The uncontrolled value of the toggle group (i.e. the value of the default
   * toggled toggle).
   *
   * Pass a string for a `single` typed toggle group and an array of strings for
   * a `multiple` typed toggle group.
   */
  defaultValue?: string | Array<string>
  /**
   * Prevents the user from interacting with any of the toggles in the toggle
   * group.
   */
  disabled?: boolean
  /** Indicates if the toggle group should take all the available width. */
  fullWidth?: boolean
  /** Indicates if the toggles should be grouped. */
  grouped?: boolean
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
  value?: string | Array<string>
  /** The variant of the toggles to use. */
  variant?: `${Variants}`
  /**
   * Event handler called when the value of the toggle group (i.e. the toggled
   * toggle) changes.
   */
  onValueChange?: (value: string | Array<string>) => void
}

export interface ToggleGroupItemProps
  extends Omit<RxToggleGroupItemProps, 'onToggle'> {
  /** The value submitted in the submitted form. */
  value: string
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
   * The label/content of the toggle item.
   *
   * If this is a `ReactNode`, then its "text only" content will be used as the
   * accessible label.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the toggle that will be used as the `aria-label`
   * and `title` for the toggle.
   * Otherwise, the "text only" content of the children will be used as the
   * accessible label.
   */
  label?: ReactNode
  /**
   * The element to use to display the label.
   *
   * If none is given, it will be automatically determined based on the type of
   * the label. A `string` label will be displayed as a `label`, anything else
   * will be displayed as a `div`.
   *
   * This is useful for markup validity reasons, but note that you will lose the
   * ability to toggle the toggle by clicking on the label as well as the
   * accessibility improvements.
   */
  labelElement?: keyof HTMLElementTagNameMap
  /** Event handler called when the toggle is clicked. */
  onToggle?: (toggled: boolean) => void
}
