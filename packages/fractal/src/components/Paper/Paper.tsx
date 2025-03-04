'use client'

import {
  Border1,
  ColorBackgroundBodyDark,
  ColorBackgroundBodyWhite,
  ColorTextDark,
  ColorTextLight,
  ShadowBrutal1,
  ShadowBrutal1Dark,
  ShadowBrutal1Light,
  ShadowBrutal2,
  ShadowBrutal2Dark,
  ShadowBrutal2Light,
  ShadowNone,
  SizeRadiusS,
  SizeSpacing2,
  SizeSpacingHalf,
  SizeSpacingQuarter,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'

import { type CSSProperties, type ForwardedRef, forwardRef } from 'react'

import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX, Themes } from '@/constants'
import useTheme from '@/hooks/useTheme'
import { cn } from '@/styles/helpers'

import type { PaperProps } from './Paper.types'

import { DEFAULT_ELEVATION, Elevations, GROUP_NAME } from './Paper.constants'

const baseElevationClassNames: Record<Elevations, string> = {
  [Elevations.Bordered]: 'rounded-sm shadow-none',

  [Elevations.Elevated]: 'rounded-sm shadow-subtle ml-quarter mb-quarter',

  [Elevations.Higher]: 'rounded-sm shadow-brutal ml-quarter mb-half',
}
export const elevationClassNames: Record<Themes, Record<Elevations, string>> = {
  [Themes.Light]: {
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
    [Elevations.Bordered]: baseElevationClassNames[Elevations.Bordered],

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

/**
 * `Paper` component allow to build interface with level and hierarchy.
 */
export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      children,
      element = 'div',
      elevation = DEFAULT_ELEVATION,
      fullStyle = false,
      inlineStyle = false,
      theme: themeOverride,
      ...props
    }: PaperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const theme = useTheme(themeOverride)

    return (
      <Typography
        ref={ref}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${elevation}`,
          !inlineStyle && 'relative flex flex-col border-1 border-normal p-2',
          !inlineStyle && elevationClassNames[theme][elevation],
          !inlineStyle &&
            (theme === Themes.Light
              ? 'bg-white text-dark'
              : 'bg-body-dark text-light'),
          !inlineStyle && props.className,
        )}
        element={element || 'div'}
        fullStyle={fullStyle}
        inlineStyle={inlineStyle}
        style={
          inlineStyle
            ? fullStyle
              ? {
                  boxSizing: 'border-box',
                  ...elevationStyles[theme][elevation],
                  backgroundColor:
                    theme === Themes.Light
                      ? ColorBackgroundBodyWhite
                      : ColorBackgroundBodyDark,
                  border: Border1,
                  color:
                    theme === Themes.Light ? ColorTextDark : ColorTextLight,
                  padding: SizeSpacing2,
                  ...props.style,
                }
              : {
                  ...elevationStyles[theme][elevation],
                  backgroundColor:
                    theme === Themes.Light
                      ? undefined
                      : ColorBackgroundBodyDark,
                  color: theme === Themes.Light ? undefined : ColorTextLight,
                  ...props.style,
                }
            : props.style
        }
        {...omit(['className', 'style'], props)}
      >
        {children}
      </Typography>
    )
  },
)
Paper.displayName = 'Paper'

export default Paper
