import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { Variants } from './InputRadio.constants'

export const GROUP_NAME = 'input-radio'

export const inputRadioGroup: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '&[data-orientation="horizontal"]': {
      sm: {
        flexWrap: 'nowrap',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    _fullWidth: {
      width: '100%',
    },

    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-spacing-3)',
    maxWidth: '100%',
    width: 'fit-content',
  },

  className: 'inputRadioGroup',
  description: 'Radio group',
  jsx: ['InputRadioGroup'],
})

export const inputRadioContainer = defineRecipe({
  base: {
    '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) &, &:is(:disabled, [disabled], [data-disabled], .disabled)':
      {
        color: 'var(--color-text-checkbox-disabled)!',
        cursor: 'var(--cursor-disabled)',
      },

    _fullWidth: {
      maxWidth: '100%',
      width: '100%',
    },

    alignItems: 'center',
    borderRadius: 'var(--size-radius-s)',
    boxSizing: 'border-box',
    display: 'flex',
    maxWidth: '100%',
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

  className: 'inputRadioContainer',
  description: 'Radio container',
  jsx: ['InputRadio'],
})

export const inputRadio = defineRecipe({
  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '&:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:checked, [data-checked], .checked, :disabled, [data-disabled], .disabled)) > div':
      {
        backgroundColor: `var(--color-background-radio-hover)`,
      },

    '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) & > div, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) & > div':
      {
        color: 'var(--color-box-checkbox-disabled)!',
        cursor: 'var(--cursor-disabled)',
      },

    '.fractal-input-radio-group:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) & > div, .fractal-input-radio:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) & > div':
      {
        _checkedNotDisabled: {
          backgroundColor: `var(--color-background-radio-checked)`,
        },
      },

    backgroundColor: 'unset',
    border: 'none',
    borderRadius: 'var(--size-radius-rounded)',
    cursor: 'var(--cursor-clickable)',
    flex: 0,
    height: '100%',
    minHeight: 'var(--size-spacing-6)',
    pl: 'var(--size-checkbox-padding-horizontal)',
    px: 'unset',
    py: 'unset',

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

  className: 'inputRadio',
  description: 'Radio',
  jsx: ['InputRadio'],
})

export const inputRadioCheckmark: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) &, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) &':
        {
          borderColor: 'var(--color-box-checkbox-disabled)',
          color: 'var(--color-mark-checkbox-disabled)!',
          cursor: 'var(--cursor-disabled)',
        },

      alignItems: 'center',
      border: 'var(--size-border-2) solid var(--color-border-default)',
      borderRadius: 'var(--size-radius-rounded)',
      display: 'flex',
      height: '24px',
      maxHeight: '24px',
      maxWidth: '24px',
      mx: 'var(--size-checkbox-padding-horizontal)',
      width: '24px',

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

    className: 'inputRadioCheckmark',
    description: 'Radio checkmark',
    jsx: ['InputRadio'],
  })

export const inputRadioLabel: ReturnType<typeof defineRecipe> = defineRecipe({
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
    pr: 'var(--size-checkbox-padding-horizontal)',
    py: 'var(--size-checkbox-padding-vertical)',

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

  className: 'inputRadioLabel',
  description: 'Radio label',
  jsx: ['InputRadio'],
})
