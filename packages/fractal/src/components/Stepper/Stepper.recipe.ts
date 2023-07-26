import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'stepper'

export const stepper: ReturnType<typeof defineRecipe> = defineRecipe({
  description: 'Container for the steps of the stepper',
  name: 'stepper',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Stepper'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: 'var(--size-spacing-1)',
    maxWidth: '100%',
    width: 'fit-content',
  },
})

export const step = defineRecipe({
  description: 'A step',
  name: 'step',

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  jsx: ['Stepper'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  base: {
    '.fractal-stepper.highlighted &': {
      _active: {
        backgroundColor:
          'var(--color-background-stepper-step-active-highlighted)',
        border: 'var(--border-stepper-step-active)',
      },
    },

    _active: {
      backgroundColor: 'var(--color-background-stepper-step-active-neutral)',
      border: 'var(--border-stepper-step-active)',
    },

    _completed: {
      backgroundColor: 'var(--color-background-stepper-step-completed)',
      border: 'var(--border-stepper-step-completed)',
    },

    backgroundColor: 'var(--color-background-stepper-step-base)',
    border: 'var(--border-stepper-step-base)',
    borderRadius: 'var(--size-radius-rounded)',
    height: '16px',
    width: '40px',
  },
})
