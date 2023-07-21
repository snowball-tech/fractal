'use client'

import {
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
} from '@iconscout/react-unicons'
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
import isNil from 'lodash/fp/isNil'
import isNumber from 'lodash/fp/isNumber'
import uniqueId from 'lodash/fp/uniqueId'
import {
  type ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { InputText } from '@/components/InputText'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './InputDate.recipe'
import type {
  CombinedRefs,
  DateFormat,
  InputDateProps,
} from './InputDate.types'

function isValid(type: keyof DateFormat, value: number, max?: number) {
  if (!isNumber(value) || Number.isNaN(value)) {
    return false
  }

  switch (type) {
    case 'day':
      return value >= 1 && value <= 31

    case 'month':
      return value >= 1 && value <= 12

    case 'year':
      return (
        value >= 1900 && (!isNumber(max) || Number.isNaN(max) || value <= max)
      )

    default:
      return false
  }
}

/**
 * `InputDate` component is used to allow the user to enter a date using 3
 * separate day/month/year fields.
 */
export const InputDate = forwardRef<CombinedRefs, InputDateProps>(
  (
    {
      autoFocus = false,
      defaultValue,
      descriptions,
      disabled = false,
      error,
      id = uniqueId('fractal-input-date-'),
      label,
      maxYear = 2099,
      name,
      onChange,
      onFieldChange,
      placeholders,
      readOnly = false,
      required = false,
      success,
      value,
      ...props
    }: InputDateProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const dayRef = useRef<HTMLInputElement | null>(null)
    const monthRef = useRef<HTMLInputElement | null>(null)
    const yearRef = useRef<HTMLInputElement | null>(null)

    useImperativeHandle(ref, () => ({
      get day() {
        return dayRef.current
      },

      get month() {
        return monthRef.current
      },

      get year() {
        return yearRef.current
      },
    }))

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

    useEffect(() => {
      const newErrors = { ...errors }

      const day = value?.day || defaultValue?.day
      if (
        !isNil(day) &&
        !Number.isNaN(day) &&
        (!isNumber(day) || !isValid('day', day))
      ) {
        newErrors.day = true
      } else {
        newErrors.day = false
      }

      const month = value?.month || defaultValue?.month
      if (
        !isNil(month) &&
        !Number.isNaN(month) &&
        (!isNumber(month) || !isValid('month', month))
      ) {
        newErrors.month = true
      } else {
        newErrors.month = false
      }

      const year = value?.year || defaultValue?.year
      if (
        !isNil(year) &&
        !Number.isNaN(year) &&
        (!isNumber(year) || !isValid('year', year, maxYear))
      ) {
        newErrors.year = true
      } else {
        newErrors.year = false
      }

      if (
        newErrors.day !== errors.day ||
        newErrors.month !== errors.month ||
        newErrors.year !== errors.year
      ) {
        setErrors(newErrors)
      }
    }, [
      defaultValue?.day,
      defaultValue?.month,
      defaultValue?.year,
      value?.day,
      value?.month,
      value?.year,
      errors,
      setErrors,
      maxYear,
    ])

    const handleChange = (newValue: string, type: keyof DateFormat) => {
      const newValueAsInt = parseInt(newValue, 10)

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
            ref={dayRef}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            className={cx(inputDateField(), inputDateDay())}
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
            suffix={errors.day ? <ExclamationCircleIcon /> : undefined}
            type="number"
            {...(value?.day !== undefined ? { value: value.day } : {})}
            onChange={(newDay) => handleChange(newDay, 'day')}
          />

          <InputText
            id={`${id}-month`}
            ref={monthRef}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            className={cx(inputDateField(), inputDateMonth())}
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
            suffix={errors.month ? <ExclamationCircleIcon /> : undefined}
            type="number"
            {...(value?.month !== undefined ? { value: value.month } : {})}
            onChange={(newMonth) => handleChange(newMonth, 'month')}
          />

          <InputText
            id={`${id}-year`}
            ref={yearRef}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            className={cx(inputDateField(), inputDateYear())}
            {...(defaultValue?.year !== undefined
              ? { defaultValue: defaultValue.year }
              : {})}
            description={descriptions?.year ?? ''}
            disabled={disabled}
            error={errors.year || hasErrorMessage}
            max={maxYear}
            maxLength={4}
            min={1900}
            name={`${name || id}-year`}
            placeholder={placeholders?.year ?? ''}
            readOnly={readOnly}
            required={required}
            size={4}
            success={isSuccessful}
            suffix={
              // eslint-disable-next-line no-nested-ternary
              errors.year || hasErrorMessage ? (
                <ExclamationCircleIcon />
              ) : isSuccessful ? (
                <CheckCircleIcon />
              ) : undefined
            }
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
  },
)
InputDate.displayName = 'InputDate'

export default InputDate
