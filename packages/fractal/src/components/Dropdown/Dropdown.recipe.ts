import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'dropdown'

export const dropdownContainer: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    width: 'fit-content',
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'dropdownContainer',
  description: 'DropdownContainer',
  jsx: ['Dropdown'],
})

export const dropdownTrigger: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '.fractal-dropdownContainer.disabled &': {
      color: 'var(--color-icon-button-text-disabled)',
    },

    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'unset',
    border: 'none',
    color: 'unset',
    display: 'flex',
    outline: 'none',
    px: 'unset',
    py: 'unset',
    textAlign: 'unset',
  },

  className: 'dropdownTrigger',
  description: 'The trigger of the dropdown menu',
  jsx: ['Dropdown'],
})

export const dropdownTriggerIndicator: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      '& > svg': {
        height: '100%',
      },

      '.fractal-dropdownContainer.opened:not(.disabled) &': {
        transform: 'rotate(180deg)',
      },

      alignItems: 'center',
      alignSelf: 'center',
      display: 'flex',
      height: '100%',
      transition: 'transform 300ms ease-out',
    },

    className: 'dropdownTriggerIndicator',
    description: 'Dropdown menu trigger status indicator (arrow)',
    jsx: ['Dropdown'],
  })

export const dropdown: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    maxWidth: 'var(--radix-dropdown-menu-content-available-width)',
    mx: 'var(--size-spacing-2)',
    width: '100%!',
  },

  className: 'dropdown',
  description: 'The dropdown menu',
  jsx: ['Dropdown'],
})

export const dropdownItem: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    alignItems: 'center',
    display: 'flex',
    gap: 'var(--size-spacing-1)',
  },

  className: 'dropdownItem',
  description: 'The menu item of the dropdown',
  jsx: ['Dropdown', 'DropdownItem'],
})

export const dropdownItemIcon: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    maxHeight: '24px',
    minWidth: '24px',
  },

  className: 'dropdownItemIcon',
  description: 'The icon of a menu item of the dropdown',
  jsx: ['Dropdown', 'DropdownItem'],
})

export const dropdownItemGroup: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  className: 'dropdownItemGroup',
  description: 'Dropdown items group',
  jsx: ['Dropdown', 'DropdownItemGroup'],
})

export const dropdownRadioGroup: ReturnType<typeof defineRecipe> = defineRecipe(
  {
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--size-spacing-1)',
      maxWidth: '100%',
      width: '100%',
    },

    className: 'dropdownRadioGroup',
    description: 'Dropdown radio group',
    jsx: ['Dropdown', 'DropdownRadioGroup'],
  },
)

export const dropdownRadioItem = defineRecipe({
  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '&:focus-visible': {
      outline: 'none',
    },

    '&:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:checked, [data-checked], [aria-checked=true], [data-state="checked"], .checked, :disabled, [data-disabled], .disabled)) > div':
      {
        backgroundColor: `var(--color-background-radio-hover)`,
      },

    '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) & > div, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) & > div':
      {
        color: 'var(--color-box-checkbox-disabled)!',
        cursor: 'var(--cursor-disabled)',
      },

    '.fractal-input-radio-group:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) & > div, .fractal-input-radio:not(:is(:disabled, [disabled], [data-disabled], .disabled, :readonly, [readonly], [data-readonly], .readonly)) & > div':
      {
        _checkedNotDisabled: {
          backgroundColor: `var(--color-background-radio-checked)`,
        },
      },

    alignItems: 'center',
    backgroundColor: 'unset',
    border: 'none',
    boxSizing: 'border-box',
    cursor: 'var(--cursor-clickable)',
    display: 'flex',
    gap: 'var(--size-spacing-2)',
    height: '100%',
    maxWidth: '100%',
    minHeight: 'var(--size-spacing-6)',
    px: 'var(--size-checkbox-padding-horizontal)',
    py: 'var(--size-checkbox-padding-vertical)',
    width: '100%',
  },

  className: 'dropdownRadioItemRadio',
  description: 'Dropdown radio button',
  jsx: ['DropdownRadioItem'],
})

export const dropdownRadioItemCheckmark: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) &, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) &':
        {
          borderColor: 'var(--color-box-checkbox-disabled)',
          color: 'var(--color-mark-checkbox-disabled)!',
          cursor: 'var(--cursor-disabled)',
        },

      alignItems: 'center',
      border: 'var(--size-border-2) solid var(--color-border-default)',
      borderRadius: 'var(--size-radius-rounded)',
      display: 'flex',
      height: '24px',
      justifyContent: 'center',
      maxHeight: '24px',
      maxWidth: '24px',
      pt: 'var(--size-spacing-half)',
      width: '24px',
    },

    className: 'dropdownRadioItemCheckmark',
    description: 'Dropdown radio checkmark',
    jsx: ['Dropdown', 'DropdownRadioItem'],
  })

export const dropdownRadioItemLabel: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      '.fractal-input-radio-group:is(:disabled, [disabled], [data-disabled], .disabled) &, .fractal-input-radio:is(:disabled, [disabled], [data-disabled], .disabled) &':
        {
          color: 'var(--color-text-checkbox-disabled)!',
          cursor: 'var(--cursor-disabled)',
        },

      _dropdownRadioItemRequired: {
        _after: {
          color: 'var(--color-feedback-danger-50)',
          content: '" *"',
        },
      },

      cursor: 'var(--cursor-clickable)',
      flexGrow: 1,
      overflow: 'auto',
      overflowWrap: 'break-word',
    },

    className: 'dropdownRadioItemLabel',
    description: 'Dropdown radio label',
    jsx: ['Dropdown', 'DropdownRadioItem'],
  })
