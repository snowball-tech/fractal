import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'stepper'

export const stepper: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: 'var(--size-spacing-1)',
    maxWidth: '100%',
    width: 'fit-content',
  },

  className: 'stepper',
  description: 'Container for the steps of the stepper',
  jsx: ['Stepper'],
})

export const step: ReturnType<typeof defineRecipe> = defineRecipe({
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

  className: 'step',
  description: 'A step',
  jsx: ['Stepper'],
})
