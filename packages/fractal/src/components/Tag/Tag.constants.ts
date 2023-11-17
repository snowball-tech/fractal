import { Variants as TypographyVariants } from '@/components/Typography/Typography.constants'

export const GROUP_NAME = 'tag'

export enum Sizes {
  /* eslint-disable perfectionist/sort-enums */
  S = 's',
  M = 'm',
  /* eslint-enable perfectionist/sort-enums */
}

export const DEFAULT_SIZE = Sizes.S

export const sizeToTypographyVariant: Record<Sizes, `${TypographyVariants}`> = {
  /* eslint-disable perfectionist/sort-objects */
  [Sizes.S]: TypographyVariants.CaptionMedian,
  [Sizes.M]: TypographyVariants.Body1,
  /* eslint-enable perfectionist/sort-objects */
}

export enum Colors {
  Blue = 'blue',
  Green = 'green',
  Pink = 'pink',
  Purple = 'purple',
  White = 'white',
  Yellow = 'yellow',
}

export const DEFAULT_COLOR = Colors.Pink
