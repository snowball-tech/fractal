export {
  DEFAULT_COUNTRY_CODE as DEFAULT_INPUT_PHONE_COUNTRY_CODE,
  countryByCountryCode as inputPhoneCountryByCountryCode,
  supportedCountries as inputPhoneSupportedCountries,
} from './InputPhone.constants.js'
export { default as InputPhone } from './InputPhone.js'
export type {
  InputPhoneProps,
  CombinedRefs as InputPhoneRefs,
  PhoneNumber,
} from './InputPhone.types.js'
