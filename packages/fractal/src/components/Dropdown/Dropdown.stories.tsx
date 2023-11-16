import MoreMenuIcon from '@iconscout/react-unicons/dist/icons/uil-ellipsis-v'
import UserProfileIcon from '@iconscout/react-unicons/dist/icons/uil-house-user'
import SignoutIcon from '@iconscout/react-unicons/dist/icons/uil-signout'
import UserAccountIcon from '@iconscout/react-unicons/dist/icons/uil-user-circle'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import isChromatic from 'chromatic/isChromatic'
import type { ComponentProps, ReactNode } from 'react'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
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
    width: {
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
      options: ['auto', 'trigger', 'fit', 'full', 100, 500, 1000],
    },
  },
  args: {
    children: 'Text',
    disabled: false,
    trigger: 'Text',
    width: 'fit',
    withIndicator: true,
  },
  component: Dropdown,
  decorators: isChromatic()
    ? [
        (storyFn: () => ReactNode) => (
          <div style={{ height: '800px' }}>{storyFn()}</div>
        ),
      ]
    : [],
  parameters: {
    componentSubtitle: `🚀 Drop it down, Freddo. We're drifting - Jim Lovell - Apollo 13`,
  },

  title: 'Molecules/Dropdown',
} satisfies Meta<DropdownProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(canvas.getAllByRole('button').at(0)!)

    const menuItems = body.getAllByRole('menuitem')
    if (menuItems.length > 0) {
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      await userEvent.hover(menuItems.at(0)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(1)!)
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
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
