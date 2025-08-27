import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ComponentProps } from 'react'

import { Toolbar } from './Toolbar'
import { ToolbarButton } from './ToolbarButton'
import { ToolbarSeparator } from './ToolbarSeparator'

type ToolbarSeparatorProps = ComponentProps<typeof ToolbarSeparator>

const meta: Meta<ToolbarSeparatorProps> = {
  component: ToolbarSeparator,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Toolbar/ToolbarSeparator',
} satisfies Meta<ToolbarSeparatorProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="h-[200px]">
      <Toolbar>
        <ToolbarButton label="Luke Skywalker" value="luke-skywalker" />
        <ToolbarButton label="Obi-Wan Kenobi" value="obi-wan-kenobi" />
        <ToolbarButton label="Yoda" value="yoda" />

        <ToolbarSeparator />

        <ToolbarButton label="Darth Sidious" value="darth-sidious" />
        <ToolbarButton label="Darth Maul" value="darth-maul" />
        <ToolbarButton label="Darth Vader" value="darth-vader" />
      </Toolbar>
    </div>
  ),
}
