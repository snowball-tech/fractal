import type { Meta, StoryObj } from '@storybook/react-vite'

import { UilEllipsisV as MoreMenuIcon } from '@tooni/iconscout-unicons-react'
import isChromatic from 'chromatic'
import { fn, userEvent, within } from 'storybook/test'

import type { ComponentProps, ReactNode } from 'react'

import { Button } from '@/components/Button/Button'
import { InputPhone } from '@/components/InputPhone/InputPhone'
import { Select } from '@/components/Select/Select'
import { SelectItem } from '@/components/Select/SelectItem'
import { Typography } from '@/components/Typography/Typography'
import { sleep } from '@/utils'

import { Dialog } from './Dialog'
import { DEFAULT_POSITION, Positions } from './Dialog.constants'

type DialogProps = ComponentProps<typeof Dialog>

const content = (
  <>
    <Typography>
      Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And
      well you should not.
    </Typography>

    <Typography>
      For my ally is the Force, and a powerful ally it is. Life creates it,
      makes it grow. Its energy surrounds us and binds us. Luminous beings are
      we, not this crude matter. You must feel the Force around you; here,
      between you, me, the tree, the rock, everywhere, yes. Even between the
      land and the ship.
    </Typography>

    <Select value="item-1">
      <SelectItem value="item-1">Item 1</SelectItem>
      <SelectItem value="item-2">Item 2</SelectItem>
    </Select>

    <Typography>
      The following is just to have a
      verysuperlongworkthatwillmakethescrollareascrollhorizontaly. And we
      repeat.
    </Typography>

    <InputPhone value={{ number: '+33123456789' }} />

    <Typography>
      Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And
      well you should not. For my ally is the Force, and a powerful ally it is.
      Life creates it, makes it grow. Its energy surrounds us and binds us.
      Luminous beings are we, not this crude matter. You must feel the Force
      around you; here, between you, me, the tree, the rock, everywhere, yes.
      Even between the land and the{' '}
    </Typography>
  </>
)

const meta: Meta<DialogProps> = {
  args: {
    children: content,
    condensed: true,
    defaultOpen: false,
    disabled: false,
    dismissable: true,
    fullWidth: false,
    modal: true,
    overlayStyle: 'light',
    position: 'fixed',
    scrollbarOnHover: true,
    title: 'This is the title',
    trigger: 'Text',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    position: {
      options: Object.values(Positions),
      table: {
        defaultValue: { summary: DEFAULT_POSITION },
        type: { summary: Object.values(Positions).join('|') },
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

export const ScrollableDialog: Story = {
  render: () => (
    <Dialog
      title="This dialog contains a lot of content"
      trigger={<Button>Click me!</Button>}
    >
      {content}
      {content}
      {content}
    </Dialog>
  ),
}

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
      condensed
      title="Do or do not, there is no try"
      trigger={<Button label="Master Yoda" />}
    >
      {content}
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
      closeButtonLabel="Close"
      scrollbarOnHover={false}
      title="This is the title"
      trigger={<Button label="Open the dialog" />}
    >
      {content}
      {content}
      {content}
      {content}
    </Dialog>
  ),
}
