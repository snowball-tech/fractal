import type { AllHTMLAttributes, ReactNode } from 'react'

import { Sizes } from './Avatar.constants'

export interface AvatarProps
  extends Omit<AllHTMLAttributes<HTMLImageElement>, 'size'> {
  /**
   * The content of the dropdown menu of the avatar (if you want one).
   *
   * For the best result, please use the `DropdownItem`, `DropdownItemGroup`,
   * `DropdownItemSeparator`, `SubDropdown` or `DropdownRadioGroup` components.
   */
  children?: ReactNode
  /** Indicates if the avatar menu dropdown is disabled. */
  disabled?: boolean
  /** The URL of the image to display as the avatar. */
  imageUrl?: string
  /** The name of the person to display as the avatar. */
  name?: string
  /** The wanted size of the loader. */
  size?: `${Sizes}`
}
