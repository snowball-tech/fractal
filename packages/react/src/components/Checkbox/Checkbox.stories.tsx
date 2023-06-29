import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'
import { DEFAULT_VARIANT, Variants } from './Checkbox.constants'

const meta = {
  argTypes: {
    variant: {
      options: Object.values(Variants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  args: {
    label: 'This is a checkbox',
  },
  component: Checkbox,
  parameters: {
    componentSubtitle: '???',
    controls: { hideNoControlsWarning: true },
  },

  title: 'React/Checkbox/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    label: meta.args.label,
  },
  parameters: {
    controls: { include: ['label', 'variant'] },
  },
  render: ({ label, ...args }) => <Checkbox label={label} {...args} />,
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
      <Checkbox label={`Variant "${Variants.White}"`} variant="white" />
      <Checkbox label={`Variant "${Variants.Blue}"`} variant="blue" />
      <Checkbox label={`Variant "${Variants.Green}"`} variant="green" />
      <Checkbox label={`Variant "${Variants.Pink}"`} variant="pink" />
      <Checkbox label={`Variant "${Variants.Purple}"`} variant="purple" />
      <Checkbox label={`Variant "${Variants.Yellow}"`} variant="yellow" />
    </div>
  ),
}
