import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'
import { action } from 'storybook/actions'

import type { ComponentProps } from 'react'

import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { SubMenu } from './SubMenu'

type SubMenuProps = ComponentProps<typeof SubMenu>

const meta: Meta<SubMenuProps> = {
  args: {
    active: false,
    align: undefined,
    condensed: false,
    condensedItems: false,
    defaultOpen: false,
    disabled: false,
    icon: undefined,
    label: 'Masters',
    open: false,
    popover: true,
    rainbow: true,
    side: undefined,
    triggerOnHover: true,
    withIndicator: true,
    withScroll: true,
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
    active = false,
    align,
    condensed = false,
    condensedItems = false,
    defaultOpen,
    disabled = false,
    icon,
    label = 'Masters',
    open,
    popover = true,
    rainbow = true,
    side,
    triggerOnHover = true,
    withIndicator = true,
    withScroll = true,
  }) => (
    <div className="h-[300px]">
      <Menu>
        <SubMenu
          active={active}
          align={align}
          condensed={condensed}
          condensedItems={condensedItems}
          defaultOpen={defaultOpen}
          disabled={disabled}
          icon={icon}
          label={label}
          open={open}
          popover={popover}
          rainbow={rainbow}
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
          condensed={condensed}
          condensedItems={condensedItems}
          disabled={disabled}
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
