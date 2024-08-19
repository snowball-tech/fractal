import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import type { ComponentProps } from 'react'

import { DEFAULT_THEME, Themes } from '@/constants'

import { EmojiPicker } from '.'
import {
  DEFAULT_CATEGORIES,
  DEFAULT_EMOJIS_SET,
  DEFAULT_LOCALE,
  DEFAULT_NAV_POSITION,
  DEFAULT_PREVIEW_POSITION,
  DEFAULT_SEARCH_POSITION,
  DEFAULT_SKIN_TONE,
  DEFAULT_SKIN_TONE_POSITION,
  DEFAULT_VERSION,
  EmojisSets,
  Locales,
  Positions,
  SearchPositions,
  SKIN_TONES,
  SkinTonePositions,
  VERSIONS,
} from './EmojiPicker.constants'

type EmojiPickerProps = ComponentProps<typeof EmojiPicker>

const meta = {
  args: {
    autoFocus: true,
    categories: DEFAULT_CATEGORIES,
    custom: [],
    customIcon: {},
    exclude: [],
    frequentsRowNumber: 4,
    locale: DEFAULT_LOCALE,
    navPosition: DEFAULT_NAV_POSITION,
    perLine: 12,
    previewPosition: DEFAULT_PREVIEW_POSITION,
    search: '',
    searchPosition: DEFAULT_SEARCH_POSITION,
    set: DEFAULT_EMOJIS_SET,
    skinTone: DEFAULT_SKIN_TONE,
    skinTonePosition: DEFAULT_SKIN_TONE_POSITION,
    version: DEFAULT_VERSION,
  },
  argTypes: {
    categories: {
      control: { type: 'check' },
      options: DEFAULT_CATEGORIES,
      table: {
        defaultValue: { summary: `[${DEFAULT_CATEGORIES.join(',')}]` },
        type: { summary: `Array<${DEFAULT_CATEGORIES.join('|')}>` },
      },
    },
    locale: {
      options: Object.values(Locales),
      table: {
        defaultValue: { summary: DEFAULT_LOCALE },
        type: { summary: Object.values(Locales).join('|') },
      },
    },
    navPosition: {
      options: Object.values(Positions),
      table: {
        defaultValue: { summary: DEFAULT_NAV_POSITION },
        type: { summary: Object.values(Positions).join('|') },
      },
    },
    previewPosition: {
      options: Object.values(Positions),
      table: {
        defaultValue: { summary: DEFAULT_PREVIEW_POSITION },
        type: { summary: Object.values(Positions).join('|') },
      },
    },
    searchPosition: {
      options: Object.values(SearchPositions),
      table: {
        defaultValue: { summary: DEFAULT_SEARCH_POSITION },
        type: { summary: Object.values(SearchPositions).join('|') },
      },
    },
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
    skinTonePosition: {
      options: Object.values(SkinTonePositions),
      table: {
        defaultValue: { summary: DEFAULT_SKIN_TONE_POSITION },
        type: { summary: Object.values(SkinTonePositions).join('|') },
      },
    },
    theme: {
      control: 'radio',
      options: Object.values(Themes),
      table: {
        defaultValue: { summary: DEFAULT_THEME },
        type: { summary: Object.values(Themes).join('|') },
      },
    },
    version: {
      options: VERSIONS as unknown as Array<number>,
      table: {
        defaultValue: { summary: `${DEFAULT_VERSION}` },
        type: { summary: VERSIONS.join('|') },
      },
    },
  },
  component: EmojiPicker,
  parameters: {
    componentSubtitle: '💃 Everybody, do the Emoji Pop! - The Emoji Movie',
  },

  title: 'Molecules/Emojis/Picker',
} satisfies Meta<EmojiPickerProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    onSelect: action('onSelect'),
  },
}
