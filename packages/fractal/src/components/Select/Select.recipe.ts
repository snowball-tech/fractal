import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'select'

export const selectContainer: ReturnType<typeof defineRecipe> = defineRecipe({
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

  className: 'selectContainer',
  description: 'Select container',
  jsx: ['Select'],
})

export const selectLabel: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    _selectDisabled: {
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

  className: 'selectLabel',
  description: 'Select label',
  jsx: ['Select'],
})

export const selectTrigger: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '& > span[aria-hidden], & > span[aria-hidden] > svg': {
      height: '100%',
    },
    '&[data-placeholder] > div > span': {
      color: `var(--color-text-select-placeholder)`,
      fontStyle: 'var(--style-text-placeholder)',
    },

    '.fractal-select.readonly &': {
      backgroundColor: `var(--color-background-select-disabled)`,
      border: `var(--border-select-disabled)`,
      color: `var(--color-text-select-base)`,
      cursor: 'unset',
      shadow: `var(--shadow-select-disabled)`,
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    _notDisabled: {
      '&[data-state="open"]': {
        backgroundColor: `var(--color-background-select-focus)`,
        border: `var(--border-select-focus)`,
        color: `var(--color-text-select-focus)`,
        shadow: `var(--shadow-select-focus)`,
      },

      _hover: {
        backgroundColor: `var(--color-background-select-hover)`,
        border: `var(--border-select-hover)`,
        color: `var(--color-text-select-hover)`,
        shadow: `var(--shadow-select-hover)`,
      },
    },

    _selectDisabled: {
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
    outline: 'none',
    px: 'var(--size-select-padding-horizontal)',
    shadow: `var(--shadow-select-base)`,
    transition: 'border-color 300ms ease-out',
  },

  className: 'selectTrigger',
  description: 'Select trigger (selected value/placeholder)',
  jsx: ['Select'],
})

export const selectValue: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    alignSelf: 'center',
    flexGrow: 1,
  },

  className: 'selectValue',
  description: 'Select currently selected value (or placeholder)',
  jsx: ['Select'],
})

export const selectIndicator: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '& > svg': {
      height: '100%',
    },

    _selectOpened: {
      transform: 'rotate(180deg)',
    },

    alignSelf: 'center',
    height: '100%',
    transition: 'transform 300ms ease-out',
  },

  className: 'selectIndicator',
  description: 'Select status indicator (arrow)',
  jsx: ['Select'],
})

export const selectDropdown: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    backgroundColor: `var(--color-background-select-base)`,
    border: `var(--border-select-base)`,
    borderRadius: 'var(--size-radius-s)',
    boxSizing: 'border-box',
    mt: 'var(--size-dropdown-gap)',
    overflow: 'hidden',
    padding:
      'var(--size-dropdown-padding-vertical) var(--size-dropdown-padding-horizontal)',
    pointerEvents: 'auto',
    position: 'relative',
    width: 'var(--radix-popper-anchor-width)',
  },

  className: 'selectDropdown',
  description: 'Select dropdown',
  jsx: ['Select'],
})

export const selectDropdownScrollViewport: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      [`&:has(+ .fractal-scrollarea-scrollbar-y)`]: {
        width:
          'calc(100% - var(--size-spacing-1) + var(--size-spacing-quarter))',
      },

      height: '100%',
      maxHeight:
        'calc(var(--radix-popper-available-height) - var(--size-spacing-4))',
      overflow: 'auto',
      position: 'relative',
      width: '100%',
    },

    className: 'selectDropdownScrollViewport',
    description: 'Select dropdown scroll viewport',
    jsx: ['Select'],
  })

export const selectDropdownScrollbar: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      '&[data-orientation="vertical"]': {
        width: 'var(--size-spacing-1)',
      },

      _hover: {
        backgroundColor: ' var(--color-base-grey-70)',
      },

      backgroundColor: 'var(--color-base-grey-90)',
      borderRadius: 'var(--size-radius-s)',
      bottom: 'calc(var(--size-spacing-1) * -1)!',
      display: 'flex',
      padding: '2px',
      right: 'calc(var(--size-spacing-1) * -1)!',
      top: 'calc(var(--size-spacing-1) * -1)!',
      touchAction: 'none',
      transition: 'background-color 300ms ease-out',
      userSelect: 'none',
    },

    className: 'selectDropdownScrollbar',
    description: 'Select dropdown scrollbar',
    jsx: ['Select'],
  })

export const selectDropdownScrollbarThumbs: ReturnType<typeof defineRecipe> =
  defineRecipe({
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

    // eslint-disable-next-line no-secrets/no-secrets
    className: 'selectDropdownScrollbarThumbs',
    description: 'Select dropdown scrollbar thumbs',
    jsx: ['Select'],
  })

export const selectItemGroup: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '& > :first-child': {
      color: `var(--color-text-select-placeholder)`,
      py: 'var(--size-options-padding-vertical)',
    },

    padding:
      'var(--size-options-padding-vertical) var(--size-options-padding-horizontal)',
    py: 0,
  },

  className: 'selectItemGroup',
  description: 'Select options group',
  jsx: ['Select'],
})

export const selectItem: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    _disabled: {
      color: `var(--color-text-select-disabled)`,
      cursor: 'var(--cursor-disabled)',
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
    cursor: 'var(--cursor-clickable)',
    outline: 'none',
    padding:
      'var(--size-options-padding-vertical) var(--size-options-padding-horizontal)',
    transition: 'background-color 300ms ease-out',
  },

  className: 'selectItem',
  description: 'Select option',
  jsx: ['Select'],
})

export const selectItemSeparator: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      backgroundColor: 'var(--color-stroke-separator)',
      height: 'var(--size-border-1)',
      margin:
        'var(--size-options-padding-vertical) var(--size-options-padding-horizontal)',
    },

    className: 'selectItemSeparator',
    description: 'Select options separator',
    jsx: ['Select'],
  })

export const selectDescription: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  className: 'selectDescription',
  description: 'Select description',
  jsx: ['Select'],
})
