import { defineRecipe } from '@pandacss/dev'

import type { SystemStyleObject } from '@/fractal-panda/types'

import {
  DEFAULT_SIZE,
  DEFAULT_VARIANT,
  Sizes,
  Variants,
} from './Button.constants'

export const button: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Button',
  name: 'button',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    all: 'unset',
    border: 'var(--size-border-1) solid var(--color-border-default)',
    borderRadius: '8px',
    color: 'var(--color-base-black)',
    cursor: 'pointer',
    maxWidth: 'fit-content',
    shadow: 'var(--shadow-brutal)',
  },

  defaultVariants: {
    size: DEFAULT_SIZE,
    variant: DEFAULT_VARIANT,
  },

  variants: {
    disabled: {
      true: {
        backgroundColor: 'var(--color-base-separator)',
        color: 'grey',
        cursor: 'not-allowed',
      },
    },

    size: {
      [Sizes.Large]: {
        p: 'var(--size-spacing-3)',
        pr: 'var(--size-spacing-4)',
      },
      [Sizes.Medium]: {
        p: 'var(--size-spacing-2)',
        pr: 'var(--size-spacing-3)',
      },
      [Sizes.Small]: {
        p: 'var(--size-spacing-1)',
        pr: 'var(--size-spacing-2)',
      },
    },

    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {
          ...(variantName === Variants.Secondary
            ? { color: 'var(--color-base-white)' }
            : {}),

          backgroundColor: `var(--color-brand-${variantName}, var(--color-base-${variantName}, var(--color-base-white)))`,
        },
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})
