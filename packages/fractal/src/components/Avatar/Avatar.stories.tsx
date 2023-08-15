import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Avatar from './Avatar'
import { Sizes as AvailableSizes, DEFAULT_SIZE } from './Avatar.constants'

type AvatarProps = ComponentProps<typeof Avatar>

const meta = {
  argTypes: {
    size: {
      options: Object.values(AvailableSizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(AvailableSizes).join('|') },
      },
    },
  },
  component: Avatar,
  parameters: {
    componentSubtitle: `🧑‍🔬 Jake! Listen to me! You're not used to your avatar body. This is dangerous! - Dr. Max Patel - Avatar`,
  },

  title: 'Molecules/Avatar',
} satisfies Meta<AvatarProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    size: DEFAULT_SIZE,
  },
}

export const Icon: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <Avatar size="s" />
      <Avatar size="m" />
      <Avatar size="l" />
      <Avatar size="xl" />
    </div>
  ),
}

export const Name: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <Avatar name="Luke Skywalker" size="s" />
      <Avatar name="Luke Skywalker" size="m" />
      <Avatar name="Luke Skywalker" size="l" />
      <Avatar name="Luke Skywalker" size="xl" />
    </div>
  ),
}

export const Image: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <Avatar
        imageUrl="https://thispersondoesnotexist.com/"
        name="This person does not exist"
        size="s"
      />
      <Avatar
        imageUrl="https://thispersondoesnotexist.com/"
        name="This person does not exist"
        size="m"
      />
      <Avatar
        imageUrl="https://thispersondoesnotexist.com/"
        name="This person does not exist"
        size="l"
      />
      <Avatar
        imageUrl="https://thispersondoesnotexist.com/"
        name="This person does not exist"
        size="xl"
      />
    </div>
  ),
}
