'use client'

import { Label as RxLabel } from '@radix-ui/react-label'
import {
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
} from '@tooni/iconscout-unicons-react'
import parsePhoneNumber, {
  type CountryCode,
  getExampleNumber,
} from 'libphonenumber-js/max'
import examples from 'libphonenumber-js/mobile/examples'

import {
  type ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isNil from 'lodash/fp/isNil'
import omit from 'lodash/fp/omit'

import { InputText } from '@/components/InputText/InputText'
import { Select } from '@/components/Select/Select'
import { SelectEmpty } from '@/components/Select/SelectEmpty'
import { SelectItem } from '@/components/Select/SelectItem'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type {
  CombinedRefs,
  CountryDetails,
  InputPhoneProps,
  Prefix,
} from './InputPhone.types'

import {
  countryByCountryCode,
  DEFAULT_COUNTRY_CODE,
  GROUP_NAME,
  supportedCountries,
} from './InputPhone.constants'

/**
 * `InputPhone` component is used to allow the user to enter a phone number
 * (with a prefix).
 *
 * See
 * https://fractal.snowball.xyz/?path=/docs/molecules-input-inputtext--documentation
 * and https://fractal.snowball.xyz/?path=/docs/molecules-select--documentation
 * for more information.
 */
export const InputPhone = forwardRef<CombinedRefs, InputPhoneProps>(
  (
    {
      autoFocus = false,
      defaultValue,
      description,
      disabled = false,
      emptyPrefixLabel = '-',
      error,
      id,
      label,
      name,
      onChange,
      placeholder,
      prefixSelect = {},
      readOnly = false,
      required = false,
      searchPlaceholder,
      success,
      updateOnInvalid = true,
      value,
      withPrefix = true,
      ...props
    }: InputPhoneProps,
    ref?: ForwardedRef<CombinedRefs>,
  ) => {
    cn()
    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(
      null,
    )

    const phoneRef = useRef<HTMLInputElement>(null)
    const prefixRef = useRef<CombinedRefs['prefix']>(null)
    const searchPrefixInputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
      get phone() {
        return phoneRef?.current ?? null
      },

      get prefix() {
        return prefixRef?.current ?? null
      },

      get searchPrefixInput() {
        return searchPrefixInputRef?.current ?? null
      },
    }))

    const [keepFocus, setKeepFocus] = useState(false)

    const [search, setSearch] = useState('')
    const [prefixes, setPrefixes] = useState(supportedCountries)

    const [prefix, setPrefix] = useState<Prefix | null>(null)
    const [number, setNumber] = useState<string>('')
    const [selectedCountry, setSelectedCountry] =
      useState<CountryDetails | null>(null)
    const [actualPlaceholder, setActualPlaceholder] = useState(placeholder)

    const selectPrefix = useCallback(
      (newPrefix: Prefix) => {
        setPrefix(newPrefix)

        if (isEmpty(newPrefix.countryCode)) {
          return
        }

        const newSelectedCountry =
          countryByCountryCode?.[newPrefix.countryCode] ?? null
        setSelectedCountry(newSelectedCountry)

        const { countryCode } = newPrefix
        if (isEmpty(countryCode)) {
          setActualPlaceholder(placeholder)
        } else {
          setActualPlaceholder(
            getExampleNumber(countryCode, examples)?.formatNational() ??
              placeholder,
          )
        }
      },
      [placeholder],
    )

    useEffect(() => {
      if (!withPrefix) {
        setNumber(value?.number ?? defaultValue?.number ?? '')

        return
      }

      if (isEmpty(value) && isEmpty(defaultValue)) {
        const { locale = 'fr-FR' } = Intl.DateTimeFormat().resolvedOptions()
        const countryCode: CountryCode = (new Intl.Locale(locale)?.region ??
          'FR') as CountryCode

        if (!isEmpty(countryCode)) {
          const country = countryByCountryCode?.[countryCode] ?? null

          if (!isEmpty(country)) {
            if (!isEmpty(country.prefix)) {
              selectPrefix({
                countryCode,
                prefix: country.prefix,
              })
            }

            setSelectedCountry(country)
          }
        }

        return
      }

      const phoneNumber = value?.number ?? defaultValue?.number ?? ''
      const parsedPhone = parsePhoneNumber(phoneNumber, DEFAULT_COUNTRY_CODE)
      if (isEmpty(parsedPhone)) {
        if (isEmpty(prefix?.countryCode)) {
          selectPrefix({
            countryCode: DEFAULT_COUNTRY_CODE,
            prefix: countryByCountryCode?.[DEFAULT_COUNTRY_CODE]?.prefix ?? '',
          })

          setNumber(phoneNumber.replace('+', ''))
        }

        return
      }

      selectPrefix({
        countryCode: parsedPhone.country ?? prefix?.countryCode,
        prefix: parsedPhone.countryCallingCode,
      })

      setNumber(parsedPhone.nationalNumber)
    }, [selectPrefix, defaultValue, value, prefix?.countryCode, withPrefix])

    const hasErrorMessage = !isEmpty(error)
    const hasSuccessMessage = !isEmpty(success)

    const isInError = hasErrorMessage
    const isSuccessful = hasSuccessMessage && !isInError

    const emitNewPhoneNumber = (
      prefixToEmit: Prefix | null,
      numberToEmit: string,
    ) => {
      if (!withPrefix) {
        if (isFunction(onChange)) {
          onChange({
            number: numberToEmit,
          })
        }

        return
      }

      if (isEmpty(prefixToEmit)) {
        return
      }

      const newPhoneNumber = `+${prefixToEmit.prefix}${numberToEmit.replaceAll(
        /^\+/g,
        '',
      )}`
      const parsedNewPhone = parsePhoneNumber(newPhoneNumber)
      const isValid = parsedNewPhone?.isValid() ?? false

      if (isFunction(onChange) && (isValid || updateOnInvalid)) {
        onChange(
          {
            countryCode: prefixToEmit.countryCode,
            number: parsedNewPhone?.number ?? newPhoneNumber,
          },
          isValid,
        )
      }
    }

    const handlePrefixChange = (newPrefix: Prefix) => {
      selectPrefix(newPrefix)

      if (!isEmpty(number)) {
        emitNewPhoneNumber(newPrefix, number)
      }
    }

    const handleNumberChange = (newNumber: string) => {
      setNumber(newNumber)

      if (!withPrefix || !isEmpty(prefix)) {
        emitNewPhoneNumber(prefix, newNumber)
      }
    }

    const handleSearch = (searchString: string, updateKeepFocus = true) => {
      setSearch(searchString)
      setPrefixes(
        supportedCountries.filter(
          ({ countryName }) =>
            countryName.search(new RegExp(`.*${searchString}.*`, 'gi')) >= 0,
        ),
      )

      if (updateKeepFocus) {
        setKeepFocus(true)
      }
    }

    const handleSearchBlur = () => {
      if (keepFocus) {
        if (searchPrefixInputRef?.current) {
          searchPrefixInputRef.current.focus()
        }

        setKeepFocus(false)
      }
    }

    const writable = !disabled && !readOnly

    const isInDialog = !isNil(
      containerRef?.closest(`.${PREFIX}-dialog__content`),
    )

    return (
      <div
        ref={(newRef) => setContainerRef(newRef)}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          'flex max-w-full flex-col gap-1',
          `${PREFIX}-${GROUP_NAME}--${writable ? '' : 'not-'}-writable`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          readOnly && !disabled ? 'cursor-default' : '',
          isInError ? `${PREFIX}-${GROUP_NAME}--with-error` : '',
          readOnly ? `${PREFIX}-${GROUP_NAME}--readonly cursor-default` : '',
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
              disabled
                ? `${PREFIX}-${GROUP_NAME}__label--disabled cursor-default`
                : 'cursor-pointer',
              required
                ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-required`
                : '',
            )}
            htmlFor={`${uniqueId}-number`}
          >
            <Typography element="label">{label}</Typography>
          </RxLabel>
        )}

        <div
          className={cj(
            `${PREFIX}-${GROUP_NAME}__fields`,
            'flex w-fit max-w-full gap-1',
          )}
        >
          {withPrefix && (
            <Select
              id={`${uniqueId}-prefix`}
              ref={prefixRef}
              className={cn(
                `${PREFIX}-${GROUP_NAME}__fields__phone-prefix`,
                'w-[110px] min-w-[110px] max-w-[110px]',
                prefixSelect.className,
              )}
              disabled={disabled || prefixSelect.disabled}
              displayedValue={
                prefixSelect.displayedValue ?? (
                  <span>
                    {selectedCountry?.flag}
                    &nbsp;&nbsp;
                    {selectedCountry?.countryCode}
                  </span>
                )
              }
              dropdown={{
                className: cn(
                  `${PREFIX}-${GROUP_NAME}__fields__phone-prefix__dropdown`,
                  'max-w-full !pt-8 !w-fit',
                  isInDialog ? 'mb-1' : '',
                  prefixSelect.dropdown?.className,
                ),
                ...omit(['className'], prefixSelect.dropdown),
              }}
              name={`${name || uniqueId}-prefix`}
              readOnly={readOnly || prefixSelect.readOnly}
              required={required}
              value={JSON.stringify(prefix)}
              onClose={() => {
                handleSearch('', false)
                prefixSelect.onClose?.()
              }}
              onSelect={(newPrefix) => {
                handlePrefixChange(JSON.parse(newPrefix))
                prefixSelect.onSelect?.(newPrefix)
              }}
              {...omit(
                [
                  'id',
                  'children',
                  'defaultValue',
                  'className',
                  'disabled',
                  'displayedValue',
                  'readOnly',
                  'dropdown',
                  'required',
                  'value',
                  'onClose',
                  'onSelect',
                ],
                prefixSelect,
              )}
            >
              <>
                <InputText
                  ref={searchPrefixInputRef}
                  className={cj(
                    `${PREFIX}-${GROUP_NAME}__fields__phone-prefix__dropdown__search`,
                    'fixed top-2 !w-[calc(100%-theme(spacing.3))]',
                  )}
                  fullWidth
                  {...(placeholder === undefined
                    ? {}
                    : { placeholder: searchPlaceholder })}
                  prefix={<SearchIcon />}
                  selectOnFocus={!keepFocus}
                  type="search"
                  value={search}
                  onBlur={handleSearchBlur}
                  onChange={(_event, newSearch) =>
                    handleSearch(newSearch, true)
                  }
                />

                {isEmpty(prefixes) && (
                  <SelectEmpty>{emptyPrefixLabel}</SelectEmpty>
                )}

                {!isEmpty(prefixes) &&
                  prefixes.map(
                    ({
                      countryCode,
                      countryName,
                      flag,
                      prefix: prefixForCountry,
                    }) => (
                      <SelectItem
                        key={countryCode}
                        value={JSON.stringify({
                          countryCode,
                          prefix: prefixForCountry,
                        })}
                      >
                        {flag} {countryName} (+{prefixForCountry})
                      </SelectItem>
                    ),
                  )}
              </>
            </Select>
          )}

          <InputText
            id={`${uniqueId}-number`}
            ref={phoneRef}
            autoFocus={autoFocus && !withPrefix}
            className={cj(
              `${PREFIX}-${GROUP_NAME}__fields__phone-number`,
              '!w-[calc(12rem+theme(spacing.2)+theme(spacing.2)]',
              withPrefix && !isEmpty(prefix)
                ? `${PREFIX}-${GROUP_NAME}__fields__phone-number--with-prefix-helper [&_input]:!pl-6`
                : '',
            )}
            disabled={disabled}
            error={hasErrorMessage}
            name={`${name || uniqueId}-number`}
            placeholder={actualPlaceholder ?? ''}
            prefix={
              withPrefix && !isEmpty(prefix) ? (
                <Typography
                  className={cj(
                    `${PREFIX}-${GROUP_NAME}__fields__phone-number__prefix-helper`,
                    disabled ? 'text-disabled' : 'text-dark',
                    'w-[36px] text-right',
                  )}
                  element="span"
                >
                  +{prefix.prefix}
                </Typography>
              ) : undefined
            }
            readOnly={readOnly}
            required={required}
            success={isSuccessful}
            suffix={
              hasErrorMessage ? (
                <ExclamationCircleIcon />
              ) : isSuccessful ? (
                <CheckCircleIcon />
              ) : undefined
            }
            type="tel"
            value={number}
            onChange={(_event, newNumber) => handleNumberChange(newNumber)}
            {...omit(['className'], props)}
          />
        </div>

        {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage ? (
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
        ) : (
          false
        )}

        {hasErrorMessage || hasSuccessMessage ? (
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
        ) : (
          false
        )}
      </div>
    )
  },
)
InputPhone.displayName = 'InputPhone'

export default InputPhone
