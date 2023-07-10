import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_VARIANT, Variants } from './InputCheckbox.constants'

export const inputCheckboxContainer: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Checkbox container',
    name: 'inputCheckboxContainer',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputCheckbox'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      '&.disabled': {
        backgroundColor: 'var(--color-background-disabled)',
        border: 'var(--border-disabled)',
        color: 'var(--color-background-disabled)',
        cursor: 'var(--cursor-disabled)',
      },

      alignItems: 'center',
      backgroundColor: 'var(--color-base-white)',
      border: 'var(--border-1)',
      borderRadius: 'var(--size-radius-s)',
      color: 'var(--color-text-dark)',
      display: 'flex',
      gap: 'var(--size-spacing-2)',
      p: 'var(--size-spacing-2)',
      shadow: 'var(--shadow-brutal-1)',
    },

    defaultVariants: {
      variant: DEFAULT_VARIANT,
    },

    variants: {
      variant: Object.values(Variants).reduce(
        (variants, variantName) => ({
          ...variants,
          [variantName]: {},
        }),
        {} as Record<Variants, SystemStyleObject>,
      ),
    },
  })

export const inputCheckbox: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Checkbox',
  name: 'inputCheckbox',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputCheckbox'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    alignItems: 'center',
    all: 'unset',
    backgroundColor: 'var(--color-base-white)',
    border: 'var(--size-border-2) solid var(--color-border-default)',
    borderRadius: 'var(--size-radius-xs)',
    cursor: 'var(--cursor-clickable)',
    display: 'flex',
    height: '20px',
    justifyContent: 'center',
    width: '20px',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

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
                    ? `var(--color-base-grey-50)`
                    : `var(--color-decorative-${variantName}-90, var(--color-brand-${variantName}, var(--color-base-white)))`,
              },
            },

          _checked: {
            backgroundColor: `var(--color-decorative-${variantName}-70, var(--color-brand-${variantName}, var(--color-base-${variantName}, var(--color-base-white))))`,
          },

          _disabled: {
            backgroundColor: `var(--color-background-disabled)`,
            borderColor: 'var(--color-border-disabled)',
            color: 'var(--color-text-disabled)',
            cursor: 'var(--cursor-disabled)',
          },
        },
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})

export const inputCheckboxCheckmark: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Checkbox checkmark',
    name: 'inputCheckboxCheckmark',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputCheckbox'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      '& > svg': {
        height: '20px',
        width: '20px',
      },

      '.group.disabled &': {
        color: 'var(--color-text-disabled)',
      },

      color: 'var(--color-text-dark)',
    },

    defaultVariants: {
      variant: DEFAULT_VARIANT,
    },

    variants: {
      variant: {
        ...Object.values(Variants).reduce(
          (variants, variantName) => ({
            ...variants,
            [variantName]: {
              ...(variantName === Variants.Black
                ? { color: 'var(--color-text-light)' }
                : {}),
            },
          }),
          {} as Record<Variants, SystemStyleObject>,
        ),
      },
    },
  })

export const inputCheckboxLabel: ReturnType<typeof defineRecipe> = defineRecipe(
  {
    description: 'Checkbox label',
    name: 'inputCheckboxLabel',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputCheckbox'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      '.group.disabled &': {
        color: 'var(--color-text-disabled)',
        cursor: 'var(--cursor-disabled)',
      },
      '.group.required &': {
        _after: {
          color: 'var(--color-feedback-danger-50)',
          content: '" *"',
        },
      },

      color: 'var(--color-text-dark)',
      cursor: 'var(--cursor-clickable)',
      flexGrow: 1,
      overflow: 'auto',
      overflowWrap: 'break-word',
    },

    defaultVariants: {
      variant: DEFAULT_VARIANT,
    },

    variants: {
      variant: Object.values(Variants).reduce(
        (variants, variantName) => ({
          ...variants,
          [variantName]: {},
        }),
        {} as Record<Variants, SystemStyleObject>,
      ),
    },
  },
)
