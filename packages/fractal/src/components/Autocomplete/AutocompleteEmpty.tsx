import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  autocompleteEmpty,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import type { AutocompleteEmptyProps } from './Autocomplete.types'

/**
 * `AutocompleteEmpty` component is used to display an empty state inside of the
 * dropdown of an `Autocomplete` component.
 */
export const AutocompleteEmpty = ({
  children,
  ...props
}: AutocompleteEmptyProps) => {
  const emptyClassNames = cx(
    typography({ variant: 'body-1' }),
    autocompleteEmpty(),
    props.className,
  )

  return (
    <RxDropdownMenu.Item
      className={emptyClassNames}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      {children}
    </RxDropdownMenu.Item>
  )
}
AutocompleteEmpty.displayName = 'AutocompleteEmpty'

export default AutocompleteEmpty
