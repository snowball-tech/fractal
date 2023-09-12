import { defineRecipe } from '@pandacss/dev'

export const GROUP_NAME = 'progress'

export const progress: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    backgroundColor: 'var(--color-background-stepper-step-base)',
    border: 'var(--border-stepper-step-base)',
    borderRadius: 'var(--size-radius-rounded)',
    height: '8px',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },

  className: 'progress',
  description: 'The progress bar',
  jsx: ['Progress'],
})

export const progressIndicator: ReturnType<typeof defineRecipe> = defineRecipe({
  base: {
    backgroundColor: 'var(--color-background-stepper-step-completed)',
    borderRadius: 'var(--size-radius-rounded)',
    height: '100%',
    transition: 'transform 600ms cubic-bezier(0.65, 0, 0.35, 1)',
    transitionDelay: '100ms',
    width: '100%',
  },

  className: 'progressIndicator',
  description: 'The progress indicator',
  jsx: ['Progress'],
})
