import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  autocompleteItem,
  selectItem,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import type { AutocompleteItemProps } from './Autocomplete.types'

/**
 * `AutocompleteItem` component is used to display choices of an `Autocomplete`
 * component.
 */
function AutocompleteItem(
  { children: item, disabled = false, value, ...props }: AutocompleteItemProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const itemClassNames = cx(
    typography({ variant: 'body-1' }),
    selectItem(),
    autocompleteItem(),
    props.className,
    disabled ? 'disabled' : '',
  )

  return (
    <RxDropdownMenu.Item
      ref={ref}
      className={itemClassNames}
      {...(value !== undefined ? { 'data-value': value } : {})}
      disabled={disabled}
      {...omit(['className', 'data-value'], props)}
    >
      {item}
    </RxDropdownMenu.Item>
  )
}

export default forwardRef(AutocompleteItem)
