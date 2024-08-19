import type { ThemeVars } from '@storybook/theming'

import {
  ColorBaseBlack as Black,
  ColorBackgroundBodyLight as ContentBackgroundColor,
  FontFamilyNormal as FontFamily,
  ColorBrandPrimary as PrimaryColor,
  SizeRadiusM as Radius,
  ColorBrandSecondary as SecondaryColor,
  ColorBaseWhite as White,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'
import { create } from '@storybook/theming/create'

const SidebarBackgroundColor = Black
const TopbarBackgroundColor = PrimaryColor

const theme: ThemeVars = create({
  base: 'light',

  brandImage: '/images/logo_pink_white.png',
  brandTarget: '_blank',
  brandTitle: 'Fractal',
  brandUrl: 'https://snowball.xyz',

  appBg: SidebarBackgroundColor,
  appContentBg: ContentBackgroundColor,
  barBg: TopbarBackgroundColor,
  fontBase: FontFamily,

  barTextColor: Black,
  textColor: Black,
  textInverseColor: White,

  appBorderColor: Black,
  appBorderRadius: Number.parseInt(Radius, 10),

  colorPrimary: PrimaryColor,
  colorSecondary: SecondaryColor,
})

export default theme
