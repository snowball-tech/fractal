import * as RxRadio from '@radix-ui/react-radio-group'
import { cx } from '@snowball-tech/fractal-panda/css'
import { inputRadioGroup } from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useId } from 'react'

import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT } from './InputRadio.constants'
import { GROUP_NAME } from './InputRadio.recipe'
import type { InputRadioGroupProps } from './InputRadio.types'
import { InputRadioVariantContext } from './InputRadioVariantContext'

/**
 * `InputRadioGroup` component is used to group multiple `InputRadio` components
 * together to have the "only one selected" behavior.
 */
export const InputRadioGroup = ({
  children: radioButtons,
  defaultValue,
  disabled = false,
  fullWidth = false,
  name,
  onValueChange,
  orientation = 'vertical',
  required = false,
  value,
  variant = DEFAULT_VARIANT,
  ...props
}: InputRadioGroupProps) => {
  const generatedId = useId()
  const uniqueId = (props.id ?? generatedId) || generatedId

  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}-group`,
    inputRadioGroup(),
    `variant-${variant}`,
    props.className,
    disabled ? 'disabled' : '',
    fullWidth ? 'full-width' : '',
    required ? 'required' : '',
  )

  return (
    <RxRadio.Root
      id={uniqueId}
      className={groupClassNames}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      disabled={disabled}
      name={name || uniqueId}
      {...(orientation !== undefined ? { orientation } : {})}
      required={required}
      value={value}
      {...(isFunction(onValueChange)
        ? {
            onValueChange: (newValue: string) => onValueChange(newValue),
          }
        : {})}
      {...omit(['className'], props)}
    >
      <InputRadioVariantContext.Provider value={variant}>
        {radioButtons}
      </InputRadioVariantContext.Provider>
    </RxRadio.Root>
  )
}
InputRadioGroup.displayName = 'InputRadioGroup'

export default InputRadioGroup
