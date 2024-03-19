import CancelIcon from '@iconscout/react-unicons/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import isEmpty from 'lodash/fp/isEmpty'
import type { ComponentProps } from 'react'

import { Dropdown, DropdownItem } from '.'

type DropdownItemProps = ComponentProps<typeof DropdownItem>

const meta: Meta<DropdownItemProps> = {
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
    condensed: false,
    disabled: false,
    href: '',
    icon: undefined,
    label: 'Luke Skywalker',
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
          target={!isEmpty(href) ? '_blank' : undefined}
          onClick={action('onClick')}
        />
      </Dropdown>
    </div>
  ),
}
