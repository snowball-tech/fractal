import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Toolbar, ToolbarToggle, ToolbarToggleGroup } from '.'

type ToolbarToggleGroupProps = ComponentProps<typeof ToolbarToggleGroup>

const meta: Meta<ToolbarToggleGroupProps> = {
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary:
            'ToolbarToggle | ToolbarToggleSeparator | Array<ToolbarToggle | ToolbarToggleSeparator>',
        },
      },
    },
  },
  args: {
    disabled: false,
    label: 'Jedis',
    multiple: false,
  },
  component: ToolbarToggleGroup,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Toolbar/ToolbarToggleGroup',
} satisfies Meta<ToolbarToggleGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, label, multiple = false }) => (
    <div style={{ height: '300px' }}>
      <Toolbar>
        <ToolbarToggleGroup
          disabled={disabled}
          label={label}
          multiple={multiple}
        >
          <ToolbarToggle label="Luke Skywalker" value="luke-skywalker" />
          <ToolbarToggle label="Obi-Wan Kenobi" value="obi-wan-kenobi" />
          <ToolbarToggle label="Yoda" value="yoda" />
        </ToolbarToggleGroup>
      </Toolbar>
    </div>
  ),
}
