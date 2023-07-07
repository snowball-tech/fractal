import { defineRecipe } from '@pandacss/dev'

export const inputTextField: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Form field for text input',
  name: 'inputTextField',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-spacing-1)',
    width: 'fit-content',
  },
})

export const inputTextLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input label',
  name: 'inputTextLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    cursor: 'var(--cursor-clickable)',
  },

  defaultVariants: {
    disabled: false,
    readonly: false,
  },

  variants: {
    disabled: {
      false: {},
      true: {
        cursor: 'unset',
      },
    },

    readonly: {
      false: {},
      true: {
        cursor: 'unset',
      },
    },
  },
})

export const inputTextIcon: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input (optional) icon or error/success icon',
  name: 'inputTextIcon',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    display: 'flex',
    position: 'absolute',
    right: 'var(--size-spacing-1)',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 'fit-content',
  },

  compoundVariants: [
    {
      css: {
        right: 'var(--size-spacing-2)',
      },
      position: 'right',
      readonly: true,
    },
  ],

  defaultVariants: {
    disabled: false,
    error: false,
    position: 'right',
    readonly: false,
    success: false,
  },

  variants: {
    disabled: {
      false: {},
      true: {
        color: `var(--color-icon-input-disabled)`,
      },
    },

    error: {
      false: {},
      true: {
        color: `var(--color-icon-input-error)`,
      },
    },

    position: {
      left: {
        left: 'var(--size-spacing-1)',
      },
      right: {
        right: 'var(--size-spacing-1)',
      },
    },

    readonly: {
      false: {},
      true: {},
    },

    success: {
      false: {},
      true: {
        color: `var(--color-icon-input-success)`,
      },
    },
  },
})

export const inputText: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input',
  name: 'inputText',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '&:not(:is(:disabled, [disabled], [data-disabled]))': {
      _readOnly: {
        backgroundColor: `var(--color-background-input-base)`,
        border: `var(--border-input-disabled)`,
        color: `var(--color-text-input-base)`,
        cursor: 'unset',
        shadow: `var(--shadow-input-disabled)`,
      },
    },

    '&:not(:is(:disabled, [disabled], [data-disabled], :read-only, [data-read-only]))':
      {
        '&:not(:is(:focus, [data-focus]))': {
          _groupHover: {
            backgroundColor: `var(--color-background-input-hover)`,
            border: `var(--border-input-hover)`,
            color: `var(--color-text-input-hover)`,
            margin:
              '0 calc((var(--size-border-2) - var(--size-border-1)) * -1)',
            shadow: `var(--shadow-input-hover)`,
          },
        },

        _focus: {
          backgroundColor: `var(--color-background-input-focus)`,
          border: `var(--border-input-focus)`,
          color: `var(--color-text-input-focus)`,
          margin: '0 calc((var(--size-border-2) - var(--size-border-1)) * -1)',
          shadow: `var(--shadow-input-focus)`,
        },
      },

    _disabled: {
      backgroundColor: `var(--color-base-grey-70)`,
      border: `var(--border-input-disabled)`,
      color: `var(--color-text-input-disabled)`,
      cursor: 'var(--cursor-disabled)',
      shadow: `var(--shadow-input-disabled)`,
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
    outline: 'none',
    px: 'var(--size-spacing-2)',
    shadow: `var(--shadow-input-base)`,
    transition: 'border-color 300ms ease-out',
  },

  defaultVariants: {
    error: false,
    icon: 'none',
    success: false,
  },

  variants: {
    error: {
      false: {},
      true: {
        border: `var(--border-input-error)`,
      },
    },

    icon: {
      left: {
        pl: 'var(--size-spacing-5)',
      },
      none: {},
      right: {
        pr: 'var(--size-spacing-5)',
      },
    },

    success: {
      false: {},
      true: {
        border: `var(--border-input-success)`,
      },
    },
  },
})

export const inputTextMessage: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input description or error/success message',
  name: 'inputTextMessage',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    margin: 0,
  },
})
