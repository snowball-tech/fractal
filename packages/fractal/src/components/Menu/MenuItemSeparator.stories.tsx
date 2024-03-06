import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Menu, MenuItem, MenuItemSeparator } from '.'

type MenuItemSeparatorProps = ComponentProps<typeof MenuItemSeparator>

const meta: Meta<MenuItemSeparatorProps> = {
  component: MenuItemSeparator,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Menu/MenuItemSeparator',
} satisfies Meta<MenuItemSeparatorProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div style={{ height: '200px' }}>
      <Menu>
        <MenuItem label="Yoda" />
        <MenuItemSeparator />
        <MenuItem label="Darth Sidious" />
      </Menu>
    </div>
  ),
}
