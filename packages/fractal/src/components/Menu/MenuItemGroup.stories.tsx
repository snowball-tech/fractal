import { action } from '@storybook/addon-actions'
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
          <MenuItem
            label="Luke Skywalker"
            onActivate={() => action('onActivate')('Luke Skywalker')}
            onClick={() => action('onClick')('Luke Skywalker')}
            onKeyDown={() => action('onKeyDown')('Luke Skywalker')}
          />
          <MenuItem
            label="Obi-Wan Kenobi"
            onActivate={() => action('onActivate')('Obi-Wan Kenobi')}
            onClick={() => action('onClick')('Obi-Wan Kenobi')}
            onKeyDown={() => action('onKeyDown')('Obi-Wan Kenobi')}
          />
          <MenuItem
            label="Yoda"
            onActivate={() => action('onActivate')('Yoda')}
            onClick={() => action('onClick')('Yoda')}
            onKeyDown={() => action('onKeyDown')('Yoda')}
          />
        </MenuItemGroup>
      </Menu>
    </div>
  ),
}
