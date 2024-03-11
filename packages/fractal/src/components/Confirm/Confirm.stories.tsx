import MoreMenuIcon from '@iconscout/react-unicons/dist/icons/uil-ellipsis-v'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import type { ComponentProps, ReactNode } from 'react'

import { Button } from '@/components/Button'
import { sleep } from '@/utils'

import { Confirm, ConfirmPositions } from '.'
import { DEFAULT_POSITION } from '../Dialog/Dialog.constants'

type ConfirmProps = ComponentProps<typeof Confirm>

const meta: Meta<ConfirmProps> = {
  argTypes: {
    cancel: { control: 'text' },
    children: {
      control: 'text',
    },
    confirm: { control: 'text' },
    position: {
      options: Object.values(ConfirmPositions),
      table: {
        defaultValue: { summary: DEFAULT_POSITION },
        type: { summary: Object.values(ConfirmPositions).join('|') },
      },
    },
    trigger: {
      control: 'radio',
      mapping: {
        Button: <Button label="This is a button trigger" />,
        'Icon Button': (
          <Button
            icon={<MoreMenuIcon />}
            iconOnly
            label="This is an icon button trigger"
            variant="text"
          />
        ),
        Nothing: undefined,
        Text: 'This is the trigger',
      },
      options: ['Nothing', 'Text', 'Button', 'Icon Button'],
    },
  },
  args: {
    cancel: 'No please, it was a mistake',
    children:
      'If you test this confirm dialog, you will have the overwhelming desire to use Fractal! Are you sure you want to carry on?',
    confirm: 'Oh yeah!!',
    defaultOpen: false,
    position: 'fixed',
    title: 'Are you sure you want to test this confirm dialog',
    trigger: 'Text',
  },
  component: Confirm,
  decorators: [
    (storyFn: () => ReactNode) => (
      <div style={{ height: '350px', position: 'relative', width: '500px' }}>
        {storyFn()}
      </div>
    ),
  ],

  parameters: {
    componentSubtitle: `🧑‍✈️ Step one. Voice command, 'Confirm acquisition'. - Axiom's Captain B. McCrea - Wall-E`,
  },

  title: 'Molecules/Confirm',
} satisfies Meta<ConfirmProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await sleep(500)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(canvas.getAllByRole('button').at(0)!)
  },
  render: () => (
    <Confirm
      cancel="Cancel"
      className="min-w-[500px]"
      confirm="Confirm"
      title="Are you sure you want to test this confirm dialog"
      trigger={<Button label="Open the confirm" />}
    >
      <div className="flex flex-col gap-3">Do you want to confirm?</div>
    </Confirm>
  ),
}

export const InteractiveClose: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    await sleep(500)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(canvas.getAllByRole('button').at(0)!)

    await sleep(500)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(body.getAllByRole('button').at(0)!)
  },
  render: () => (
    <Confirm
      cancel="Cancel"
      className="min-w-[500px]"
      confirm="Confirm"
      title="This is the title"
      trigger={<Button label="Open the confirm" />}
    >
      This is the content
    </Confirm>
  ),
}
