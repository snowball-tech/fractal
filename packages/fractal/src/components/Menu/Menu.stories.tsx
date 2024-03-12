import UserProfileIcon from '@iconscout/react-unicons/dist/icons/uil-house-user'
import SignoutIcon from '@iconscout/react-unicons/dist/icons/uil-signout'
import UserAccountIcon from '@iconscout/react-unicons/dist/icons/uil-user-circle'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
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

const textMenu = (
  <>
    <MenuItemGroup label="Account">
      <MenuItem label="My profile" />
      <MenuItem label="My account" />
    </MenuItemGroup>

    <MenuItemSeparator />

    <MenuItem label="Sign out" />
  </>
)

const iconsMenu = (
  <>
    <MenuItemGroup label="Account">
      <MenuItem icon={<UserProfileIcon />} label="My profile" />
      <MenuItem icon={<UserAccountIcon />} label="My account" />
    </MenuItemGroup>

    <MenuItemSeparator />

    <MenuItem icon={<SignoutIcon />} label="Sign out" />
  </>
)

const mixedMenu = (
  <>
    <MenuItemGroup label="Account">
      <MenuItem icon={<UserProfileIcon />} label="My profile" />
      <MenuItem label="My account" />
    </MenuItemGroup>

    <MenuItemSeparator />

    <SubMenu label="SubMenu 1">
      <MenuItem label="Item 1" />
      <MenuItem label="Item 2" />
    </SubMenu>

    <SubMenu label="SubMenu 2">
      <MenuItem label="Item 1" />
      <MenuItem label="Item 2" />
    </SubMenu>

    <MenuItemSeparator />

    <MenuItem icon={<SignoutIcon />} label="Sign out" />
  </>
)

type MenuProps = ComponentProps<typeof Menu>

const meta: Meta<MenuProps> = {
  argTypes: {
    children: {
      control: 'radio',
      mapping: {
        Mixed: mixedMenu,
        Text: textMenu,
        'Text with icons': iconsMenu,
      },
      options: ['Text', 'Text with icons', 'Mixed'],
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
  args: {
    children: 'Text',
    disabled: false,
    elevation: DEFAULT_ELEVATION,
    embedded: false,
    fullWidth: false,
    orientation: DEFAULT_ORIENTATION,
  },
  component: Menu,
  parameters: {
    componentSubtitle: `🐀 And he's going to order something, something from our menu. - Linguini - Ratatouille`,
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
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      await userEvent.hover(menuItems.at(0)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(1)!)
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
    }
  },
  render: () => <Menu>{mixedMenu}</Menu>,
}
