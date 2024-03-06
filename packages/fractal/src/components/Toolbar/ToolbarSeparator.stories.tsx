import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Toolbar, ToolbarSeparator, ToolbarToggle, ToolbarToggleGroup } from '.'

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
    <div style={{ height: '200px' }}>
      <Toolbar>
        <ToolbarToggleGroup multiple>
          <ToolbarToggle label="Luke Skywalker" value="luke-skywalker" />
          <ToolbarToggle label="Obi-Wan Kenobi" value="obi-wan-kenobi" />
          <ToolbarToggle label="Yoda" value="yoda" />
        </ToolbarToggleGroup>

        <ToolbarSeparator />

        <ToolbarToggleGroup>
          <ToolbarToggle label="Darth Sidious" value="darth-sidious" />
          <ToolbarToggle label="Darth Maul" value="darth-maul" />
          <ToolbarToggle label="Darth Vader" value="darth-vader" />
        </ToolbarToggleGroup>
      </Toolbar>
    </div>
  ),
}
