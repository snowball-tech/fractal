import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  autocompleteItemGroup,
  selectItemGroup,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import type { AutocompleteItemGroupProps } from './Autocomplete.types'

/**
 * `AutocompleteItemGroup` component is used to display `AutocompleteItem` grouped under a
 * common label with nice formatting.
 */
export default function AutocompleteItemGroup({
  children: items,
  label,
  ...props
}: AutocompleteItemGroupProps) {
  const itemGroupClassNames = cx(
    typography({ variant: 'body-1' }),
    selectItemGroup(),
    autocompleteItemGroup(),
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
