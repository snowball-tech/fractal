import type { Meta, StoryObj } from '@storybook/react'

import CancelIcon from '@iconscout/react-unicons/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/icons/uil-exclamation-circle'
import UserProfileIcon from '@iconscout/react-unicons/icons/uil-house-user'
import SendIcon from '@iconscout/react-unicons/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/icons/uil-search-alt'
import SignoutIcon from '@iconscout/react-unicons/icons/uil-signout'
import UserAccountIcon from '@iconscout/react-unicons/icons/uil-user-circle'
import { fn, userEvent, within } from '@storybook/test'
import isChromatic from 'chromatic'

import type { ReactNode } from 'react'

import ToolbarDropdownItem from '@/components/Dropdown/DropdownItem'
import ToolbarDropdownItemGroup from '@/components/Dropdown/DropdownItemGroup'
import ToolbarDropdownItemSeparator from '@/components/Dropdown/DropdownItemSeparator'
import { Elevations } from '@/components/Paper/Paper.constants'
import { cj } from '@/styles/helpers'
import { sleep } from '@/utils'

import { Toolbar } from './Toolbar'
import { ToolbarDropdownProps } from './Toolbar.types'
import { ToolbarDropdown } from './ToolbarDropdown'

const textMenu = (
  <>
    <ToolbarDropdownItemGroup label="Account">
      <ToolbarDropdownItem label="My profile" />
      <ToolbarDropdownItem label="My account" />
    </ToolbarDropdownItemGroup>

    <ToolbarDropdownItemSeparator />

    <ToolbarDropdownItem label="Sign out" />
  </>
)

const iconsMenu = (
  <>
    <ToolbarDropdownItemGroup label="Account">
      <ToolbarDropdownItem icon={<UserProfileIcon />} label="My profile" />
      <ToolbarDropdownItem icon={<UserAccountIcon />} label="My account" />
    </ToolbarDropdownItemGroup>

    <ToolbarDropdownItemSeparator />

    <ToolbarDropdownItem icon={<SignoutIcon />} label="Sign out" />
  </>
)

const mixedMenu = (
  <>
    <ToolbarDropdownItemGroup label="Account">
      <ToolbarDropdownItem icon={<UserProfileIcon />} label="My profile" />
      <ToolbarDropdownItem label="My account" />
    </ToolbarDropdownItemGroup>

    <ToolbarDropdownItemSeparator />

    <ToolbarDropdownItem icon={<SignoutIcon />} label="Sign out" />
  </>
)

const meta: Meta<ToolbarDropdownProps> = {
  args: {
    active: false,
    align: undefined,
    children: 'Text',
    defaultOpen: false,
    disabled: false,
    elevation: Elevations.Elevated,
    fullWidth: false,
    icon: 'None',
    iconOnly: false,
    iconPosition: 'left',
    label: 'Star wars characters',
    open: false,
    side: undefined,
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
        Text: textMenu,
        'Text with icons': iconsMenu,
      },
      options: ['Text', 'Text with icons', 'Mixed'],
      table: {
        type: {
          summary:
            'ToolbarDropdownItem | ToolbarDropdownItemSeparator | ToolbarSubDropdow | ToolbarDropdownRadioGroup | Array<ToolbarDropdownItem | ToolbarDropdownItemSeparator | ToolbarSubDropdown | ToolbarDropdownRadioGroup>',
        },
      },
    },
    elevation: {
      control: 'radio',
      table: {
        defaultValue: { summary: Elevations.Elevated },
        type: { summary: Object.values(Elevations).join('|') },
      },
    },
    icon: {
      control: 'radio',
      mapping: {
        Cancel: <CancelIcon />,
        Check: <CheckCircleIcon />,
        Error: <ExclamationCircleIcon />,
        None: undefined,
        Search: <SearchIcon />,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['None', 'Cancel', 'Check', 'Error', 'Send', 'Star'],
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
  component: ToolbarDropdown,
  decorators: [
    (storyFunction: () => ReactNode) => (
      <div
        className={cj(
          'flex items-center justify-center',
          isChromatic() ? 'h-[500px] max-w-[500px]' : '',
        )}
      >
        <Toolbar>{storyFunction()}</Toolbar>
      </div>
    ),
  ],

  title: 'Molecules/Toolbar/ToolbarDropdown/ToolbarDropdown',
} satisfies Meta<ToolbarDropdownProps>

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
    <ToolbarDropdown label="Menu">
      <ToolbarDropdownItemGroup label="User">
        <ToolbarDropdownItem label="My profile" />
      </ToolbarDropdownItemGroup>

      <ToolbarDropdownItemSeparator />

      <ToolbarDropdownItem icon={<SignoutIcon />} label="Sign out" />
    </ToolbarDropdown>
  ),
}
