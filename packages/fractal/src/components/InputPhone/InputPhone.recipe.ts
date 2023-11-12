import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'input-phone'

export const inputPhoneContainer: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--size-spacing-1)',
      maxWidth: '100%',
    },

    className: 'inputPhoneContainer',
    description: 'Container for phone input',
    jsx: ['InputPhone'],
  })

export const inputPhoneLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    _inputPhoneNotWritable: {
      cursor: 'unset',
    },
    _inputPhoneRequired: {
      _after: {
        color: 'var(--color-feedback-danger-50)',
        content: '" *"',
      },
    },

    cursor: 'var(--cursor-clickable)',
  },

  className: 'inputPhoneLabel',
  description: 'Label for phone input',
  jsx: ['InputPhone'],
})

export const inputPhoneFields: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: 'var(--size-spacing-1)',
    maxWidth: '100%',
    width: 'fit-content',
  },

  className: 'inputPhoneFields',
  description: 'A phone input field',
  jsx: ['InputPhone'],
})

export const inputPhonePrefix: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    width: '110px!',
  },

  className: 'inputPhonePrefix',
  description: 'The phone input "prefix" field',
  jsx: ['InputPhone'],
})

export const inputPhonePrefixDropdown: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      maxWidth: '100%',
      pt: 'var(--size-spacing-8)!',
      width: 'fit-content!',
    },

    className: 'inputPhonePrefixDropdown',
    description: `The phone input "prefix" field's dropdown`,
    jsx: ['InputPhone'],
  })

export const inputPhonePrefixSearch: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      position: 'fixed',
      top: 'var(--size-spacing-2)',
      width: 'calc(100% - var(--size-spacing-3))!',
    },

    className: 'inputPhonePrefixSearch',
    description: 'Phone input "prefix" search',
    jsx: ['InputPhone'],
  })

export const inputPhoneNumberPrefixHelper: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      textAlign: 'right',
      width: '36px',
    },

    className: 'inputPhoneNumberPrefixHelper',
    description: 'The phone input "number" field prefix helper',
    jsx: ['InputPhone'],
  })

export const inputPhoneNumberInputText: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      '& input': {
        pl: 'calc(var(--size-spacing-5) + var(--size-spacing-1))!',
      },
    },

    className: 'inputPhoneNumberInputText',
    description: 'The phone input "number" field input text',
    jsx: ['InputPhone'],
  })

export const inputPhoneNumber: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    width: 'calc(12rem + (var(--size-input-padding-horizontal) * 2))!',
  },

  className: 'inputPhoneNumber',
  description: 'The phone input "number" field',
  jsx: ['InputPhone'],
})

export const inputPhoneDescription: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'inputPhoneDescription',
    description: 'Phone input description',
    jsx: ['InputPhone'],
  })

export const inputPhoneMessage: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  className: 'inputPhoneMessage',
  description: 'Phone input text message (error or success)',
  jsx: ['InputPhone'],
})
