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

import isEmpty from 'lodash/fp/isEmpty'

import { Menu, MenuItem } from '.'

type MenuItemProps = ComponentProps<typeof MenuItem>

const meta: Meta<MenuItemProps> = {
  args: {
    active: false,
    condensed: false,
    disabled: false,
    href: '',
    label: 'Luke Skywalker',
    rainbow: true,
  },
  argTypes: {
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
  component: MenuItem,

  title: 'Molecules/Menu/MenuItem',
} satisfies Meta<MenuItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    active = false,
    condensed = false,
    disabled = false,
    href = '',
    icon,
    label = 'Luke Skywalker',
    rainbow = true,
  }) => (
    <div className="h-13">
      <Menu>
        <MenuItem
          active={active}
          condensed={condensed}
          disabled={disabled}
          href={href}
          icon={icon}
          label={label}
          rainbow={rainbow}
          target={isEmpty(href) ? undefined : '_blank'}
          onActivate={action('onActivate')}
          onClick={action('onClick')}
          onKeyDown={action('onKeyDown')}
        />
      </Menu>
    </div>
  ),
}
