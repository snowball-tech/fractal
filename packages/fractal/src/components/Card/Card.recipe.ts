import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { Colors, DEFAULT_COLOR } from './Card.constants'

export const GROUP_NAME = 'card'

export const card: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Card',
  name: 'card',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    borderRadius: 'var(--size-radius-s)',
    padding: 'var(--size-spacing-2)',
  },

  defaultVariants: {
    color: DEFAULT_COLOR,
  },

  jsx: ['Card'],

  variants: {
    color: Object.values(Colors).reduce(
      (colors, colorName) => ({
        ...colors,

        [colorName]: {
          backgroundColor: `var(--color-decorative-${colorName}-90)`,
        },
      }),
      {} as Record<Colors, SystemStyleObject>,
    ),
  },
})
