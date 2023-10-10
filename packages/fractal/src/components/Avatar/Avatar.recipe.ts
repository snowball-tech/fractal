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
      backgroundColor: 'var(--color-decorative-pink-70)',
      color: 'var(--color-text-dark)',
      display: 'flex',
      justifyContent: 'center',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    className: 'avatarWithBackground',
    description: 'Avatar with background color',
    jsx: ['Avatar'],
  })
