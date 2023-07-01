import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import {
  DEFAULT_SIZE,
  DEFAULT_VARIANT,
  Sizes,
  Variants,
} from './Button.constants'

const meta = {
  argTypes: {
    size: {
      options: Object.values(Sizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(Sizes).join('|') },
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

  title: 'React/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  argTypes: {
    onClick: { table: { disable: true } },
  },
  args: {
    size: DEFAULT_SIZE,
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
      <Button size="small" variant="primary">
        Small primary button
      </Button>
      <Button size="medium" variant="primary">
        Medium primary button
      </Button>
      <Button size="large" variant="primary">
        Large primary button
      </Button>

      <hr />

      <Button size="small" variant="secondary">
        Small secondary button
      </Button>
      <Button size="medium" variant="secondary">
        Medium secondary button
      </Button>
      <Button size="large" variant="secondary">
        Large secondary button
      </Button>

      <hr />

      <Button size="small" variant="tertiary">
        Small tertiary button
      </Button>
      <Button size="medium" variant="tertiary">
        Medium tertiary button
      </Button>
      <Button size="large" variant="tertiary">
        Large tertiary button
      </Button>

      <hr />

      <Button disabled size="small">
        Small disabled button
      </Button>
      <Button disabled size="medium">
        Medium disabled button
      </Button>
      <Button disabled size="large">
        Large disabled button
      </Button>
    </div>
  ),
}
