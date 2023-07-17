'use client'

import { Label as RxLabel } from '@radix-ui/react-label'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  inputDateContainer,
  inputDateDay,
  inputDateField,
  inputDateFields,
  inputDateLabel,
  inputDateMessage,
  inputDateMonth,
  inputDateYear,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isNumber from 'lodash/fp/isNumber'
import uniqueId from 'lodash/fp/uniqueId'
import { useState } from 'react'

import { InputText } from '@/components/InputText'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './InputDate.recipe'
import type { DateFormat, InputDateProps } from './InputDate.types'

function isValid(type: keyof DateFormat, value: number) {
  if (!isNumber(value) || Number.isNaN(value)) {
    return false
  }

  switch (type) {
    case 'day':
      return value >= 1 && value <= 31

    case 'month':
      return value >= 1 && value <= 12

    case 'year':
      return value >= 1900

    default:
      return false
  }
}

/**
 * `InputDate` component is used to allow the user to enter a date using 3
 * separate day/month/year fields.
 */
export default function InputDate({
  autoFocus = false,
  defaultValue,
  descriptions,
  disabled = false,
  error,
  id = uniqueId('fractal-input-date-'),
  label,
  name,
  onChange,
  onFieldChange,
  placeholders,
  readOnly = false,
  required = false,
  success,
  value,
  ...props
}: InputDateProps) {
  const [errors, setErrors] = useState<{
    day: boolean
    month: boolean
    year: boolean
  }>({ day: false, month: false, year: false })

  const hasErrorMessage = !isEmpty(error)
  const hasSuccessMessage = !isEmpty(success)

  const isInError = hasErrorMessage
  const isSuccessful = hasSuccessMessage && !isInError

  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    inputDateContainer(),
    props.className,
    disabled ? 'disabled' : '',
    isInError ? 'error' : '',
    readOnly ? 'readonly' : '',
    required ? 'required' : '',
    isSuccessful ? 'success' : '',
  )

  const handleChange = (newValue: string, type: keyof DateFormat) => {
    const newValueAsInt = parseInt(newValue, 10)
    if (!isValid(type, newValueAsInt)) {
      setErrors({ ...errors, [type]: true })
    } else {
      setErrors({ ...errors, [type]: false })
    }

    if (isFunction(onChange)) {
      onChange({
        ...defaultValue,
        ...value,
        [type]: newValueAsInt,
      })
    }

    if (isFunction(onFieldChange)) {
      onFieldChange(type, newValueAsInt)
    }
  }

  return (
    <div className={groupClassNames}>
      {!isEmpty(label) ? (
        <RxLabel
          className={cx(typography({ variant: 'body-1' }), inputDateLabel())}
          htmlFor={`${id}-day`}
        >
          {label}
        </RxLabel>
      ) : (
        false
      )}

      <div className={cx('fields', inputDateFields())}>
        <InputText
          id={`${id}-day`}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          className={cx(inputDateDay(), inputDateField())}
          {...(defaultValue?.day !== undefined
            ? { defaultValue: defaultValue.day }
            : {})}
          description={descriptions?.day ?? ''}
          disabled={disabled}
          error={errors.day || hasErrorMessage}
          max={31}
          maxLength={2}
          min={1}
          name={`${name || id}-day`}
          placeholder={placeholders?.day ?? ''}
          readOnly={readOnly}
          required={required}
          size={2}
          success={isSuccessful}
          type="number"
          {...(value?.day !== undefined ? { value: value.day } : {})}
          onChange={(newDay) => handleChange(newDay, 'day')}
        />

        <InputText
          id={`${id}-month`}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          className={cx(inputDateMonth(), inputDateField())}
          {...(defaultValue?.month !== undefined
            ? { defaultValue: defaultValue.month }
            : {})}
          description={descriptions?.month ?? ''}
          disabled={disabled}
          error={errors.month || hasErrorMessage}
          max={12}
          maxLength={2}
          min={1}
          name={`${name || id}-month`}
          placeholder={placeholders?.month ?? ''}
          readOnly={readOnly}
          required={required}
          size={2}
          success={isSuccessful}
          type="number"
          {...(value?.month !== undefined ? { value: value.month } : {})}
          onChange={(newMonth) => handleChange(newMonth, 'month')}
        />

        <InputText
          id={`${id}-year`}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          className={cx(inputDateYear(), inputDateField())}
          {...(defaultValue?.year !== undefined
            ? { defaultValue: defaultValue.year }
            : {})}
          description={descriptions?.year ?? ''}
          disabled={disabled}
          error={errors.year || hasErrorMessage}
          maxLength={4}
          min={1900}
          name={`${name || id}-year`}
          placeholder={placeholders?.year ?? ''}
          readOnly={readOnly}
          required={required}
          size={4}
          success={isSuccessful}
          type="number"
          {...(value?.year !== undefined ? { value: value.year } : {})}
          onChange={(newYear) => handleChange(newYear, 'year')}
        />
      </div>

      {hasErrorMessage || hasSuccessMessage ? (
        <div
          className={cx(
            typography({ variant: 'caption-median' }),
            inputDateMessage(),
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
