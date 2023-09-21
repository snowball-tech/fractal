import { Variants as TypographyVariants } from '@/components/Typography/Typography.constants'

export enum Sizes {
  /* eslint-disable perfectionist/sort-enums */
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  /* eslint-enable perfectionist/sort-enums */
}

export const DEFAULT_SIZE = Sizes.M

export const sizeToTypographyVariant: Record<Sizes, `${TypographyVariants}`> = {
  /* eslint-disable perfectionist/sort-objects */
  [Sizes.S]: TypographyVariants.CaptionBold,
  [Sizes.M]: TypographyVariants.CaptionBold,
  [Sizes.L]: TypographyVariants.Body1Bold,
  [Sizes.XL]: TypographyVariants.Heading4,
  /* eslint-enable perfectionist/sort-objects */
}
