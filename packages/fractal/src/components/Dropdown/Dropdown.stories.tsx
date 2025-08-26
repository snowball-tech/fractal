import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilEllipsisV as MoreMenuIcon,
  UilSignout as SignoutIcon,
  UilUserCircle as UserAccountIcon,
  UilHouseUser as UserProfileIcon,
} from '@tooni/iconscout-unicons-react'
import isChromatic from 'chromatic'
import { fn, userEvent, within } from 'storybook/test'

import type { ComponentProps, ReactNode } from 'react'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Elevations } from '@/components/Paper/Paper.constants'
import { avatarUrl } from '@/mocks'
import { sleep } from '@/utils'

import {
  Dropdown,
  DropdownItem,
  DropdownItemGroup,
  DropdownItemSeparator,
  DropdownRadioGroup,
  DropdownRadioItem,
} from '.'
import { DEFAULT_ELEVATION } from './Dropdown.constants'

const textMenu = (
  <>
    <DropdownItemGroup label="Account">
      <DropdownItem label="My profile" />
      <DropdownItem label="My account" />
    </DropdownItemGroup>

    <DropdownItemSeparator />

    <DropdownItem label="Sign out" />
  </>
)

const iconsMenu = (
  <>
    <DropdownItemGroup label="Account">
      <DropdownItem icon={<UserProfileIcon />} label="My profile" />
      <DropdownItem icon={<UserAccountIcon />} label="My account" />
    </DropdownItemGroup>

    <DropdownItemSeparator />

    <DropdownItem icon={<SignoutIcon />} label="Sign out" />
  </>
)

const radioMenu = (
  <DropdownRadioGroup>
    <DropdownRadioItem label="Jedi" value="jedi" />
    <DropdownRadioItem label="Sith" value="sith" />
  </DropdownRadioGroup>
)

const mixedMenu = (
  <>
    <DropdownItemGroup label="Account">
      <DropdownItem icon={<UserProfileIcon />} label="My profile" />
      <DropdownItem label="My account" />
    </DropdownItemGroup>

    <DropdownItemSeparator />

    {radioMenu}

    <DropdownItemSeparator />

    <DropdownItem icon={<SignoutIcon />} label="Sign out" />
  </>
)

type DropdownProps = ComponentProps<typeof Dropdown>

const meta: Meta<DropdownProps> = {
  args: {
    align: undefined,
    asSelect: false,
    children: 'Text',
    condensed: false,
    defaultOpen: false,
    disabled: false,
    elevation: DEFAULT_ELEVATION,
    fullWidth: false,
    open: false,
    rainbow: true,
    side: undefined,
    trigger: 'Text',
    width: 'fit',
    withIndicator: true,
  },
  argTypes: {
    align: {
      control: 'radio',
      mapping: {
        Auto: undefined,
        Center: 'center',
        End: 'end',
        Start: 'start',
      },
      options: ['Auto', 'Start', 'Center', 'End'],
    },
    children: {
      control: 'radio',
      mapping: {
        Mixed: mixedMenu,
        'Radio buttons': radioMenu,
        Text: textMenu,
        'Text with icons': iconsMenu,
      },
      options: ['Text', 'Text with icons', 'Radio buttons', 'Mixed'],
      table: {
        type: {
          summary:
            'DropdownItem | DropdownItemSeparator | SubDropdow | DropdownRadioGroup | Array<DropdownItem | DropdownItemSeparator | SubDropdown | DropdownRadioGroup>',
        },
      },
    },
    elevation: {
      control: 'radio',
      table: {
        defaultValue: { summary: DEFAULT_ELEVATION },
        type: { summary: Object.values(Elevations).join('|') },
      },
    },
    side: {
      control: 'radio',
      mapping: {
        Auto: undefined,
        Bottom: 'bottom',
        Left: 'left',
        Right: 'right',
        Top: 'top',
      },
      options: ['Auto', 'Top', 'Right', 'Bottom', 'Left'],
    },
    trigger: {
      control: 'radio',
      mapping: {
        Avatar: (
          <Avatar
            className="cursor-pointer"
            imageUrl={avatarUrl}
            name="Luke Skywalker"
          />
        ),
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
    width: {
      control: 'radio',
      options: [
        'auto',
        'trigger',
        'fit',
        'full',
        '*0.25',
        '*0.5',
        '*0.75',
        100,
        500,
        1000,
      ],
    },
  },
  component: Dropdown,
  decorators: [
    ...(isChromatic()
      ? [
          (storyFunction: () => ReactNode) => (
            <div className="flex h-[500px] max-w-[500px] items-center justify-center">
              {storyFunction()}
            </div>
          ),
        ]
      : []),
  ],

  parameters: {
    docs: {
      subtitle: `🚀 Drop it down, Freddo. We're drifting - Jim Lovell - Apollo 13`,
    },
  },

  title: 'Molecules/Dropdown',
} satisfies Meta<DropdownProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interactive: Story = {
  args: {
    onClick: fn(),
    onClose: fn(),
    onInteractOutside: fn(),
    onMenuOpenChange: fn(),
    onOpen: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    await userEvent.click(canvas.getAllByRole('button').at(0)!)

    const menuItems = body.getAllByRole('menuitem')
    if (menuItems.length > 0) {
      await userEvent.hover(menuItems.at(0)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(1)!)
    }
  },
  render: () => (
    <Dropdown trigger={<Button label="This is a button trigger" />}>
      <DropdownItemGroup label="Menu">
        <DropdownItem label="My profile" />
        <DropdownItem icon={<SignoutIcon />} label="Sign out" />
      </DropdownItemGroup>

      <DropdownItemSeparator />

      {radioMenu}
    </Dropdown>
  ),
}
