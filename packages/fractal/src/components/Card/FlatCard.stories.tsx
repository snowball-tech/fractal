import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Card from './Card'
import { Colors, DEFAULT_COLOR, DEFAULT_ELEVATION } from './Card.constants'

type CardProps = ComponentProps<typeof Card>

const perCardTypesStoriesParameters = {
  controls: {
    include: ['children'],
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
  args: {
    children:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',
    elevation: DEFAULT_ELEVATION,
    fullWidth: false,
    icon: 'None',
    title: '',
  },
  component: Card,
  parameters: {
    componentSubtitle: `🐠 Let's play the "Let's Not Die" card - Marin - Finding Nemo`,
    controls: {
      exclude: ['elevation'],
    },
  },

  title: 'Molecules/Card/Flat',
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
  render: ({ children }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-3)',
      }}
    >
      <Card color="blue" elevation="0">
        {children}
      </Card>
      <Card color="green" elevation="0">
        {children}
      </Card>
      <Card color="pink" elevation="0">
        {children}
      </Card>
      <Card color="purple" elevation="0">
        {children}
      </Card>
      <Card color="white" elevation="0">
        {children}
      </Card>
      <Card color="yellow" elevation="0">
        {children}
      </Card>
    </div>
  ),
}

export const FeedbackCards: Story = {
  parameters: { ...perCardTypesStoriesParameters },
  render: ({ children }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-3)',
      }}
    >
      <Card
        color="error"
        elevation="0"
        icon={<ExclamationCircleIcon />}
        title="Oops, there have been an error"
      >
        {children}
      </Card>
      <Card
        color="warning"
        elevation="0"
        icon={<ExclamationCircleIcon />}
        title="Be careful!"
      >
        {children}
      </Card>
      <Card
        color="success"
        elevation="0"
        icon={<CheckCircleIcon />}
        title="Congratulations"
      >
        {children}
      </Card>
    </div>
  ),
}
