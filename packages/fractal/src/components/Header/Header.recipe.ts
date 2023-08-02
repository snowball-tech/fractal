import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'header'

export const header: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    alignItems: 'center',
    backgroundColor: 'var(--color-brand-primary)',
    borderBottom: 'var(--border-2)',
    boxSizing: 'border-box',
    color: 'var(--color-text-dark)',
    display: 'flex',
    gap: 'var(--size-spacing-1)',
    height: '64px',
    padding:
      '0 var(--size-spacing-3) var(--size-spacing-1) var(--size-spacing-3)',
    width: '100%',
  },

  className: 'header',
  description: 'Header',
  jsx: ['Header'],
})

export const headerLeft: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    justifySelf: 'flex-start',
  },

  className: 'headerLeft',
  description: 'Left part of the header',
  jsx: ['Header'],
})

export const headerMiddle: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    sm: {
      justifySelf: 'center',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    flex: 1,
    justifySelf: 'flex-start',
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  className: 'headerMiddle',
  description: 'Middle part of the header',
  jsx: ['Header'],
})

export const headerRight: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    justifySelf: 'flex-end',
  },

  className: 'headerRight',
  description: 'Right part of the header',
  jsx: ['Header'],
})
