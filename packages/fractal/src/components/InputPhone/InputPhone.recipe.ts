import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'input-phone'

export const inputPhoneContainer: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Container for phone input',
    name: 'inputPhoneContainer',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPhone'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--size-spacing-1)',
      maxWidth: '100%',
    },
  })

export const inputPhoneLabel = defineRecipe({
  description: 'Label for phone input',
  name: 'inputPhoneLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputPhone'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    _inputDateNotWritable: {
      cursor: 'unset',
    },
    _inputDateRequired: {
      _after: {
        color: 'var(--color-feedback-danger-50)',
        content: '" *"',
      },
    },

    cursor: 'var(--cursor-clickable)',
  },
})

export const inputPhoneFields: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'A phone input field',
  name: 'inputPhoneFields',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputPhone'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    sm: {
      flexDirection: 'row',
      width: 'fit-content',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-spacing-1)',
    maxWidth: '100%',
  },
})

export const inputPhonePrefix: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'The phone input "prefix" field',
  name: 'inputPhonePrefix',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputPhone'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    sm: {
      width: '110px!',
    },

    width: '100%',
  },
})

export const inputPhonePrefixDropdown: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: `The phone input "prefix" field's dropdown`,
    name: 'inputPhonePrefixDropdown',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPhone'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      sm: {
        width: 'fit-content!',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      maxWidth: '100%',
    },
  })

export const inputPhonePrefixSearch: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Phone input "prefix" search',
    name: 'inputPhonePrefixSearch',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPhone'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      mb: 'var(--size-spacing-1)',
    },
  })

export const inputPhoneNumberPrefixHelper: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'The phone input "number" field prefix helper',
    name: 'inputPhoneNumberPrefixHelper',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPhone'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      textAlign: 'right',
      width: '36px',
    },
  })

export const inputPhoneNumberInputText: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'The phone input "number" field input text',
    name: 'inputPhoneNumberInputText',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPhone'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      '& input': {
        pl: 'calc(var(--size-spacing-5) + var(--size-spacing-1))!',
      },
    },
  })

export const inputPhoneNumber: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'The phone input "number" field',
  name: 'inputPhoneNumber',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputPhone'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    sm: {
      width: 'calc(12rem + (var(--size-input-padding-horizontal) * 2))!',
    },
  },
})

export const inputPhoneDescription: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Phone input text message',
    name: 'inputPhoneDescription',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPhone'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {},
  })

export const inputPhoneMessage: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Phone input text message (error or success)',
  name: 'inputPhoneMessage',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputPhone'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},
})
