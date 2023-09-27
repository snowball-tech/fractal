import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  autocompleteLoading,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isBoolean from 'lodash/fp/isBoolean'
import omit from 'lodash/fp/omit'

import { Loader } from '@/components/Loader'

import type { AutocompleteLoadingProps } from './Autocomplete.types'

/**
 * `AutocompleteLoading` component is used to display a loader in the dropdown
 * of an `Autocomplete` component.
 */
export const AutocompleteLoading = ({
  children,
  icon = true,
  spin = true,
  ...props
}: AutocompleteLoadingProps) => {
  const loadingClassNames = cx(
    typography({ variant: 'body-1' }),
    autocompleteLoading(),
    props.className,
    icon ? 'with-icon' : '',
    spin && icon !== true ? 'spin' : '',
  )

  return (
    <RxDropdownMenu.Item
      className={loadingClassNames}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      {icon && isBoolean(icon) ? <Loader /> : false}
      {icon && !isBoolean(icon) ? icon : false}

      <div>{children}</div>
    </RxDropdownMenu.Item>
  )
}
AutocompleteLoading.displayName = 'AutocompleteLoading'

export default AutocompleteLoading
