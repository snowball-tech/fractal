import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { CuteIcon, CuteIconColors } from '.'
import { DEFAULT_COLOR } from './CuteIcon.constants'

type CuteIconProps = ComponentProps<typeof CuteIcon>

const meta = {
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
  args: {
    icon: 'Star',
  },
  component: CuteIcon,
  parameters: {
    componentSubtitle: "⛄ Who's my cute little reindeer? - Olaf - Frozen",
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
