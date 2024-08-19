'use client'

import CheckCircleIcon from '@iconscout/react-unicons/icons/uil-check-circle'
import ExclamationCircleIcon from '@iconscout/react-unicons/icons/uil-exclamation-circle'
import { Label as RxLabel } from '@radix-ui/react-label'

import {
  type ChangeEvent,
  type ClipboardEvent,
  type FocusEvent,
  type KeyboardEvent,
  useId,
  useRef,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isInteger from 'lodash/fp/isInteger'
import isNumber from 'lodash/fp/isNumber'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'
import range from 'lodash/fp/range'

import { InputText } from '@/components/InputText'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { InputPinCodeProps } from './InputPinCode.types'

import { GROUP_NAME } from './InputPinCode.constants'

/**
 * `InputPinCode` component is used to allow the user to a X digit(s) pin code
 * (one digit per field).
 *
 * See
 * https://fractal.snowball.xyz/?path=/docs/molecules-input-inputtext--documentation
 * for more information.
 */
export const InputPinCode = ({
  autoFocus = false,
  defaultValue,
  description,
  disabled = false,
  error,
  id,
  label,
  length = 4,
  name,
  onBlur,
  onChange,
  onComplete,
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
  const generatedId = useId()
  const uniqueId = (id ?? generatedId) || generatedId

  const skipFocusChange = useRef(false)

  const hasErrorMessage = !isEmpty(error)
  const hasSuccessMessage = !isEmpty(success)

  const isInError = hasErrorMessage
  const isSuccessful = hasSuccessMessage && !isInError

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    newValue: string,
    index: number,
  ) => {
    const newValueAsInt = Number.parseInt(newValue, 10)
    let digit = newValue

    if (
      !isNumber(newValueAsInt) ||
      !isInteger(newValueAsInt) ||
      newValueAsInt < 0 ||
      newValueAsInt > 9
    ) {
      digit = ''
    }

    const oldCode = value || defaultValue || ''
    const newCode = `${oldCode.slice(0, Math.max(0, index))}${digit}${oldCode.slice(
      Math.max(0, index + 1),
    )}`

    if (isFunction(onChange)) {
      onChange(event, newCode)
    }

    if (isFunction(onFieldChange)) {
      onFieldChange(event, index, digit)
    }

    const input = event.target
    if (input) {
      input.select()
    }

    if (skipFocusChange.current) {
      skipFocusChange.current = false

      return
    }

    if (index < length - 1) {
      const nextIndex = Math.min(newCode.length, index + 1)
      const nextInput = document.querySelector(
        `#${CSS.escape(uniqueId)}-${nextIndex}`,
      ) as HTMLInputElement
      if (nextInput) {
        nextInput.focus()
      }
    } else {
      if (isFunction(onComplete)) {
        onComplete(newCode)
      }
      if (!isEmpty(digit) && input) {
        input.blur()
      }
    }
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>, index: number) => {
    if (isFunction(onBlur)) {
      onBlur(event, index)
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
      case 'ArrowLeft': {
        if (index > 0) {
          const previousInput = document.querySelector(
            `#${CSS.escape(uniqueId)}-${index - 1}`,
          ) as HTMLInputElement
          if (previousInput) {
            previousInput.focus()
          }
        }
        event.preventDefault()
        break
      }

      case 'Backspace': {
        if (!isEmpty(event.currentTarget.value)) {
          handleChange(
            event as unknown as ChangeEvent<HTMLInputElement>,
            '',
            index,
          )

          return
        }

        if (index > 0) {
          const previousInput = document.querySelector(
            `#${CSS.escape(uniqueId)}-${index - 1}`,
          ) as HTMLInputElement
          if (previousInput) {
            previousInput.focus()
          }
        }
        event.preventDefault()
        break
      }

      case 'ArrowRight': {
        if (index < length - 1) {
          const nextInput = document.querySelector(
            `#${CSS.escape(uniqueId)}-${index + 1}`,
          ) as HTMLInputElement
          if (nextInput) {
            nextInput.focus()
          }
        }
        event.preventDefault()
        break
      }

      case 'ArrowUp':
      case 'ArrowDown': {
        skipFocusChange.current = true
        break
      }

      default: {
        break
      }
    }
  }

  const handlePaste = (
    event: ClipboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (isFunction(props.onPaste)) {
      props.onPaste(event)
    }

    const pastedValue = event.clipboardData.getData('text/plain')
    if (isEmpty(pastedValue)) {
      return
    }
    const parsedPastedValue = Number.parseInt(pastedValue, 10)
    if (
      !isNumber(parsedPastedValue) ||
      !isInteger(parsedPastedValue) ||
      `${parsedPastedValue}`.padStart(pastedValue.length, '0') !== pastedValue
    ) {
      return
    }

    const newValue = pastedValue
      .slice(0, Math.max(0, length - index))
      .padEnd(length - index - 1, '0')

    const oldCode = value || defaultValue || ''
    const newCode = `${oldCode.slice(0, Math.max(0, index))}${newValue}`

    if (isFunction(onChange)) {
      onChange(event, newCode)
    }

    if (newCode.length === length) {
      if (isFunction(onComplete)) {
        onComplete(newCode)
      }

      const input = event.target as HTMLInputElement
      if (input) {
        input.blur()
      }
    } else {
      const nextIndex = newCode.length
      const nextInput = document.querySelector(
        `#${CSS.escape(uniqueId)}-${nextIndex}`,
      ) as HTMLInputElement
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  return (
    <div
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        'flex w-full max-w-full flex-col gap-1 sm:w-fit',
        disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
        isInError ? `${PREFIX}-${GROUP_NAME}--with-error` : '',
        readOnly ? `${PREFIX}-${GROUP_NAME}--readonly` : '',
        required ? `${PREFIX}-${GROUP_NAME}--required` : '',
        isSuccessful ? `${PREFIX}-${GROUP_NAME}--with-success` : '',
        props.className,
      )}
    >
      {isEmpty(label) ? (
        false
      ) : (
        <RxLabel
          asChild
          className={cj(
            `${PREFIX}-${GROUP_NAME}__label`,
            disabled ? 'cursor-default' : 'cursor-pointer',
            required
              ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-required`
              : '',
          )}
          htmlFor={`${uniqueId}-0`}
        >
          <Typography element="label">{label}</Typography>
        </RxLabel>
      )}

      <div
        className={cj(
          `${PREFIX}-${GROUP_NAME}__fields`,
          'flex w-full gap-1 sm:w-fit',
        )}
      >
        {range(0, length).map((index) => (
          <InputText
            id={`${uniqueId}-${index}`}
            key={index}
            autoFocus={autoFocus && index === 0}
            className={cj(
              `${PREFIX}-${GROUP_NAME}__field`,
              index === 0 || index === length - 1
                ? `${PREFIX}-${GROUP_NAME}__field--${
                    index === 0 ? 'first' : 'last'
                  }`
                : '',
              `${PREFIX}-${GROUP_NAME}__field--${index}`,
              'w-fit min-w-[20px] !max-w-8 [&_input]:text-center',
              index === length - 1 && (isInError || isSuccessful)
                ? '!max-w-[calc(theme(spacing.8)+theme(spacing.2)+theme(spacing.half))]'
                : '',
            )}
            {...(isString(defaultValue)
              ? {
                  defaultValue: isInteger(
                    Number.parseInt(defaultValue[index] ?? '', 10),
                  )
                    ? defaultValue[index]
                    : '',
                }
              : {})}
            disabled={disabled}
            error={hasErrorMessage}
            inputMode="numeric"
            max={9}
            maxLength={1}
            min={0}
            name={`${name || uniqueId}-${index}`}
            pattern="[0-9]?"
            placeholder={placeholders?.[index] ?? placeholders?.[0] ?? ''}
            readOnly={readOnly}
            required={required}
            size={1}
            success={isSuccessful}
            suffix={
              index === length - 1 ? (
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
                  value: isInteger(Number.parseInt(value[index] ?? '', 10))
                    ? value[index]
                    : '',
                }
              : {})}
            onBlur={(event) => handleBlur(event, index)}
            onChange={(event, newDigit) => handleChange(event, newDigit, index)}
            {...(isFunction(onFocus)
              ? { onFocus: (event) => onFocus(event, index) }
              : {})}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onPaste={(event) => handlePaste(event, index)}
            {...omit(['className'], props)}
          />
        ))}
      </div>

      {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage && (
        <Typography
          className={cj(
            `${PREFIX}-${GROUP_NAME}__description`,
            'cursor-default text-dark',
          )}
          element="div"
          variant="caption-median"
        >
          {description}
        </Typography>
      )}

      {(hasErrorMessage || hasSuccessMessage) && (
        <Typography
          className={cj(
            `${PREFIX}-${GROUP_NAME}__message ${PREFIX}-${GROUP_NAME}__message--${
              isInError ? 'error' : 'success'
            }`,
            'cursor-default text-dark',
          )}
          element="div"
          variant="caption-median"
        >
          {isInError ? error : success}
        </Typography>
      )}
    </div>
  )
}
InputPinCode.displayName = 'InputPinCode'

export default InputPinCode
