import * as RxRadio from '@radix-ui/react-radio-group'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useId } from 'react'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { DEFAULT_VARIANT, GROUP_NAME } from './InputRadio.constants'
import type { InputRadioGroupProps } from './InputRadio.types'
import { InputRadioContext } from './InputRadioContext'

/**
 * `InputRadioGroup` component is used to group multiple `InputRadio` components
 * together to have the "only one selected" behavior.
 *
 * See https://www.radix-ui.com/primitives/docs/components/radio-group for more
 * information.
 */
export const InputRadioGroup = ({
  children,
  condensed = false,
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
      className={cn(
        `${PREFIX}-${GROUP_NAME}__group`,
        `${PREFIX}-${GROUP_NAME}__group--${variant}`,
        'flex max-w-full flex-col gap-3',
        'data-horizontal:flex-row data-horizontal:flex-wrap sm:data-horizontal:flex-nowrap',
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
      <InputRadioContext.Provider
        value={{ condensed, disabled, required, variant }}
      >
        {children}
      </InputRadioContext.Provider>
    </RxRadio.Root>
  )
}
InputRadioGroup.displayName = 'InputRadioGroup'

export default InputRadioGroup
