import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'

import type { ComponentProps } from 'react'

import isEmpty from 'lodash/fp/isEmpty'

import { Dropdown, DropdownItem } from '.'

type DropdownItemProps = ComponentProps<typeof DropdownItem>

const meta: Meta<DropdownItemProps> = {
  args: {
    condensed: false,
    disabled: false,
    href: '',
    icon: undefined,
    label: 'Luke Skywalker',
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
  component: DropdownItem,

  title: 'Molecules/Dropdown/DropdownItem',
} satisfies Meta<DropdownItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    condensed = false,
    disabled = false,
    href = '',
    icon,
    label = 'Luke Skywalker',
  }) => (
    <div className="h-13">
      <Dropdown trigger="Jedi">
        <DropdownItem
          condensed={condensed}
          disabled={disabled}
          href={href}
          icon={icon}
          label={label}
          target={isEmpty(href) ? undefined : '_blank'}
          onClick={action('onClick')}
        />
      </Dropdown>
    </div>
  ),
}
