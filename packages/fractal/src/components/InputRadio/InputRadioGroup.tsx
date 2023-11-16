import * as RxRadio from '@radix-ui/react-radio-group'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useId } from 'react'
import { twMerge } from 'tailwind-merge'

import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT, GROUP_NAME } from './InputRadio.constants'
import type { InputRadioGroupProps } from './InputRadio.types'
import { InputRadioContext } from './InputRadioContext'

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

  return (
    <RxRadio.Root
      id={uniqueId}
      className={twMerge(
        `${PREFIX}-${GROUP_NAME}__group`,
        `${PREFIX}-${GROUP_NAME}__group--${variant}`,
        'flex max-w-full flex-col gap-3',
        'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap sm:data-[orientation=horizontal]:flex-nowrap',
        disabled ? `${PREFIX}-${GROUP_NAME}__group--disabled` : '',
        fullWidth
          ? `${PREFIX}-${GROUP_NAME}__group--full-width w-full`
          : 'w-fit',
        required ? `${PREFIX}-${GROUP_NAME}__group--required` : '',
        props.className,
      )}
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
      <InputRadioContext.Provider value={{ disabled, required, variant }}>
        {radioButtons}
      </InputRadioContext.Provider>
    </RxRadio.Root>
  )
}
InputRadioGroup.displayName = 'InputRadioGroup'

export default InputRadioGroup
