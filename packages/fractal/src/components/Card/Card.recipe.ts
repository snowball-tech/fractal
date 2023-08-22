import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { Colors, DEFAULT_COLOR } from './Card.constants'

export const GROUP_NAME = 'card'

export const card: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '&.dismissable': {
      pr: 'calc(var(--size-card-padding-horizontal) + var(--size-spacing-4))',
    },

    borderRadius: 'var(--size-radius-s)',
    boxSizing: 'border-box',
    color: 'var(--color-text-card-body)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-card-gap)',
    position: 'relative',
    px: 'var(--size-card-padding-horizontal)',
    py: 'var(--size-card-padding-vertical)',
  },

  defaultVariants: {
    color: DEFAULT_COLOR,
  },

  variants: {
    color: Object.values(Colors).reduce(
      (colors, colorName) => ({
        ...colors,

        [colorName]: {
          backgroundColor: `var(--color-background-card-${colorName})`,
        },
      }),
      {} as Record<Colors, SystemStyleObject>,
    ),
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'card',
  description: 'Card',
  jsx: ['Card'],
})

export const cardTitle: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: 'var(--size-card-title-gap)',
  },

  defaultVariants: {
    color: DEFAULT_COLOR,
  },

  variants: {
    color: Object.values(Colors).reduce(
      (colors, colorName) => ({
        ...colors,

        [colorName]: {
          color: `var(--color-text-card-title-${colorName})`,
        },
      }),
      {} as Record<Colors, SystemStyleObject>,
    ),
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'cardTitle',
  description: 'Card title',
  jsx: ['Card'],
})

export const cardIcon: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    height: '24px',
    width: '24px',
  },

  defaultVariants: {
    color: DEFAULT_COLOR,
  },

  variants: {
    color: Object.values(Colors).reduce(
      (colors, colorName) => ({
        ...colors,

        [colorName]: {
          color: `var(--color-icon-card-${colorName})`,
        },
      }),
      {} as Record<Colors, SystemStyleObject>,
    ),
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'cardIcon',
  description: 'Card icon',
  jsx: ['Card'],
})

export const cardContent: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'cardContent',
  description: 'Card content',
  jsx: ['Card'],
})

export const cardDismissIcon: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    position: 'absolute',
    right: 'var(--size-spacing-2)',
    top: 'var(--size-spacing-2)',
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'cardDismissIcon',
  description: 'Card dismiss icon',
  jsx: ['Card'],
})
