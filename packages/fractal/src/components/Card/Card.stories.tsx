import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Card from './Card'
import { Colors, DEFAULT_COLOR } from './Card.constants'

type CardProps = ComponentProps<typeof Card>

const perColorStoriesParameters = {
  controls: {
    include: ['children'],
  },
}

const meta = {
  argTypes: {
    children: { control: 'text' },
    color: {
      options: Object.values(Colors),
      table: {
        defaultValue: { summary: DEFAULT_COLOR },
        type: { summary: Object.values(Colors).join('|') },
      },
    },
  },
  args: {
    children:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',
  },
  component: Card,
  parameters: {
    componentSubtitle: `🐠 Let's play the "Let's Not Die" card - Marin - Finding Nemo`,
  },

  title: 'Molecules/Card',
} satisfies Meta<CardProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: DEFAULT_COLOR,
  },
}

export const Cards: Story = {
  parameters: { ...perColorStoriesParameters },
  render: ({ children }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-3)',
      }}
    >
      <Card color="blue">{children}</Card>
      <Card color="green">{children}</Card>
      <Card color="pink">{children}</Card>
      <Card color="purple">{children}</Card>
      <Card color="yellow">{children}</Card>
    </div>
  ),
}
