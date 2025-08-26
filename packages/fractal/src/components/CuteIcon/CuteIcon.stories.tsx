import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'

import type { ComponentProps } from 'react'

import { CuteIcon, CuteIconColors } from '.'
import { DEFAULT_COLOR } from './CuteIcon.constants'

type CuteIconProps = ComponentProps<typeof CuteIcon>

const meta = {
  args: {
    icon: 'Star',
  },
  argTypes: {
    color: {
      options: Object.values(CuteIconColors),
      table: {
        defaultValue: { summary: DEFAULT_COLOR },
        type: { summary: Object.values(CuteIconColors).join('|') },
      },
    },
    icon: {
      mapping: {
        Cancel: <CancelIcon />,
        Check: <CheckCircleIcon />,
        Error: <ExclamationCircleIcon />,
        Search: <SearchIcon />,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['Cancel', 'Check', 'Error', 'Send', 'Star'],
    },
  },
  component: CuteIcon,
  parameters: {
    docs: { subtitle: "⛄ Who's my cute little reindeer? - Olaf - Frozen" },
  },

  title: 'Molecules/CuteIcon',
} satisfies Meta<CuteIconProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: DEFAULT_COLOR,
  },
}

export const CuteIcons: Story = {
  parameters: {
    controls: {
      include: ['icon'],
    },
  },
  render: ({ icon }) => (
    <div className="flex flex-col gap-2">
      <CuteIcon color="blue" icon={icon} />
      <CuteIcon color="yellow" icon={icon} />
      <CuteIcon color="pink" icon={icon} />
      <CuteIcon color="green" icon={icon} />
      <CuteIcon color="purple" icon={icon} />
    </div>
  ),
}
