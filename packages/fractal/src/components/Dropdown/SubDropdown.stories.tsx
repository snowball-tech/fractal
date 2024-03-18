import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Dropdown, DropdownItem, SubDropdown } from '.'

type SubDropdownItemProps = ComponentProps<typeof SubDropdown>

const meta: Meta<SubDropdownItemProps> = {
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary:
            'DropdownItem | DropdownItemSeparator | SubDropdow | DropdownRadioGroup | Array<DropdownItem | DropdownItemSeparator | SubDropdown | DropdownRadioGroup>',
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
    defaultOpen: false,
    disabled: false,
    icon: undefined,
    label: 'Masters',
    open: false,
    withIndicator: true,
  },
  component: SubDropdown,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Dropdown/SubDropdown',
} satisfies Meta<SubDropdownItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    disabled = false,
    icon,
    label = 'Masters',
    withIndicator = true,
  }) => (
    <div className="h-[300px]">
      <Dropdown trigger="Jedis">
        <SubDropdown
          disabled={disabled}
          icon={icon}
          label={label}
          withIndicator={withIndicator}
        >
          <DropdownItem label="Luke Skywalker" />
          <DropdownItem label="Obi-Wan Kenobi" />
          <DropdownItem label="Yoda" />
        </SubDropdown>
      </Dropdown>
    </div>
  ),
}
