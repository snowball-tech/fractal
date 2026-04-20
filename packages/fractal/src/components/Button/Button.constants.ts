import {
  Border1,
  BorderTransparent2,
  ColorBackgroundDisabled,
  ColorBaseGrey30,
  ColorBaseTransparent,
  ColorBaseWhite,
  ColorBorderDisabled,
  ColorBorderLight,
  ColorBrandPrimaryDark,
  ColorBrandSecondary,
  ColorTextDark,
  ColorTextDisabled,
  ColorTextLight,
  ShadowBrutal1,
  ShadowBrutal1Dark,
  ShadowNone,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'
import {
  SizeBorder1,
  SizeBorder2,
  SizeSpacing1,
  SizeSpacing3,
  SizeSpacingHalf,
  SizeSpacingQuarter,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens-px'

import type { CSSProperties } from 'react'

import { Themes } from '@/constants'

export const GROUP_NAME = 'button'

export enum Variants {
  Display = 'display',
  Primary = 'primary',
  Secondary = 'secondary',
  Text = 'text',
}

export const DEFAULT_VARIANT = Variants.Primary

export const variantClassNames: Record<Themes, Record<Variants, string>> = {
  [Themes.Light]: {
    [Variants.Display]:
      'bg-white text-dark shadow-subtle hover:shadow-brutal focus:shadow-brutal active:shadow-none border-1 border-normal active:-translate-x-quarter active:translate-y-half hover:translate-x-0 hover:-translate-y-quarter focus:translate-x-0 focus:-translate-y-quarter px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Primary]:
      'bg-secondary hover:bg-white active:bg-primary focus:bg-white active:!border-transparent text-light hover:text-dark active:text-dark focus:text-dark border-2 border-transparent hover:border-normal focus:border-normal px-[calc(theme(spacing.3)-theme(spacing.half))] py-half',

    [Variants.Secondary]:
      'bg-white active:bg-secondary text-dark active:text-light hover:shadow-hover focus:shadow-hover active:shadow-hover border-1 border-normal px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Text]: 'bg-transparent text-dark',
  },

  [Themes.Dark]: {
    [Variants.Display]:
      'bg-white text-dark shadow-subtle-dark hover:shadow-brutal-dark focus:shadow-brutal-dark active:shadow-none border-1 border-normal active:-translate-x-quarter active:translate-y-half hover:translate-x-0 hover:-translate-y-quarter focus:translate-x-0 focus:-translate-y-quarter px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Primary]:
      'bg-primary-dark hover:bg-light active:bg-primary-dark focus:bg-light active:!border-transparent text-dark hover:text-dark active:text-light focus:text-dark border-2 border-transparent hover:border-light focus:border-light px-[calc(theme(spacing.3)-theme(spacing.half))] py-half',

    [Variants.Secondary]:
      'bg-white active:bg-primary-dark text-dark active:text-light border-1 border-light px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Text]: 'bg-transparent text-light',
  },
}

export const variantStyles: Record<Themes, Record<Variants, CSSProperties>> = {
  [Themes.Light]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderWidth: SizeBorder1,
      boxShadow: ShadowBrutal1,
      color: ColorTextDark,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Primary]: {
      backgroundColor: ColorBrandSecondary,
      border: BorderTransparent2,
      borderWidth: SizeBorder2,
      color: ColorTextLight,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },

    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderWidth: SizeBorder1,
      color: ColorTextDark,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorTextDark,
    },
  },

  [Themes.Dark]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderWidth: SizeBorder1,
      boxShadow: ShadowBrutal1Dark,
      color: ColorTextDark,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Primary]: {
      backgroundColor: ColorBrandPrimaryDark,
      border: BorderTransparent2,
      borderWidth: SizeBorder2,
      color: ColorTextDark,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },

    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderLight,
      borderWidth: SizeBorder1,
      color: ColorTextDark,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorTextLight,
    },
  },
}

export const variantDisabledClassNames: Record<
  Themes,
  Record<Variants, string>
> = {
  [Themes.Light]: {
    [Variants.Display]:
      'bg-white text-disabled shadow-none border-1 border-disabled px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Primary]:
      'bg-disabled text-light px-[calc(theme(spacing.3)-theme(spacing.half))] py-half',

    [Variants.Secondary]:
      'bg-white text-disabled shadow-none border-1 border-disabled px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Text]: 'bg-transparent text-disabled',
  },

  [Themes.Dark]: {
    [Variants.Display]:
      'bg-white text-disabled shadow-none border-1 border-disabled px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Primary]:
      'bg-disabled text-disabled px-[calc(theme(spacing.3)-theme(spacing.half))] py-half',

    [Variants.Secondary]:
      'bg-white text-disabled shadow-none border-1 border-disabled px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Text]: 'bg-transparent text-grey-30',
  },
}

export const variantDisabledStyles: Record<
  Themes,
  Record<Variants, CSSProperties>
> = {
  [Themes.Light]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderDisabled,
      borderWidth: SizeBorder1,
      boxShadow: ShadowNone,
      color: ColorTextDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Primary]: {
      backgroundColor: ColorBackgroundDisabled,
      color: ColorTextLight,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },

    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderDisabled,
      borderWidth: SizeBorder1,
      boxShadow: ShadowNone,
      color: ColorTextDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorTextDisabled,
    },
  },

  [Themes.Dark]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderDisabled,
      borderWidth: SizeBorder1,
      boxShadow: ShadowNone,
      color: ColorTextDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Primary]: {
      backgroundColor: ColorBackgroundDisabled,
      color: ColorTextDisabled,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },

    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderDisabled,
      borderWidth: SizeBorder1,
      boxShadow: ShadowNone,
      color: ColorTextDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorBaseGrey30,
    },
  },
}
