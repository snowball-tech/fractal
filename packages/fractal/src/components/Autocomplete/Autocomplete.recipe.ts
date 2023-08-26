import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'autocomplete'

export const autocompleteContainer: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      _fullWidth: {
        width: '100%',
      },

      sm: {
        width: 'fit-content',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--size-spacing-1)',
      maxWidth: '100%',
      width: '100%',
    },

    className: 'autocompleteContainer',
    description: 'Container for autocomplete',
    jsx: ['AutoComplete'],
  })

export const autocompleteLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    _autocompleteNotWritable: {
      cursor: 'unset',
    },
    _autocompleteRequired: {
      _after: {
        color: 'var(--color-feedback-danger-50)',
        content: '" *"',
      },
    },

    cursor: 'var(--cursor-clickable)',
  },

  className: 'autocompleteLabel',
  description: 'Label for autocomplete',
  jsx: ['AutoComplete'],
})

export const autocompleteInput: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  className: 'autocompleteInput',
  description: 'The input field of the autocomplete',
  jsx: ['Autocomplete'],
})

export const autocompleteDropdown: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'autocompleteDropdown',
    description: 'The dropdown of the autocomplete',
    jsx: ['Autocomplete'],
  })

export const autocompleteItemGroup: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'autocompleteItemGroup',
    description: 'Autocomplete items group',
    jsx: ['Autocomplete'],
  })

export const autocompleteItem: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  className: 'autocompleteItem',
  description: 'Autocomplete item',
  jsx: ['Autocomplete'],
})

export const autocompleteItemSeparator: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'autocompleteItemSeparator',
    description: 'Autocomplete item separator',
    jsx: ['Autocomplete'],
  })

export const autocompleteLoading: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      '& > svg': {
        minWidth: '24px',
      },

      '&.spin > svg': {
        animation: 'spin 2s cubic-bezier(.49,.34,.5,.92) infinite',
      },

      alignItems: 'center',
      borderRadius: 'var(--size-radius-s)',
      display: 'flex',
      gap: 'var(--size-spacing-2)',
      outline: 'none',
      padding:
        'var(--size-options-padding-vertical) var(--size-options-padding-horizontal)',
    },

    className: 'autocompleteLoading',
    description: 'Autocomplete loading indicator',
    jsx: ['Autocomplete'],
  })

export const autocompleteEmpty: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    borderRadius: 'var(--size-radius-s)',
    outline: 'none',
    padding:
      'var(--size-options-padding-vertical) var(--size-options-padding-horizontal)',
  },

  className: 'autocompleteEmpty',
  description: 'Autocomplete empty indicator',
  jsx: ['Autocomplete'],
})

export const autocompleteDescription: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'autocompleteDescription',
    description: 'Autocomplete description',
    jsx: ['Autocomplete'],
  })

export const autocompleteMessage: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'autocompleteMessage',
    description: 'Autocomplete text message (error or success)',
    jsx: ['Autocomplete'],
  })
