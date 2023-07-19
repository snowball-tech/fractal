import * as RxSelect from '@radix-ui/react-select'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  autocompleteItemSeparator,
  selectItemSeparator,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import { AutocompleteItemSeparatorProps } from './Autocomplete.types'

/**
 * `SelectItemGroup` component is used to display `SelectItem` grouped under a
 * common label with nice formatting.
 */
export default function AutocompleteItemSeparator({
  ...props
}: AutocompleteItemSeparatorProps) {
  const itemSeparatorClassNames = cx(
    selectItemSeparator(),
    autocompleteItemSeparator(),
    props.className,
  )

  return (
    <RxSelect.Separator
      className={itemSeparatorClassNames}
      {...omit(['className'], props)}
    />
  )
}
