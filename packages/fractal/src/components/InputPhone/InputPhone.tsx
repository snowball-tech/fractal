'use client'

import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import { Label as RxLabel } from '@radix-ui/react-label'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  inputPhoneContainer,
  inputPhoneDescription,
  inputPhoneFields,
  inputPhoneLabel,
  inputPhoneMessage,
  inputPhoneNumber,
  inputPhoneNumberInputText,
  inputPhoneNumberPrefixHelper,
  inputPhonePrefix,
  inputPhonePrefixDropdown,
  inputPhonePrefixSearch,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import parsePhoneNumber, {
  type CountryCode,
  getExampleNumber,
} from 'libphonenumber-js/max'
import examples from 'libphonenumber-js/mobile/examples'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import uniqueId from 'lodash/fp/uniqueId'
import {
  type ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { InputText } from '@/components/InputText'
import { PREFIX } from '@/constants'

import { Select, SelectItem } from '../Select'
import {
  DEFAULT_COUNTRY_CODE,
  countryByCountryCode,
  supportedCountries,
} from './InputPhone.constants'
import { GROUP_NAME } from './InputPhone.recipe'
import type {
  CombinedRefs,
  CountryDetails,
  InputPhoneProps,
  Prefix,
} from './InputPhone.types'

/**
 * `InputPhone` component is used to allow the user to enter a phone number
 * (with a prefix).
 */
export const InputPhone = forwardRef<CombinedRefs, InputPhoneProps>(
  (
    {
      autoFocus = false,
      defaultValue,
      description,
      disabled = false,
      error,
      id = uniqueId('fractal-input-phone-'),
      label,
      name,
      onChange,
      placeholder,
      readOnly = false,
      required = false,
      searchPlaceholder,
      success,
      updateOnInvalid = true,
      value,
      withPrefix = true,
      ...props
    }: InputPhoneProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const phoneRef = useRef<HTMLInputElement>(null)
    const prefixRef = useRef<HTMLButtonElement>(null)

    useImperativeHandle(ref, () => ({
      get phone() {
        return phoneRef.current
      },

      get prefix() {
        return prefixRef.current
      },
    }))

    const searchInputRef = useRef<HTMLInputElement>(null)
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
        if (!isEmpty(countryCode)) {
          setActualPlaceholder(
            getExampleNumber(countryCode, examples)?.formatNational() ??
              placeholder,
          )
        } else {
          setActualPlaceholder(placeholder)
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
        countryCode: parsedPhone.country,
        prefix: parsedPhone.countryCallingCode,
      })

      setNumber(parsedPhone.nationalNumber)
    }, [selectPrefix, defaultValue, value, prefix?.countryCode, withPrefix])

    const hasErrorMessage = !isEmpty(error)
    const hasSuccessMessage = !isEmpty(success)

    const isInError = hasErrorMessage
    const isSuccessful = hasSuccessMessage && !isInError

    const groupClassNames = cx(
      `${PREFIX}-${GROUP_NAME}`,
      inputPhoneContainer(),
      props.className,
      disabled ? 'disabled' : '',
      isInError ? 'error' : '',
      readOnly ? 'readonly' : '',
      required ? 'required' : '',
      isSuccessful ? 'success' : '',
    )

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

      const newPhoneNumber = `+${prefixToEmit.prefix}${numberToEmit.replace(
        /^[+]/g,
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
        if (searchInputRef.current) {
          searchInputRef.current.focus()
        }

        setKeepFocus(false)
      }
    }

    return (
      <div className={groupClassNames}>
        {!isEmpty(label) ? (
          <RxLabel
            className={cx(typography({ variant: 'body-1' }), inputPhoneLabel())}
            htmlFor={`${id}-number`}
          >
            {label}
          </RxLabel>
        ) : (
          false
        )}

        <div className={cx('fields', inputPhoneFields())}>
          {withPrefix ? (
            <Select
              id={`${id}-prefix`}
              ref={prefixRef}
              className={inputPhonePrefix()}
              disabled={disabled}
              displayedValue={
                <span>
                  {selectedCountry?.flag}
                  &nbsp;&nbsp;
                  {selectedCountry?.countryCode}
                </span>
              }
              dropdown={{ className: inputPhonePrefixDropdown() }}
              name={`${name || id}-prefix`}
              readOnly={readOnly}
              required={required}
              value={JSON.stringify(prefix)}
              onClose={() => handleSearch('', false)}
              onSelect={(newPrefix) =>
                handlePrefixChange(JSON.parse(newPrefix))
              }
            >
              <>
                <InputText
                  ref={searchInputRef}
                  className={inputPhonePrefixSearch()}
                  fullWidth
                  {...(placeholder !== undefined
                    ? { placeholder: searchPlaceholder }
                    : {})}
                  prefix={<SearchIcon />}
                  value={search}
                  onBlur={handleSearchBlur}
                  onChange={(_, newSearch) => handleSearch(newSearch, true)}
                />

                {prefixes.map(
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
          ) : (
            false
          )}

          <InputText
            id={`${id}-number`}
            ref={phoneRef}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus && !withPrefix}
            className={cx(
              inputPhoneNumber(),
              withPrefix && !isEmpty(prefix) ? inputPhoneNumberInputText() : '',
            )}
            disabled={disabled}
            error={hasErrorMessage}
            name={`${name || id}-number`}
            pattern="[0-9()- ]"
            placeholder={actualPlaceholder ?? ''}
            prefix={
              withPrefix && !isEmpty(prefix) ? (
                <span
                  className={cx(
                    typography({ variant: 'body-1' }),
                    inputPhoneNumberPrefixHelper(),
                  )}
                >
                  +{prefix.prefix}
                </span>
              ) : undefined
            }
            readOnly={readOnly}
            required={required}
            success={isSuccessful}
            suffix={
              // eslint-disable-next-line no-nested-ternary
              hasErrorMessage ? (
                <ExclamationCircleIcon />
              ) : isSuccessful ? (
                <CheckCircleIcon />
              ) : undefined
            }
            value={number}
            onChange={(_, newNumber) => handleNumberChange(newNumber)}
          />
        </div>

        {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage ? (
          <div
            className={cx(
              typography({ variant: 'caption-median' }),
              inputPhoneDescription(),
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
              inputPhoneMessage(),
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
InputPhone.displayName = 'InputPhone'

export default InputPhone
