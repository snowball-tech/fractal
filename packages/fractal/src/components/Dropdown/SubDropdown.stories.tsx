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

import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { SubDropdown } from './SubDropdown'

type SubDropdownItemProps = ComponentProps<typeof SubDropdown>

const meta: Meta<SubDropdownItemProps> = {
  args: {
    condensed: false,
    condensedItems: false,
    defaultOpen: false,
    disabled: false,
    icon: undefined,
    label: 'Masters',
    open: false,
    rainbow: true,
    withIndicator: true,
    withScroll: true,
  },
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
    condensed = false,
    condensedItems = false,
    defaultOpen,
    disabled = false,
    icon,
    label = 'Masters',
    open,
    rainbow = true,
    withIndicator = true,
    withScroll = true,
  }) => (
    <div className="h-[300px]">
      <Dropdown trigger="Jedis">
        <SubDropdown
          condensed={condensed}
          condensedItems={condensedItems}
          defaultOpen={defaultOpen}
          disabled={disabled}
          icon={icon}
          label={label}
          open={open}
          rainbow={rainbow}
          withIndicator={withIndicator}
          withScroll={withScroll}
        >
          <DropdownItem
            label="Luke Skywalker"
            onClick={() => action('onClick')('Luke Skywalker')}
            onSelect={() => action('onSelect')('Luke Skywalker')}
          />
          <DropdownItem
            label="Obi-Wan Kenobi"
            onClick={() => action('onClick')('Obi-Wan Kenobi')}
            onSelect={() => action('onSelect')('Obi-Wan Kenobi')}
          />
          <DropdownItem
            label="Yoda"
            onClick={() => action('onClick')('Yoda')}
            onSelect={() => action('onSelect')('Yoda')}
          />
        </SubDropdown>

        <SubDropdown
          condensed={condensed}
          condensedItems={condensedItems}
          disabled={disabled}
          icon={icon}
          label="Siths"
          withIndicator={withIndicator}
          withScroll={withScroll}
        >
          <DropdownItem
            label="Darth Sidious"
            onClick={() => action('onClick')('Darth Sidious')}
            onSelect={() => action('onSelect')('Darth Sidious')}
          />
          <DropdownItem
            label="Darth Maul"
            onClick={() => action('onClick')('Darth Maul')}
            onSelect={() => action('onSelect')('Darth Maul')}
          />
          <DropdownItem
            label="Darth Vader"
            onClick={() => action('onClick')('Darth Vader')}
            onSelect={() => action('onSelect')('Darth Vader')}
          />
        </SubDropdown>
      </Dropdown>
    </div>
  ),
}
