import type { Meta, StoryObj } from '@storybook/react-vite'

import { UilEllipsisV as MoreMenuIcon } from '@tooni/iconscout-unicons-react'
import isChromatic from 'chromatic'
import { fn, userEvent, within } from 'storybook/test'

import type { ComponentProps, ReactNode } from 'react'

import { Button } from '@/components/Button/Button'
import { InputFile } from '@/components/InputFile/InputFile'
import { InputText } from '@/components/InputText/InputText'
import { Elevations as PaperElevations } from '@/components/Paper/Paper.constants'
import { Typography } from '@/components/Typography/Typography'
import { sleep } from '@/utils'

import { Popover } from './Popover'
import { DEFAULT_ELEVATION } from './Popover.constants'

const popoverContent = (
  <div className="flex flex-col gap-2">
    <Typography>
      What is nice with this Popover is that you can put whatever you want
      inside of it.
    </Typography>

    <div className="flex flex-col gap-1">
      <InputText fullWidth label="For example an input" />
      <InputFile
        label="Or a file picker"
        triggerProps={{
          fullWidth: true,
        }}
      />
    </div>
  </div>
)

type PopoverProps = ComponentProps<typeof Popover>

const meta: Meta<PopoverProps> = {
  args: {
    align: undefined,
    children: popoverContent,
    closeButtonLabel: 'Close',
    disabled: false,
    elevation: DEFAULT_ELEVATION,
    fullWidth: false,
    modal: false,
    side: undefined,
    title: 'Behold the Popover',
    toggleOnTriggerClick: true,
    toggleOnTriggerHover: false,
    trigger: 'Text',
    triggerAsButton: true,
    width: 'fit',
    withArrow: true,
    withCloseButton: true,
    withScroll: false,
  },
  argTypes: {
    align: {
      control: 'radio',
      mapping: {
        Auto: undefined,
        Center: 'center',
        End: 'end',
        Start: 'start',
      },
      options: ['Auto', 'Start', 'Center', 'End'],
    },
    elevation: {
      control: 'radio',
      table: {
        defaultValue: { summary: DEFAULT_ELEVATION },
        type: { summary: Object.values(PaperElevations).join('|') },
      },
    },
    side: {
      control: 'radio',
      mapping: {
        Auto: undefined,
        Bottom: 'bottom',
        Left: 'left',
        Right: 'right',
        Top: 'top',
      },
      options: ['Auto', 'Top', 'Right', 'Bottom', 'Left'],
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
    width: {
      control: 'radio',
      options: [
        'auto',
        'trigger',
        'fit',
        'full',
        '*0.25',
        '*0.5',
        '*0.75',
        100,
        500,
        1000,
      ],
    },
  },
  component: Popover,
  decorators: [
    ...(isChromatic()
      ? [
          (storyFunction: () => ReactNode) => (
            <div className="flex h-[500px] max-w-[500px] items-center justify-center">
              {storyFunction()}
            </div>
          ),
        ]
      : []),
  ],

  parameters: {
    docs: { subtitle: `🤖 Pop. You Pop - Wall-E, talking to Eve - Wall-E` },
  },

  title: 'Molecules/Popover',
} satisfies Meta<PopoverProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interactive: Story = {
  args: {
    onClose: fn(),
    onCloseButtonClick: fn(),
    onInteractOutside: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await sleep(500)

    await userEvent.click(canvas.getAllByRole('button').at(0)!)

    await sleep(500)
  },
  render: () => (
    <Popover
      title="Behold the Popover"
      trigger={<Button label="This is a button trigger" />}
      withCloseButton
    >
      {popoverContent}
    </Popover>
  ),
}
