import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  avatarMenuItem,
  avatarMenuItemIcon,
  selectItem,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Avatar.recipe'
import type { AvatarMenuItemProps } from './Avatar.types'

/**
 * `Avatar` component allow to display an avatar with an optional dropdown menu.
 */
export const AvatarMenuItem = ({
  disabled,
  icon,
  label,
  onClick,
  ...props
}: AvatarMenuItemProps) => {
  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}-menu-item`,
    avatarMenuItem(),
    selectItem(),
    typography({ variant: 'body-1' }),
    props.className,
    icon ? 'with-icon' : '',
    disabled ? 'disabled' : '',
  )

  return (
    <RxDropdownMenu.Item
      className={groupClassNames}
      {...(disabled !== undefined ? { disabled } : {})}
      {...(isFunction(onClick) ? { onSelect: onClick } : {})}
      {...omit(['className'], props)}
    >
      {icon && <div className={avatarMenuItemIcon()}>{icon}</div>}

      {label}
    </RxDropdownMenu.Item>
  )
}
AvatarMenuItem.displayName = 'AvatarMenuItem'

export default AvatarMenuItem
