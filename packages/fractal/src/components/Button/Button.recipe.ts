import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_VARIANT, Variants } from './Button.constants'

export const button: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Button',
  name: 'button',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    _disabled: {
      cursor: 'not-allowed',
    },

    all: 'unset',
    borderRadius: 'var(--size-radius-rounded)',
    boxSizing: 'border-box',
    cursor: 'pointer',
    maxWidth: 'fit-content',
    px: 'var(--size-button-padding-horizontal)',
    py: 'var(--size-button-padding-vertical)',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  variants: {
    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {
          '&:not(:is(:active, [data-active]))': {
            _focus: {
              backgroundColor: `var(--color-background-button-${variantName}-hover)`,
              border: `var(--border-button-${variantName}-hover)`,
              color: `var(--color-text-button-${variantName}-hover)`,
              shadow: `var(--shadow-button-${variantName}-hover)`,
            },

            _hover: {
              '&:not(:is(:disabled, [disabled], [data-disabled]))': {
                backgroundColor: `var(--color-background-button-${variantName}-hover)`,
                border: `var(--border-button-${variantName}-hover)`,
                color: `var(--color-text-button-${variantName}-hover)`,
                shadow: `var(--shadow-button-${variantName}-hover)`,
              },
            },
          },

          _active: {
            backgroundColor: `var(--color-background-button-${variantName}-active)`,
            border: `var(--border-button-${variantName}-active)`,
            color: `var(--color-text-button-${variantName}-active)`,
            shadow: `var(--shadow-button-${variantName}-active)`,
          },

          _disabled: {
            backgroundColor: `var(--color-background-button-${variantName}-disabled)`,
            border: `var(--border-button-${variantName}-disabled)`,
            color: `var(--color-text-button-${variantName}-disabled)`,
            shadow: `var(--shadow-button-${variantName}-disabled)`,
          },

          backgroundColor: `var(--color-background-button-${variantName}-base)`,
          border: `var(--border-button-${variantName}-base)`,
          color: `var(--color-text-button-${variantName}-base)`,
          shadow: `var(--shadow-button-${variantName}-base)`,
        },
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})
