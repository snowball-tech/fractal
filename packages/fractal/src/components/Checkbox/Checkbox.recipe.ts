import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

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
          '&:not(:is(:checked, [data-checked], [aria-checked=true], :disabled, [disabled], [data-disabled]))':
            {
              _groupHover: {
                backgroundColor:
                  variantName === Variants.Black
                    ? `var(--color-base-separator)`
                    : `var(--color-decorative-${variantName}-90, var(--color-brand-body-light))`,
              },
            },

          _checked: {
            backgroundColor: `var(--color-decorative-${variantName}-70, var(--color-brand-${variantName}, var(--color-base-${variantName}, var(--color-base-white))))`,
          },

          _disabled: {
            backgroundColor: `var(--color-base-separator)`,
            borderColor: 'grey',
            color: 'grey',
            cursor: 'not-allowed',
          },
        },
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})

export const checkboxIndicator: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Check mark',
  name: 'checkboxIndicator',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    color: 'var(--color-base-black)',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  jsx: ['RxCheckbox.indicator'],

  variants: {
    disabled: {
      true: {
        color: 'grey',
      },
    },

    variant: {
      ...Object.values(Variants).reduce(
        (variants, variantName) => ({
          ...variants,
          [variantName]: {
            ...(variantName === Variants.Black
              ? { color: 'var(--color-base-white)' }
              : {}),
          },
        }),
        {} as Record<Variants, SystemStyleObject>,
      ),
    },
  },
})

export const checkboxLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Checkbox label',
  name: 'checkboxLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    color: 'var(--color-base-black)',
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
    disabled: {
      true: {
        color: 'grey',
        cursor: 'not-allowed',
      },
    },

    required: {
      true: {
        '& > *': {
          _after: {
            color: 'var(--color-feedback-danger-50)',
            content: '" *"',
          },
        },
      },
    },

    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {},
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})
