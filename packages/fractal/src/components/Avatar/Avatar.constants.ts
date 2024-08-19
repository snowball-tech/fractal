import { Variants as TypographyVariants } from '@/components/Typography/Typography.constants'

export const GROUP_NAME = 'avatar'

export enum Sizes {
  // Small.
  S = 's',

  // Medium.
  M = 'm',

  // Large.
  L = 'l',

  // Extra large.
  XL = 'xl',

  // Fluid.
  Fluid = 'fluid',
}

export const DEFAULT_SIZE = Sizes.M

export const sizeToTypographyVariant: Record<Sizes, `${TypographyVariants}`> = {
  [Sizes.S]: TypographyVariants.CaptionBold,

  [Sizes.M]: TypographyVariants.CaptionBold,

  [Sizes.L]: TypographyVariants.Body1Bold,

  [Sizes.XL]: TypographyVariants.Heading4,

  [Sizes.Fluid]: TypographyVariants.CaptionBold,
}
