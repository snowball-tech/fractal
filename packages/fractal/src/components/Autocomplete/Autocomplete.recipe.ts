import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'autocomplete'

export const autocompleteContainer: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Container for autocomplete',
    name: 'autocompleteContainer',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['AutoComplete'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
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
  })

export const autocompleteLabel = defineRecipe({
  description: 'Label for autocomplete',
  name: 'autocompleteLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['AutoComplete'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
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
})

export const autocompleteInput: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'The input field of the autocomplete',
  name: 'autocompleteInput',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Autocomplete'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},
})

export const autocompleteDropdown: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'The dropdown of the autocomplete',
    name: 'autocompleteDropdown',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Autocomplete'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      mt: 'calc(var(--size-spacing-1) * -0.75)!',
      width: 'calc(var(--radix-popper-anchor-width) - var(--size-spacing-2))!',
    },
  })

export const autocompleteItemGroup: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Autocomplete items group',
    name: 'autocompleteItemGroup',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Autocomplete'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {},
  })

export const autocompleteItem: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Autocomplete item',
  name: 'autocompleteItem',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Autocomplete'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},
})

export const autocompleteItemSeparator: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Autocomplete item separator',
    name: 'autocompleteItemSeparator',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Autocomplete'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {},
  })

export const autocompleteLoading: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Autocomplete loading indicator',
    name: 'autocompleteLoading',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Autocomplete'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
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
  })

export const autocompleteEmpty: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Autocomplete empty indicator',
  name: 'autocompleteEmpty',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Autocomplete'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    borderRadius: 'var(--size-radius-s)',
    outline: 'none',
    padding:
      'var(--size-options-padding-vertical) var(--size-options-padding-horizontal)',
  },
})

export const autocompleteDescription: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Autocomplete description',
    name: 'autocompleteDescription',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Autocomplete'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      mt: 'calc(var(--size-spacing-1) * -2)',
    },
  })

export const autocompleteMessage: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Autocomplete text message (error or success)',
    name: 'autocompleteMessage',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Autocomplete'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      mt: 'calc(var(--size-spacing-1) * -2)',
    },
  })
