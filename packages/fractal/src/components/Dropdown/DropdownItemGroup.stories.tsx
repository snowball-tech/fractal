import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import DropdownItemGroup from './DropdownItemGroup'

type DropdownItemGroupProps = ComponentProps<typeof DropdownItemGroup>

const meta: Meta<DropdownItemGroupProps> = {
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
  component: DropdownItemGroup,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Dropdown/DropdownItemGroup',
} satisfies Meta<DropdownItemGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ label }) => (
    <Dropdown>
      <DropdownItemGroup label={label}>
        <DropdownItem label="Luke Skywalker" />
        <DropdownItem label="Obi-Wan Kenobi" />
        <DropdownItem label="Yoda" />
      </DropdownItemGroup>
    </Dropdown>
  ),
}
