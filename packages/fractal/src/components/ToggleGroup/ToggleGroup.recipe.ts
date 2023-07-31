/* eslint-disable no-underscore-dangle */

import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'toggle-group'

export const toggleGroup: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '&[data-orientation="horizontal"]': {
      sm: {
        flexWrap: 'nowrap',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    _fullWidth: {
      width: '100%',
    },

    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-spacing-3)',
    maxWidth: '100%',
    width: 'fit-content',
  },

  className: 'toggleGroup',
  description: 'Toggle group',
  jsx: ['ToggleGroup'],
})
