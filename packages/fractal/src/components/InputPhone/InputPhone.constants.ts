import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { getCountries, getCountryCallingCode } from 'libphonenumber-js/max'

import { CountryDetails } from './InputPhone.types'

export const DEFAULT_COUNTRY_CODE = 'FR'

export const countryByCountryCode: Record<string, CountryDetails> = {}
export const supportedCountries = getCountries().map((countryCode) => {
  const countryDetails: CountryDetails = {
    countryCode,
    countryName:
      new Intl.DisplayNames(undefined, { type: 'region' }).of(countryCode) ||
      'Unknown',
    flag: getUnicodeFlagIcon(countryCode),
    prefix: getCountryCallingCode(countryCode),
  }

  countryByCountryCode[countryDetails.countryCode] = countryDetails

  return countryDetails
})
