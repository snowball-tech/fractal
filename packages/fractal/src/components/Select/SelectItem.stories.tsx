import type { Meta, StoryObj } from '@storybook/react-vite'

import { action } from 'storybook/actions'

import type { ComponentProps } from 'react'

import { Select, SelectItem } from '.'

type SelectItemProps = ComponentProps<typeof SelectItem>

const meta: Meta<SelectItemProps> = {
  args: {
    children: 'Jar Jar Binks',
    disabled: false,
    rainbow: true,
    value: 'jar-jar-binks',
  },
  argTypes: {
    children: { control: 'text' },
  },
  component: SelectItem,

  title: 'Molecules/Select/SelectItem',
} satisfies Meta<SelectItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ children, disabled = false, rainbow = true, value }) => (
    <div className="h-[1200px]">
      <Select placeholder="Click to open" onSelect={action('onSelect')}>
        <SelectItem disabled={disabled} rainbow={rainbow} value={value}>
          {children}
        </SelectItem>
      </Select>
    </div>
  ),
}
