import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'input-pincode'

export const inputPinCodeContainer: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Container for pin code input',
    name: 'inputPinCodeContainer',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPinCode'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
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

export const inputPinCodeLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Label for pin code input',
  name: 'inputPinCodeLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputPinCode'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    _inputPinCodeNotWritable: {
      cursor: 'unset',
    },
    _inputPinCodeRequired: {
      _after: {
        color: 'var(--color-feedback-danger-50)',
        content: '" *"',
      },
    },

    cursor: 'var(--cursor-clickable)',
  },
})

export const inputPinCodeFields: ReturnType<typeof defineRecipe> = defineRecipe(
  {
    description: 'The date fields wrapper',
    name: 'inputPinCodeFields',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPinCode'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      sm: {
        width: 'fit-content',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      display: 'flex',
      gap: 'var(--size-spacing-1)',
      width: '100%',
    },
  },
)

export const inputPinCodeField: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'A pin code input field',
  name: 'inputPinCodeField',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputPinCode'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '& .fractal-inputTextContainer': {
      px: 0,
    },

    '& input': {
      px: 0,
    },

    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },

    '& input[type=number]': {
      MozAppearance: 'textfield',
    },

    _suffix: {
      maxWidth: 'calc(64px + (var(--size-spacing-5) / 2))!',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    maxWidth: '64px!',
    minWidth: '20px',
    sm: {
      '& input': {
        px: 'var(--size-input-padding-horizontal)',
      },
    },
    textAlign: 'center',
    width: 'fit-content',
  },
})

export const inputPinCodeDescription: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Input pin code description',
    name: 'inputPinCodeDescription',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPinCode'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {},
  })

export const inputPinCodeMessage: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Pin code input text message (error or success)',
    name: 'inputPinCodeMessage',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputPinCode'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {},
  })
