'use client'

import omit from 'lodash/fp/omit'
import { useContext, useId } from 'react'

import { InputRadio } from '@/components/InputRadio/InputRadio'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME } from './Dropdown.constants'
import type { DropdownRadioItemProps } from './Dropdown.types'
import { DropdownContext } from './DropdownContext'
import { DropdownGroupContext } from './DropdownGroupContext'

/**
 * `DropdownRadioItem` component is used to allow the user to make a single
 * choice amongst a group of multiple choices inside of a dropdown.
 *
 * You must use this component within the `DropdownRadioItemGroup` component
 * itself being inside of a `Dropdown` component.
 *
 * See
 * https://fractal.snowball.xyz/?path=/docs/molecules-input-inputradio--documentation
 * for more information.
 */
export const DropdownRadioItem = ({
  condensed = false,
  disabled = false,
  id,
  label,
  value,
  ...props
}: DropdownRadioItemProps) => {
  const generatedId = useId()
  const uniqueId = (id ?? generatedId) || generatedId

  const { condensed: dropdownCondensed, disabled: dropdownDisabled } =
    useContext(DropdownContext)
  const { condensed: groupCondensed, disabled: groupDisabled } =
    useContext(DropdownGroupContext)

  const isDisabled = disabled || groupDisabled || dropdownDisabled
  const isCondensed = condensed || groupCondensed || dropdownCondensed

  return (
    <InputRadio
      id={uniqueId}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__radio`,
        'alternatee',
        'group/radio-group',
        isDisabled ? `${PREFIX}-${GROUP_NAME}__radio--disabled` : '',
        props.className,
      )}
      condensed={isCondensed}
      disabled={disabled}
      fullWidth
      label={label}
      value={value}
      {...omit(['className'], props)}
    />
  )
}
DropdownRadioItem.displayName = 'DropdownRadioItem'

export default DropdownRadioItem
