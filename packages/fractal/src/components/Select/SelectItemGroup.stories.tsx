import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Select from './Select'
import SelectItem from './SelectItem'
import SelectItemGroup from './SelectItemGroup'

type SelectItemGroupProps = ComponentProps<typeof SelectItemGroup>

const meta: Meta<SelectItemGroupProps> = {
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
  args: {
    label: 'Jedis',
  },
  component: SelectItemGroup,

  title: 'Molecules/Select/SelectItemGroup',
} satisfies Meta<SelectItemGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ label }) => (
    <Select placeholder="Click to open" onSelect={action('onSelect')}>
      <SelectItemGroup label={label}>
        <SelectItem value="luke-skywalker">Luke Skywalker</SelectItem>
        <SelectItem value="obi-wan-kenobi">Obi-Wan Kenobi</SelectItem>
        <SelectItem value="yoda">Yoda</SelectItem>
      </SelectItemGroup>
    </Select>
  ),
}
