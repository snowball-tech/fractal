import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
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
    open: false,
    popover: true,
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
    open,
    popover = true,
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
          open={open}
          popover={popover}
          side={side}
          triggerOnHover={triggerOnHover}
          withIndicator={withIndicator}
          withScroll={withScroll}
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
        </SubMenu>

        <SubMenu
          align={align}
          icon={icon}
          label="Siths"
          popover={popover}
          side={side}
          triggerOnHover={triggerOnHover}
          withScroll={withScroll}
        >
          <MenuItem
            label="Darth Sidious"
            onActivate={() => action('onActivate')('Darth Sidious')}
            onClick={() => action('onClick')('Darth Sidious')}
            onKeyDown={() => action('onKeyDown')('Darth Sidious')}
          />
          <MenuItem
            label="Darth Maul"
            onActivate={() => action('onActivate')('Darth Maul')}
            onClick={() => action('onClick')('Darth Maul')}
            onKeyDown={() => action('onKeyDown')('Darth Maul')}
          />
          <MenuItem
            label="Darth Vader"
            onActivate={() => action('onActivate')('Darth Vader')}
            onClick={() => action('onClick')('Darth Vader')}
            onKeyDown={() => action('onKeyDown')('Darth Vader')}
          />
        </SubMenu>
      </Menu>
    </div>
  ),
}
