import type { Meta, StoryObj } from '@storybook/react-vite'

import data from '@emoji-mart/data'
import { init } from 'emoji-mart'

import type { ComponentProps } from 'react'

import { Typography } from '@/components/Typography'

import { Emoji } from '.'
import {
  DEFAULT_EMOJIS_SET,
  DEFAULT_SKIN_TONE,
  EmojisSets,
  SKIN_TONES,
} from './EmojiPicker.constants'

init({ data })

type EmojiProps = ComponentProps<typeof Emoji>

const meta = {
  args: {
    id: '+1',
    native: '',
    set: DEFAULT_EMOJIS_SET,
    shortCode: '',
    skinTone: DEFAULT_SKIN_TONE,
  },
  argTypes: {
    set: {
      options: Object.values(EmojisSets),
      table: {
        defaultValue: { summary: DEFAULT_EMOJIS_SET },
        type: { summary: Object.values(EmojisSets).join('|') },
      },
    },
    skinTone: {
      options: SKIN_TONES as unknown as Array<number>,
      table: {
        defaultValue: { summary: `${DEFAULT_SKIN_TONE}` },
        type: { summary: SKIN_TONES.join('|') },
      },
    },
  },
  component: Emoji,
  parameters: {
    docs: { subtitle: '💃 Everybody, do the Emoji Pop! - The Emoji Movie' },
  },

  title: 'Molecules/Emojis/Emoji',
} satisfies Meta<EmojiProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (arguments_) => (
    <Typography variant="display-1">
      <Emoji {...arguments_} />
    </Typography>
  ),
}
