import { defineRecipe } from '@pandacss/dev'

export const selectContainer: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select container',
  name: 'selectContainer',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-spacing-1)',
    width: 'fit-content',
  },
})

export const selectLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select label',
  name: 'selectLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '.group.disabled &, .group.readonly &': {
      cursor: 'unset',
    },
    '.group.required &': {
      _after: {
        color: 'var(--color-feedback-danger-50)',
        content: '" *"',
      },
    },

    cursor: 'var(--cursor-clickable)',
    display: 'block',
  },
})

export const selectTrigger: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select trigger (selected value/placeholder)',
  name: 'selectTrigger',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '& > *': {
      alignSelf: 'center',
    },
    '& > span:not([aria-hidden])': {
      flexGrow: 1,
    },
    '& > span[aria-hidden], & > span[aria-hidden] > svg': {
      height: '100%',
    },
    '&[data-placeholder] > span:not([aria-hidden])': {
      color: `var(--color-text-select-placeholder)`,
      fontStyle: 'var(--style-text-placeholder)',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    '&:not(:is(:disabled, [disabled], [data-disabled]))': {
      '&:is(:focus-visible, [data-focus-visible]), &:focus-within': {
        backgroundColor: `var(--color-background-select-focus)`,
        border: `var(--border-select-focus)`,
        color: `var(--color-text-select-focus)`,
        margin: '0 calc((var(--size-border-2) - var(--size-border-1)) * -1)',
        shadow: `var(--shadow-select-focus)`,
      },

      '&:not(:is(:focus, [data-focus]))': {
        _groupHover: {
          backgroundColor: `var(--color-background-select-hover)`,
          border: `var(--border-select-hover)`,
          color: `var(--color-text-select-hover)`,
          margin: '0 calc((var(--size-border-2) - var(--size-border-1)) * -1)',
          shadow: `var(--shadow-select-hover)`,
        },
      },
    },

    _disabled: {
      backgroundColor: `var(--color-background-select-disabled)`,
      border: `var(--border-select-disabled)`,
      color: `var(--color-text-select-disabled)`,
      cursor: 'var(--cursor-disabled)',
      shadow: `var(--shadow-select-disabled)`,
    },

    alignItems: 'center',
    all: 'unset',
    backgroundColor: `var(--color-background-select-base)`,
    border: `var(--border-select-base)`,
    borderRadius: 'var(--size-radius-s)',
    boxSizing: 'border-box',
    color: `var(--color-text-select-base)`,
    cursor: 'var(--cursor-clickable)',
    display: 'flex',
    height: '48px',
    maxHeight: '48px',
    minWidth: '305px',
    outline: 'none',
    px: 'var(--size-select-padding-horizontal)',
    shadow: `var(--shadow-select-base)`,

    transition: 'border-color 300ms ease-out',
  },
})

export const selectDropdown: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select dropdown',
  name: 'selectDropdown',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    backgroundColor: `var(--color-background-select-base)`,
    border: `var(--border-select-base)`,
    borderRadius: 'var(--size-radius-s)',
    mt: 'var(--size-dropdown-gap)',
    padding:
      'var(--size-dropdown-padding-vertical) var(--size-dropdown-padding-horizontal)',
    width: 'var(--radix-popper-anchor-width)',
  },
})

export const selectItemGroup: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select options group',
  name: 'selectItemGroup',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '& > :first-child': {
      color: `var(--color-text-select-placeholder)`,
      py: 'var(--size-options-padding-vertical)',
    },

    padding:
      'var(--size-options-padding-vertical) var(--size-options-padding-horizontal)',
    py: 0,
  },
})

export const selectItem: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select option',
  name: 'selectItem',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '&:not(:is(:disabled, [disabled], [data-disabled]))': {
      '&:nth-of-type(1), &:nth-of-type(5n+1)': {
        _focusVisible: {
          backgroundColor: `var(--color-background-options-hover-1)`,
        },
        _hover: {
          backgroundColor: `var(--color-background-options-hover-1)`,
        },
      },
      '&:nth-of-type(2), &:nth-of-type(5n+2)': {
        _focusVisible: {
          backgroundColor: `var(--color-background-options-hover-2)`,
        },
        _hover: {
          backgroundColor: `var(--color-background-options-hover-2)`,
        },
      },
      '&:nth-of-type(3), &:nth-of-type(5n+3)': {
        _focusVisible: {
          backgroundColor: `var(--color-background-options-hover-3)`,
        },
        _hover: {
          backgroundColor: `var(--color-background-options-hover-3)`,
        },
      },
      '&:nth-of-type(4), &:nth-of-type(5n+4)': {
        _focusVisible: {
          backgroundColor: `var(--color-background-options-hover-4)`,
        },
        _hover: {
          backgroundColor: `var(--color-background-options-hover-4)`,
        },
      },
      '&:nth-of-type(5), &:nth-of-type(5n+5)': {
        _focusVisible: {
          backgroundColor: `var(--color-background-options-hover-5)`,
        },
        _hover: {
          backgroundColor: `var(--color-background-options-hover-5)`,
        },
      },
    },

    _disabled: {
      color: `var(--color-text-select-disabled)`,
    },

    borderRadius: 'var(--size-radius-s)',
    outline: 'none',
    padding:
      'var(--size-options-padding-vertical) var(--size-options-padding-horizontal)',
    transition: 'background-color 300ms ease-out',
  },
})

export const selectItemSeparator: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Select options separator',
    name: 'selectItemSeparator',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Select'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      backgroundColor: 'var(--color-brand-separator)',
      height: 'var(--size-border-1)',
      my: 'var(--size-options-padding-vertical)',
    },
  })

export const selectDescription: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select description',
  name: 'selectDescription',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},
})
