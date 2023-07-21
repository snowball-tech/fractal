/* eslint-disable no-underscore-dangle */

import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_VARIANT, Variants } from './Toggle.constants'

export const GROUP_NAME = 'toggle'

const variants = Object.values(Variants).reduce(
  (allVariants, variantName) => ({
    ...allVariants,
    [variantName]: {
      _activeNotDisabled: {
        _notPressed: {
          backgroundColor: `var(--color-background-toggle-${variantName}-active)`,
          border: `var(--border-toggle-${variantName}-active)`,
          color: `var(--color-text-toggle-${variantName}-active)`,
          shadow: `var(--shadow-toggle-${variantName}-active)`,
        },
      },

      _disabled: {
        backgroundColor: `var(--color-background-toggle-${variantName}-disabled)`,
        border: `var(--border-toggle-${variantName}-disabled)`,
        color: `var(--color-text-toggle-${variantName}-disabled)`,
        shadow: `var(--shadow-toggle-${variantName}-disabled)`,
      },

      _hoverFocusNotDisabled: {
        _notPressed: {
          backgroundColor: `var(--color-background-toggle-${variantName}-hover)`,
          border: `var(--border-toggle-${variantName}-hover)`,
          color: `var(--color-text-toggle-${variantName}-hover)`,
          shadow: `var(--shadow-toggle-${variantName}-hover)`,
        },
      },

      _toggledNotDisabled: {
        backgroundColor: `var(--color-background-toggle-${variantName}-toggled)`,
        border: `var(--border-toggle-${variantName}-toggled)`,
        color: `var(--color-text-toggle-${variantName}-toggled)`,
        shadow: `var(--shadow-toggle-${variantName}-toggled)`,
      },

      backgroundColor: `var(--color-background-toggle-${variantName}-base)`,
      border: `var(--border-toggle-${variantName}-base)`,
      color: `var(--color-text-toggle-${variantName}-base)`,
      shadow: `var(--shadow-toggle-${variantName}-base)`,
    },
  }),
  {} as Record<Variants, SystemStyleObject>,
)

export const toggle: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Toggle',
  name: 'toggle',

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
      [Variants.Primary]: {
        ...variants[Variants.Primary],
        _activeNotDisabled: {
          _notPressed: {
            ...variants[Variants.Primary]._activeNotDisabled._notPressed,

            transform: 'translate(-2px, 4px)',
          },
        },

        _hoverFocusNotDisabled: {
          _notPressed: {
            ...variants[Variants.Primary]._hoverFocusNotDisabled._notPressed,

            transform: 'translate(0, -2px)',
          },
        },
      },
    },
  },
})

export const toggleLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Toggle label',
  name: 'toggleLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},
})
