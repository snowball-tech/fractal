import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ComponentProps } from 'react'

import { Progress } from './Progress'

type ProgressProps = ComponentProps<typeof Progress>

const meta: Meta<ProgressProps> = {
  args: {
    max: 100,
    value: 33,
  },
  component: Progress,
  parameters: {
    docs: {
      subtitle:
        '🧑‍🔧 Move, move, move! This is a 54-23 in progress - 04114 - Monsters University',
    },
  },

  title: 'Molecules/Progress',
} satisfies Meta<ProgressProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
