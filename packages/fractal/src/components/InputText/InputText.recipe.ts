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

      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--size-spacing-1)',
      maxWidth: '100%',
      width: 'fit-content',
    },
  },
)

export const inputTextLabel = defineRecipe({
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

    maxWidth: '100%',
    position: 'relative',
    width: 'fit-content',
  },
})

export const inputText = defineRecipe({
  description: 'Text input',
  name: 'inputText',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    _inputTextFullWidth: {
      width: '100%',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    _disabled: {
      backgroundColor: `var(--color-background-input-disabled)`,
      border: `var(--border-input-disabled)`,
      color: `var(--color-text-input-disabled)`,
      cursor: 'var(--cursor-disabled)',
      shadow: `var(--shadow-input-disabled)`,
    },

    _readOnlyNotDisabled: {
      backgroundColor: `var(--color-background-input-disabled)`,
      border: `var(--border-input-disabled)`,
      color: `var(--color-text-input-base)`,
      cursor: 'text',
      shadow: `var(--shadow-input-disabled)`,
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    _inputTextIconLeft: {
      pl: 'var(--size-spacing-5)',
    },
    _inputTextIconRight: {
      pr: 'var(--size-spacing-5)',
    },

    _inputTextInvalid: {
      border: `var(--border-input-error)`,
    },
    _inputTextValid: {
      border: `var(--border-input-success)`,
    },
    _inputTextValidOrInvalid: {
      pl: 'calc(var(--size-input-padding-horizontal) - var(--size-border-offset))',
    },
    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    '.fractal-input-text.icon-left:is(:valid, [valid], .valid, :invalid, [invalid], .invalid) &':
      {
        pl: 'calc(var(--size-spacing-5) - var(--size-border-offset))',
      },

    _placeholder: {
      color: `var(--color-text-placeholder)`,
      fontStyle: 'var(--style-text-placeholder)',
    },

    _writable: {
      '.fractal-input-text.icon-left:is(:hover, [data-hover]) &, .fractal-input-text.icon-left &:is(:focus, [data-focus])':
        {
          pl: 'calc(var(--size-spacing-5) - var(--size-border-offset))',
        },
      '.fractal-input-text:is(:hover, [data-hover]) &, .fractal-input-text &:is(:focus, [data-focus])':
        {
          mr: 'calc(var(--size-border-offset) * -1)',
          pl: 'calc(var(--size-input-padding-horizontal) - var(--size-border-offset))',
        },
      '.fractal-input-text:is(:hover, [data-hover]) &:not(:is(:focus, [data-focus]))':
        {
          backgroundColor: `var(--color-background-input-hover)`,
          border: `var(--border-input-hover)`,
          color: `var(--color-text-input-hover)`,
          shadow: `var(--shadow-input-hover)`,
        },
      '.fractal-input-text:is(:valid, [valid], .valid, :invalid, [invalid], .invalid) &:is(:focus, [data-focus])':
        {
          mr: 0,
        },

      '.fractal-input-text:is(:valid, [valid], .valid, :invalid, [invalid], .invalid):is(:hover, [data-hover]) &, .fractal-input-text:is(:valid, [valid], .valid, :invalid, [invalid], .invalid) &:is(:focus, [data-focus])':
        {
          mr: 0,
        },

      _focus: {
        backgroundColor: `var(--color-background-input-focus)`,
        border: `var(--border-input-focus)`,
        color: `var(--color-text-input-focus)`,
        mr: 'calc(var(--size-border-offset) * -2)',
        shadow: `var(--shadow-input-focus)`,
      },
    },

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
    transition: 'border-color 300ms ease-out',
  },
})

export const inputTextIcon: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input (optional) icon or error/success icon',
  name: 'inputTextIcon',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    _inputTextDisabled: {
      color: `var(--color-icon-input-disabled)`,
    },

    _inputTextIconLeft: {
      left: 'var(--size-spacing-1)',
    },
    _inputTextIconRight: {
      right: 'var(--size-spacing-1)',
    },
    _inputTextInvalid: {
      color: `var(--color-icon-input-error)`,
    },
    _inputTextValid: {
      color: `var(--color-icon-input-success)`,
    },

    display: 'flex',
    maxWidth: '100%',
    position: 'absolute',
    right: 'var(--size-spacing-1)',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 'fit-content',
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
  description: 'Input text message',
  name: 'inputTextMessage',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},
})
