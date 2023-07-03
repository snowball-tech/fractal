import { defineRecipe } from '@pandacss/dev'

import type { SystemStyleObject } from '@/fractal-panda/types'

import { DEFAULT_VARIANT, Variants } from './Typography.constants'

export const typography: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Basic typography styles',
  name: 'typography',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['Typography'],

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
            fontSize: `var(--typography-${variantName}-font-size-xs)`,
            lineHeight: `var(--typography-${variantName}-line-height-xs, var(--typography-${variantName}-line-height))`,
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          md: {
            fontSize: `var(--typography-${variantName}-font-size-md)`,
            lineHeight: `var(--typography-${variantName}-line-height-md, var(--typography-${variantName}-line-height))`,
          },
        },
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})
