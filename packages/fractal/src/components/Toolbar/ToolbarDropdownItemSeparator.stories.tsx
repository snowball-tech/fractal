import UserIcon from '@iconscout/react-unicons/icons/uil-user-circle'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import ToolbarDropdownItem from '@/components/Dropdown/DropdownItem'
import ToolbarDropdownItemSeparator from '@/components/Dropdown/DropdownItemSeparator'

import Toolbar from './Toolbar'
import ToolbarDropdown from './ToolbarDropdown'

type ToolbarDropdownItemSeparatorProps = ComponentProps<
  typeof ToolbarDropdownItemSeparator
>

const meta: Meta<ToolbarDropdownItemSeparatorProps> = {
  component: ToolbarDropdownItemSeparator,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Toolbar/ToolbarDropdown/ToolbarDropdownItemSeparator',
} satisfies Meta<ToolbarDropdownItemSeparatorProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="h-[1200px]">
      <Toolbar>
        <ToolbarDropdown
          icon={<UserIcon />}
          iconOnly
          label="Star wars characters"
        >
          <ToolbarDropdownItem label="Yoda" value="yoda" />
          <ToolbarDropdownItemSeparator />
          <ToolbarDropdownItem label="Darth Sidious" value="darth-sidious" />
        </ToolbarDropdown>
      </Toolbar>
    </div>
  ),
}
