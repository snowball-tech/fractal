import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'input-date'

export const inputDateContainer: ReturnType<typeof defineRecipe> = defineRecipe(
  {
    description: 'Container for date input',
    name: 'inputDateContainer',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputDate'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--size-spacing-1)',
      maxWidth: '100%',
      width: 'fit-content',
    },
  },
)

export const inputDateLabel = defineRecipe({
  description: 'Label for date input',
  name: 'inputDateLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputDate'],

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

export const inputDateFields: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'The date fields wrapper',
  name: 'inputDateFields',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputDate'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    display: 'flex',
    gap: 'var(--size-spacing-1)',
    width: 'fit-content',
  },
})

export const inputDateField: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'A date input field',
  name: 'inputDateField',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputDate'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },

    '& input[type=number]': {
      MozAppearance: 'textfield',
    },

    maxWidth: '100px!',
    width: 'fit-content',
  },
})

export const inputDateDay: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'The date input "day" field',
  name: 'inputDateDay',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputDate'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    minWidth: '64px',
  },
})

export const inputDateMonth: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'The date input "month" field',
  name: 'inputDateMonth',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputDate'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    minWidth: '64px',
  },
})

export const inputDateYear: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'The date input "year" field',
  name: 'inputDateYear',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputDate'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '& input': {
      width: 'unset!',
    },
  },
})

export const inputDateMessage: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Date input text message (error or success)',
  name: 'inputDateMessage',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputDate'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},
})
