import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  dropdownItem,
  dropdownItemIcon,
  selectItem,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Dropdown.recipe'
import type { DropdownItemProps } from './Dropdown.types'

/**
 * `DropdownItem` displays items in a dropdown.
 */
export const DropdownItem = ({
  disabled,
  icon,
  label,
  onClick,
  ...props
}: DropdownItemProps) => {
  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}-item`,
    dropdownItem(),
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
      {icon && <div className={dropdownItemIcon()}>{icon}</div>}

      {label}
    </RxDropdownMenu.Item>
  )
}
DropdownItem.displayName = 'DropdownItem'

export default DropdownItem
