import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Select from './Select'
import SelectItem from './SelectItem'
import SelectItemSeparator from './SelectItemSeparator'

type SelectItemSeparatorProps = ComponentProps<typeof SelectItemSeparator>

const meta: Meta<SelectItemSeparatorProps> = {
  component: SelectItemSeparator,

  title: 'Molecules/Select/SelectItemSeparator',
} satisfies Meta<SelectItemSeparatorProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Select placeholder="Click to open" onSelect={action('onSelect')}>
      <SelectItem value="yoda">Yoda</SelectItem>
      <SelectItemSeparator />
      <SelectItem value="darth-sidious">Darth Sidious</SelectItem>
    </Select>
  ),
}
