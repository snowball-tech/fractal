import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import { DEFAULT_VARIANT, Variants } from './Button.constants'

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
    disabled: false,
    label: 'Click me please!',
  },
  component: Button,
  parameters: {
    componentSubtitle: '???',
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      sort: 'requiredFirst',
    },
  },

  title: 'Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  argTypes: {
    onClick: { table: { disable: true } },
  },
  args: {
    variant: DEFAULT_VARIANT,
  },
}

export const Buttons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <Button label='"Display" button' variant="display" />
      <Button disabled label='"Display" disabled button' variant="display" />

      <hr />

      <Button label="Primary button" variant="primary" />
      <Button disabled label="Primary disabled button" variant="primary" />

      <hr />

      <Button label="Secondary button" variant="secondary" />
      <Button disabled label="Secondary disabled button" variant="secondary" />
    </div>
  ),
}
