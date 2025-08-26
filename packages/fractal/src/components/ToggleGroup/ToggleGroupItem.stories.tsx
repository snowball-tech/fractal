import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'
import { action } from 'storybook/actions'

import type { ComponentProps } from 'react'

import { ToggleGroup, ToggleGroupItem } from '.'

type ToggleGroupItemsProps = ComponentProps<typeof ToggleGroupItem>

const meta: Meta<ToggleGroupItemsProps> = {
  args: {
    disabled: false,
    fullWidth: false,
    icon: 'None',
    iconOnly: false,
    label: 'Jar Jar Binks',
    value: 'jar-jar-binks',
  },
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
