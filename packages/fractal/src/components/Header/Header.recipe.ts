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

export const headerBackButton: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    height: '24px',
    width: '24px',
  },

  className: 'headerBackButton',
  description: 'Header back button',
  jsx: ['Header'],
})

export const headerTitle: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    flex: 1,
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  className: 'headerTitle',
  description: 'Header title',
  jsx: ['Header'],
})

export const headerMenu: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    sm: {
      '.device-macbook-pro &': {
        display: 'none',
      },
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    justifySelf: 'flex-end',
  },

  className: 'headerMenu',
  description: 'Header menu',
  jsx: ['Header'],
})
