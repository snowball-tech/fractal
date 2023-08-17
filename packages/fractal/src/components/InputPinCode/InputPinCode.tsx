import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import { Label as RxLabel } from '@radix-ui/react-label'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  inputPinCodeContainer,
  inputPinCodeDescription,
  inputPinCodeField,
  inputPinCodeFields,
  inputPinCodeLabel,
  inputPinCodeMessage,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isInteger from 'lodash/fp/isInteger'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'
import range from 'lodash/fp/range'
import uniqueId from 'lodash/fp/uniqueId'
import { type ChangeEvent, type FocusEvent, type KeyboardEvent } from 'react'

import { InputText } from '@/components/InputText'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './InputPinCode.recipe'
import type { InputPinCodeProps } from './InputPinCode.types'

/**
 * `InputPinCode` component is used to allow the user to a X digit(s) pin code
 * (one digit per field)
 */
export const InputPinCode = ({
  autoFocus = false,
  defaultValue,
  description,
  disabled = false,
  error,
  id = uniqueId('fractal-input-pincode-'),
  label,
  length = 4,
  name,
  onBlur,
  onChange,
  onFieldChange,
  onFocus,
  onKeyDown,
  placeholders,
  readOnly = false,
  required = false,
  success,
  value,
  ...props
}: InputPinCodeProps) => {
  let skipFocusChange = false

  const hasErrorMessage = !isEmpty(error)
  const hasSuccessMessage = !isEmpty(success)

  const isInError = hasErrorMessage
  const isSuccessful = hasSuccessMessage && !isInError

  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    inputPinCodeContainer(),
    props.className,
    disabled ? 'disabled' : '',
    isInError ? 'error' : '',
    readOnly ? 'readonly' : '',
    required ? 'required' : '',
    isSuccessful ? 'success' : '',
  )

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    newValue: string,
    index: number,
  ) => {
    const newValueAsInt = parseInt(newValue, 10)

    if (!isInteger(newValueAsInt) || newValueAsInt < 0 || newValueAsInt > 9) {
      return
    }

    const oldCode = value || defaultValue || ''
    const newCode =
      oldCode.substring(0, index) + newValue + oldCode.substring(index + 1)

    if (isFunction(onChange)) {
      onChange(event, newCode)
    }

    if (isFunction(onFieldChange)) {
      onFieldChange(event, index, newValueAsInt)
    }

    const input = event.target
    if (input) {
      input.select()
    }

    if (skipFocusChange) {
      skipFocusChange = false

      return
    }

    if (index < length - 1) {
      const nextIndex = Math.min(newCode.length, index + 1)
      const nextInput = document.getElementById(
        `${id}-${nextIndex}`,
      ) as HTMLInputElement
      if (nextInput) {
        nextInput.focus()
      }
    } else if (input) {
      input.blur()
    }
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>, index: number) => {
    if (isFunction(onBlur)) {
      onBlur(event, index)
    }
  }

  const handleFocus = (event: FocusEvent<HTMLInputElement>, index: number) => {
    if (isFunction(onFocus)) {
      onFocus(event, index)
    }

    if (event.target) {
      event.target.select()
    }
  }

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (isFunction(onKeyDown)) {
      onKeyDown(event, index)
    }

    switch (event.key) {
      case 'ArrowLeft':
        if (index > 0) {
          const previousInput = document.getElementById(
            `${id}-${index - 1}`,
          ) as HTMLInputElement
          if (previousInput) {
            previousInput.focus()
          }
        }
        event.preventDefault()
        break

      case 'ArrowRight':
        if (index < length - 1) {
          const nextInput = document.getElementById(
            `${id}-${index + 1}`,
          ) as HTMLInputElement
          if (nextInput) {
            nextInput.focus()
          }
        }
        event.preventDefault()
        break

      case 'ArrowUp':
      case 'ArrowDown':
        skipFocusChange = true
        break

      default:
        break
    }
  }

  return (
    <div className={groupClassNames}>
      {!isEmpty(label) ? (
        <RxLabel
          className={cx(typography({ variant: 'body-1' }), inputPinCodeLabel())}
          htmlFor={`${id}-0`}
        >
          {label}
        </RxLabel>
      ) : (
        false
      )}

      <div className={cx('fields', inputPinCodeFields())}>
        {range(0, length).map((index) => (
          <InputText
            id={`${id}-${index}`}
            key={index}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus && index === 0}
            className={inputPinCodeField()}
            {...(isString(defaultValue)
              ? {
                  defaultValue: !isInteger(
                    parseInt(defaultValue[index] ?? '', 10),
                  )
                    ? ''
                    : defaultValue[index],
                }
              : {})}
            disabled={disabled}
            error={hasErrorMessage}
            max={9}
            maxLength={1}
            min={0}
            name={`${name || id}-${index}`}
            placeholder={placeholders?.[index] ?? placeholders?.[0] ?? ''}
            readOnly={readOnly}
            required={required}
            size={1}
            success={isSuccessful}
            suffix={
              // eslint-disable-next-line no-nested-ternary
              index === length - 1 ? (
                // eslint-disable-next-line no-nested-ternary
                isInError ? (
                  <ExclamationCircleIcon />
                ) : isSuccessful ? (
                  <CheckCircleIcon />
                ) : undefined
              ) : undefined
            }
            type="number"
            {...(isString(value)
              ? {
                  value: !isInteger(parseInt(value[index] ?? '', 10))
                    ? ''
                    : value[index],
                }
              : {})}
            onBlur={(event) => handleBlur(event, index)}
            onChange={(event, newDigit) => handleChange(event, newDigit, index)}
            onFocus={(event) => handleFocus(event, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            {...omit(['className'], props)}
          />
        ))}
      </div>

      {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage ? (
        <div
          className={cx(
            typography({ variant: 'caption-median' }),
            inputPinCodeDescription(),
          )}
        >
          {description}
        </div>
      ) : (
        false
      )}

      {hasErrorMessage || hasSuccessMessage ? (
        <div
          className={cx(
            typography({ variant: 'caption-median' }),
            inputPinCodeMessage(),
          )}
        >
          {isInError ? error : success}
        </div>
      ) : (
        false
      )}
    </div>
  )
}
InputPinCode.displayName = 'InputPinCode'

export default InputPinCode
