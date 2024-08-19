import { Variants as TypographyVariants } from '@/components/Typography/Typography.constants'

export const GROUP_NAME = 'tag'

export enum Sizes {
  // Small.
  S = 's',

  // Medium.
  M = 'm',
}

export const DEFAULT_SIZE = Sizes.S

export const sizeToTypographyVariant: Record<Sizes, `${TypographyVariants}`> = {
  [Sizes.S]: TypographyVariants.CaptionMedian,

  [Sizes.M]: TypographyVariants.Body1,
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
