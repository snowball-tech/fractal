import { defineRecipe } from '@pandacss/dev'

import { DEFAULT_ELEVATION, Elevations } from './Paper.constants'

export const GROUP_NAME = 'paper'

export const paper: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    backgroundColor: 'var(--color-background-paper)',
    borderRadius: 'var(--size-radius-s)',
    boxSizing: 'border-box',
    color: 'var(--color-text-paper-body)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-paper-gap)',
    position: 'relative',
    px: 'var(--size-paper-padding-horizontal)',
    py: 'var(--size-paper-padding-vertical)',
  },

  defaultVariants: {
    elevation: DEFAULT_ELEVATION,
  },

  variants: {
    elevation: {
      [Elevations.Bordered]: {
        border: 'var(--border-1)',
        borderRadius: 'var(--size-radius-s)',
        boxShadow: 'var(--shadow-none)',
      },
      [Elevations.Elevated]: {
        border: 'var(--border-1)',
        borderRadius: 'var(--size-radius-s)',
        boxShadow: 'var(--shadow-brutal-1)',
      },
    },
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'paper',
  description: 'Paper',
  jsx: ['Paper'],
})

export const paperContent: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'paperContent',
  description: 'Paper content',
  jsx: ['Paper'],
})
