import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Dropdown, DropdownItem, DropdownItemSeparator } from '.'

type DropdownItemSeparatorProps = ComponentProps<typeof DropdownItemSeparator>

const meta: Meta<DropdownItemSeparatorProps> = {
  component: DropdownItemSeparator,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Dropdown/DropdownItemSeparator',
} satisfies Meta<DropdownItemSeparatorProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div style={{ height: '200px' }}>
      <Dropdown trigger="Fighter">
        <DropdownItem label="Yoda" />
        <DropdownItemSeparator />
        <DropdownItem label="Darth Sidious" />
      </Dropdown>
    </div>
  ),
}
