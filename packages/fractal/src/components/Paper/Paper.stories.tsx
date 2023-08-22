import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Paper from './Paper'
import { DEFAULT_ELEVATION, Elevations } from './Paper.constants'

type PaperProps = ComponentProps<typeof Paper>

const meta = {
  argTypes: {
    children: { control: 'text' },
    elevation: {
      control: 'radio',
      mapping: {
        Bordered: Elevations.Bordered,
        Elevated: Elevations.Elevated,
      },
      options: ['Bordered', 'Elevated'],
      table: {
        defaultValue: { summary: DEFAULT_ELEVATION },
        type: { summary: Object.values(Elevations).join('|') },
      },
    },
  },
  args: {
    children:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',
    elevation: DEFAULT_ELEVATION,
  },
  component: Paper,
  parameters: {
    componentSubtitle: `🦸‍♂️ I've been nice, I've stood for photos, signed every scrap of paper you pushed at me... - Mr. Incredible - The Incredibles`,
  },

  title: 'Molecules/Paper',
} satisfies Meta<PaperProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    elevation: DEFAULT_ELEVATION,
  },
}

export const Papers: Story = {
  parameters: {
    controls: {
      include: ['children'],
    },
  },
  render: ({ children }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-3)',
      }}
    >
      <Paper elevation="1">{children}</Paper>
      <Paper elevation="2">{children}</Paper>
    </div>
  ),
}
