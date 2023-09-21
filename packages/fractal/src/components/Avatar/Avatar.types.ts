import { DropdownMenuItem, Root } from '@radix-ui/react-dropdown-menu'
import type { AllHTMLAttributes, ComponentProps, ReactNode } from 'react'

import { Sizes } from './Avatar.constants'

export interface AvatarProps
  extends Omit<AllHTMLAttributes<HTMLImageElement>, 'size'> {
  /**
   * The content of the dropdown menu of the avatar (if you want one).
   *
   * For the best result, pease only pass `AvatarMenuItem` components.
   */
  children?: ReactNode
  /** Indicates if the avatar menu dropdown is disabled. */
  disabled?: boolean
  /** The URL of the image to display as the avatar. */
  imageUrl?: string
  /** The name of the person to display as the avatar. */
  name?: string
  onMenuOpenChange?: ComponentProps<typeof Root>['onOpenChange']
  /** The wanted size of the loader. */
  size?: `${Sizes}`
}

export interface AvatarMenuItemProps
  extends Omit<
    ComponentProps<typeof DropdownMenuItem>,
    'asChild' | 'onClick' | 'onSelect'
  > {
  /** Indicates if the menu item is disabled. */
  disabled?: boolean
  /** An icon to display on the left of the label of the menu item. */
  icon?: ReactNode
  /** The label of the menu item. */
  label?: string
  /** The event handler to call when the menu item is clicked. */
  onClick?: ComponentProps<typeof DropdownMenuItem>['onSelect']
}
