import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_VARIANT, Variants } from './Button.constants'

const hoverFocus: { [K in Variants]?: SystemStyleObject } = {}

const variantsObject = Object.values(Variants).reduce(
  (variants, variantName) => {
    hoverFocus[variantName] = {
      '&:not(:is(:disabled, [disabled], [data-disabled]))': {
        backgroundColor: `var(--color-background-button-${variantName}-hover)`,
        border: `var(--border-button-${variantName}-hover)`,
        color: `var(--color-text-button-${variantName}-hover)`,
        shadow: `var(--shadow-button-${variantName}-hover)`,
      },
    }

    return {
      ...variants,
      [variantName]: {
        '&:not(:is(:active, [data-active]))': {
          _focusVisible: hoverFocus[variantName],
          _hover: hoverFocus[variantName],
        },

        _active: {
          '&:not(:is(:disabled, [disabled], [data-disabled]))': {
            backgroundColor: `var(--color-background-button-${variantName}-active)`,
            border: `var(--border-button-${variantName}-active)`,
            color: `var(--color-text-button-${variantName}-active)`,
            shadow: `var(--shadow-button-${variantName}-active)`,
          },
        },

        _disabled: {
          backgroundColor: `var(--color-background-button-${variantName}-disabled)`,
          border: `var(--border-button-${variantName}-disabled)`,
          color: `var(--color-text-button-${variantName}-disabled)`,
          shadow: `var(--shadow-button-${variantName}-disabled)`,
        },

        backgroundColor: `var(--color-background-button-${variantName}-base)`,
        border: `var(--border-button-${variantName}-base)`,
        color: `var(--color-text-button-${variantName}-base)`,
        shadow: `var(--shadow-button-${variantName}-base)`,
      },
    }
  },
  {} as Record<Variants, SystemStyleObject>,
)

export const button: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Button',
  name: 'button',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '& > *': {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },

    '& > p': {
      margin: 'unset',
    },

    _active: {
      transition: 'none',
    },

    _disabled: {
      cursor: 'var(--cursor-disabled)',
    },

    alignItems: 'center',
    all: 'unset',
    borderRadius: 'var(--size-radius-rounded)',
    boxSizing: 'border-box',
    cursor: 'var(--cursor-clickable)',
    display: 'flex',
    gap: 'var(--size-spacing-2)',
    height: '48px',
    justifyContent: 'center',
    maxHeight: '48px',
    maxWidth: 'fit-content',
    outline: 'none',
    px: 'var(--size-button-padding-horizontal)',
    py: 'var(--size-button-padding-vertical)',
    textAlign: 'center',
    transitionDuration: '300ms',
    transitionProperty: 'background-color, color',
    transitionTimingFunction: 'ease-out',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  variants: {
    variant: {
      ...variantsObject,

      [Variants.Display]: {
        ...variantsObject[Variants.Display],

        _active: {
          // eslint-disable-next-line no-underscore-dangle
          ...variantsObject[Variants.Display]?._active,
          '&:not(:is(:disabled, [disabled], [data-disabled]))': {
            // eslint-disable-next-line no-underscore-dangle
            ...variantsObject[Variants.Display]?._active?.[
              '&:not(:is(:disabled, [disabled], [data-disabled]))'
            ],

            transform: 'translate(-2px, 4px)',
          },
        },

        _focusVisible: {
          ...hoverFocus[Variants.Display],
          '&:not(:is(:disabled, [disabled], [data-disabled]))': {
            ...hoverFocus[Variants.Display]?.[
              '&:not(:is(:disabled, [disabled], [data-disabled]))'
            ],

            transform: 'translate(0, -2px)',
          },
        },

        _hover: {
          ...hoverFocus[Variants.Display],
          '&:not(:is(:disabled, [disabled], [data-disabled]))': {
            ...hoverFocus[Variants.Display]?.[
              '&:not(:is(:disabled, [disabled], [data-disabled]))'
            ],

            transform: 'translate(0, -2px)',
          },
        },
      },

      [Variants.Secondary]: {
        ...variantsObject[Variants.Secondary],

        _active: {
          // eslint-disable-next-line no-underscore-dangle
          ...variantsObject[Variants.Secondary]?._active,
          '&:not(:is(:disabled, [disabled], [data-disabled]))': {
            // eslint-disable-next-line no-underscore-dangle
            ...variantsObject[Variants.Secondary]?._active?.[
              '&:not(:is(:disabled, [disabled], [data-disabled]))'
            ],

            margin:
              '0 calc((var(--size-border-2) - var(--size-border-1)) * -1)',
          },
        },

        _focusVisible: {
          ...hoverFocus[Variants.Secondary],
          '&:not(:is(:disabled, [disabled], [data-disabled]))': {
            ...hoverFocus[Variants.Secondary]?.[
              '&:not(:is(:disabled, [disabled], [data-disabled]))'
            ],

            margin:
              '0 calc((var(--size-border-2) - var(--size-border-1)) * -1)',
          },
        },

        _hover: {
          ...hoverFocus[Variants.Secondary],
          '&:not(:is(:disabled, [disabled], [data-disabled]))': {
            ...hoverFocus[Variants.Secondary]?.[
              '&:not(:is(:disabled, [disabled], [data-disabled]))'
            ],

            margin:
              '0 calc((var(--size-border-2) - var(--size-border-1)) * -1)',
          },
        },
      },
    },
  },
})
