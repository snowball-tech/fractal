import type { Meta, StoryObj } from '@storybook/react'

import type { ComponentProps } from 'react'

import { Dropdown, DropdownItem, DropdownItemGroup } from '.'

type DropdownItemGroupProps = ComponentProps<typeof DropdownItemGroup>

const meta: Meta<DropdownItemGroupProps> = {
  args: {
    condensed: false,
    disabled: false,
    label: 'Jedis',
    rainbow: true,
  },
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary:
            'DropdownItem | DropdownItemSeparator | SubDropdown | DropdownRadioGroup | Array<DropdownItem | DropdownItemSeparator | SubDropdown | DropdownRadioGroup>',
        },
      },
    },
  },
  component: DropdownItemGroup,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Dropdown/DropdownItemGroup',
} satisfies Meta<DropdownItemGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ condensed = false, disabled = false, label, rainbow = true }) => (
    <div className="h-[300px]">
      <Dropdown trigger="Jedis">
        <DropdownItemGroup
          condensed={condensed}
          disabled={disabled}
          label={label}
          rainbow={rainbow}
        >
          <DropdownItem label="Luke Skywalker" />
          <DropdownItem label="Obi-Wan Kenobi" />
          <DropdownItem label="Yoda" />
        </DropdownItemGroup>
      </Dropdown>
    </div>
  ),
}
