'use client'

import {
  Border1,
  ColorBackgroundBodyDark,
  ColorBackgroundBodyWhite,
  ColorTextDark,
  ColorTextLight,
  ShadowBrutal1Dark,
  ShadowBrutal1Light,
  ShadowBrutal2Dark,
  ShadowBrutal2Light,
  ShadowNone,
  SizeRadiusS,
  SizeSpacing2,
  SizeSpacingHalf,
  SizeSpacingQuarter,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'
import omit from 'lodash/fp/omit'
import { type CSSProperties, type ForwardedRef, forwardRef } from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX, Themes } from '@/constants'
import useTheme from '@/hooks/useTheme'
import { cj, cn } from '@/styles/helpers'

import { DEFAULT_ELEVATION, Elevations, GROUP_NAME } from './Paper.constants'
import type { PaperProps } from './Paper.types'

/**
 * `Paper` component allow to build interface with level and hierarchy.
 */
export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      children,
      element = 'div',
      elevation = DEFAULT_ELEVATION,
      inlineStyle = false,
      theme: themeOverride,
      ...props
    }: PaperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const theme = useTheme(themeOverride)

    const elevationClassNames = {
      /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

      [Elevations.Bordered]: 'rounded-sm shadow-none',
      [Elevations.Elevated]: cj(
        'rounded-sm shadow-subtle ml-quarter mb-quarter',
        theme === Themes.Light ? 'shadow-subtle-light' : 'shadow-subtle-dark',
      ),
      [Elevations.Higher]: cj(
        'rounded-sm shadow-brutal ml-quarter mb-half',
        theme === Themes.Light ? 'shadow-brutal-light' : 'shadow-brutal-dark',
      ),

      /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
    }

    const elevationStyles: Record<Elevations, CSSProperties> = {
      /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

      [Elevations.Bordered]: {
        borderRadius: SizeRadiusS,
        boxShadow: ShadowNone,
      },
      [Elevations.Elevated]: {
        borderRadius: SizeRadiusS,
        boxShadow:
          theme === Themes.Light ? ShadowBrutal1Light : ShadowBrutal1Dark,
        marginLeft: SizeSpacingQuarter,
        marginBottom: SizeSpacingQuarter,
      },
      [Elevations.Higher]: {
        borderRadius: SizeRadiusS,
        boxShadow:
          theme === Themes.Light ? ShadowBrutal2Light : ShadowBrutal2Dark,
        marginLeft: SizeSpacingQuarter,
        marginBottom: SizeSpacingHalf,
      },

      /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
    }

    return (
      <Typography
        ref={ref}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${elevation}`,
          !inlineStyle && 'relative flex flex-col border-1 border-normal p-2',
          !inlineStyle && elevationClassNames[elevation],
          !inlineStyle &&
            (theme === Themes.Light
              ? 'bg-white text-dark'
              : 'bg-body-dark text-light'),
          !inlineStyle && props.className,
        )}
        element={element || 'div'}
        inlineStyle={inlineStyle}
        style={
          inlineStyle
            ? {
                ...elevationStyles[elevation],
                backgroundColor:
                  theme === Themes.Light
                    ? ColorBackgroundBodyWhite
                    : ColorBackgroundBodyDark,
                border: Border1,
                color: theme === Themes.Light ? ColorTextDark : ColorTextLight,
                padding: SizeSpacing2,
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
