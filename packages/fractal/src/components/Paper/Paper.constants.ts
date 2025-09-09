import type { ElementType } from 'react'

import { Variants as TypographyVariants } from '@/components/Typography/Typography.constants'

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
