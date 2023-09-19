import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

import Switch from './Switch'

type SwitchProps = ComponentProps<typeof Switch>

const meta: Meta<SwitchProps> = {
  args: {
    disabled: false,
    label: 'Punch it, Chewie!',
    required: false,
    switchPosition: 'left',
  },
  component: Switch,
  decorators: [
    function WithArgs(Story, context) {
      return (
        <div style={{ width: 'fit-content' }}>
          <Story args={{ ...context.args }} />
        </div>
      )
    },
  ],

  parameters: {
    componentSubtitle: '🇲🇬 Just pull the switch? - Maurice - Madagascar 3',
  },

  title: 'Molecules/Switch',
} satisfies Meta<SwitchProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      alignItems: 'flex-end',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--size-spacing-2)',
      marginBottom: 'var(--size-spacing-2)',
    }}
  >
    {children}
  </div>
)

export const Switches: Story = {
  render: () => (
    <div style={{ width: 'fit-content' }}>
      <Wrapper>
        <Switch label="Left switch" switchPosition="left" />
        <Switch label="Right switch" switchPosition="right" />
      </Wrapper>

      <Wrapper>
        <Switch disabled label="Left disabled switch" switchPosition="left" />
        <Switch disabled label="Right disabled switch" switchPosition="right" />
      </Wrapper>
    </div>
  ),
}
