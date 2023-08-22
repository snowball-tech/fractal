import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Card from './Card'
import {
  Colors,
  DEFAULT_COLOR,
  DEFAULT_ELEVATION,
  Elevations,
} from './Card.constants'

type CardProps = ComponentProps<typeof Card>

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
    elevation: {
      control: 'select',
      mapping: {
        Flat: Elevations.Flat,
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        Bordered: Elevations.Bordered,
        Low: Elevations.Low,
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        High: Elevations.High,
      },
      options: ['Flat', 'Bordered', 'Low', 'High'],
      table: {
        defaultValue: { summary: DEFAULT_ELEVATION },
        type: { summary: Object.values(Elevations).join('|') },
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
    dismissable: false,
    icon: 'None',
    title: '',
  },
  component: Card,
  parameters: {
    componentSubtitle: `🐠 Let's play the "Let's Not Die" card - Marin - Finding Nemo`,
  },

  title: 'Molecules/Card',
} satisfies Meta<CardProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: DEFAULT_COLOR,
    elevation: DEFAULT_ELEVATION,
  },
}
