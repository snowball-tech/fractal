export const GROUP_NAME = 'card'

export enum Colors {
  Blue = 'blue',
  Error = 'error',
  Green = 'green',
  Pink = 'pink',
  Purple = 'purple',
  Success = 'success',
  Warning = 'warning',
  Yellow = 'yellow',
}

export const DEFAULT_COLOR = Colors.Pink

export enum FontSizes {
  Body1 = '1',
  Body2 = '2',
}
export enum AlternateFontSizes {
  Body1 = 'body-1',
  Body2 = 'body-2',
  Normal = 'normal',
  Small = 'small',
}

export const DEFAULT_FONT_SIZE = FontSizes.Body1

export const FONT_SIZES = {
  [AlternateFontSizes.Body1]: FontSizes.Body1,
  [AlternateFontSizes.Body2]: FontSizes.Body2,
  [AlternateFontSizes.Normal]: FontSizes.Body1,
  [AlternateFontSizes.Small]: FontSizes.Body2,
  [FontSizes.Body1]: FontSizes.Body1,
  [FontSizes.Body2]: FontSizes.Body2,
} as const
