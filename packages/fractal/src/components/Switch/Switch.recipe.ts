/* eslint-disable no-underscore-dangle */

import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'switch'

export const switchContainer: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '&.switch-right': {
      flexDirection: 'row-reverse',
    },

    _disabled: {
      cursor: 'var(--cursor-disabled)',
    },

    alignItems: 'center',
    display: 'flex',
    gap: 'var(--size-spacing-1)',
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'switchContainer',
  description: 'Switch container',
  jsx: ['Switch'],
})

export const switchToggle = defineRecipe({
  base: {
    '.fractal-switch:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) &:is(:checked, [data-checked], [aria-checked=true], [data-state="checked"], .checked)':
      {
        backgroundColor: `var(--color-decorative-pink-90)`,
      },

    _switchDisabled: {
      border: 'var(--border-disabled)',
      cursor: 'var(--cursor-disabled)',
    },

    backgroundColor: 'var(--color-brand-body-light)',
    border: 'var(--border-1)',
    borderRadius: 'var(--size-radius-rounded)',
    color: 'unset',
    cursor: 'var(--cursor-clickable)',
    display: 'unset',
    height: '8px',
    maxHeight: '8px',
    maxWidth: '32px',
    position: 'relative',
    px: 'unset',
    py: 'unset',
    textAlign: 'unset',
    width: '40px',
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'switchToggle',
  description: 'Switch toggle',
  jsx: ['Switch'],
})

export const switchThumb = defineRecipe({
  base: {
    '.fractal-switch:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) &:is(:checked, [data-checked], [aria-checked=true], [data-state="checked"], .checked)':
      {
        backgroundColor: 'var(--color-brand-primary)',
        transform: 'translate(15px, -5.5px)',
      },

    _switchDisabled: {
      border: 'var(--border-disabled)',
      cursor: 'var(--cursor-disabled)',
    },

    backgroundColor: 'var(--color-base-white)',
    border: 'var(--border-1)',
    borderRadius: 'var(--size-radius-rounded)',
    cursor: 'var(--cursor-clickable)',
    display: 'block',
    height: '16px',
    transform: 'translate(-2px, -5.5px)',
    transition: 'transform 100ms',
    width: '16px',
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'switchThumb',
  description: 'Switch thumb',
  jsx: ['Switch'],
})

export const switchLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    _switchDisabled: {
      color: 'var(--color-text-disabled)',
      cursor: 'var(--cursor-disabled)',
    },

    cursor: 'var(--cursor-clickable)',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'switchLabel',
  description: 'Switch label',
  jsx: ['Switch'],
})
