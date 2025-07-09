'use client'

import { useContext, useId } from 'react'

import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { Variants as InputRadioVariants } from '@/components/InputRadio/InputRadio.constants'
import { InputRadioGroup } from '@/components/InputRadio/InputRadioGroup'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cn } from '@/styles/helpers'

import type { DropdownRadioGroupProps } from './Dropdown.types'

import { GROUP_NAME } from './Dropdown.constants'
import { DropdownContext } from './DropdownContext'
import { DropdownGroupContext } from './DropdownGroupContext'

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
  condensed = false,
  defaultValue,
  disabled = false,
  onValueChange,
  rainbow = true,
  value,
  ...props
}: DropdownRadioGroupProps) => {
  const generatedId = useId()
  const uniqueId = (props.id ?? generatedId) || generatedId

  const {
    condensed: dropdownCondensed,
    disabled: dropdownDisabled,
    rainbow: dropdownRainbow,
  } = useContext(DropdownContext)
  const {
    condensed: groupCondensed,
    disabled: groupDisabled,
    rainbow: groupRainbow,
  } = useContext(DropdownGroupContext)

  const isDisabled = disabled || groupDisabled || dropdownDisabled
  const isCondensed = condensed || groupCondensed || dropdownCondensed
  const isRainbow = rainbow && groupRainbow && dropdownRainbow

  return (
    <InputRadioGroup
      id={uniqueId}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__group-radio`,
        'group/dropdown-radio-group',
        isDisabled
          ? `${PREFIX}-${GROUP_NAME}__group-radio--disabled`
          : isRainbow
            ? alternatingBgColorLightClassNames
            : '',
        props.className,
      )}
      condensed={isCondensed}
      {...(defaultValue === undefined ? {} : { defaultValue })}
      {...(disabled === undefined ? {} : { disabled })}
      fullWidth
      {...(value === undefined ? {} : { value })}
      variant={InputRadioVariants.Tertiary}
      {...(isFunction(onValueChange)
        ? {
            onValueChange: (newValue: string) => onValueChange(newValue),
          }
        : {})}
      {...omit(['className'], props)}
    >
      <DropdownGroupContext.Provider
        value={{
          condensed: isCondensed,
          disabled: isDisabled,
          rainbow: isRainbow,
        }}
      >
        {dropdownRadioItems}
      </DropdownGroupContext.Provider>
    </InputRadioGroup>
  )
}
DropdownRadioGroup.displayName = 'DropdownRadioGroup'

export default DropdownRadioGroup
