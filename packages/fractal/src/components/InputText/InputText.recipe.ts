import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'input-text'

export const inputTextContainer: ReturnType<typeof defineRecipe> = defineRecipe(
  {
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

    className: 'inputTextContainer',
    description: 'Input text container',
    jsx: ['InputText'],
  },
)

export const inputTextLabel: ReturnType<typeof defineRecipe> = defineRecipe({
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

  className: 'inputTextLabel',
  description: 'Text input label',
  jsx: ['InputText'],
})

export const inputTextWrapper: ReturnType<typeof defineRecipe> = defineRecipe({
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

  className: 'inputTextWrapper',
  description: 'Input text & icon wrapper',
  jsx: ['InputText'],
})

export const inputText: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
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
      '&:is([data-state="open"])': {
        backgroundColor: `var(--color-background-input-focus)`,
        border: `var(--border-input-focus)`,
        color: `var(--color-text-input-focus)`,
        shadow: `var(--shadow-input-focus)`,
      },

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

    sm: {
      width: 'unset',
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
    minHeight: '48px',
    outline: 'none',
    px: 'var(--size-input-padding-horizontal)',
    py: 'var(--size-input-padding-vertical)',
    shadow: `var(--shadow-input-base)`,
    transition: 'border-color 300ms ease-out',
    width: '100%',
  },

  className: 'inputText',
  description: 'Text input',
  jsx: ['InputText'],
})

export const inputTextAddendum: ReturnType<typeof defineRecipe> = defineRecipe({
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

  className: 'inputTextAddendum',
  description:
    'Text input (optional) addendum (prefix/suffix) and/or error/success icon',
  jsx: ['InputText'],
})

export const inputTextPrefix: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    left: 'var(--size-spacing-1)',
  },

  className: 'inputTextPrefix',
  description: 'Text input (optional) prefix',
  jsx: ['InputText'],
})

export const inputTextSuffix: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    _inputTextInvalid: {
      color: `var(--color-icon-input-error)`,
    },
    _inputTextValid: {
      color: `var(--color-icon-input-success)`,
    },

    right: 'var(--size-spacing-1)',
  },

  className: 'inputTextSuffix',
  description: 'Text input (optional) suffix and/or error/success icon',
  jsx: ['InputText'],
})

export const inputTextDescription: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'inputTextDescription',
    description: 'Input text description',
    jsx: ['InputText'],
  })

export const inputTextMessage: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  className: 'inputTextMessage',
  description: 'Input text message (error or success)',
  jsx: ['InputText'],
})
