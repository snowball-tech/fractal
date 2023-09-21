import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Tag from './Tag'
import { Colors, DEFAULT_COLOR } from './Tag.constants'

type TagProps = ComponentProps<typeof Tag>

const perVariantStoriesParameters = {
  controls: {
    include: ['children', 'disabled', 'fullWidth'],
  },
}

const meta = {
  argTypes: {
    children: { control: 'text' },
    color: {
      options: Object.values(Colors),
      table: {
        defaultValue: { summary: DEFAULT_COLOR },
        type: { summary: Object.values(Colors).join('|') },
      },
    },
  },
  args: {
    children: 'I have a very bad feeling about this!',
    disabled: false,
    fullWidth: false,
  },
  component: Tag,
  parameters: {
    componentSubtitle:
      '😔 We used to play tag and stuff! - (Sad) Riley - Inside Out',
  },

  title: 'Molecules/Tag',
} satisfies Meta<TagProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: DEFAULT_COLOR,
  },
}

export const Tags: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: ({ children, disabled = false, fullWidth = false }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-3)',
      }}
    >
      <Tag color="blue" disabled={disabled} fullWidth={fullWidth}>
        {children}
      </Tag>
      <Tag color="yellow" disabled={disabled} fullWidth={fullWidth}>
        {children}
      </Tag>
      <Tag color="pink" disabled={disabled} fullWidth={fullWidth}>
        {children}
      </Tag>
      <Tag color="green" disabled={disabled} fullWidth={fullWidth}>
        {children}
      </Tag>
      <Tag color="purple" disabled={disabled} fullWidth={fullWidth}>
        {children}
      </Tag>
    </div>
  ),
}
