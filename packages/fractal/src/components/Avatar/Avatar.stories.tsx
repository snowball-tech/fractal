import SignoutIcon from '@iconscout/react-unicons/dist/icons/uil-signout'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { DropdownItem } from '@/components/Dropdown'
import { avatarUrl } from '@/mocks'

import Avatar from './Avatar'
import { Sizes as AvailableSizes, DEFAULT_SIZE } from './Avatar.constants'

type AvatarProps = ComponentProps<typeof Avatar>

const menu = (
  <>
    <DropdownItem label="My profile" />
    <DropdownItem icon={<SignoutIcon />} label="Sign out" />
  </>
)

const meta = {
  argTypes: {
    children: {
      control: 'radio',
      mapping: {
        None: undefined,
        'With menu': menu,
      },
      options: ['None', 'With menu'],
    },
    size: {
      options: Object.values(AvailableSizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(AvailableSizes).join('|') },
      },
    },
  },
  args: {
    children: 'None',
    disabled: false,
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
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="s" />
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="m" />
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="l" />
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="xl" />
    </div>
  ),
}

export const WithMenu: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="xl">
        {menu}
      </Avatar>
    </div>
  ),
}
