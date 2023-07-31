import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'input-pincode'

export const inputPinCodeContainer: ReturnType<typeof defineRecipe> =
  defineRecipe({
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

    className: 'inputPinCodeContainer',
    description: 'Container for pin code input',
    jsx: ['InputPinCode'],
  })

export const inputPinCodeLabel: ReturnType<typeof defineRecipe> = defineRecipe({
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

  className: 'inputPinCodeLabel',
  description: 'Label for pin code input',
  jsx: ['InputPinCode'],
})

export const inputPinCodeFields: ReturnType<typeof defineRecipe> = defineRecipe(
  {
    base: {
      sm: {
        width: 'fit-content',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      display: 'flex',
      gap: 'var(--size-spacing-1)',
      width: '100%',
    },

    className: 'inputPinCodeFields',
    description: 'The date fields wrapper',
    jsx: ['InputPinCode'],
  },
)

export const inputPinCodeField: ReturnType<typeof defineRecipe> = defineRecipe({
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

  className: 'inputPinCodeField',
  description: 'A pin code input field',
  jsx: ['InputPinCode'],
})

export const inputPinCodeDescription: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'inputPinCodeDescription',
    description: 'Input pin code description',
    jsx: ['InputPinCode'],
  })

export const inputPinCodeMessage: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'inputPinCodeMessage',
    description: 'Pin code input text message (error or success)',
    jsx: ['InputPinCode'],
  })
