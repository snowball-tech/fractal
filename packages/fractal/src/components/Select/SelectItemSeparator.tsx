import * as RxSelect from '@radix-ui/react-select'
import { cx } from '@snowball-tech/fractal-panda/css'
import { selectItemSeparator } from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import { SelectItemSeparatorProps } from './Select.types'

/**
 * `SelectItemSeparator` component is used to add a visual separation inside of
 * the dropdown of a `Select` component.
 */
export const SelectItemSeparator = ({ ...props }: SelectItemSeparatorProps) => {
  const itemSeparatorClassNames = cx(selectItemSeparator(), props.className)

  return (
    <RxSelect.Separator
      className={itemSeparatorClassNames}
      {...omit(['className'], props)}
    />
  )
}
SelectItemSeparator.displayName = 'SelectItemSeparator'

export default SelectItemSeparator
