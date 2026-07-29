import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilCheckCircle as CheckCircleIcon,
  UilEnvelope as EvenlopeIcon,
  UilExclamationCircle as ExclamationCircleIcon,
} from '@tooni/iconscout-unicons-react'

import type { ComponentProps } from 'react'

import { Tag } from './Tag'
import { Colors, DEFAULT_COLOR, DEFAULT_SIZE, Sizes } from './Tag.constants'

type TagProps = ComponentProps<typeof Tag>

const perVariantStoriesParameters = {
  controls: {
    include: ['children', 'disabled', 'fullWidth'],
  },
}

const meta = {
  args: {
    children: 'I have a very bad feeling about this!',
    disabled: false,
    fullWidth: false,
    icon: 'None',
    iconPosition: 'left',
  },
  argTypes: {
    children: { control: 'text' },
    color: {
      options: Object.values(Colors),
      table: {
        defaultValue: { summary: DEFAULT_COLOR },
        type: { summary: Object.values(Colors).join('|') },
      },
    },
    icon: {
      mapping: {
        Check: <CheckCircleIcon />,
        Envelope: <EvenlopeIcon />,
        Error: <ExclamationCircleIcon />,
        None: undefined,
      },
      options: ['None', 'Check', 'Error', 'Envelope'],
    },
    iconPosition: {
      options: ['left', 'right'],
      table: {
        defaultValue: { summary: 'left' },
        type: { summary: "'left'|'right'" },
      },
    },
    size: {
      options: Object.values(Sizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(Sizes).join('|') },
      },
    },
  },
  component: Tag,
  parameters: {
    docs: {
      subtitle: '😔 We used to play tag and stuff! - (Sad) Riley - Inside Out',
    },
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

export const WithIcon: Story = {
  parameters: {
    controls: {
      include: ['children', 'color', 'disabled', 'fullWidth', 'size'],
    },
  },
  render: ({ children, color, disabled = false, fullWidth = false, size }) => (
    <div className="flex flex-col gap-2">
      <Tag
        color={color}
        disabled={disabled}
        fullWidth={fullWidth}
        icon={<EvenlopeIcon />}
        size={size}
      >
        {children}
      </Tag>
      <Tag
        color={color}
        disabled={disabled}
        fullWidth={fullWidth}
        icon={<EvenlopeIcon />}
        iconPosition="right"
        size={size}
      >
        {children}
      </Tag>
    </div>
  ),
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
