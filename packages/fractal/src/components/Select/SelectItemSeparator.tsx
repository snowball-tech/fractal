import * as RxSelect from '@radix-ui/react-select'
import { cx } from '@snowball-tech/fractal-panda/css'
import { selectItemSeparator } from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import { SelectItemSeparatorProps } from './Select.types'

/**
 * `SelectItemGroup` component is used to display `SelectItem` grouped under a
 * common label with nice formatting.
 */
export default function SelectItemGroup({
  ...props
}: SelectItemSeparatorProps) {
  const itemSeparatorClassNames = cx(selectItemSeparator(), props.className)

  return (
    <RxSelect.Separator
      className={itemSeparatorClassNames}
      {...omit(['className'], props)}
    />
  )
}
