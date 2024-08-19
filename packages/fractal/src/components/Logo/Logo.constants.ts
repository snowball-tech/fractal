import {
  ColorBrandPrimary,
  ColorTextDark,
  ColorTextLight,
} from '@snowball-tech/design-tokens'

export const GROUP_NAME = 'logo'

export enum Sizes {
  // Small.
  S = 's',

  // Medium
  M = 'm',

  // Large.
  L = 'l',

  // Extra Large.
  XL = 'xl',

  // Fluid.
  Fluid = 'fluid',
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
