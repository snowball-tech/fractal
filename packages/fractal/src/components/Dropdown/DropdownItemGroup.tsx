import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  dropdownItemGroup,
  selectItemGroup,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Dropdown.recipe'
import type { DropdownItemGroupProps } from './Dropdown.types'

/**
 * `DropdownItemGroup` component is used to display `DropdownItem` grouped under
 * a common label with nice formatting.
 */
export default function DropdownItemGroup({
  children: items,
  label,
  ...props
}: DropdownItemGroupProps) {
  const itemGroupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}-group`,
    typography({ variant: 'body-1' }),
    selectItemGroup(),
    dropdownItemGroup(),
    props.className,
  )

  return (
    <RxDropdownMenu.Group
      className={itemGroupClassNames}
      {...omit(['className'], props)}
    >
      <RxDropdownMenu.Label>{label}</RxDropdownMenu.Label>

      {items}
    </RxDropdownMenu.Group>
  )
}
