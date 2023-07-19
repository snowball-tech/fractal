import * as RxSelect from '@radix-ui/react-select'
import { cx } from '@snowball-tech/fractal-panda/css'
import { selectItem, typography } from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import type { SelectItemProps } from './Select.types'

/**
 * `SelectItem` component is used to display choices of a `Select` component.
 */
function SelectItem(
  { children: item, disabled = false, value, ...props }: SelectItemProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const itemClassNames = cx(
    typography({ variant: 'body-1' }),
    selectItem(),
    props.className,
    disabled ? 'disabled' : '',
  )

  return (
    <RxSelect.Item
      ref={ref}
      className={itemClassNames}
      disabled={disabled}
      value={value}
      {...omit(['className'], props)}
    >
      <RxSelect.ItemText>{item}</RxSelect.ItemText>
      <RxSelect.ItemIndicator />
    </RxSelect.Item>
  )
}

export default forwardRef(SelectItem)
