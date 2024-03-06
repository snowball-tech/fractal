import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Toolbar, ToolbarToggle, ToolbarToggleGroup } from '.'

type ToolbarToggleProps = ComponentProps<typeof ToolbarToggle>

const meta: Meta<ToolbarToggleProps> = {
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
  },
  args: {
    disabled: false,
    icon: 'None',
    iconOnly: false,
    iconPosition: 'left',
    label: 'Luke Skywalker',
    value: 'luke-skywalker',
  },
  component: ToolbarToggle,

  title: 'Molecules/Toolbar/ToolbarToggle',
} satisfies Meta<ToolbarToggleProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    disabled = false,
    icon = undefined,
    iconOnly = false,
    iconPosition = 'left',
    label = 'Luke Skywalker',
    value = 'luke-skywalker',
  }) => (
    <div style={{ height: '100px' }}>
      <Toolbar>
        <ToolbarToggleGroup>
          <ToolbarToggle
            disabled={disabled}
            icon={icon}
            iconOnly={iconOnly}
            iconPosition={iconPosition}
            label={label}
            value={value}
            onToggle={action('onToggle')}
          />
        </ToolbarToggleGroup>
      </Toolbar>
    </div>
  ),
}
