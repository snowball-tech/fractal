'use client'

import CheckCircleIcon from '@iconscout/react-unicons/icons/uil-check-circle'
import ExclamationCircleIcon from '@iconscout/react-unicons/icons/uil-exclamation-circle'
import { Label as RxLabel } from '@radix-ui/react-label'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isInteger from 'lodash/fp/isInteger'
import isNil from 'lodash/fp/isNil'
import omit from 'lodash/fp/omit'
import {
  type ChangeEvent,
  type ForwardedRef,
  KeyboardEvent,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { InputText } from '@/components/InputText'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './InputDate.constants'
import type {
  CombinedRefs,
  DateFormat,
  InputDateProps,
} from './InputDate.types'

function isValid(type: keyof DateFormat, value: '' | number, max?: number) {
  if (!isInteger(value) || value === '') {
    return false
  }

  switch (type) {
    case 'day': {
      return value >= 1 && value <= 31
    }

    case 'month': {
      return value >= 1 && value <= 12
    }

    case 'year': {
      return max === undefined || !isInteger(max)
        ? value >= 1900
        : value >= 1900 && value <= max
    }

    default: {
      return false
    }
  }
}

/**
 * `InputDate` component is used to allow the user to enter a date using 3
 * separate day/month/year fields.
 *
 * See
 * https://fractal.snowball.xyz/?path=/docs/molecules-input-inputtext--documentation
 * for more information
 */
export const InputDate = forwardRef<CombinedRefs, InputDateProps>(
  (
    {
      autoFocus = false,
      defaultValue,
      descriptions,
      disabled = false,
      error,
      id,
      label,
      maxYear = 2099,
      name,
      onBlur,
      onChange,
      onFieldChange,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholders,
      readOnly = false,
      required = false,
      success,
      value,
      ...props
    }: InputDateProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    let skipFocusChange = false

    const dayRef = useRef<HTMLInputElement | null>(null)
    const monthRef = useRef<HTMLInputElement | null>(null)
    const yearRef = useRef<HTMLInputElement | null>(null)

    useImperativeHandle(ref, () => ({
      get day() {
        return dayRef?.current ?? null
      },

      get month() {
        return monthRef?.current ?? null
      },

      get year() {
        return yearRef?.current ?? null
      },
    }))

    const [errors, setErrors] = useState<{
      day: boolean
      month: boolean
      year: boolean
    }>({ day: false, month: false, year: false })
    const [autoSwitch, setAutoSwitch] = useState(true)

    const hasErrorMessage = !isEmpty(error)
    const hasSuccessMessage = !isEmpty(success)

    const isInError = hasErrorMessage
    const isSuccessful = hasSuccessMessage && !isInError

    useEffect(() => {
      const newErrors = { ...errors }

      const day = value?.day || defaultValue?.day
      newErrors.day = !!(
        !isNil(day) &&
        (!isInteger(day) || !isValid('day', day))
      )

      const month = value?.month || defaultValue?.month
      newErrors.month = !!(
        !isNil(month) &&
        (!isInteger(month) || !isValid('month', month))
      )

      const year = value?.year || defaultValue?.year
      newErrors.year = !!(
        !isNil(year) &&
        (!isInteger(year) || !isValid('year', year, maxYear))
      )

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
      const newValueAsInt = Number.parseInt(newValue, 10)

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
        isInteger(newValueAsInt) &&
        isValid(type, newValueAsInt, maxYear) &&
        autoSwitch
      ) {
        switch (type) {
          case 'day': {
            if (newValue.length === 2 && monthRef?.current) {
              monthRef.current.focus()
            }
            break
          }

          case 'month': {
            if (newValue.length === 2 && yearRef?.current) {
              yearRef.current.focus()
            }
            break
          }

          case 'year': {
            if (newValue.length === 4 && yearRef?.current) {
              yearRef.current.blur()
            }
            break
          }

          default: {
            break
          }
        }
      }
    }

    const handleKeyDown = (
      event: KeyboardEvent<HTMLInputElement>,
      type: keyof DateFormat,
    ) => {
      if (isFunction(onKeyDown)) {
        onKeyDown(event, type)
      }

      switch (event.key) {
        case 'ArrowLeft': {
          switch (type) {
            case 'month': {
              if (dayRef?.current) {
                dayRef.current.focus()
                event.preventDefault()
              }
              break
            }

            case 'year': {
              if (monthRef?.current) {
                monthRef.current.focus()
                event.preventDefault()
              }
              break
            }

            default: {
              break
            }
          }
          break
        }

        case 'ArrowRight': {
          switch (type) {
            case 'day': {
              if (monthRef?.current) {
                monthRef.current.focus()
                event.preventDefault()
              }
              break
            }

            case 'month': {
              if (yearRef?.current) {
                yearRef.current.focus()
                event.preventDefault()
              }
              break
            }

            default: {
              break
            }
          }
          break
        }

        case 'ArrowUp':
        case 'ArrowDown': {
          skipFocusChange = true
          break
        }

        default: {
          break
        }
      }

      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        setAutoSwitch(false)
      } else {
        setAutoSwitch(true)
      }
    }

    const writable = !disabled && !readOnly

    const fieldClassNames = `${PREFIX}-${GROUP_NAME}__field !max-w-[100px] w-fit`

    return (
      <div
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          'flex w-fit max-w-full flex-col gap-1',
          `${PREFIX}-${GROUP_NAME}--${writable ? '' : 'not-'}writable`,
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
              writable ? 'cursor-pointer' : 'cursor-default',
              required
                ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-required`
                : '',
            )}
            htmlFor={`${uniqueId}-day`}
          >
            <Typography element="label">{label}</Typography>
          </RxLabel>
        )}

        <div
          className={cj(`${PREFIX}-${GROUP_NAME}__fields`, 'flex w-fit gap-1')}
        >
          <InputText
            id={`${uniqueId}-day`}
            ref={dayRef}
            autoFocus={autoFocus}
            className={cj(
              `${PREFIX}-${GROUP_NAME}__field__day`,
              fieldClassNames,
              '[&_input]:min-w-9',
            )}
            {...(defaultValue?.day === undefined
              ? {}
              : { defaultValue: defaultValue.day })}
            description={descriptions?.day ?? ''}
            disabled={disabled}
            error={errors.day || hasErrorMessage}
            inputMode="numeric"
            max={31}
            maxLength={2}
            min={1}
            name={`${name || uniqueId}-day`}
            pattern="[0-9]*"
            placeholder={placeholders?.day ?? ''}
            readOnly={readOnly}
            required={required}
            size={2}
            success={isSuccessful}
            suffix={errors.day ? <ExclamationCircleIcon /> : undefined}
            type="number"
            {...(value?.day === undefined ? {} : { value: value.day })}
            {...(isFunction(onBlur)
              ? { onBlur: (event) => onBlur(event, 'day') }
              : {})}
            onChange={(event, newDay) => handleChange(event, newDay, 'day')}
            {...(isFunction(onFocus)
              ? { onFocus: (event) => onFocus(event, 'year') }
              : {})}
            onKeyDown={(event) => handleKeyDown(event, 'day')}
            {...(isFunction(onKeyUp)
              ? { onKeyUp: (event) => onKeyUp(event, 'day') }
              : {})}
            {...omit(['className'], props)}
          />

          <InputText
            id={`${uniqueId}-month`}
            ref={monthRef}
            className={cj(
              `${PREFIX}-${GROUP_NAME}__field__month`,
              fieldClassNames,
              '[&_input]:min-w-9',
            )}
            {...(defaultValue?.month === undefined
              ? {}
              : { defaultValue: defaultValue.month })}
            description={descriptions?.month ?? ''}
            disabled={disabled}
            error={errors.month || hasErrorMessage}
            inputMode="numeric"
            max={12}
            maxLength={2}
            min={1}
            name={`${name || uniqueId}-month`}
            pattern="[0-9]*"
            placeholder={placeholders?.month ?? ''}
            readOnly={readOnly}
            required={required}
            size={2}
            success={isSuccessful}
            suffix={errors.month ? <ExclamationCircleIcon /> : undefined}
            type="number"
            {...(value?.month === undefined ? {} : { value: value.month })}
            {...(isFunction(onBlur)
              ? { onBlur: (event) => onBlur(event, 'month') }
              : {})}
            onChange={(event, newMonth) =>
              handleChange(event, newMonth, 'month')
            }
            {...(isFunction(onFocus)
              ? { onFocus: (event) => onFocus(event, 'year') }
              : {})}
            onKeyDown={(event) => handleKeyDown(event, 'month')}
            {...(isFunction(onKeyUp)
              ? { onKeyUp: (event) => onKeyUp(event, 'month') }
              : {})}
            {...omit(['className'], props)}
          />

          <InputText
            id={`${uniqueId}-year`}
            ref={yearRef}
            className={cj(
              `${PREFIX}-${GROUP_NAME}__field__year`,
              fieldClassNames,
              '[&_input]:!w-unset [&_input]:min-w-11',
            )}
            {...(defaultValue?.year === undefined
              ? {}
              : { defaultValue: defaultValue.year })}
            description={descriptions?.year ?? ''}
            disabled={disabled}
            error={errors.year || hasErrorMessage}
            inputMode="numeric"
            max={maxYear}
            maxLength={4}
            min={1900}
            name={`${name || uniqueId}-year`}
            pattern="[0-9]*"
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
            {...(value?.year === undefined ? {} : { value: value.year })}
            {...(isFunction(onBlur)
              ? { onBlur: (event) => onBlur(event, 'year') }
              : {})}
            onChange={(event, newYear) => handleChange(event, newYear, 'year')}
            {...(isFunction(onFocus)
              ? { onFocus: (event) => onFocus(event, 'year') }
              : {})}
            onKeyDown={(event) => handleKeyDown(event, 'year')}
            {...(isFunction(onKeyUp)
              ? { onKeyUp: (event) => onKeyUp(event, 'year') }
              : {})}
            {...omit(['className'], props)}
          />
        </div>

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
  },
)
InputDate.displayName = 'InputDate'

export default InputDate
