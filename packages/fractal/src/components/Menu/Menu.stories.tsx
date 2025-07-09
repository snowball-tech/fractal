import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { userEvent, within } from '@storybook/test'
import {
  UilMoon as DarkModeIcon,
  UilSun as LightModeIcon,
  UilCog as SettingsIcon,
  UilSignout as SignoutIcon,
} from '@tooni/iconscout-unicons-react'

import type { ComponentProps } from 'react'

import { sleep } from '@/utils'

import {
  Menu,
  MenuElevations,
  MenuItem,
  MenuItemGroup,
  MenuItemSeparator,
  MenuOrientations,
  SubMenu,
} from '.'
import { DEFAULT_ELEVATION, DEFAULT_ORIENTATION } from './Menu.constants'

const children = (
  <>
    <MenuItemGroup label="Account">
      <MenuItem
        label="My profile"
        onActivate={() => action('onActivate')('My profile')}
        onClick={() => action('onClick')('My profile')}
        onKeyDown={() => action('onKeyDown')('My profile')}
      />
      <MenuItem
        label="My account"
        onActivate={() => action('onActivate')('My account')}
        onClick={() => action('onClick')('My account')}
        onKeyDown={() => action('onKeyDown')('My account')}
      />
    </MenuItemGroup>

    <MenuItemSeparator />

    <SubMenu icon={<SettingsIcon />} label="Settings">
      <MenuItem
        icon={<LightModeIcon />}
        label="Light Mode"
        onActivate={() => action('onActivate')('Settings - Light Mode')}
        onClick={() => action('onClick')('Settings - Light Mode')}
        onKeyDown={() => action('onKeyDown')('Settings - Light Mode')}
      />
      <MenuItem
        icon={<DarkModeIcon />}
        label="Dark Mode"
        onActivate={() => action('onActivate')('Settings - Dark Mode')}
        onClick={() => action('onClick')('Settings - Dark Mode')}
        onKeyDown={() => action('onKeyDown')('Settings - Dark Mode')}
      />
    </SubMenu>

    <SubMenu label="Help">
      <MenuItem
        label="Knowledge center"
        onActivate={() => action('onActivate')('Help - Knowledge center')}
        onClick={() => action('onClick')('Help - Knowledge center')}
        onKeyDown={() => action('onKeyDown')('Help - Knowledge center')}
      />
      <MenuItem
        label="Contact support"
        onActivate={() => action('onActivate')('Help - Contact support')}
        onClick={() => action('onClick')('Help - Contact support')}
        onKeyDown={() => action('onKeyDown')('Help - Contact support')}
      />
    </SubMenu>

    <MenuItemSeparator />

    <MenuItem
      icon={<SignoutIcon />}
      label="Sign out"
      onActivate={() => action('onActivate')('Sign out')}
      onClick={() => action('onClick')('Sign out')}
      onKeyDown={() => action('onKeyDown')('Sign out')}
    />
  </>
)

type MenuProps = ComponentProps<typeof Menu>

const meta: Meta<MenuProps> = {
  args: {
    children,
    condensed: false,
    disabled: false,
    elevation: DEFAULT_ELEVATION,
    embedded: false,
    fullWidth: false,
    orientation: DEFAULT_ORIENTATION,
    rainbow: true,
  },
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary:
            'MenuItem | MenuItemGroup | SubMenu | MenuItemSeparator | Array<MenuItem | MenuItemGroup | SubMenu MenuItemSeparator>',
        },
      },
    },
    elevation: {
      control: 'radio',
      table: {
        defaultValue: { summary: DEFAULT_ELEVATION },
        type: { summary: Object.values(MenuElevations).join('|') },
      },
    },
    orientation: {
      options: Object.values(MenuOrientations),
      table: {
        defaultValue: { summary: DEFAULT_ORIENTATION },
        type: { summary: Object.values(MenuOrientations).join('|') },
      },
    },
  },
  component: Menu,
  parameters: {
    docs: {
      subtitle: `🐀 And he's going to order something, something from our menu. - Linguini - Ratatouille`,
    },
  },

  title: 'Molecules/Menu',
} satisfies Meta<MenuProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const menuItems = canvas.getAllByRole('menuitem')
    if (menuItems.length > 0) {
      await userEvent.hover(menuItems.at(0)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(1)!)
    }
  },
  render: () => <Menu>{children}</Menu>,
}
