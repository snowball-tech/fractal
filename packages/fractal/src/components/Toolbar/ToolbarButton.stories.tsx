import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'

import type { ComponentProps } from 'react'

import { Toolbar, ToolbarButton } from '.'

type ToolbarButtonProps = ComponentProps<typeof ToolbarButton>

const meta: Meta<ToolbarButtonProps> = {
  args: {
    active: false,
    disabled: false,
    fullWidth: false,
    href: '',
    icon: 'Send',
    iconOnly: false,
    iconPosition: 'right',
    label: 'Luke Skywalker',
    target: '_blank',
    type: 'button',
    underlined: false,
  },
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
  component: ToolbarButton,

  title: 'Molecules/Toolbar/ToolbarButton',
} satisfies Meta<ToolbarButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    active = false,
    disabled = false,
    fullWidth = false,
    href = '',
    icon = <SendIcon />,
    iconOnly = false,
    iconPosition = 'right',
    label = 'Luke Skywalker',
    target = '_blank',
    type = 'button',
    underlined = false,
  }) => (
    <div className="h-13">
      <Toolbar>
        <ToolbarButton
          active={active}
          disabled={disabled}
          fullWidth={fullWidth}
          href={href}
          icon={icon}
          iconOnly={iconOnly}
          iconPosition={iconPosition}
          label={label}
          target={target}
          type={type}
          underlined={underlined}
          onClick={action('onClick')}
        />
      </Toolbar>
    </div>
  ),
}
