import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'select'

export const selectContainer: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select container',
  name: 'selectContainer',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

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
})

export const selectLabel = defineRecipe({
  description: 'Select label',
  name: 'selectLabel',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    _selectDisable: {
      cursor: 'unset',
    },

    _selectRequired: {
      _after: {
        color: 'var(--color-feedback-danger-50)',
        content: '" *"',
      },
    },

    cursor: 'var(--cursor-clickable)',
    display: 'block',
  },
})

export const selectTrigger = defineRecipe({
  description: 'Select trigger (selected value/placeholder)',
  name: 'selectTrigger',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '& > span[aria-hidden], & > span[aria-hidden] > svg': {
      height: '100%',
    },
    '&[data-placeholder] > div > span': {
      color: `var(--color-text-select-placeholder)`,
      fontStyle: 'var(--style-text-placeholder)',
    },

    _selectDisabled: {
      backgroundColor: `var(--color-background-select-disabled)`,
      border: `var(--border-select-disabled)`,
      color: `var(--color-text-select-disabled)`,
      cursor: 'var(--cursor-disabled)',
      shadow: `var(--shadow-select-disabled)`,
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    _selectNotDisabled: {
      _focus: {
        backgroundColor: `var(--color-background-select-focus)`,
        border: `var(--border-select-focus)`,
        color: `var(--color-text-select-focus)`,
        pl: 'calc(var(--size-select-padding-horizontal) - var(--size-border-offset))',
        shadow: `var(--shadow-select-focus)`,
      },

      _selectHover: {
        backgroundColor: `var(--color-background-select-hover)`,
        border: `var(--border-select-hover)`,
        color: `var(--color-text-select-hover)`,
        pl: 'calc(var(--size-select-padding-horizontal) - var(--size-border-offset))',
        shadow: `var(--shadow-select-hover)`,
      },
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
    outline: 'none',
    px: 'var(--size-select-padding-horizontal)',
    shadow: `var(--shadow-select-base)`,

    transition: 'border-color 300ms ease-out',
  },
})

export const selectValue: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select currently selected value (or placeholder)',
  name: 'selectValue',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    alignSelf: 'center',
    flexGrow: 1,
  },
})

export const selectIndicator: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Select status indicator (arrow)',
  name: 'selectIndicator',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Select'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '& > svg': {
      height: '100%',
    },

    _selectHover: {
      mr: '-var(--size-border-offset)',
    },

    _selectOpened: {
      transform: 'rotate(180deg)',
    },

    _selectTriggerFocus: {
      mr: '-var(--size-border-offset)',
    },

    alignSelf: 'center',
    height: '100%',
    transition: 'transform 300ms ease-out',
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
    maxHeight: 'var(--radix-select-content-available-height)',
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
    _disabled: {
      color: `var(--color-text-select-disabled)`,
    },

    _notDisabled: {
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

export const selectDropdownScrollViewport: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Select dropdown scroll viewport',
    name: 'selectDropdownScrollViewport',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Select'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      height: '100%',
      maxHeight: 'var(--radix-select-content-available-height)',
      width: '100%',
    },
  })

export const selectDropdownScrollbar: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Select dropdown scrollbar',
    name: 'selectDropdownScrollbar',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Select'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      '&[data-orientation="vertical"]': {
        width: '5px',
      },

      _hover: { backgroundColor: ' var(--color-base-grey-70)' },

      backgroundColor: 'var(--color-base-grey-90)',
      borderRadius: 'var(--size-radius-s)',
      display: 'flex',
      padding: '2px',
      touchAction: 'none',
      transition: 'background-color 300ms ease-out',
      userSelect: 'none',
    },
  })

export const selectDropdownScrollbarThumbs: ReturnType<typeof defineRecipe> =
  defineRecipe({
    description: 'Select dropdown scrollbar thumbs',
    // eslint-disable-next-line no-secrets/no-secrets
    name: 'selectDropdownScrollbarThumbs',

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    jsx: ['Select'],

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    base: {
      _before: {
        content: '""',
        height: '100%',
        left: '50%',
        minHeight: '44px',
        minWidth: '44px',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
      },

      background: 'var(--color-base-grey-30)',
      borderRadius: 'var(--size-radius-s)',
      flex: 1,
      position: 'relative',
    },
  })
