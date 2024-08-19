import type { Meta, StoryObj } from '@storybook/react'

import CancelIcon from '@iconscout/react-unicons/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/icons/uil-search-alt'
import isChromatic from 'chromatic'

import type { ReactNode } from 'react'

import ToolbarDropdownItem from '@/components/Dropdown/DropdownItem'
import { cj } from '@/styles/helpers'

import { Toolbar } from './Toolbar'
import { ToolbarDropdownItemProps } from './Toolbar.types'
import { ToolbarDropdown } from './ToolbarDropdown'

const meta: Meta<ToolbarDropdownItemProps> = {
  args: {
    disabled: false,
    href: '',
    icon: undefined,
    label: 'Luke Skywalker',
  },
  argTypes: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Even if it's not in the type, it is displayed in the doc...
    condensed: {
      table: { disable: true },
    },
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
  component: ToolbarDropdownItem,
  decorators: [
    (storyFunction: () => ReactNode) => (
      <div
        className={cj(
          'flex items-center justify-center',
          isChromatic() ? 'h-[500px] max-w-[500px]' : '',
        )}
      >
        <Toolbar>
          <ToolbarDropdown label="Jedis">{storyFunction()}</ToolbarDropdown>
        </Toolbar>
      </div>
    ),
  ],

  title: 'Molecules/Toolbar/ToolbarDropdown/ToolbarDropdownItem',
} satisfies Meta<ToolbarDropdownItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
