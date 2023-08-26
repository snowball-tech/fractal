import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'stepper'

export const stepper: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: 'var(--size-spacing-1)',
    maxWidth: '100%',
  },

  className: 'stepper',
  description: 'Container for the steps of the stepper',
  jsx: ['Stepper'],
})

export const step: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '&:is([data-active="true"], .active)': {
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
    height: 'var(--size-spacing-1)',
    maxWidth: 'var(--size-spacing-5)',
    width: '100%',
  },

  className: 'step',
  description: 'A step',
  jsx: ['Stepper'],
})

export const stepAsProgress: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    '.fractal-stepper.current-as-step &': {
      maxWidth: 'var(--size-spacing-5)',
    },

    width: '100%',
  },

  className: 'stepAsProgress',
  description: 'Container for the current step when displayed as progress bar',
  jsx: ['Stepper'],
})
