import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Dropdown, DropdownItem, DropdownItemGroup } from '.'

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
    disabled: false,
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
  render: ({ disabled = false, label }) => (
    <div style={{ height: '300px' }}>
      <Dropdown trigger="Jedis">
        <DropdownItemGroup disabled={disabled} label={label}>
          <DropdownItem label="Luke Skywalker" />
          <DropdownItem label="Obi-Wan Kenobi" />
          <DropdownItem label="Yoda" />
        </DropdownItemGroup>
      </Dropdown>
    </div>
  ),
}
