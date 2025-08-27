import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ComponentProps } from 'react'

import { Typography } from '@/components/Typography/Typography'

import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { DropdownItemSeparator } from './DropdownItemSeparator'

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
    <div className="flex h-[200px] flex-row gap-4">
      <div className="space-y-2">
        <Typography variant="heading-4">Normal dropdown</Typography>

        <Dropdown trigger="Fighter">
          <DropdownItem label="Yoda" />
          <DropdownItemSeparator />
          <DropdownItem label="Darth Sidious" />
        </Dropdown>
      </div>

      <div className="space-y-2">
        <Typography variant="heading-4">Condensed dropdown</Typography>

        <Dropdown condensed trigger="Fighter">
          <DropdownItem label="Yoda" />
          <DropdownItemSeparator />
          <DropdownItem label="Darth Sidious" />
        </Dropdown>
      </div>
    </div>
  ),
}
