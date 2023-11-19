import omit from 'lodash/fp/omit'
import { useId } from 'react'

import { InputRadio } from '@/components/InputRadio/InputRadio'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME } from './Dropdown.constants'
import type { DropdownRadioItemProps } from './Dropdown.types'

/**
 * `DropdownRadioItem` component is used to allow the user to make a single
 * choice amongst a group of multiple choices inside of a dropdown.
 *
 * You must use this component within the `DropdownRadioItemGroup` component
 * itself being inside of a `Dropdown` component.
 */
export const DropdownRadioItem = ({
  disabled = false,
  id,
  label,
  value,
  ...props
}: DropdownRadioItemProps) => {
  const generatedId = useId()
  const uniqueId = (id ?? generatedId) || generatedId

  return (
    <InputRadio
      id={uniqueId}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__radio`,
        'group/radio-group',
        disabled ? `${PREFIX}-${GROUP_NAME}__radio--disabled` : '',
        props.className,
      )}
      disabled={disabled}
      label={label}
      value={value}
      {...omit(['className'], props)}
    />
  )
}
DropdownRadioItem.displayName = 'DropdownRadioItem'

export default DropdownRadioItem
