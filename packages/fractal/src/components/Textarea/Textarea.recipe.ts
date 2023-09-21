import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'input-textarea'

export const textareaContainer: ReturnType<typeof defineRecipe> = defineRecipe({
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

  className: 'textareaContainer',
  description: 'Textarea container',
  jsx: ['Textarea'],
})

export const textareaLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    _textareaNotWritable: {
      cursor: 'unset',
    },

    _textareaRequired: {
      _after: {
        color: 'var(--color-feedback-danger-50)',
        content: '" *"',
      },
    },

    cursor: 'var(--cursor-clickable)',
  },

  className: 'textareaLabel',
  description: 'Textarea label',
  jsx: ['Textarea'],
})

export const textareaIconWrapper: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      position: 'relative',
    },

    className: 'textareaIconWrapper',
    description: 'Textarea and icon/button wrapper',
    jsx: ['Textarea'],
  })

export const textarea: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '.fractal-input-textarea.with-icon &': {
      pr: 'calc(var(--size-input-padding-horizontal) + var(--size-spacing-4))',
    },

    _disabled: {
      backgroundColor: `var(--color-background-input-disabled)`,
      border: `var(--border-input-disabled)`,
      color: `var(--color-text-input-disabled)`,
      cursor: 'var(--cursor-disabled)',
      shadow: `var(--shadow-input-disabled)`,
    },

    _focus: {
      cursor: 'var(--cursor-text)',
    },

    _placeholder: {
      color: `var(--color-text-placeholder)`,
      fontStyle: 'var(--style-text-placeholder)',
    },

    _textareaFullWidth: {
      width: '100%',
    },

    _textareaInvalid: {
      border: `var(--border-input-error)`,
      shadow: `var(--shadow-input-error)`,
    },

    _textareaValid: {
      border: `var(--border-input-success)`,
      shadow: `var(--shadow-input-success)`,
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
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

    sm: {
      width: 'unset',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    backgroundColor: `var(--color-background-input-base)`,
    border: `var(--border-input-base)`,
    borderRadius: 'var(--size-radius-s)',
    boxSizing: 'border-box',
    color: `var(--color-text-input-base)`,
    cursor: 'var(--cursor-clickable)',
    display: 'unset',
    maxWidth: '100%',
    minHeight: '48px',
    outline: 'none',
    padding: 'unset',
    pb: 'var(--size-input-padding-vertical)',
    pt: 'calc(var(--size-input-padding-vertical) + var(--size-spacing-half))',
    px: 'var(--size-input-padding-horizontal)',
    resize: 'unset',
    shadow: `var(--shadow-input-base)`,
    textAlign: 'unset',
    transition: 'border-color 300ms ease-out',
    width: '100%',
  },

  className: 'textarea',
  description: 'Textarea',
  jsx: ['Textarea'],
})

export const textareaIcon: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '.fractal-input-textarea.with-action &': {
      bottom: 'var(--size-spacing-2)',
    },
    '.fractal-input-textarea:is([disabled], [data-disabled], .disabled, [data-read-only], .readonly) &':
      {
        color: 'var(--color-base-grey-70)!',
        cursor: 'var(--cursor-disabled)',
      },

    bottom: 'calc(var(--size-spacing-1) + var(--size-spacing-half))',
    color: 'var(--color-base-grey-30)!',
    position: 'absolute',
    right: 'var(--size-spacing-2)',
  },

  className: 'textareaIcon',
  description: 'Textarea icon/button',
  jsx: ['Textarea'],
})

export const textareaDescription: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {},

    className: 'textareaDescription',
    description: 'Textarea description',
    jsx: ['Textarea'],
  })

export const textareaMessage: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  className: 'textareaMessage',
  description: 'Textarea message (error or success)',
  jsx: ['Textarea'],
})
