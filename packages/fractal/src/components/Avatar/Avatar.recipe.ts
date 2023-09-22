import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_SIZE, Sizes } from './Avatar.constants'

export const GROUP_NAME = 'avatar'

export const avatarContainer: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    width: 'fit-content',
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'avatarContainer',
  description: 'AvatarContainer',
  jsx: ['Avatar'],
})

export const avatar: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    border: 'var(--border-1)',
    borderRadius: 'var(--size-radius-rounded)',
  },

  defaultVariants: {
    size: DEFAULT_SIZE,
  },

  variants: {
    size: Object.values(Sizes).reduce(
      (sizes, size) => ({
        ...sizes,

        [size]: {
          '& > svg': {
            height: `calc(var(--size-avatar-${size}) / 2)`,
            width: `calc(var(--size-avatar-${size}) / 2)`,
          },

          height: `var(--size-avatar-${size})`,
          maxHeight: `var(--size-avatar-${size})`,
          maxWidth: `var(--size-avatar-${size})`,
          minHeight: `var(--size-avatar-${size})`,
          minWidth: `var(--size-avatar-${size})`,
          width: `var(--size-avatar-${size})`,
        },
      }),
      {} as Record<Sizes, SystemStyleObject>,
    ),
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'avatar',
  description: 'Avatar',
  jsx: ['Avatar'],
})

export const avatarWithBackground: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      alignItems: 'center',
      backgroundColor: 'var(--color-brand-primary)',
      color: 'var(--color-text-dark)',
      display: 'flex',
      justifyContent: 'center',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    className: 'avatarWithBackground',
    description: 'Avatar with background color',
    jsx: ['Avatar'],
  })

export const avatarDropdownTrigger: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
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

    className: 'avatarDropdownTrigger',
    description: 'The trigger of the dropdown menu of the avatar',
    jsx: ['Avatar'],
  })

export const avatarDropdownTriggerIndicator: ReturnType<typeof defineRecipe> =
  defineRecipe({
    base: {
      '& > svg': {
        height: '100%',
      },

      '.fractal-avatarContainer.opened &': {
        transform: 'rotate(180deg)',
      },

      alignSelf: 'center',
      height: '100%',
      transition: 'transform 300ms ease-out',
    },

    className: 'avatarDropdownTriggerIndicator',
    description: 'Avatar dropdown menu trigger status indicator (arrow)',
    jsx: ['Avatar'],
  })

export const avatarDropdown: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    maxWidth: 'var(--radix-dropdown-menu-content-available-width)',
    mx: 'var(--size-spacing-2)',
    width: 'unset!',
  },

  className: 'avatarDropdown',
  description: 'The dropdown menu of the avatar',
  jsx: ['Avatar'],
})

export const avatarMenuItem: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    alignItems: 'center',
    display: 'flex',
    gap: 'var(--size-spacing-1)',
  },

  className: 'avatarMenuItem',
  description: 'The menu item of the avatar dropdown',
  jsx: ['Avatar'],
})

export const avatarMenuItemIcon: ReturnType<typeof defineRecipe> = defineRecipe(
  {
    base: {
      maxHeight: '24px',
      minWidth: '24px',
    },

    className: 'avatarMenuItemIcon',
    description: 'The icon of a menu item of the avatar dropdown',
    jsx: ['Avatar'],
  },
)
