import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { userEvent, within } from '@storybook/test'
import { UilSignout as SignoutIcon } from '@tooni/iconscout-unicons-react'

import type { ComponentProps } from 'react'

import { DropdownItem } from '@/components/Dropdown'
import { avatarUrl } from '@/mocks'
import { sleep } from '@/utils'

import { Avatar, AvatarSizes } from '.'
import { DEFAULT_SIZE, Sizes } from './Avatar.constants'

type AvatarProps = ComponentProps<typeof Avatar>

const menu = (
  <>
    <DropdownItem
      label="My profile"
      onSelect={() => action('onSelect')('My profile')}
    />
    <DropdownItem
      icon={<SignoutIcon />}
      label="Sign out"
      onSelect={() => action('onSelect')('Sign out')}
    />
  </>
)

const meta = {
  args: {
    children: undefined,
    disabled: false,
    fluidSize: 240,
    imageUrl: '',
    name: '',
    size: DEFAULT_SIZE,
  },
  argTypes: {
    children: {
      control: 'radio',
      mapping: {
        None: undefined,
        'With menu': menu,
      },
      options: ['None', 'With menu'],
    },
    fluidSize: {
      control: 'number',
      if: { arg: 'size', eq: Sizes.Fluid },
    },
    size: {
      options: Object.values(AvatarSizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(AvatarSizes).join('|') },
      },
    },
  },
  component: Avatar,
  parameters: {
    docs: {
      subtitle: `🧑‍🔬 Jake! Listen to me! You're not used to your avatar body. This is dangerous! - Dr. Max Patel - Avatar`,
    },
  },

  title: 'Molecules/Avatar',
} satisfies Meta<{ fluidSize?: number } & AvatarProps>

export default meta
type Story = StoryObj<{ fluidSize?: number } & AvatarProps>

export const Playground: Story = {
  args: {
    size: DEFAULT_SIZE,
  },
  render: ({ children, fluidSize = 240, imageUrl = '', name = '', size }) =>
    size === Sizes.Fluid ? (
      <div style={{ height: fluidSize, width: fluidSize }}>
        <Avatar imageUrl={imageUrl} name={name} size={size}>
          {children}
        </Avatar>
      </div>
    ) : (
      <Avatar imageUrl={imageUrl} name={name} size={size}>
        {children}
      </Avatar>
    ),
}

export const Icon: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Avatar size="s" />
      <Avatar size="m" />
      <Avatar size="l" />
      <Avatar size="xl" />
      <div className="size-[240px]">
        <Avatar size="fluid" />
      </div>
    </div>
  ),
}

export const Name: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Avatar name="Luke Skywalker" size="s" />
      <Avatar name="Luke Skywalker" size="m" />
      <Avatar name="Luke Skywalker" size="l" />
      <Avatar name="Luke Skywalker" size="xl" />
      <div className="size-[240px]">
        <Avatar name="Luke Skywalker" size="fluid" />
      </div>
    </div>
  ),
}

export const Image: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="s" />
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="m" />
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="l" />
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="xl" />

      <div className="size-[240px]">
        <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="fluid" />
      </div>
    </div>
  ),
}

export const WithMenu: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="xl">
        {menu}
      </Avatar>
    </div>
  ),
}

export const InteractiveMenu: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    await userEvent.click(canvas.getByRole('button'))

    await sleep(500)
    await userEvent.hover(body.getByRole('menuitem', { name: 'My profile' }))

    await sleep(500)
    await userEvent.hover(body.getByRole('menuitem', { name: 'Sign out' }))
  },
  render: () => (
    <div className="flex h-[800px] flex-col gap-2">
      <Avatar imageUrl={avatarUrl} name="Luke Skywalker" size="xl">
        {menu}
      </Avatar>
    </div>
  ),
}
