import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { Colors, DEFAULT_COLOR } from './Tag.constants'

export const GROUP_NAME = 'tag'

export const tag: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    _fullWidth: {
      width: '100%',
    },

    alignItems: 'center',
    borderRadius: 'var(--size-radius-rounded)',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: 'var(--size-spacing-half) var(--size-spacing-1)',
    width: 'fit-content',
  },

  defaultVariants: {
    color: DEFAULT_COLOR,
  },

  variants: {
    color: Object.values(Colors).reduce(
      (colors, colorName) => ({
        ...colors,
        [colorName]: {
          '&:not(.disabled)': {
            backgroundColor: `var(--color-decorative-${colorName}-90, var(--color-brand-${colorName}, var(--color-base-white)))`,
          },

          _disabled: {
            backgroundColor: `var(--color-tag-disabled)`,
            color: 'var(--color-text-disabled)',
            cursor: 'var(--cursor-disabled)',
          },
        },
      }),
      {} as Record<Colors, SystemStyleObject>,
    ),
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'tag',
  description: 'Tag',
  jsx: ['Tag'],
})
