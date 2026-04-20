import {
  ColorBaseGrey50,
  ColorBaseGrey70,
  ShadowBrutal1,
  ShadowBrutal1Dark,
  ShadowBrutal1Light,
  ShadowBrutal2,
  ShadowBrutal2Dark,
  ShadowBrutal2Light,
  ShadowNone,
  SizeRadiusS,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'
import {
  SizeSpacingHalf,
  SizeSpacingQuarter,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens-px'

import type { CSSProperties, ElementType } from 'react'

import { Variants as TypographyVariants } from '@/components/Typography/Typography.constants'
import { Themes } from '@/constants'
import { cn } from '@/styles/helpers'

export const GROUP_NAME = 'paper'

export enum Elevations {
  Bordered = '1',
  Elevated = '2',
  Flat = '0',
  Higher = '3',
  Light = 'light',
}

export enum AlternateElevations {
  Bordered = 'bordered',
  Elevated = 'elevated',
  Flat = 'flat',
  Higher = 'higher',
}

export const DEFAULT_ELEVATION = Elevations.Bordered

export const ELEVATIONS = {
  [AlternateElevations.Bordered]: Elevations.Bordered,
  [AlternateElevations.Elevated]: Elevations.Elevated,
  [AlternateElevations.Flat]: Elevations.Flat,
  [AlternateElevations.Higher]: Elevations.Higher,
  [Elevations.Bordered]: Elevations.Bordered,
  [Elevations.Elevated]: Elevations.Elevated,
  [Elevations.Flat]: Elevations.Flat,
  [Elevations.Higher]: Elevations.Higher,
  [Elevations.Light]: Elevations.Light,
} as const

export { Variants as TitleVariants } from '@/components/Typography/Typography.constants'
export const DEFAULT_TITLE_VARIANT = TypographyVariants.Heading4

export const DEFAULT_ELEMENT: ElementType = 'div'

const baseElevationClassNames: Record<Elevations, string> = {
  [Elevations.Flat]: 'rounded-sm shadow-none border-none',

  [Elevations.Light]: 'rounded-sm shadow-none',

  [Elevations.Bordered]: 'rounded-sm shadow-none',

  [Elevations.Elevated]: 'rounded-sm shadow-subtle ml-quarter mb-quarter',

  [Elevations.Higher]: 'rounded-sm shadow-brutal ml-quarter mb-half',
}
export const elevationClassNames: Record<Themes, Record<Elevations, string>> = {
  [Themes.Light]: {
    [Elevations.Flat]: baseElevationClassNames[Elevations.Flat],

    [Elevations.Light]: cn(
      baseElevationClassNames[Elevations.Light],
      'border-grey-70',
    ),

    [Elevations.Bordered]: baseElevationClassNames[Elevations.Bordered],

    [Elevations.Elevated]: cn(
      baseElevationClassNames[Elevations.Elevated],
      'shadow-subtle-light',
    ),

    [Elevations.Higher]: cn(
      baseElevationClassNames[Elevations.Higher],
      'shadow-brutal-light',
    ),
  },

  [Themes.Dark]: {
    [Elevations.Flat]: baseElevationClassNames[Elevations.Flat],

    [Elevations.Light]: cn(
      baseElevationClassNames[Elevations.Light],
      'border-grey-50',
    ),

    [Elevations.Bordered]: cn(
      baseElevationClassNames[Elevations.Bordered],
      'border-primary',
    ),

    [Elevations.Elevated]: cn(
      baseElevationClassNames[Elevations.Elevated],
      'shadow-subtle-dark',
    ),

    [Elevations.Higher]: cn(
      baseElevationClassNames[Elevations.Higher],
      'shadow-brutal-dark',
    ),
  },
}

const baseElevationStyles: Record<Elevations, CSSProperties> = {
  [Elevations.Flat]: {
    border: 'none',
    borderRadius: SizeRadiusS,
    boxShadow: ShadowNone,
  },

  [Elevations.Light]: {
    borderRadius: SizeRadiusS,
    boxShadow: ShadowNone,
  },

  [Elevations.Bordered]: {
    borderRadius: SizeRadiusS,
    boxShadow: ShadowNone,
  },

  [Elevations.Elevated]: {
    borderRadius: SizeRadiusS,
    boxShadow: ShadowBrutal1,
    marginBottom: SizeSpacingQuarter,
    marginLeft: SizeSpacingQuarter,
  },

  [Elevations.Higher]: {
    borderRadius: SizeRadiusS,
    boxShadow: ShadowBrutal2,
    marginBottom: SizeSpacingHalf,
    marginLeft: SizeSpacingQuarter,
  },
}
export const elevationStyles: Record<
  Themes,
  Record<Elevations, CSSProperties>
> = {
  [Themes.Light]: {
    [Elevations.Flat]: baseElevationStyles[Elevations.Flat],

    [Elevations.Light]: {
      ...baseElevationStyles[Elevations.Light],
      borderColor: ColorBaseGrey70,
    },

    [Elevations.Bordered]: baseElevationStyles[Elevations.Bordered],

    [Elevations.Elevated]: {
      ...baseElevationStyles[Elevations.Elevated],
      boxShadow: ShadowBrutal1Light,
    },

    [Elevations.Higher]: {
      ...baseElevationStyles[Elevations.Higher],
      boxShadow: ShadowBrutal2Light,
    },
  },

  [Themes.Dark]: {
    [Elevations.Flat]: baseElevationStyles[Elevations.Flat],

    [Elevations.Light]: {
      ...baseElevationStyles[Elevations.Light],
      borderColor: ColorBaseGrey50,
    },

    [Elevations.Bordered]: baseElevationStyles[Elevations.Bordered],

    [Elevations.Elevated]: {
      ...baseElevationStyles[Elevations.Elevated],
      boxShadow: ShadowBrutal1Dark,
    },

    [Elevations.Higher]: {
      ...baseElevationStyles[Elevations.Higher],
      boxShadow: ShadowBrutal2Dark,
    },
  },
}
