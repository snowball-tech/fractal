import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Tag, TagColors, TagSizes } from '.'
import { DEFAULT_COLOR, DEFAULT_SIZE } from './Tag.constants'

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
      options: Object.values(TagColors),
      table: {
        defaultValue: { summary: DEFAULT_COLOR },
        type: { summary: Object.values(TagColors).join('|') },
      },
    },
    size: {
      options: Object.values(TagSizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(TagSizes).join('|') },
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
    size: DEFAULT_SIZE,
  },
}

export const SmallTags: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: ({ children, disabled = false, fullWidth = false }) => (
    <div className="flex flex-col gap-2">
      <Tag color="white" disabled={disabled} fullWidth={fullWidth}>
        {children}
      </Tag>
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

export const BigTags: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: ({ children, disabled = false, fullWidth = false }) => (
    <div className="flex flex-col gap-2">
      <Tag color="white" disabled={disabled} fullWidth={fullWidth} size="m">
        {children}
      </Tag>
      <Tag color="blue" disabled={disabled} fullWidth={fullWidth} size="m">
        {children}
      </Tag>
      <Tag color="yellow" disabled={disabled} fullWidth={fullWidth} size="m">
        {children}
      </Tag>
      <Tag color="pink" disabled={disabled} fullWidth={fullWidth} size="m">
        {children}
      </Tag>
      <Tag color="green" disabled={disabled} fullWidth={fullWidth} size="m">
        {children}
      </Tag>
      <Tag color="purple" disabled={disabled} fullWidth={fullWidth} size="m">
        {children}
      </Tag>
    </div>
  ),
}
