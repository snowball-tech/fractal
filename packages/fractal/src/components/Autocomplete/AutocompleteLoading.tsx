import {
  UilHourglass as LoadingIcon,
  UilSpinner as SpinnerIcon,
} from '@iconscout/react-unicons'
import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  autocompleteLoading,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isBoolean from 'lodash/fp/isBoolean'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import type { AutocompleteLoadingProps } from './Autocomplete.types'

/**
 * `AutocompleteLoading` component is used to display a loader in the
 * `Autocomplete` dropdown when data is loading.
 */
function AutocompleteLoading(
  { children, icon = true, spin = true, ...props }: AutocompleteLoadingProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const loadingClassNames = cx(
    typography({ variant: 'body-1' }),
    autocompleteLoading(),
    props.className,
    icon ? 'with-icon' : '',
    spin ? 'spin' : '',
  )

  return (
    <RxDropdownMenu.Item
      ref={ref}
      className={loadingClassNames}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {icon && isBoolean(icon) ? (
        spin ? (
          <SpinnerIcon />
        ) : (
          <LoadingIcon />
        )
      ) : (
        false
      )}

      {icon && !isBoolean(icon) ? icon : false}

      {children}
    </RxDropdownMenu.Item>
  )
}

export default forwardRef(AutocompleteLoading)
