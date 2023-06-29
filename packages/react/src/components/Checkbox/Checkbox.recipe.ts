import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/panda-fractal-react/types'

import { DEFAULT_VARIANT, Variants } from './Checkbox.constants'

export const checkboxRoot: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Checkbox',
  name: 'checkboxRoot',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    alignItems: 'center',
    all: 'unset',
    backgroundColor: 'var(--color-base-white)',
    border: 'var(--size-border-2) solid var(--color-border-default)',
    cursor: 'pointer',
    display: 'flex',
    height: '24px',
    justifyContent: 'center',
    width: '24px',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['RxCheckbox.root', 'Checkbox'],

  variants: {
    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {
          '&:not(:is(:checked, [data-checked], [aria-checked=true]))': {
            _groupHover: {
              backgroundColor: `var(--color-decorative-${variantName}-90, var(--color-brand-body))`,
            },
          },

          _checked: {
            backgroundColor: `var(--color-decorative-${variantName}-70, var(--color-brand-${variantName}, var(--color-base-${variantName}, var(--color-base-white))))`,
          },
        } as SystemStyleObject,
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})

export const checkboxIndicator: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Check mark',
  name: 'checkboxIndicator',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['RxCheckbox.indicator'],

  variants: {
    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {} as SystemStyleObject,
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})

export const checkboxLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Checkbox label',
  name: 'checkboxLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    cursor: 'pointer',
    maxWidth: '100%',
    overflow: 'auto',
    overflowWrap: 'break-word',
    py: 'var(--size-spacing-2)',
    width: '100%',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['label'],

  variants: {
    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {
          color: `var(--color-decorative-${variantName}-50, var(--color-base-black))`,
        } as SystemStyleObject,
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})
