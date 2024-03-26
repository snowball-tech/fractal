import UserIcon from '@iconscout/react-unicons/icons/uil-user-circle'
import type { Meta, StoryObj } from '@storybook/react'

import ToolbarDropdownItem from '@/components/Dropdown/DropdownItem'
import ToolbarDropdownItemGroup from '@/components/Dropdown/DropdownItemGroup'

import Toolbar from './Toolbar'
import { ToolbarDropdownItemGroupProps } from './Toolbar.types'
import ToolbarDropdown from './ToolbarDropdown'

const meta: Meta<ToolbarDropdownItemGroupProps> = {
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary:
            'ToolbarDropdownItem | ToolbarDropdownItemGroup | ToolbarDropdownItemSeparator | Array<ToolbarDropdownItem | ToolbarDropdownItemGroup | ToolbarDropdownItemSeparator>',
        },
      },
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Even if it's not in the type, it is displayed in the doc...
    condensed: {
      table: { disable: true },
    },
  },
  args: {
    disabled: false,
    label: 'Jedis',
  },
  component: ToolbarDropdownItemGroup,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Toolbar/ToolbarDropdown/ToolbarDropdownItemGroup',
} satisfies Meta<ToolbarDropdownItemGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, label }) => (
    <div className="h-[1200px]">
      <Toolbar>
        <ToolbarDropdown
          icon={<UserIcon />}
          iconOnly
          label="Star wars characters"
        >
          <ToolbarDropdownItemGroup disabled={disabled} label={label}>
            <ToolbarDropdownItem
              label="Luke Skywalker"
              value="luke-skywalker"
            />
            <ToolbarDropdownItem
              label="Obi-Wan Kenobi"
              value="obi-wan-kenobi"
            />
            <ToolbarDropdownItem label="Yoda" value="yoda" />
          </ToolbarDropdownItemGroup>
        </ToolbarDropdown>
      </Toolbar>
    </div>
  ),
}
