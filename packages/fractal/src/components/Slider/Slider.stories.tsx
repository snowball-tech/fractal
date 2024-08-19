import type { Meta, StoryObj } from '@storybook/react'

import { useArgs } from '@storybook/preview-api'
import { fireEvent, fn, within } from '@storybook/test'

import type { ComponentProps } from 'react'

import { sleep } from '@/utils'

import { Slider } from '.'

type SliderProps = ComponentProps<typeof Slider>

const meta: Meta<SliderProps> = {
  args: {
    disabled: false,
    inverted: false,
    label: "Let's slide",
    max: 100,
    min: 0,
    minStepsBetweenThumbs: 0,
    value: 33,
  },
  component: Slider,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onValueChange = (newValue: Array<number> | number) => {
        context.args.onValueChange?.(newValue)

        setArgs({ value: newValue })
      }

      return <Story args={{ ...context.args, onValueChange }} />
    },
  ],

  parameters: {
    componentSubtitle: '☃️ Slide, Anna! - Olaf - Frozen',
  },

  title: 'Molecules/Slider',
} satisfies Meta<SliderProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const InteractiveDrag: Story = {
  args: {
    onValueChange: fn(),
    onValueCommit: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const slider = canvas.getByRole('slider')
    const rect = slider.getBoundingClientRect()

    const position = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }

    await sleep(500)
    await fireEvent.mouseEnter(slider, {
      clientX: position.x,
      clientY: position.y,
    })
    await fireEvent.mouseOver(slider, {
      clientX: position.x,
      clientY: position.y,
    })
    await fireEvent.mouseDown(slider, {
      clientX: position.x,
      clientY: position.y,
    })

    for (let index = 1; index <= 10; index += 1) {
      // eslint-disable-next-line no-await-in-loop
      await sleep(10)
      fireEvent.mouseMove(slider, {
        clientX: position.x + index * 20,
        clientY: position.y,
      })
    }
    fireEvent.mouseUp(slider)
  },
}
