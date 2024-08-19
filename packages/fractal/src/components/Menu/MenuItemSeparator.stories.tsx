import type { Meta, StoryObj } from '@storybook/react'

import type { ComponentProps } from 'react'

import { Typography } from '@/components/Typography'

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
    <div className="flex h-[200px] flex-row gap-4">
      <div className="space-y-2">
        <Typography variant="heading-4">Normal menu</Typography>

        <Menu>
          <MenuItem label="Yoda" />
          <MenuItemSeparator />
          <MenuItem label="Darth Sidious" />
        </Menu>
      </div>

      <div className="space-y-2">
        <Typography variant="heading-4">Condensed menu</Typography>

        <Menu condensed>
          <MenuItem label="Yoda" />
          <MenuItemSeparator />
          <MenuItem label="Darth Sidious" />
        </Menu>
      </div>
    </div>
  ),
}
