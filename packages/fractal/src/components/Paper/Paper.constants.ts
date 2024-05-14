import type { ElementType } from 'react'

export const GROUP_NAME = 'paper'

export enum Elevations {
  /* eslint-disable perfectionist/sort-enums */
  Bordered = '1',
  Elevated = '2',
  Higher = '3',
  /* eslint-enable perfectionist/sort-enums */
}

export const DEFAULT_ELEVATION = Elevations.Bordered

export const DEFAULT_ELEMENT: ElementType = 'div'
