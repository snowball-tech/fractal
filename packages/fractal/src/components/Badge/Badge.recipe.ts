import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'badge'

export const badge: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '&.empty': {
      height: 'var(--size-spacing-2)',
      maxHeight: 'var(--size-spacing-2)',
      maxWidth: 'var(--size-spacing-2)',
      minWidth: 'var(--size-spacing-2)',
      padding: 0,
      width: 'var(--size-spacing-2)',
    },

    alignItems: 'center',
    backgroundColor: `var(--color-brand-primary)`,
    borderRadius: 'var(--size-radius-rounded)',
    display: 'inline-flex',
    flexShrink: 0,
    height: 'var(--size-spacing-3)',
    justifyContent: 'center',
    maxHeight: 'var(--size-spacing-3)',
    minWidth: 'var(--size-spacing-3)',
    padding: '0 var(--size-spacing-half)',
    width: 'fit-content',
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'badge',
  description: 'Badge',
  jsx: ['Badge'],
})
