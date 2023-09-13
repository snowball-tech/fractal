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
