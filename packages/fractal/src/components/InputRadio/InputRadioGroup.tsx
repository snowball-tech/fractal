import * as RxRadio from '@radix-ui/react-radio-group'
import { cx } from '@snowball-tech/fractal-panda/css'
import { inputRadioGroup } from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import uniqueId from 'lodash/fp/uniqueId'

import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT } from './InputRadio.constants'
import { GROUP_NAME } from './InputRadio.recipe'
import type { InputRadioGroupProps } from './InputRadio.types'
import { InputRadioVariantContext } from './InputRadioVariantContext'

/**
 * `InputRadioGroup` component is used to group multiple `InputRadio` together
 * to have the "only one selected" behavior.
 */
export default function InputRadioGroup({
  children: radioButtons,
  defaultValue,
  dir,
  disabled = false,
  fullWidth = false,
  name = uniqueId('fractal-input-radio-group-'),
  onValueChange,
  orientation = 'vertical',
  required = false,
  value,
  variant = DEFAULT_VARIANT,
  ...props
}: InputRadioGroupProps) {
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
      className={groupClassNames}
      {...(dir !== undefined ? { dir } : {})}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      disabled={disabled}
      name={name}
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
