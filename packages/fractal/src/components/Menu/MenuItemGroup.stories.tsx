import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Menu, MenuItem, MenuItemGroup } from '.'

type MenuItemGroupProps = ComponentProps<typeof MenuItemGroup>

const meta: Meta<MenuItemGroupProps> = {
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary:
            'MenuItem | MenuItemSeparator | Array<MenuItem | MenuItemSeparator>',
        },
      },
    },
  },
  args: {
    disabled: false,
    label: 'Jedis',
  },
  component: MenuItemGroup,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Menu/MenuItemGroup',
} satisfies Meta<MenuItemGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, label }) => (
    <div style={{ height: '300px' }}>
      <Menu>
        <MenuItemGroup disabled={disabled} label={label}>
          <MenuItem label="Luke Skywalker" />
          <MenuItem label="Obi-Wan Kenobi" />
          <MenuItem label="Yoda" />
        </MenuItemGroup>
      </Menu>
    </div>
  ),
}
