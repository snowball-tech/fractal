export enum Colors {
  Blue = 'blue',
  Error = 'error',
  Green = 'green',
  Pink = 'pink',
  Purple = 'purple',
  Success = 'success',
  Warning = 'warning',
  White = 'white',
  Yellow = 'yellow',
}

export const DEFAULT_COLOR = Colors.Pink

export enum Elevations {
  /* eslint-disable perfectionist/sort-enums */
  Flat = '0',
  Bordered = '1',
  Low = '2',
  High = '3',
  /* eslint-enable perfectionist/sort-enums */
}

export const DEFAULT_ELEVATION = Elevations.Flat
