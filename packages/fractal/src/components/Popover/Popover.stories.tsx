import MoreMenuIcon from '@iconscout/react-unicons/icons/uil-ellipsis-v'
import type { Meta, StoryObj } from '@storybook/react'
import { fn, userEvent, within } from '@storybook/test'
import type { ComponentProps, ReactNode } from 'react'

import { Button } from '@/components/Button'
import InputFile from '@/components/InputFile/InputFile'
import { InputText } from '@/components/InputText'
import { Elevations } from '@/components/Paper/Paper.constants'
import { Typography } from '@/components/Typography'
import { sleep } from '@/utils'

import { Popover } from '.'
import { DEFAULT_ELEVATION } from './Popover.constants'

const popoverContent = (
  <div className="flex flex-col gap-2">
    <Typography variant="heading-4">Behold the Popover</Typography>
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
        type: { summary: Object.values(Elevations).join('|') },
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
  args: {
    align: undefined,
    children: popoverContent,
    disabled: false,
    elevation: DEFAULT_ELEVATION,
    fullWidth: false,
    side: undefined,
    trigger: 'Text',
    width: 'fit',
    withArrow: true,
    withCloseButton: false,
    withScroll: false,
  },
  component: Popover,
  decorators: [
    (storyFn: () => ReactNode) => (
      <div className="flex h-[500px] max-w-[500px] items-center justify-center">
        {storyFn()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: `🤖 Pop. You Pop - Wall-E, talking to Eve - Wall-E`,
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

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(canvas.getAllByRole('button').at(0)!)

    await sleep(500)
  },
  render: () => (
    <Popover trigger={<Button label="This is a button trigger" />}>
      {popoverContent}
    </Popover>
  ),
}
