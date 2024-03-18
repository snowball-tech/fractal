import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Select, SelectItem, SelectItemSeparator } from '.'

type SelectItemSeparatorProps = ComponentProps<typeof SelectItemSeparator>

const meta: Meta<SelectItemSeparatorProps> = {
  component: SelectItemSeparator,

  title: 'Molecules/Select/SelectItemSeparator',
} satisfies Meta<SelectItemSeparatorProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="h-[800px]">
      <Select placeholder="Click to open" onSelect={action('onSelect')}>
        <SelectItem value="yoda">Yoda</SelectItem>
        <SelectItemSeparator />
        <SelectItem value="darth-sidious">Darth Sidious</SelectItem>
      </Select>
    </div>
  ),
}
