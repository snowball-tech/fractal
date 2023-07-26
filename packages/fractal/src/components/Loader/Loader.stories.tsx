import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Loader from './Loader'
import { Sizes as AvailableSizes, DEFAULT_SIZE } from './Loader.constants'

type LoaderProps = ComponentProps<typeof Loader>

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
  component: Loader,
  parameters: {
    componentSubtitle: `👷‍♀️ Well, I can drive that loader - Ripley - Alien`,
  },

  title: 'Molecules/Loader',
} satisfies Meta<LoaderProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    size: DEFAULT_SIZE,
  },
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <Loader size="xs" />
      <Loader size="s" />
      <Loader size="m" />
      <Loader size="l" />
      <Loader size="xl" />
      <Loader size="xxl" />
    </div>
  ),
}
