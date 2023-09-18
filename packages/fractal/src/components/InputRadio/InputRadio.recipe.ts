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
    gap: 'var(--size-checkbox-gap)',
    maxWidth: '100%',
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

  className: 'inputRadioContainer',
  description: 'Radio container',
  jsx: ['InputRadio'],
})

export const inputRadio: ReturnType<typeof defineRecipe> = defineRecipe({
  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
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

    _hoverNotChecked: {
      _notDisabled: {
        backgroundColor: `var(--color-background-radio-hover)`,
      },
    },

    alignItems: 'center',
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

  className: 'inputRadio',
  description: 'Radio',
  jsx: ['InputRadio'],
})

export const inputRadioCheckmark: ReturnType<typeof defineRecipe> =
  defineRecipe({
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
