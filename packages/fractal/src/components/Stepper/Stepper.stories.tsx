import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Stepper from './Stepper'

type StepperProps = ComponentProps<typeof Stepper>

const meta: Meta<StepperProps> = {
  args: {
    current: 1,
    highlighted: false,
    length: 3,
  },
  component: Stepper,
  parameters: {
    componentSubtitle: '🎈 Is this step three or step five? - Russel - Up',
  },

  title: 'Molecules/Stepper',
} satisfies Meta<StepperProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
