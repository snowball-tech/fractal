import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Logo from './Logo'
import { Sizes as AvailableSizes, DEFAULT_SIZE } from './Logo.constants'

type LogoProps = ComponentProps<typeof Logo>

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
  component: Logo,
  parameters: {
    componentSubtitle: `🦸‍♀️ What is it? - It's the SHIELD logo - Does announcing your identity on clothing help with the covert part of your job? - Carol Denver - Captain Marvel`,
  },

  title: 'Molecules/Logo',
} satisfies Meta<LogoProps>

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
      <Logo size="s" />
      <Logo size="m" />
      <Logo size="l" />
      <Logo size="xl" />
      <Logo size="fluid" />
    </div>
  ),
}
