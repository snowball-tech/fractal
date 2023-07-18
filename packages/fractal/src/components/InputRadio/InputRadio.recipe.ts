import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { Variants } from './InputRadio.constants'

export const GROUP_NAME = 'input-radio'

export const inputRadioGroup: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Radio group',
  name: 'inputRadioGroup',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputRadioGroup'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '&[data-orientation="horizontal"]': {
      flexDirection: 'row',
    },

    _fullWidth: {
      width: '100%',
    },

    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-spacing-3)',
    width: 'fit-content',
  },
})

export const inputRadioContainer: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Radio container',
    name: 'inputRadioContainer',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputRadio'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) &, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) &':
        {
          color: 'var(--color-text-checkbox-disabled)!',
          cursor: 'var(--cursor-disabled)',
        },

      _fullWidth: {
        maxWidth: 'calc(100% - (var(--size-checkbox-padding-horizontal) * 2))',
        width: '100%',
      },

      alignItems: 'center',
      borderRadius: 'var(--size-radius-s)',
      display: 'flex',
      gap: 'var(--size-checkbox-gap)',
      px: 'var(--size-checkbox-padding-horizontal)',
      py: 'var(--size-checkbox-padding-vertical)',
      width: 'fit-content',

      ...Object.values(Variants).reduce(
        (variants, variantName) => ({
          ...variants,
          [`&.variant-${variantName}`]: {
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

export const inputRadio = defineRecipe({
  description: 'Radio',
  name: 'inputRadio',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputRadio'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '.fractal-input-radio:is(:hover, [data-hover]):not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) &:not(:is(:checked, [data-checked], [aria-checked=true]))':
      {
        backgroundColor: `var(--color-background-radio-hover)`,
      },

    '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) &, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) &':
      {
        borderColor: 'var(--color-box-checkbox-disabled)',
        color: 'var(--color-box-checkbox-disabled)!',
        cursor: 'var(--cursor-disabled)',
      },

    '.fractal-input-radio-group:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) &, .fractal-input-radio:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) &':
      {
        _checkedNotDisabled: {
          backgroundColor: `var(--color-background-radio-checked)`,
        },
      },

    alignItems: 'center',
    all: 'unset',
    border: 'var(--size-border-2) solid var(--color-border-default)',
    borderRadius: 'var(--size-radius-rounded)',
    cursor: 'var(--cursor-clickable)',
    display: 'flex',
    height: '20px',
    justifyContent: 'center',
    minHeight: '20px',
    minWidth: '20px',
    width: '20px',

    ...Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [`.fractal-input-radio.variant-${variantName} &`]: {
          color: `var(--color-box-checkbox-${variantName})`,
        },
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})

export const inputRadioCheckmark: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Radio checkmark',
    name: 'inputRadioCheckmark',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputRadio'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      '& > svg': {
        height: '20px',
        width: '20px',
      },

      '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) &, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) &':
        {
          color: 'var(--color-mark-checkbox-disabled)!',
          cursor: 'var(--cursor-disabled)',
        },

      ...Object.values(Variants).reduce(
        (variants, variantName) => ({
          ...variants,
          [`.fractal-input-radio.variant-${variantName} &`]: {
            color: `var(--color-mark-checkbox-${variantName})`,
          },
        }),
        {} as Record<Variants, SystemStyleObject>,
      ),
    },
  })

export const inputRadioLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Radio label',
  name: 'inputRadioLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputRadio'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) &, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) &':
      {
        color: 'var(--color-text-checkbox-disabled)!',
        cursor: 'var(--cursor-disabled)',
      },

    _inputRadioRequired: {
      _after: {
        color: 'var(--color-feedback-danger-50)',
        content: '" *"',
      },
    },

    cursor: 'var(--cursor-clickable)',
    flexGrow: 1,
    overflow: 'auto',
    overflowWrap: 'break-word',

    ...Object.values(Variants).reduce(
      (variants, variantName) => ({
        ...variants,
        [`.fractal-input-radio.variant-${variantName}`]: {
          color: `var(--color-text-checkbox-${variantName})`,
        },
      }),
      {} as Record<Variants, SystemStyleObject>,
    ),
  },
})
