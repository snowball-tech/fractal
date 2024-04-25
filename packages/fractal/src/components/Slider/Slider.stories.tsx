import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

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
    // eslint-disable-next-line unicorn/prevent-abbreviations
    function WithArgs(Story, context) {
      // eslint-disable-next-line unicorn/prevent-abbreviations
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
