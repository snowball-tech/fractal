import type { Meta, StoryObj } from '@storybook/react'

import type { ComponentProps } from 'react'

import { Badge } from '.'

type BadgeProps = ComponentProps<typeof Badge>

const perVariantStoriesParameters = {
  controls: {
    include: ['count, limit = 99'],
  },
}

const meta = {
  args: {
    count: undefined,
    limit: 99,
  },
  argTypes: {
    count: { control: 'number' },
    limit: { control: 'number' },
  },
  component: Badge,
  parameters: {
    componentSubtitle:
      "🎈 You may notice one is missing. It's my Assisting the Elderly badge. - Russel - Up",
  },

  title: 'Molecules/Badge',
} satisfies Meta<BadgeProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Badges: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: () => (
    <div className="flex flex-col gap-2">
      <Badge />
      <Badge count={-42} />
      <Badge count={-1} />
      <Badge count={0} />
      <Badge count={1} />
      <Badge count={42} />
      <Badge count={99} />
      <Badge count={100} />
      <Badge count={100} limit={1000} />
      <Badge count={999} limit={1000} />
      <Badge count={9999} limit={1000} />
    </div>
  ),
}
