import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Menu, MenuItem, SubMenu } from '.'

type SubMenuProps = ComponentProps<typeof SubMenu>

const meta: Meta<SubMenuProps> = {
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
  },
  args: {
    align: undefined,
    defaultOpen: false,
    disabled: false,
    icon: undefined,
    label: 'Masters',
    popover: true,
    open: false,
    side: undefined,
    triggerOnHover: true,
    withIndicator: true,
    withScroll: true,
  },
  component: SubMenu,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Menu/SubMenu',
} satisfies Meta<SubMenuProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    align,
    defaultOpen,
    disabled = false,
    icon,
    label = 'Masters',
    popover = true,
    open,
    side,
    triggerOnHover = true,
    withIndicator = true,
    withScroll = true,
  }) => (
    <div style={{ height: '300px' }}>
      <Menu>
        <SubMenu
          align={align}
          defaultOpen={defaultOpen}
          disabled={disabled}
          icon={icon}
          label={label}
          popover={popover}
          open={open}
          side={side}
          triggerOnHover={triggerOnHover}
          withIndicator={withIndicator}
          withScroll={withScroll}
        >
          <MenuItem label="Luke Skywalker" />
          <MenuItem label="Obi-Wan Kenobi" />
          <MenuItem label="Yoda" />
        </SubMenu>
      </Menu>
    </div>
  ),
}
