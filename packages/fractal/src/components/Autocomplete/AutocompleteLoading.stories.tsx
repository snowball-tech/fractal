import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Autocomplete, AutocompleteLoading } from '.'

type AutocompleteLoadingProps = ComponentProps<typeof AutocompleteLoading>

const meta: Meta<AutocompleteLoadingProps> = {
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
  args: {
    children: 'Loading... please wait!',
    icon: 'Default',
    spin: true,
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
    <div style={{ height: '800px' }}>
      <Autocomplete placeholder="Start typing to autocomplete">
        <AutocompleteLoading icon={icon} spin={spin}>
          {children}
        </AutocompleteLoading>
      </Autocomplete>
    </div>
  ),
}
