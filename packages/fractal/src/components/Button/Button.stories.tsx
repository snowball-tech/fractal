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
    children: 'Click me please!',
    disabled: false,
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
      <Button variant="display">&quot;Display&quot; button</Button>
      <Button disabled variant="display">
        &quot;Display&quot; disabled button
      </Button>

      <hr />

      <Button variant="primary">Primary button</Button>
      <Button disabled variant="primary">
        Primary disabled button
      </Button>

      <hr />

      <Button variant="secondary">Secondary button</Button>
      <Button disabled variant="secondary">
        Secondary disabled button
      </Button>
    </div>
  ),
}
