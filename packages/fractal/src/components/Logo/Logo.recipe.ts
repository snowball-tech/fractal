import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_SIZE, Sizes } from './Logo.constants'

export const GROUP_NAME = 'logo'

export const logo: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {},

  defaultVariants: {
    size: DEFAULT_SIZE,
  },

  variants: {
    size: Object.values(Sizes).reduce(
      (sizes, size) => ({
        ...sizes,

        [size]: {
          height: `var(--size-logo-${size}-height)`,
          width: `var(--size-logo-${size}-width)`,
        },
      }),
      {} as Record<Sizes, SystemStyleObject>,
    ),
  },

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  className: 'logo',
  description: 'Logo',
  jsx: ['Logo'],
})
