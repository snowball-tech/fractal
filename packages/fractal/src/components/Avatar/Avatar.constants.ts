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
  [Sizes.S]: TypographyVariants.Body1,
  [Sizes.M]: TypographyVariants.Heading4,
  [Sizes.L]: TypographyVariants.Heading3,
  [Sizes.XL]: TypographyVariants.Heading2,
  /* eslint-enable perfectionist/sort-objects */
}
