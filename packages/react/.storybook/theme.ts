import {
  ColorBaseBlack,
  ColorBaseWhite,
  ColorBrandBody,
  ColorBrandPrimary,
  ColorBrandSecondary,
  FontFamilyNormal,
  SizeRadiusRadius,
} from '@snowball-tech/design-tokens/dist/web/react/design-tokens'
import type { ThemeVars } from '@storybook/theming'
import { create } from '@storybook/theming/create'

const theme: ThemeVars = create({
  base: 'light',

  brandImage: '/images/logo_pink_white.png',
  brandTarget: '_blank',
  brandTitle: 'Fractal',
  brandUrl: 'https://snowball.xyz',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  appBg: ColorBrandSecondary,
  appContentBg: ColorBrandBody,
  barBg: ColorBrandPrimary,
  fontBase: FontFamilyNormal,

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  barTextColor: ColorBaseBlack,
  textColor: ColorBaseBlack,
  textInverseColor: ColorBaseWhite,

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  appBorderColor: ColorBaseBlack,
  appBorderRadius: parseInt(SizeRadiusRadius, 10),

  colorPrimary: ColorBrandPrimary,
  colorSecondary: ColorBrandSecondary,
})

export default theme
