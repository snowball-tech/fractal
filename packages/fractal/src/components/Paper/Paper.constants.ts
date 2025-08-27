import type { ElementType } from 'react'

export const GROUP_NAME = 'paper'

export enum Elevations {
  Bordered = '1',
  Elevated = '2',
  Higher = '3',
}

export enum AlternateElevations {
  Bordered = 'bordered',
  Elevated = 'elevated',
  Higher = 'higher',
}

export const DEFAULT_ELEVATION = Elevations.Bordered

export const ELEVATIONS = {
  [AlternateElevations.Bordered]: Elevations.Bordered,
  [AlternateElevations.Elevated]: Elevations.Elevated,
  [AlternateElevations.Higher]: Elevations.Higher,
  [Elevations.Bordered]: Elevations.Bordered,
  [Elevations.Elevated]: Elevations.Elevated,
  [Elevations.Higher]: Elevations.Higher,
} as const

export const DEFAULT_ELEMENT: ElementType = 'div'
