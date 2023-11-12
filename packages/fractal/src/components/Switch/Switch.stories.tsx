import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import type { ComponentProps, ReactNode } from 'react'

import { sleep } from '@/utils'

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

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const switchButton = canvas.getByLabelText(/chewie/i)

    await userEvent.hover(switchButton)
    await sleep(500)
    await userEvent.click(switchButton)

    await switchButton.blur()
  },
}

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

export const Enabled: Story = {
  render: () => (
    <div style={{ width: 'fit-content' }}>
      <Wrapper>
        <Switch label="Left switch" switchPosition="left" />
        <Switch
          defaultChecked
          label="Left checked switch"
          switchPosition="left"
        />
      </Wrapper>

      <Wrapper>
        <Switch label="Right switch" switchPosition="right" />
        <Switch
          defaultChecked
          label="Right checked switch"
          switchPosition="right"
        />
      </Wrapper>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 'fit-content' }}>
      <Wrapper>
        <Switch disabled label="Left disabled switch" switchPosition="left" />
        <Switch
          defaultChecked
          disabled
          label="Left checked disabled switch"
          switchPosition="left"
        />
      </Wrapper>

      <Wrapper>
        <Switch disabled label="Right disabled switch" switchPosition="right" />
        <Switch
          defaultChecked
          disabled
          label="Right checked disabled switch"
          switchPosition="right"
        />
      </Wrapper>
    </div>
  ),
}
