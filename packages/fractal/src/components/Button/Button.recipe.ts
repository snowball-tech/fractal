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
  base: {
    '& > p': {
      margin: 'unset',
    },

    '&.icon-only': {
      width: '48px',
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

      [Variants.Text]: {
        ...variants[Variants.Text],
        '&.icon-only': {
          height: '24px',
          padding: 0,
          width: '24px',
        },
      },
    },
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'button',
  description: 'Button',
  jsx: ['Button'],
})

export const buttonLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    flex: 1,
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    pt: 'var(--size-spacing-half)',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  },

  className: 'buttonLabel',
  description: 'Button label',
  jsx: ['Button'],
})

export const buttonIcon: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    height: '24px',
    mt: 'var(--size-spacing-half)',
    width: '24px',
  },

  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },

  variants: {
    variant: {
      ...Object.values(Variants).reduce(
        (allVariants, variantName) => ({
          ...allVariants,
          [variantName]: {},
        }),
        {} as Record<Variants, SystemStyleObject>,
      ),
      [Variants.Text]: {
        '.fractal-button.icon-only &': {
          mt: 0,
        },
      },
    },
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'buttonIcon',
  description: 'Button icon',
  jsx: ['Button'],
})
