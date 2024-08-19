import type { ElementType } from 'react'

export const GROUP_NAME = 'paper'

export enum Elevations {
  Bordered = '1',
  Elevated = '2',
  Higher = '3',
}

export const DEFAULT_ELEVATION = Elevations.Bordered

export const DEFAULT_ELEMENT: ElementType = 'div'
