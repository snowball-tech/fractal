import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'header'

export const header: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    ':not(.device-screen) > &': {
      md: {
        alignContent: 'stretch',
        display: 'grid',
        gridColumnGap: 0,
        gridTemplateColumns: 'repeat(12, 1fr)',
        height: '80px',
        justifyContent: 'stretch',
      },
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    alignItems: 'center',
    backgroundColor: 'var(--color-brand-primary)',
    borderBottom: 'var(--border-2)',
    boxSizing: 'border-box',
    color: 'var(--color-text-dark)',
    display: 'flex',
    gap: 'var(--size-spacing-1)',
    height: '64px',
    pb: 'calc(var(--size-spacing-1) - var(--size-border-2))',
    pt: 'var(--size-spacing-1)',
    px: 'var(--size-spacing-3)',
    width: '100%',
  },

  className: 'header',
  description: 'Header',
  jsx: ['Header'],
})

export const headerLeft: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    ':not(.device-screen) > &': {
      md: {
        gridColumn: '1 / 4',
        justifySelf: 'start',
        maxHeight: '64px',
      },
    },
  },

  className: 'headerLeft',
  description: 'Left part of the header',
  jsx: ['Header'],
})

export const headerMiddle: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    ':not(.device-screen) > &': {
      md: {
        gridColumn: '4 / 10',
        justifySelf: 'center',
        maxHeight: '48px',
        textAlign: 'center',
        width: '100%',
      },
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    margin: 0,
    maxHeight: '100%',
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
    ':not(.device-screen) > &': {
      md: {
        gridColumn: '10 / 13',
        justifySelf: 'end',
        maxHeight: '48px',
      },
    },
  },

  className: 'headerRight',
  description: 'Right part of the header',
  jsx: ['Header'],
})
