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
    base: {
      _fullWidth: {
        width: '100%',
      },

      alignItems: 'center',
      borderRadius: 'var(--size-radius-s)',
      boxSizing: 'border-box',
      display: 'flex',
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

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    className: 'inputCheckboxContainer',
    description: 'Checkbox container',
    jsx: ['InputCheckbox'],
  })

export const inputCheckbox: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    backgroundColor: 'unset',
    border: 'none',
    borderRadius: 'var(--size-radius-xs)',
    cursor: 'var(--cursor-clickable)',
    flex: 0,
    height: '100%',
    minHeight: 'var(--size-spacing-6)',
    pl: 'var(--size-checkbox-padding-horizontal)',
    px: 'unset',
    py: 'unset',
  },

  defaultVariants: {
    color: DEFAULT_COLOR,
  },

  variants: {
    color: Object.values(Colors).reduce(
      (colors, colorName) => ({
        ...colors,
        [colorName]: {
          '&:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:checked, [data-checked], .checked, :disabled, [data-disabled], .disabled)) > div':
            {
              backgroundColor: `var(--color-decorative-${colorName}-90, var(--color-brand-${colorName}, var(--color-base-white)))`,
            },

          '.fractal-input-checkbox:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) &:is(:checked, [data-checked], [aria-checked=true]) > div':
            {
              backgroundColor: `var(--color-decorative-${colorName}-70, var(--color-brand-${colorName}, var(--color-base-${colorName}, var(--color-base-white))))`,
            },

          _inputCheckboxDisabled: {
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

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'inputCheckbox',
  description: 'Checkbox',
  jsx: ['InputCheckbox'],
})

export const inputCheckboxCheckmark: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      alignItems: 'center',
      border: 'var(--size-border-2) solid var(--color-border-default)',
      borderRadius: 'var(--size-radius-xs)',
      display: 'flex',
      height: '24px',
      maxHeight: '24px',
      maxWidth: '24px',
      minHeight: '24px',
      minWidth: '24px',
      mx: 'var(--size-checkbox-padding-horizontal)',
      width: '24px',
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
              borderColor: 'var(--color-box-checkbox-disabled)',
              color: 'var(--color-mark-checkbox-disabled)',
              cursor: 'var(--cursor-disabled)',
            },

            color: `var(--color-mark-checkbox-${variantName})`,
          },
        }),
        {} as Record<Variants, SystemStyleObject>,
      ),
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    className: 'inputCheckboxCheckmark',
    description: 'Checkbox checkmark',
    jsx: ['InputCheckbox'],
  })

export const inputCheckboxLabel: ReturnType<typeof defineRecipe> = defineRecipe(
  {
    base: {
      _inputCheckboxRequired: {
        _after: {
          color: 'var(--color-feedback-danger-50)',
          content: '" *"',
        },
      },

      cursor: 'var(--cursor-clickable)',
      flex: 1,
      overflow: 'auto',
      overflowWrap: 'break-word',
      pr: 'var(--size-checkbox-padding-horizontal)',
      py: 'var(--size-checkbox-padding-vertical)',
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

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    className: 'inputCheckboxLabel',
    description: 'Checkbox label',
    jsx: ['InputCheckbox'],
  },
)
