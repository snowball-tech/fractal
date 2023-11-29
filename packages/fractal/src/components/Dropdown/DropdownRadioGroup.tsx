import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useId } from 'react'

import { Variants as InputRadioVariants } from '@/components/InputRadio/InputRadio.constants'
import { InputRadioGroup } from '@/components/InputRadio/InputRadioGroup'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Dropdown.constants'
import type { DropdownRadioGroupProps } from './Dropdown.types'

/**
 * `DropdownRadioGroup` component is used to group multiple `DropdownRadioItem`
 * components together to have the "only one selected" behavior inside of a
 * `Dropdown`.
 *
 * See
 * https://fractal.snowball.xyz/?path=/docs/molecules-input-inputradio-inputradiogroup--documentation
 * for more information.
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

  return (
    <InputRadioGroup
      id={uniqueId}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__group-radio`,
        'group/dropdown-radio-group',
        disabled
          ? `${PREFIX}-${GROUP_NAME}__group-radio--disabled`
          : alternatingBgColorLightClassNames,
        props.className,
      )}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      {...(disabled !== undefined ? { disabled } : {})}
      fullWidth
      {...(value !== undefined ? { value } : {})}
      variant={InputRadioVariants.Tertiary}
      {...(isFunction(onValueChange)
        ? {
            onValueChange: (newValue: string) => onValueChange(newValue),
          }
        : {})}
      {...omit(['className'], props)}
    >
      {dropdownRadioItems}
    </InputRadioGroup>
  )
}
DropdownRadioGroup.displayName = 'DropdownRadioGroup'

export default DropdownRadioGroup
