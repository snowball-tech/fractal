import type { Meta, StoryObj } from '@storybook/react'

import { fn, userEvent, within } from '@storybook/test'
import { UilEllipsisV as MoreMenuIcon } from '@tooni/iconscout-unicons-react'
import isChromatic from 'chromatic'

import type { ComponentProps, ReactNode } from 'react'

import { Button } from '@/components/Button'
import { InputText } from '@/components/InputText'
import { sleep } from '@/utils'

import { Dialog, DialogPositions } from '.'
import { DEFAULT_POSITION } from './Dialog.constants'

type DialogProps = ComponentProps<typeof Dialog>

const meta: Meta<DialogProps> = {
  args: {
    children: 'You can enter any content you want here',
    defaultOpen: false,
    disabled: false,
    dismissable: true,
    modal: true,
    position: 'fixed',
    title: 'This is the title',
    trigger: 'Text',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    position: {
      options: Object.values(DialogPositions),
      table: {
        defaultValue: { summary: DEFAULT_POSITION },
        type: { summary: Object.values(DialogPositions).join('|') },
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
  component: Dialog,
  decorators: [
    ...(isChromatic()
      ? [
          (storyFunction: () => ReactNode) => (
            <div className="relative h-screen-from-xs w-[500px]">
              {storyFunction()}
            </div>
          ),
        ]
      : []),
  ],

  parameters: {
    docs: {
      subtitle: `🐑 Agent Starling. If you can't keep up with the dialog, don't try to join - Hannibal Lecter - Hannibal`,
    },
  },

  title: 'Molecules/Dialog',
} satisfies Meta<DialogProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interactive: Story = {
  args: {
    onClose: fn(),
    onDismiss: fn(),
    onInteractOutside: fn(),
    onOpen: fn(),
    onToggle: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await sleep(500)

    await userEvent.click(canvas.getAllByRole('button').at(0)!)
  },
  render: () => (
    <Dialog
      className="min-w-[500px]"
      title="Please provide your Jedi identification"
      trigger={<Button label="Open the dialog" />}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <InputText defaultValue="Luke" fullWidth label="First name" />
          <InputText defaultValue="Skywalker" fullWidth label="Last name" />
        </div>

        <div className="flex flex-row justify-end gap-2">
          <Button label="Cancel" variant="secondary" />
          <Button label="Save" />
        </div>
      </div>
    </Dialog>
  ),
}

export const InteractiveClose: Story = {
  args: {
    onClose: fn(),
    onDismiss: fn(),
    onInteractOutside: fn(),
    onOpen: fn(),
    onToggle: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    await sleep(500)

    await userEvent.click(canvas.getAllByRole('button').at(0)!)

    await sleep(500)
    await userEvent.click(body.getAllByLabelText('Close').at(0)!)
  },
  render: () => (
    <Dialog
      className="min-w-[500px]"
      closeButtonLabel="Close"
      title="This is the title"
      trigger={<Button label="Open the dialog" />}
    >
      This is the content
    </Dialog>
  ),
}
