import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { Colors, DEFAULT_COLOR, Variants } from './InputRadio.constants'

export const GROUP_NAME = 'input-radio'

function getHoverSelector(position: number) {
  return `.fractal-input-radio-group:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) > .fractal-input-radio:is(:hover, [data-hover]):not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)):nth-of-type(${position}) &:not(:is(:checked, [data-checked], [aria-checked=true])), .fractal-input-radio-group:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) > .fractal-input-radio:is(:hover, [data-hover]):not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)):nth-of-type(5n+${position}) &:not(:is(:checked, [data-checked], [aria-checked=true]))`
}

function getCheckedSelector(position: number) {
  return `.fractal-input-radio-group:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) > .fractal-input-radio:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)):nth-of-type(${position}) &:is(:checked, [data-checked], [aria-checked=true]), .fractal-input-radio-group:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) > .fractal-input-radio:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)):nth-of-type(5n+${position}) &:is(:checked, [data-checked], [aria-checked=true])`
}

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
    },
  })

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - This type seems to big to compute for TS...
export const inputRadio: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Radio',
  name: 'inputRadio',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputRadio'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) &, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) &':
      {
        borderColor: 'var(--color-box-checkbox-disabled)',
        color: 'var(--color-box-checkbox-disabled)!',
        cursor: 'var(--cursor-disabled)',
      },

    alignItems: 'center',
    all: 'unset',
    border: 'var(--size-border-2) solid var(--color-border-default)',
    borderRadius: 'var(--size-radius-rounded)',
    cursor: 'var(--cursor-clickable)',
    display: 'flex',
    height: '20px',
    justifyContent: 'center',
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

  defaultVariants: {
    color: DEFAULT_COLOR,
  },

  variants: {
    color: {
      ...Object.values(Colors)
        .filter((colorName) => colorName !== Colors.Auto)
        .reduce(
          (colors, colorName) => ({
            ...colors,
            [colorName]: {
              '.fractal-input-radio:is(:hover, [data-hover]):not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) &:not(:is(:checked, [data-checked], [aria-checked=true]))':
                {
                  backgroundColor: `var(--color-decorative-${colorName}-90, var(--color-brand-${colorName}, var(--color-base-white)))`,
                },

              _checked: {
                backgroundColor: `var(--color-decorative-${colorName}-70, var(--color-brand-${colorName}, var(--color-base-${colorName}, var(--color-base-white))))`,
              },
            },
          }),
          {} as Record<Colors, SystemStyleObject>,
        ),
      [Colors.Auto]: {
        [getCheckedSelector(1)]: {
          backgroundColor: `var(--color-background-radio-checked-1)`,
        },

        [getCheckedSelector(2)]: {
          backgroundColor: `var(--color-background-radio-checked-2)`,
        },
        [getCheckedSelector(3)]: {
          backgroundColor: `var(--color-background-radio-checked-3)`,
        },
        [getCheckedSelector(4)]: {
          backgroundColor: `var(--color-background-radio-checked-4)`,
        },
        [getCheckedSelector(5)]: {
          backgroundColor: `var(--color-background-radio-checked-5)`,
        },

        [getHoverSelector(1)]: {
          backgroundColor: `var(--color-background-radio-hover-1)`,
        },

        [getHoverSelector(2)]: {
          backgroundColor: `var(--color-background-radio-hover-2)`,
        },
        [getHoverSelector(3)]: {
          backgroundColor: `var(--color-background-radio-hover-3)`,
        },
        [getHoverSelector(4)]: {
          backgroundColor: `var(--color-background-radio-hover-4)`,
        },
        [getHoverSelector(5)]: {
          backgroundColor: `var(--color-background-radio-hover-5)`,
        },
      } as Record<Colors, SystemStyleObject>,
    },
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
  },
})
