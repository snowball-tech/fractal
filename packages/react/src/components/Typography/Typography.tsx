import * as DesignTokens from '@snowball-tech/design-tokens/dist/web/react/design-tokens'
import { styled } from 'styled-components'

import { Breakpoints } from '@/constants'
import type { Breakpoint } from '@/types'
import { getBreakpointCssVarWithFallback } from '@/utils'

import { VARIANTS_MAPPING, Variants } from './Typography.constants'
import type { TypographyProps } from './Typography.types'

const DEFAULT_VARIANT = Variants.Body1

function getFontSize(variant: Variants, breakpoint: Breakpoint): string {
  return getBreakpointCssVarWithFallback(
    `--typography-${variant}-font-size`,
    breakpoint,
  )
}

function getLineHeight(variant: Variants, breakpoint: Breakpoint): string {
  return getBreakpointCssVarWithFallback(
    `--typography-${variant}-line-height`,
    breakpoint,
  )
}

const StyledTypography = styled.div<TypographyProps>`
  font-family: 'Arial Black', serif;
  font-weight: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-font-weight)`};

  line-height: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-line-height)`};
  letter-spacing: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-letter-spacing)`};

  text-decoration: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-text-decoration)`};

  @media ${DesignTokens.MediaQueryFromXs} {
    font-size: ${({ variant = DEFAULT_VARIANT }) =>
      getFontSize(variant, Breakpoints.xs)};
    line-height: ${({ variant = DEFAULT_VARIANT }) =>
      getLineHeight(variant, Breakpoints.xs)};
  }

  @media ${DesignTokens.MediaQueryFromSm} {
    font-size: ${({ variant = DEFAULT_VARIANT }) =>
      getFontSize(variant, Breakpoints.sm)};
    line-height: ${({ variant = DEFAULT_VARIANT }) =>
      getLineHeight(variant, Breakpoints.sm)};
  }

  @media ${DesignTokens.MediaQueryFromMd} {
    font-size: ${({ variant = DEFAULT_VARIANT }) =>
      getFontSize(variant, Breakpoints.md)};
    line-height: ${({ variant = DEFAULT_VARIANT }) =>
      getLineHeight(variant, Breakpoints.md)};
  }

  @media ${DesignTokens.MediaQueryFromLg} {
    font-size: ${({ variant = DEFAULT_VARIANT }) =>
      getFontSize(variant, Breakpoints.lg)};
    line-height: ${({ variant = DEFAULT_VARIANT }) =>
      getLineHeight(variant, Breakpoints.lg)};
  }

  @media ${DesignTokens.MediaQueryFromXl} {
    font-size: ${({ variant = DEFAULT_VARIANT }) =>
      getFontSize(variant, Breakpoints.xl)};
    line-height: ${({ variant = DEFAULT_VARIANT }) =>
      getLineHeight(variant, Breakpoints.xl)};
  }

  @media ${DesignTokens.MediaQueryFromXxl} {
    font-size: ${({ variant = DEFAULT_VARIANT }) =>
      getFontSize(variant, Breakpoints.xxl)};
    line-height: ${({ variant = DEFAULT_VARIANT }) =>
      getLineHeight(variant, Breakpoints.xxl)};
  }
`

/**
 * `Typography` component is the corner stone of Fractal. It defines and boxes
 * allowed text styles throughout your UI.
 *
 * Using this component ensure you to have a consistent and accessible
 * experience.
 */
export default function Typography({
  children,
  element,
  variant = DEFAULT_VARIANT,
  ...props
}: TypographyProps) {
  return (
    <StyledTypography
      as={element || VARIANTS_MAPPING[variant] || 'p'}
      variant={variant}
      {...props}
    >
      {children}
    </StyledTypography>
  )
}
