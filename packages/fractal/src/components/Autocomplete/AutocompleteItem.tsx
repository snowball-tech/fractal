import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  autocompleteItem,
  selectItem,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import type { AutocompleteItemProps } from './Autocomplete.types'

/**
 * `AutocompleteItem` component is used to display choices inside of the
 * dropdown of an `Autocomplete` component.
 */
export const AutocompleteItem = ({
  children: item,
  disabled = false,
  value,
  ...props
}: AutocompleteItemProps) => {
  const itemClassNames = cx(
    typography({ variant: 'body-1' }),
    selectItem(),
    autocompleteItem(),
    props.className,
    disabled ? 'disabled' : '',
  )

  return (
    <RxDropdownMenu.Item
      className={itemClassNames}
      {...(value !== undefined ? { 'data-value': value } : {})}
      disabled={disabled}
      {...omit(['className', 'data-value'], props)}
    >
      {item}
    </RxDropdownMenu.Item>
  )
}
AutocompleteItem.displayName = 'AutocompleteItem'

export default AutocompleteItem
