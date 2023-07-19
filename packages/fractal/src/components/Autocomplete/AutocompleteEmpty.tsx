import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  autocompleteEmpty,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import type { AutocompleteEmptyProps } from './Autocomplete.types'

/**
 * `AutocompleteLoading` component is used to display a loader in the
 * `Autocomplete` dropdown when data is loading.
 */
function AutocompleteEmpty(
  { children, ...props }: AutocompleteEmptyProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const emptyClassNames = cx(
    typography({ variant: 'body-1' }),
    autocompleteEmpty(),
    props.className,
  )

  return (
    <RxDropdownMenu.Item
      ref={ref}
      className={emptyClassNames}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      {children}
    </RxDropdownMenu.Item>
  )
}

export default forwardRef(AutocompleteEmpty)
