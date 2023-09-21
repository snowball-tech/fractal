import {
  ColorBrandPrimary,
  ColorTextDark,
  ColorTextLight,
} from '@snowball-tech/design-tokens'

export enum Sizes {
  /* eslint-disable perfectionist/sort-enums */
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  Fluid = 'fluid',
  /* eslint-enable perfectionist/sort-enums */
}

export const DEFAULT_SIZE = Sizes.Fluid

export const PictoColors = {
  dark: ColorTextDark,
  light: ColorTextLight,
  none: 'transparent',
  primary: ColorBrandPrimary,
}

export const DEFAULT_PICTO_COLOR = 'dark'

export const BrandColors = {
  dark: ColorTextDark,
  light: ColorTextLight,
  none: 'transparent',
  primary: ColorBrandPrimary,
}

export const DEFAULT_BRAND_COLOR = 'dark'
