import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'

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
    disabled: false,
    label: 'Luke Skywalker',
  },
  component: DropdownItem,

  title: 'Molecules/Dropdown/DropdownItem',
} satisfies Meta<DropdownItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, icon, label = 'Luke Skywalker' }) => (
    <Dropdown trigger="Is a jedi">
      <DropdownItem
        disabled={disabled}
        icon={icon}
        label={label}
        onClick={action('onClick')}
      />
    </Dropdown>
  ),
}
