/* eslint-disable no-underscore-dangle */

import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_VARIANT, Variants } from './Button.constants'

export const GROUP_NAME = 'button'

const variants = Object.values(Variants).reduce(
  (allVariants, variantName) => ({
    ...allVariants,
    [variantName]: {
      _activeNotDisabled: {
        backgroundColor: `var(--color-background-button-${variantName}-active)`,
        border: `var(--border-button-${variantName}-active)`,
        color: `var(--color-text-button-${variantName}-active)`,
        shadow: `var(--shadow-button-${variantName}-active)`,
      },

      _disabled: {
        backgroundColor: `var(--color-background-button-${variantName}-disabled)`,
        border: `var(--border-button-${variantName}-disabled)`,
        color: `var(--color-text-button-${variantName}-disabled)`,
        shadow: `var(--shadow-button-${variantName}-disabled)`,
      },

      _hoverFocusNotDisabled: {
        backgroundColor: `var(--color-background-button-${variantName}-hover)`,
        border: `var(--border-button-${variantName}-hover)`,
        color: `var(--color-text-button-${variantName}-hover)`,
        shadow: `var(--shadow-button-${variantName}-hover)`,
      },

      backgroundColor: `var(--color-background-button-${variantName}-base)`,
      border: `var(--border-button-${variantName}-base)`,
      color: `var(--color-text-button-${variantName}-base)`,
      shadow: `var(--shadow-button-${variantName}-base)`,
    },
  }),
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

    _fullWidth: {
      width: '100%',
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
    maxWidth: '100%',
    outline: 'none',
    px: 'var(--size-button-padding-horizontal)',
    py: 'var(--size-button-padding-vertical)',
    textAlign: 'center',
    transitionDuration: '300ms',
    transitionProperty: 'background-color, color',
    transitionTimingFunction: 'ease-out',
    width: 'fit-content',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  variants: {
    variant: {
      ...variants,
      [Variants.Display]: {
        ...variants[Variants.Display],
        _activeNotDisabled: {
          ...variants[Variants.Display]._activeNotDisabled,

          transform: 'translate(-2px, 4px)',
        },

        _hoverFocusNotDisabled: {
          ...variants[Variants.Display]._hoverFocusNotDisabled,

          transform: 'translate(0, -2px)',
        },
      },
    },
  },
})

export const buttonLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Button label',
  name: 'buttonLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},
})
