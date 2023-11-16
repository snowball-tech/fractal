import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { ToggleGroup, ToggleGroupItem } from '.'

type ToggleGroupItemsProps = ComponentProps<typeof ToggleGroupItem>

const meta: Meta<ToggleGroupItemsProps> = {
  argTypes: {
    icon: {
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
  },
  args: {
    disabled: false,
    fullWidth: false,
    icon: 'None',
    iconOnly: false,
    label: 'Jar Jar Binks',
    value: 'jar-jar-binks',
  },
  component: ToggleGroupItem,

  title: 'Molecules/Toggle/ToggleGroup/ToggleGroupItem',
} satisfies Meta<ToggleGroupItemsProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    disabled = false,
    fullWidth = false,
    icon,
    iconOnly = false,
    label,
    value,
  }) => (
    <ToggleGroup fullWidth={fullWidth} onValueChange={action('onValueChange')}>
      <ToggleGroupItem
        disabled={disabled}
        fullWidth={fullWidth}
        icon={icon}
        iconOnly={iconOnly}
        label={label}
        value={value}
      />
    </ToggleGroup>
  ),
}
