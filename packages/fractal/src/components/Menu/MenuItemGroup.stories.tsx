import type { Meta, StoryObj } from '@storybook/react-vite'

import { action } from 'storybook/actions'

import type { ComponentProps } from 'react'

import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { MenuItemGroup } from './MenuItemGroup'

type MenuItemGroupProps = ComponentProps<typeof MenuItemGroup>
const meta: Meta<MenuItemGroupProps> = {
  args: {
    condensed: false,
    disabled: false,
    label: 'Jedis',
    rainbow: true,
  },
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
  component: MenuItemGroup,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Menu/MenuItemGroup',
} satisfies Meta<MenuItemGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ condensed = false, disabled = false, label, rainbow = true }) => (
    <div className="h-[300px]">
      <Menu>
        <MenuItemGroup
          condensed={condensed}
          disabled={disabled}
          label={label}
          rainbow={rainbow}
        >
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
