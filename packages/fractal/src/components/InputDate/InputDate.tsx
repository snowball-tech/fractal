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
  type ChangeEvent,
  type FocusEvent,
  type ForwardedRef,
  KeyboardEvent,
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
    let skipFocusChange = false

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

    const handleChange = (
      event: ChangeEvent<HTMLInputElement>,
      newValue: string,
      type: keyof DateFormat,
    ) => {
      const newValueAsInt = parseInt(newValue, 10)

      if (isFunction(onChange)) {
        onChange(event, {
          ...defaultValue,
          ...value,
          [type]: newValueAsInt,
        })
      }

      if (isFunction(onFieldChange)) {
        onFieldChange(event, type, newValueAsInt)
      }

      if (skipFocusChange) {
        skipFocusChange = false

        return
      }

      if (
        !isNil(newValueAsInt) &&
        isNumber(newValueAsInt) &&
        !Number.isNaN(newValueAsInt) &&
        isValid(type, newValueAsInt, maxYear)
      ) {
        switch (type) {
          case 'day':
            if (newValue.length === 2 && monthRef.current) {
              monthRef.current.focus()
            }
            break

          case 'month':
            if (newValue.length === 2 && yearRef.current) {
              yearRef.current.focus()
            }
            break

          case 'year':
            if (newValue.length === 4 && yearRef.current) {
              yearRef.current.blur()
            }
            break

          default:
            break
        }
      }
    }

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (event.target) {
        event.target.select()
      }
    }

    const handleKeyDown = (
      event: KeyboardEvent<HTMLInputElement>,
      type: keyof DateFormat,
    ) => {
      switch (event.key) {
        case 'ArrowLeft':
          switch (type) {
            case 'month':
              if (dayRef.current) {
                dayRef.current.focus()
              }
              break

            case 'year':
              if (monthRef.current) {
                monthRef.current.focus()
              }
              break

            default:
              break
          }
          event.preventDefault()
          break

        case 'ArrowRight':
          switch (type) {
            case 'day':
              if (monthRef.current) {
                monthRef.current.focus()
              }
              break

            case 'month':
              if (yearRef.current) {
                yearRef.current.focus()
              }
              break

            default:
              break
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
            onChange={(event, newDay) => handleChange(event, newDay, 'day')}
            onFocus={handleFocus}
            onKeyDown={(event) => handleKeyDown(event, 'day')}
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
            onChange={(event, newMonth) =>
              handleChange(event, newMonth, 'month')
            }
            onFocus={handleFocus}
            onKeyDown={(event) => handleKeyDown(event, 'month')}
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
            onChange={(event, newYear) => handleChange(event, newYear, 'year')}
            onFocus={handleFocus}
            onKeyDown={(event) => handleKeyDown(event, 'year')}
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
