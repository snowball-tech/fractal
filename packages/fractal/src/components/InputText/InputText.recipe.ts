import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'input-text'

export const inputTextContainer: ReturnType<typeof defineRecipe> = defineRecipe(
  {
    description: 'Input text container',
    name: 'inputTextContainer',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputText'],

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
  },
)

export const inputTextLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input label',
  name: 'inputTextLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    _inputTextNotWritable: {
      cursor: 'unset',
    },

    _inputTextRequired: {
      _after: {
        color: 'var(--color-feedback-danger-50)',
        content: '" *"',
      },
    },

    cursor: 'var(--cursor-clickable)',
  },
})

export const inputTextWrapper: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Input text & icon wrapper',
  name: 'inputTextWrapper',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    _inputTextFullWidth: {
      width: '100%',
    },

    sm: {
      width: 'fit-content',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    maxWidth: '100%',
    position: 'relative',
    width: '100%',
  },
})

export const inputText: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input',
  name: 'inputText',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    _disabled: {
      backgroundColor: `var(--color-background-input-disabled)`,
      border: `var(--border-input-disabled)`,
      color: `var(--color-text-input-disabled)`,
      cursor: 'var(--cursor-disabled)',
      shadow: `var(--shadow-input-disabled)`,
    },

    _inputTextFullWidth: {
      width: '100%',
    },

    _inputTextInvalid: {
      border: `var(--border-input-error)`,
      shadow: `var(--shadow-input-error)`,
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    _inputTextPrefix: {
      pl: 'var(--size-spacing-5)',
    },
    _inputTextSuffix: {
      pr: 'var(--size-spacing-5)',
    },

    _inputTextValid: {
      border: `var(--border-input-success)`,
      shadow: `var(--shadow-input-success)`,
    },
    _placeholder: {
      color: `var(--color-text-placeholder)`,
      fontStyle: 'var(--style-text-placeholder)',
    },

    _readOnlyNotDisabled: {
      backgroundColor: `var(--color-background-input-disabled)`,
      border: `var(--border-input-disabled)`,
      color: `var(--color-text-input-base)`,
      cursor: 'unset',
      shadow: `var(--shadow-input-disabled)`,
    },

    _writable: {
      _focus: {
        backgroundColor: `var(--color-background-input-focus)`,
        border: `var(--border-input-focus)`,
        color: `var(--color-text-input-focus)`,
        shadow: `var(--shadow-input-focus)`,
      },

      _hoverNotFocus: {
        backgroundColor: `var(--color-background-input-hover)`,
        border: `var(--border-input-hover)`,
        color: `var(--color-text-input-hover)`,
        shadow: `var(--shadow-input-hover)`,
      },
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    all: 'unset',

    backgroundColor: `var(--color-background-input-base)`,
    border: `var(--border-input-base)`,
    borderRadius: 'var(--size-radius-s)',
    boxSizing: 'border-box',
    color: `var(--color-text-input-base)`,
    cursor: 'var(--cursor-clickable)',
    height: '48px',
    maxHeight: '48px',
    maxWidth: '100%',
    outline: 'none',
    px: 'var(--size-input-padding-horizontal)',
    shadow: `var(--shadow-input-base)`,
    sm: {
      width: 'unset',
    },
    transition: 'border-color 300ms ease-out',
    width: '100%',
  },
})

export const inputTextAddendum: ReturnType<typeof defineRecipe> = defineRecipe({
  description:
    'Text input (optional) addendum (prefix/suffix) and/or error/success icon',
  name: 'inputTextAddendum',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    _inputTextDisabled: {
      color: `var(--color-icon-input-disabled)`,
    },

    display: 'flex',
    maxWidth: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 'fit-content',
  },
})

export const inputTextPrefix: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input (optional) prefix',
  name: 'inputTextPrefix',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    left: 'var(--size-spacing-1)',
  },
})

export const inputTextSuffix: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input (optional) suffix and/or error/success icon',
  name: 'inputTextSuffix',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    _inputTextInvalid: {
      color: `var(--color-icon-input-error)`,
    },
    _inputTextValid: {
      color: `var(--color-icon-input-success)`,
    },

    right: 'var(--size-spacing-1)',
  },
})

export const inputTextDescription: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Input text description',
    name: 'inputTextDescription',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['InputText'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {},
  })

export const inputTextMessage: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Input text message (error or success)',
  name: 'inputTextMessage',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},
})
