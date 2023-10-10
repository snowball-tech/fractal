import * as RxDropdown from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import { dropdownRadioGroup } from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useId } from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Dropdown.recipe'
import type { DropdownRadioGroupProps } from './Dropdown.types'

/**
 * `DropdownRadioGroup` component is used to group multiple `DropdownRadioItem`
 * components together to have the "only one selected" behavior inside of a
 * `Dropdown`.
 */
export const DropdownRadioGroup = ({
  children: dropdownRadioItems,
  defaultValue,
  disabled = false,
  onValueChange,
  value,
  ...props
}: DropdownRadioGroupProps) => {
  const generatedId = useId()
  const uniqueId = (props.id ?? generatedId) || generatedId

  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}-radio-group`,
    dropdownRadioGroup(),
    props.className,
    disabled ? 'disabled' : '',
  )

  return (
    <RxDropdown.RadioGroup
      id={uniqueId}
      className={groupClassNames}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      {...(disabled !== undefined ? { disabled } : {})}
      {...(value !== undefined ? { value } : {})}
      {...(isFunction(onValueChange)
        ? {
            onValueChange: (newValue: string) => onValueChange(newValue),
          }
        : {})}
      {...omit(['className'], props)}
    >
      {dropdownRadioItems}
    </RxDropdown.RadioGroup>
  )
}
DropdownRadioGroup.displayName = 'DropdownRadioGroup'

export default DropdownRadioGroup
