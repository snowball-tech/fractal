import MoreMenuIcon from '@iconscout/react-unicons/dist/icons/uil-ellipsis-v'
import UserProfileIcon from '@iconscout/react-unicons/dist/icons/uil-house-user'
import SignoutIcon from '@iconscout/react-unicons/dist/icons/uil-signout'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { avatarUrl } from '@/mocks'

import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import DropdownRadioGroup from './DropdownRadioGroup'
import DropdownRadioItem from './DropdownRadioItem'

const textMenu = (
  <>
    <DropdownItem label="My profile" />
    <DropdownItem label="Sign out" />
  </>
)

const iconsMenu = (
  <>
    <DropdownItem icon={<UserProfileIcon />} label="My profile" />
    <DropdownItem icon={<SignoutIcon />} label="Sign out" />
  </>
)

const radioMenu = (
  <DropdownRadioGroup>
    <DropdownRadioItem label="Jedi" value="jedi" />
    <DropdownRadioItem label="Sitg" value="sith" />
  </DropdownRadioGroup>
)

const mixedMenu = (
  <>
    <DropdownItem label="My profile" />
    <DropdownItem icon={<SignoutIcon />} label="Sign out" />
    {radioMenu}
  </>
)

type DropdownProps = ComponentProps<typeof Dropdown>

const meta = {
  argTypes: {
    children: {
      control: 'radio',
      mapping: {
        Mixed: mixedMenu,
        'Radio buttons': radioMenu,
        Text: textMenu,
        'Text with icons': iconsMenu,
      },
      options: ['Text', 'Text with icons', 'Radio buttons', 'Mixed'],
    },
    trigger: {
      control: 'radio',
      mapping: {
        Avatar: <Avatar imageUrl={avatarUrl} name="Luke Skywalker" />,
        Button: <Button label="This is a button trigger" />,
        'Icon Button': (
          <Button
            icon={<MoreMenuIcon />}
            iconOnly
            label="This is an icon button trigger"
            variant="text"
          />
        ),
        Nothing: undefined,
        Text: 'This is the trigger',
      },
      options: ['Nothing', 'Text', 'Button', 'Icon Button', 'Avatar'],
    },
  },
  args: {
    children: 'Text',
    disabled: false,
    trigger: 'Text',
    withIndicator: true,
  },
  component: Dropdown,
  parameters: {
    componentSubtitle: `🚀 Drop it down, Freddo. We're drifting - Jim Lovell - Apollo 13`,
  },

  title: 'Molecules/Dropdown',
} satisfies Meta<DropdownProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
