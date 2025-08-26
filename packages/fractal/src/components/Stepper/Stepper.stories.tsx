import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ComponentProps } from 'react'

import { Stepper } from '.'

type StepperProps = ComponentProps<typeof Stepper>

const meta: Meta<StepperProps> = {
  args: {
    current: 1,
    currentAs: 'step',
    length: 3,
    max: 100,
    value: 33,
  },
  component: Stepper,
  parameters: {
    docs: { subtitle: '🎈 Is this step three or step five? - Russel - Up' },
  },

  title: 'Molecules/Stepper',
} satisfies Meta<StepperProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Simple: Story = {
  render: () => <Stepper current={1} length={3} />,
}

export const Progress: Story = {
  render: () => (
    <Stepper current={1} currentAs="progress" length={3} value={33} />
  ),
}
