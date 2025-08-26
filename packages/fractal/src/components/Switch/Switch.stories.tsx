import type { Meta, StoryObj } from '@storybook/react-vite'

import { fn, userEvent, within } from 'storybook/test'

import type { ComponentProps, ReactNode } from 'react'

import { sleep } from '@/utils'

import { Switch } from '.'

type SwitchProps = ComponentProps<typeof Switch>

const meta: Meta<SwitchProps> = {
  args: {
    disabled: false,
    label: 'Right single label',
    labels: undefined,
    required: false,
    switchPosition: 'left',
  },
  argTypes: {
    labels: {
      control: 'radio',
      mapping: {
        Double: ['Left label', 'Right label'],
        Single: [],
      },
      options: ['Single', 'Double'],
    },
  },
  component: Switch,
  decorators: [
    function WithArgs(Story, context) {
      return (
        <div className="w-fit">
          <Story args={{ ...context.args }} />
        </div>
      )
    },
  ],

  parameters: {
    docs: { subtitle: '🇲🇬 Just pull the switch? - Maurice - Madagascar 3' },
  },

  title: 'Molecules/Switch',
} satisfies Meta<SwitchProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interactive: Story = {
  args: {
    onToggle: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const switchButton = canvas.getByLabelText(/single label/i)

    await userEvent.hover(switchButton)
    await sleep(500)
    await userEvent.click(switchButton)

    await switchButton.blur()
  },
}

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-end gap-2">{children}</div>
)

export const Enabled: Story = {
  render: () => (
    <div className="w-fit">
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

      <Wrapper>
        <Switch labels={['Left', 'Right']} />
        <Switch defaultChecked labels={['Left', 'Right']} />
      </Wrapper>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-fit">
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

      <Wrapper>
        <Switch disabled labels={['Left', 'Right']} />
        <Switch defaultChecked disabled labels={['Left', 'Right']} />
      </Wrapper>
    </div>
  ),
}
