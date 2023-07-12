import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import InputCheckbox from './InputCheckbox'
import { DEFAULT_VARIANT, Variants } from './InputCheckbox.constants'

type InputCheckboxProps = ComponentProps<typeof InputCheckbox>

const checkStateType = { type: { summary: "boolean | 'indeterminate'" } }

const meta = {
  argTypes: {
    asChild: { table: { disable: true } },
    checked: { table: { ...checkStateType } },
    defaultChecked: { control: 'boolean', table: { ...checkStateType } },
    onCheckedChange: {
      table: {
        control: false,
        type: { summary: "(checked: boolean | 'indeterminate') => void" },
      },
    },
    variant: {
      options: Object.values(Variants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  args: {
    disabled: false,
    label: 'This is a checkbox',
    required: false,
  },
  component: InputCheckbox,
  parameters: {
    componentSubtitle:
      '🦜 Checking in with the morning report. - Zazu - The Lion King',
    controls: {
      exclude: ['checked'],
    },
  },

  title: 'InputCheckbox',
} satisfies Meta<InputCheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: DEFAULT_VARIANT,
  },
}

export const Checkboxes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <InputCheckbox
        defaultChecked
        label={`Variant "${Variants.Blue}"`}
        variant="blue"
      />
      <InputCheckbox
        defaultChecked
        label={`Variant "${Variants.Green}"`}
        variant="green"
      />
      <InputCheckbox
        defaultChecked
        label={`Variant "${Variants.Pink}"`}
        variant="pink"
      />
      <InputCheckbox
        defaultChecked
        label={`Variant "${Variants.Purple}"`}
        variant="purple"
      />
      <InputCheckbox
        defaultChecked
        label={`Variant "${Variants.Yellow}"`}
        variant="yellow"
      />
      <InputCheckbox defaultChecked disabled label={`Disabled`} />
      <InputCheckbox defaultChecked label={`Required`} required />
    </div>
  ),
}
