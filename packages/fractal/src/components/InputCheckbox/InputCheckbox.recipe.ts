import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import {
  Colors,
  DEFAULT_COLOR,
  DEFAULT_VARIANT,
  Variants,
} from './InputCheckbox.constants'

export const GROUP_NAME = 'input-checkbox'

export const inputCheckboxContainer: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Checkbox container',
    name: 'inputCheckboxContainer',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputCheckbox'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      _fullWidth: {
        width: 'calc(100% - (var(--size-checkbox-padding-horizontal) * 2))',
      },

      alignItems: 'center',
      borderRadius: 'var(--size-radius-s)',
      display: 'flex',
      gap: 'var(--size-checkbox-gap)',
      px: 'var(--size-checkbox-padding-horizontal)',
      py: 'var(--size-checkbox-padding-vertical)',
      width: 'fit-content',
    },

    defaultVariants: {
      color: DEFAULT_COLOR,
      variant: DEFAULT_VARIANT,
    },

    variants: {
      color: Object.values(Colors).reduce(
        (colors, colorName) => ({
          ...colors,
          [colorName]: {},
        }),
        {} as Record<Colors, SystemStyleObject>,
      ),

      variant: Object.values(Variants).reduce(
        (variants, variantName) => ({
          ...variants,
          [variantName]: {
            _disabled: {
              color: 'var(--color-text-checkbox-disabled)',
              cursor: 'var(--cursor-disabled)',
            },

            backgroundColor: `var(--color-background-checkbox-${variantName})`,
            border: `var(--border-checkbox-${variantName})`,
            color: `var(--color-text-checkbox-${variantName})`,
            shadow: `var(--shadow-checkbox-checkbox-${variantName})`,
          },
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
    border: 'var(--size-border-2) solid var(--color-border-default)',
    borderRadius: 'var(--size-radius-xs)',
    cursor: 'var(--cursor-clickable)',
    display: 'flex',
    height: '20px',
    justifyContent: 'center',
    width: '20px',
  },

  defaultVariants: {
    color: DEFAULT_COLOR,
  },

  variants: {
    color: Object.values(Colors).reduce(
      (colors, colorName) => ({
        ...colors,
        [colorName]: {
          '&:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:checked, [data-checked], .checked, :disabled, [data-disabled], .disabled))':
            {
              backgroundColor: `var(--color-decorative-${colorName}-90, var(--color-brand-${colorName}, var(--color-base-white)))`,
            },

          '.fractal-input-checkbox:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) &:is(:checked, [data-checked], [aria-checked=true])':
            {
              backgroundColor: `var(--color-decorative-${colorName}-70, var(--color-brand-${colorName}, var(--color-base-${colorName}, var(--color-base-white))))`,
            },

          _inputCheckboxDisabled: {
            borderColor: 'var(--color-box-checkbox-disabled)',
            color: 'var(--color-box-checkbox-disabled)',
            cursor: 'var(--cursor-disabled)',
          },
        },
      }),
      {} as Record<Colors, SystemStyleObject>,
    ),

    variant: Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [variantName]: {
          _disabled: {
            color: 'var(--color-box-checkbox-disabled)',
            cursor: 'var(--cursor-disabled)',
          },

          color: `var(--color-box-checkbox-${variantName})`,
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
    },

    defaultVariants: {
      color: DEFAULT_COLOR,
    },

    variants: {
      color: {
        ...Object.values(Colors).reduce(
          (colors, colorName) => ({
            ...colors,
            [colorName]: {},
          }),
          {} as Record<Colors, SystemStyleObject>,
        ),
      },

      variant: Object.values(Variants).reduce(
        (variants, variantName) => ({
          ...variants,
          [variantName]: {
            _inputCheckboxDisabled: {
              color: 'var(--color-mark-checkbox-disabled)',
              cursor: 'var(--cursor-disabled)',
            },

            color: `var(--color-mark-checkbox-${variantName})`,
          },
        }),
        {} as Record<Variants, SystemStyleObject>,
      ),
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
      _inputCheckboxRequired: {
        _after: {
          color: 'var(--color-feedback-danger-50)',
          content: '" *"',
        },
      },

      cursor: 'var(--cursor-clickable)',
      flexGrow: 1,
      overflow: 'auto',
      overflowWrap: 'break-word',
    },

    defaultVariants: {
      color: DEFAULT_COLOR,
    },

    variants: {
      color: Object.values(Colors).reduce(
        (colors, colorName) => ({
          ...colors,
          [colorName]: {},
        }),
        {} as Record<Colors, SystemStyleObject>,
      ),

      variant: Object.values(Variants).reduce(
        (variants, variantName) => ({
          ...variants,
          [variantName]: {
            _inputCheckboxDisabled: {
              color: 'var(--color-text-checkbox-disabled)',
              cursor: 'var(--cursor-disabled)',
            },

            color: `var(--color-text-checkbox-${variantName})`,
          },
        }),
        {} as Record<Variants, SystemStyleObject>,
      ),
    },
  },
)
