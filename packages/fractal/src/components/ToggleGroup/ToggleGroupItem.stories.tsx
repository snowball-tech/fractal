import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@iconscout/react-unicons'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import ToggleGroup from './ToggleGroup'
import ToggleGroupItem from './ToggleGroupItem'

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
    label: 'Jar Jar Binks',
    value: 'jar-jar-binks',
  },
  component: ToggleGroupItem,

  title: 'Molecules/Toggle/ToggleGroup/ToggleGroupItem',
} satisfies Meta<ToggleGroupItemsProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, fullWidth = false, icon, label, value }) => (
    <ToggleGroup onValueChange={action('onValueChange')}>
      <ToggleGroupItem
        disabled={disabled}
        fullWidth={fullWidth}
        icon={icon}
        label={label}
        value={value}
      />
    </ToggleGroup>
  ),
}
