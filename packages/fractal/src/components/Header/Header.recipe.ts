import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'header'

export const header: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Header',
  name: 'header',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Header'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
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
})

export const headerBackButton: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Header back button',
  name: 'headerBackButton',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Header'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    height: '24px',
    width: '24px',
  },
})

export const headerTitle: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Header title',
  name: 'headerTitle',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Header'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    flex: 1,
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
})

export const headerMenu: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Header menu',
  name: 'headerMenu',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Header'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    sm: {
      '.device-macbook-pro &': {
        display: 'none',
      },
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    justifySelf: 'flex-end',
  },
})
