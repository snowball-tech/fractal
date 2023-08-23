import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'input-date'

export const inputDateContainer: ReturnType<typeof defineRecipe> = defineRecipe(
  {
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--size-spacing-1)',
      maxWidth: '100%',
      width: 'fit-content',
    },

    className: 'inputDateContainer',
    description: 'Container for date input',
    jsx: ['InputDate'],
  },
)

export const inputDateLabel: ReturnType<typeof defineRecipe> = defineRecipe({
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

  className: 'inputDateLabel',
  description: 'Label for date input',
  jsx: ['InputDate'],
})

export const inputDateFields: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    display: 'flex',
    gap: 'var(--size-spacing-1)',
    width: 'fit-content',
  },

  className: 'inputDateFields',
  description: 'The date fields wrapper',
  jsx: ['InputDate'],
})

export const inputDateField = defineRecipe({
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

  className: 'inputDateField',
  description: 'A date input field',
  jsx: ['InputDate'],
})

export const inputDateDay: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '& input': {
      minWidth: '72px',
    },
  },

  className: 'inputDateDay',
  description: 'The date input "day" field',
  jsx: ['InputDate'],
})

export const inputDateMonth: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '& input': {
      minWidth: '72px',
    },
  },

  className: 'inputDateMonth',
  description: 'The date input "month" field',
  jsx: ['InputDate'],
})

export const inputDateYear: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '& input': {
      minWidth: '88px',
      width: 'unset!',
    },
  },

  className: 'inputDateYear',
  description: 'The date input "year" field',
  jsx: ['InputDate'],
})

export const inputDateMessage: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  className: 'inputDateMessage',
  description: 'Date input text message (error or success)',
  jsx: ['InputDate'],
})
