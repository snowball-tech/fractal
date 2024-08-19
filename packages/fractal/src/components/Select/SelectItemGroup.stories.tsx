import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import type { ComponentProps } from 'react'

import { Select, SelectItem, SelectItemGroup } from '.'

type SelectItemGroupProps = ComponentProps<typeof SelectItemGroup>

const meta: Meta<SelectItemGroupProps> = {
  args: {
    disabled: false,
    label: 'Jedis',
  },
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary:
            'SelectItem | SelectItemSeparator | Array<SelectItem | SelectItemSeparator>',
        },
      },
    },
  },
  component: SelectItemGroup,

  title: 'Molecules/Select/SelectItemGroup',
} satisfies Meta<SelectItemGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, label }) => (
    <div className="h-[1200px]">
      <Select placeholder="Click to open" onSelect={action('onSelect')}>
        <SelectItemGroup disabled={disabled} label={label}>
          <SelectItem value="luke-skywalker">Luke Skywalker</SelectItem>
          <SelectItem value="obi-wan-kenobi">Obi-Wan Kenobi</SelectItem>
          <SelectItem value="yoda">Yoda</SelectItem>
        </SelectItemGroup>
      </Select>
    </div>
  ),
}
