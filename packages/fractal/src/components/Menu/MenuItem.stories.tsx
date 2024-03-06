import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import isEmpty from 'lodash/fp/isEmpty'
import type { ComponentProps } from 'react'

import { Menu, MenuItem } from '.'

type MenuItemProps = ComponentProps<typeof MenuItem>

const meta: Meta<MenuItemProps> = {
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
  args: {
    active: false,
    disabled: false,
    href: '',
    label: 'Luke Skywalker',
  },
  component: MenuItem,

  title: 'Molecules/Menu/MenuItem',
} satisfies Meta<MenuItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    active = false,
    disabled = false,
    href = '',
    icon,
    label = 'Luke Skywalker',
  }) => (
    <div style={{ height: '100px' }}>
      <Menu>
        <MenuItem
          active={active}
          disabled={disabled}
          href={href}
          icon={icon}
          label={label}
          target={!isEmpty(href) ? '_blank' : undefined}
          onClick={action('onClick')}
        />
      </Menu>
    </div>
  ),
}
