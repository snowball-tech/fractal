import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Avatar from './Avatar'
import AvatarMenuItem from './AvatarMenuItem'

type AutocompleteEmptyProps = ComponentProps<typeof AvatarMenuItem>

const meta: Meta<AutocompleteEmptyProps> = {
  argTypes: {
    icon: {
      control: 'radio',
      mapping: {
        Cancel: <CancelIcon />,
        Check: <CheckCircleIcon />,
        Error: <ExclamationCircleIcon />,
        None: undefined,
        Search: <SearchIcon />,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['None', 'Cancel', 'Check', 'Error', 'Send', 'Star'],
    },
    label: {
      control: 'text',
    },
  },
  args: {
    disabled: false,
    label: 'This is a menu item',
  },
  component: AvatarMenuItem,

  title: 'Molecules/Avatar/AvatarMenuItem',
} satisfies Meta<AutocompleteEmptyProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, icon, label = 'This is a menu item' }) => (
    <Avatar name="Luke Skywalker" size="xl">
      <AvatarMenuItem
        disabled={disabled}
        icon={icon}
        label={label}
        onClick={action('onClick')}
      />
    </Avatar>
  ),
}
