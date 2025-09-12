import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ComponentProps } from 'react'

import { Loader } from './Loader'
import { DEFAULT_SIZE, Sizes } from './Loader.constants'

type LoaderProps = ComponentProps<typeof Loader>

const meta = {
  args: {
    size: DEFAULT_SIZE,
  },
  argTypes: {
    size: {
      options: Object.values(Sizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(Sizes).join('|') },
      },
    },
  },
  component: Loader,
  parameters: {
    docs: { subtitle: `👷‍♀️ Well, I can drive that loader - Ripley - Alien` },
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

export const Loaders: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Loader size="xxs" />
      <Loader size="xs" />
      <Loader size="s" />
      <Loader size="m" />
      <Loader size="l" />
      <Loader size="xl" />
    </div>
  ),
}
