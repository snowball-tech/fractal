import { defineRecipe } from '@pandacss/dev'
import type { SystemStyleObject } from '@snowball-tech/fractal-panda/types'

import { DEFAULT_SIZE, Sizes } from './Loader.constants'

export const GROUP_NAME = 'loader'

export const loader: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Loader',
  name: 'loader',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Loader'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {},

  defaultVariants: {
    size: DEFAULT_SIZE,
  },

  variants: {
    size: Object.values(Sizes).reduce(
      (sizes, size) => ({
        ...sizes,

        [size]: {
          height: `var(--size-loader-${size})`,
          width: `var(--size-loader-${size})`,
        },
      }),
      {} as Record<Sizes, SystemStyleObject>,
    ),
  },
})
