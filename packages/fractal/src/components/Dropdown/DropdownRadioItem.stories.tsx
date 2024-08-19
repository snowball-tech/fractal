import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import type { ComponentProps } from 'react'

import { Dropdown, DropdownRadioGroup, DropdownRadioItem } from '.'

type DropdownRadioItemProps = ComponentProps<typeof DropdownRadioItem>

const meta: Meta<DropdownRadioItemProps> = {
  args: {
    condensed: false,
    disabled: false,
    label: 'Jar Jar Binks',
    value: 'jar-jar-binks',
  },
  argTypes: {
    asChild: { table: { disable: true } },
  },
  component: DropdownRadioItem,

  title: 'Molecules/Dropdown/DropdownRadio/DropdownRadioItem',
} satisfies Meta<DropdownRadioItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ condensed = false, disabled = false, label, value }) => (
    <div className="h-[1200px]">
      <Dropdown condensed={condensed} trigger="Click me">
        <DropdownRadioGroup onValueChange={action('onValueChange')}>
          <DropdownRadioItem disabled={disabled} label={label} value={value} />
        </DropdownRadioGroup>
      </Dropdown>
    </div>
  ),
}
