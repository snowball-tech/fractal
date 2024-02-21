import MoreMenuIcon from '@iconscout/react-unicons/dist/icons/uil-ellipsis-v'
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import isEmpty from 'lodash/fp/isEmpty'
import type { ComponentProps, ReactNode } from 'react'

import { Button } from '@/components/Button'
import { InputFile } from '@/components/InputFile'
import { InputText } from '@/components/InputText'
import { Typography } from '@/components/Typography'
import { sleep } from '@/utils'

import { Popover } from '.'

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

type PopoverProps = ComponentProps<typeof Popover> & {
  align?: 'Auto' | 'Center' | 'End' | 'Start'
  side?: 'Auto' | 'Bottom' | 'Left' | 'Right' | 'Top'
}

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
      options: ['auto', 'trigger', 'fit', 'full', 100, 500, 1000],
    },
  },
  args: {
    align: 'Auto',
    children: popoverContent,
    disabled: false,
    fullWidth: false,
    side: 'Auto',
    trigger: 'Text',
    width: 'fit',
    withArrow: true,
    withCloseButton: false,
  },
  component: Popover,
  decorators: [
    (storyFn: () => ReactNode) => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '500px',
          justifyContent: 'center',
          maxWidth: '500px',
        }}
      >
        {storyFn()}
      </div>
    ),
    function WithArgs(Story, context) {
      const [{ popover, side }] = useArgs<typeof context.args>()

      return (
        <Story
          args={{
            ...context.args,
            popover: {
              ...popover,
              avoidCollisions: isEmpty(side),
              side: side as 'bottom' | 'left' | 'right' | 'top',
            },
          }}
        />
      )
    },
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
