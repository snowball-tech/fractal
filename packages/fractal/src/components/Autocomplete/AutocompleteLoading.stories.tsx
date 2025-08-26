import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'

import type { ComponentProps } from 'react'

import Autocomplete from './Autocomplete'
import AutocompleteLoading from './AutocompleteLoading'

type AutocompleteLoadingProps = ComponentProps<typeof AutocompleteLoading>

const meta: Meta<AutocompleteLoadingProps> = {
  args: {
    children: 'Loading... please wait!',
    icon: 'Default',
    spin: true,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    icon: {
      mapping: {
        Default: true,
        None: false,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['Default', 'None', 'Send', 'Star'],
      table: { type: { summary: 'ReactNode | boolean' } },
    },
  },
  component: AutocompleteLoading,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Autocomplete/AutocompleteLoading',
} satisfies Meta<AutocompleteLoadingProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ children, icon, spin = false }) => (
    <div className="h-[800px]">
      <Autocomplete placeholder="Start typing to autocomplete">
        <AutocompleteLoading icon={icon} spin={spin}>
          {children}
        </AutocompleteLoading>
      </Autocomplete>
    </div>
  ),
}
