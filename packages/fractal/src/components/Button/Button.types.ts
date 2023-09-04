import type { PressableProps } from '@ark-ui/react'
import type { AllHTMLAttributes, ReactNode } from 'react'

import { Variants } from './Button.constants'

export type PressEvent = Parameters<NonNullable<PressableProps['onPress']>>[0]

export interface ButtonProps
  extends Omit<AllHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /** Prevents the user from interacting with the button. */
  disabled?: boolean
  /** Indicates if the button should take all the available width. */
  fullWidth?: boolean
  /** The icon to display in the button. */
  icon?: ReactNode
  /**
   * Indicates if you want to only display the icon.
   * The label still is mandatory and will be used as an `aria-label` for
   * accessibility.
   */
  iconOnly?: boolean
  /** The position of the icon in the button. */
  iconPosition?: 'left' | 'right'
  /** The label of the button. */
  label: string
  /** Event handler called when the button is clicked. */
  onClick?: PressableProps['onPress']
  /**
   * Event handler called when the button is clicked for a long time (>= 500ms).
   */
  onLongClick?: PressableProps['onLongPress']
  /** The type of button. */
  type?: 'button' | 'reset' | 'submit'
  /** The variant of the button to use. */
  variant?: `${Variants}`
}
