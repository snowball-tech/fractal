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
    '.group.disabled &, .group.readonly &': {
      cursor: 'unset',
    },

    cursor: 'var(--cursor-clickable)',
  },
})

export const inputTextIcon: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Text input (optional) icon or error/success icon',
  name: 'inputTextIcon',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['InputText'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '.group.disabled &': {
      color: `var(--color-icon-input-disabled)`,
    },
    '.group.error &': {
      color: `var(--color-icon-input-error)`,
    },

    '.group.icon-left &': {
      left: 'var(--size-spacing-1)',
    },
    '.group.icon-right &': {
      right: 'var(--size-spacing-1)',
    },

    '.group.successfull &': {
      color: `var(--color-icon-input-success)`,
    },

    display: 'flex',
    position: 'absolute',
    right: 'var(--size-spacing-1)',
    top: '50%',
    transform: 'translateY(-50%)',

    width: 'fit-content',
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
        backgroundColor: `var(--color-background-input-disabled)`,
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

    '.group.error &': {
      border: `var(--border-input-error)`,
    },
    '.group.icon-left &': {
      pl: 'var(--size-spacing-5)',
    },
    '.group.icon-right &': {
      pr: 'var(--size-spacing-5)',
    },
    '.group.successfull &': {
      border: `var(--border-input-success)`,
    },

    _disabled: {
      backgroundColor: `var(--color-background-input-disabled)`,
      border: `var(--border-input-disabled)`,
      color: `var(--color-text-input-disabled)`,
      cursor: 'var(--cursor-disabled)',
      shadow: `var(--shadow-input-disabled)`,
    },

    _placeholder: {
      color: `var(--color-text-placeholder)`,
      fontStyle: 'var(--style-text-placeholder)',
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
    minWidth: '305px',
    outline: 'none',
    px: 'var(--size-spacing-2)',
    shadow: `var(--shadow-input-base)`,

    transition: 'border-color 300ms ease-out',
  },
})
