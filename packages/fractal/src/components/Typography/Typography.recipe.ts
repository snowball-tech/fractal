import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_VARIANT, Variants } from './Typography.constants'

export const GROUP_NAME = 'typography'

export const typography: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  variants: {
    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,

        [variantName]: {
          fontFamily: `var(--typography-${variantName}-font-family)`,
          fontSize: `var(--typography-${variantName}-font-size)`,
          fontWeight: `var(--typography-${variantName}-font-weight)`,
          letterSpacing: `var(--typography-${variantName}-letter-spacing)`,
          lineHeight: `var(--typography-${variantName}-line-height)`,
          textDecoration: `var(--typography-${variantName}-text-decoration)`,

          xs: {
            fontSize: `var(--typography-${variantName}-font-size-xs, var(--typography-${variantName}-font-size))`,
            lineHeight: `var(--typography-${variantName}-line-height-xs, var(--typography-${variantName}-line-height))`,
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          md: {
            fontSize: `var(--typography-${variantName}-font-size-md, var(--typography-${variantName}-font-size-xs, var(--typography-${variantName}-font-size)))`,
            lineHeight: `var(--typography-${variantName}-line-height-md, var(--typography-${variantName}-line-height-xs, var(--typography-${variantName}-line-height)))`,
          },
        },
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'typography',
  description: 'Basic typographic styles',
  jsx: ['Typography'],
})
