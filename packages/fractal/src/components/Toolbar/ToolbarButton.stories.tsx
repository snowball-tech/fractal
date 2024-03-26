import CancelIcon from '@iconscout/react-unicons/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Toolbar, ToolbarButton } from '.'

type ToolbarButtonProps = ComponentProps<typeof ToolbarButton>

const meta: Meta<ToolbarButtonProps> = {
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
    active: false,
    disabled: false,
    icon: 'None',
    iconOnly: false,
    iconPosition: 'left',
    label: 'Luke Skywalker',
  },
  component: ToolbarButton,

  title: 'Molecules/Toolbar/ToolbarButton',
} satisfies Meta<ToolbarButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    active = false,
    disabled = false,
    icon = undefined,
    iconOnly = false,
    iconPosition = 'left',
    label = 'Luke Skywalker',
  }) => (
    <div className="h-13">
      <Toolbar>
        <ToolbarButton
          active={active}
          disabled={disabled}
          icon={icon}
          iconOnly={iconOnly}
          iconPosition={iconPosition}
          label={label}
          onClick={action('onClick')}
        />
      </Toolbar>
    </div>
  ),
}
