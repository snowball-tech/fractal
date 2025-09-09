import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'

import type { ComponentProps } from 'react'

import { Card } from './Card'
import { Colors, DEFAULT_COLOR } from './Card.constants'

type CardProps = ComponentProps<typeof Card>

const perCardTypesStoriesParameters = {
  controls: {
    include: ['children', 'dismissable', 'icon', 'title'],
  },
}

const meta = {
  args: {
    children:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',
    dismissable: false,
    icon: 'None',
    title: '',
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
    fontSize: {
      control: 'radio',
      mapping: {
        Normal: 1,
        Small: 2,
      },
      options: ['Normal', 'Small'],
    },
    icon: {
      mapping: {
        Cancel: <CancelIcon />,
        Check: <CheckCircleIcon />,
        Error: <ExclamationCircleIcon />,
        None: undefined,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['None', 'Cancel', 'Check', 'Error', 'Send', 'Star'],
    },
  },
  component: Card,
  parameters: {
    docs: {
      subtitle: `🐠 Let's play the "Let's Not Die" card - Marin - Finding Nemo`,
    },
  },

  title: 'Molecules/Card',
} satisfies Meta<CardProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: DEFAULT_COLOR,
  },
}

export const BasicCards: Story = {
  parameters: { ...perCardTypesStoriesParameters },
  render: ({ children, dismissable = false, icon, title = '' }) => (
    <div className="flex flex-col gap-2">
      <Card color="blue" dismissable={dismissable} icon={icon} title={title}>
        {children}
      </Card>
      <Card color="green" dismissable={dismissable} icon={icon} title={title}>
        {children}
      </Card>
      <Card color="pink" dismissable={dismissable} icon={icon} title={title}>
        {children}
      </Card>
      <Card color="purple" dismissable={dismissable} icon={icon} title={title}>
        {children}
      </Card>
      <Card color="yellow" dismissable={dismissable} icon={icon} title={title}>
        {children}
      </Card>
      <Card color="body" dismissable={dismissable} icon={icon} title={title}>
        {children}
      </Card>
    </div>
  ),
}

export const FeedbackCards: Story = {
  parameters: { ...perCardTypesStoriesParameters },
  render: ({ children, dismissable = false, icon, title = '' }) => (
    <div className="flex flex-col gap-2">
      <Card color="error" dismissable={dismissable} icon={icon} title={title}>
        {children}
      </Card>
      <Card color="warning" dismissable={dismissable} icon={icon} title={title}>
        {children}
      </Card>
      <Card color="success" dismissable={dismissable} icon={icon} title={title}>
        {children}
      </Card>
    </div>
  ),
}
