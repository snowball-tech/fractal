import * as RxSelect from '@radix-ui/react-select'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  selectItemGroup,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import type { SelectItemGroupProps } from './Select.types'

/**
 * `SelectItemGroup` component is used to group `SelectItem` components inside
 * of the dropdown of a `Select` component.
 */
export const SelectItemGroup = ({
  children: items,
  label,
  ...props
}: SelectItemGroupProps) => {
  const itemGroupClassNames = cx(
    typography({ variant: 'body-1' }),
    selectItemGroup(),
    props.className,
  )

  return (
    <RxSelect.Group
      className={itemGroupClassNames}
      {...omit(['className'], props)}
    >
      <RxSelect.Label>{label}</RxSelect.Label>

      {items}
    </RxSelect.Group>
  )
}
SelectItemGroup.displayName = 'SelectItemGroup'

export default SelectItemGroup
