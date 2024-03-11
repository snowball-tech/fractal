import UserProfileIcon from '@iconscout/react-unicons/dist/icons/uil-house-user'
import SignoutIcon from '@iconscout/react-unicons/dist/icons/uil-signout'
import UserAccountIcon from '@iconscout/react-unicons/dist/icons/uil-user-circle'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import type { ComponentProps } from 'react'

import { sleep } from '@/utils'

import { Menu, MenuItem, MenuItemGroup, MenuItemSeparator } from '.'

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
  },
  args: {
    children: 'Text',
    disabled: false,
    fullWidth: false,
  },
  component: Menu,
  parameters: {
    componentSubtitle: `🚀 Drop it down, Freddo. We're drifting - Jim Lovell - Apollo 13`,
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
