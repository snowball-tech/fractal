import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'
import { DEFAULT_VARIANT, Variants } from './Checkbox.constants'

const checkStateType = { type: { summary: "boolean | 'indeterminate'" } }

const meta = {
  argTypes: {
    checked: { table: { ...checkStateType } },
    defaultChecked: { table: { ...checkStateType } },
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
  component: Checkbox,
  parameters: {
    componentSubtitle: '???',
    controls: {
      exclude: ['checked'],
      expanded: true,
      hideNoControlsWarning: true,
      sort: 'requiredFirst',
    },
  },

  title: 'Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const Playground: Story = {
  argTypes: {
    onCheckedChange: { table: { disable: true } },
  },
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
      <Checkbox
        defaultChecked
        label={`Variant "${Variants.White}"`}
        variant="white"
      />
      <Checkbox
        defaultChecked
        label={`Variant "${Variants.Black}"`}
        variant="black"
      />
      <Checkbox
        defaultChecked
        label={`Variant "${Variants.Blue}"`}
        variant="blue"
      />
      <Checkbox
        defaultChecked
        label={`Variant "${Variants.Green}"`}
        variant="green"
      />
      <Checkbox
        defaultChecked
        label={`Variant "${Variants.Pink}"`}
        variant="pink"
      />
      <Checkbox
        defaultChecked
        label={`Variant "${Variants.Purple}"`}
        variant="purple"
      />
      <Checkbox
        defaultChecked
        label={`Variant "${Variants.Yellow}"`}
        variant="yellow"
      />
      <Checkbox defaultChecked disabled label={`Disabled`} variant="white" />
      <Checkbox defaultChecked label={`Required`} required variant="white" />
    </div>
  ),
}
