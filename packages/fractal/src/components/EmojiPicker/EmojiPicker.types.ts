import type { AllHTMLAttributes } from 'react'

import { Themes } from '@/constants'

import {
  Categories,
  EmojisSets,
  Locales,
  Positions,
  SearchPositions,
  type SkinTone,
  SkinTonePositions,
  Version,
} from './EmojiPicker.constants'

export type EmojisCategory = {
  emojis: Array<Emoji>
  id: string
  name: string
}

export type Emoji = {
  emoticons?: Array<string>
  id: string
  keywords?: Array<string>
  name: string
  native: string
  shortcodes: string
  unified: string
}

export interface EmojiPickerProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /**
   * Indicates if the search input inside of the emoji picker must be
   * automatically focused when the emoji picker opens.
   */
  autoFocus?: boolean
  /**
   * The categories of emojis to display in the emoji picker.
   *
   * Note that the order is respected.
   */
  /* eslint-disable perfectionist/sort-union-types */
  categories?: Array<`${Categories}`>
  /* eslint-enable perfectionist/sort-union-types */
  /**
   * A list of custom emojis to display in the emoji picker.
   *
   * See https://github.com/missive/emoji-mart#custom-emojis for more
   * information.
   */
  custom?: Array<EmojisCategory>
  /**
   * The custom icon to display for each categories of the emoji picker.
   *
   * See https://github.com/missive/emoji-mart#custom-category-icons for more
   * information.
   */
  customIcon?: Record<string, { src: string } | { svg: string }>
  /** The list of emojis IDs to exclude from the emoji picker. */
  exclude?: Array<string>
  /**
   * The number of frequents emojis row to display in the emoji picker.
   *
   * Note that if you pass `0`, then the "Frequent" category will be hidden.
   */
  frequentsRowNumber?: number
  /**
   * The locale to use for the name of the emojis displayed in the emoji
   * picker.
   */
  locale?: `${Locales}`
  /**
   * Indicates the position of the navigation tabs in the emoji picker.
   *
   * If you pass `false`, the tabs will be hidden
   */
  navPosition?: `${Positions}` | false
  /** Event handler called when the user clicks outside of the emoji picker. */
  onClickOutside?: () => void
  /**
   * Event handler called when an emoji is selected (clicked) in the emoji
   * picker.
   */
  onSelect?: (emoji: Emoji) => void
  /** The number of emojis to display per line in the emoji picker. */
  perLine?: number
  /**
   * Indicates the position of the preview in the emoji picker.
   *
   * If you pass `false`, the preview will be hidden
   */
  previewPosition?: `${Positions}` | false
  /**
   * Indicates the position of the search input in the emoji picker.
   *
   * If you pass `false`, the search will be hidden
   */
  searchPosition?: `${SearchPositions}` | false
  /** The set of emoji to display in the emoji picker. */
  set: `${EmojisSets}`
  /** The skin tone of the emojis in the emoji picker. */
  skinTone: SkinTone
  /**
   * Indicates the position of the skin tone selector in the emoji picker.
   *
   * If you pass `false`, the skin tone selector will be hidden
   */
  skinTonePosition?: `${SkinTonePositions}` | false
  /** The theme of the emoji picker. */
  theme?: Themes
  /** The version of the emojis to use in the emoji picker. */
  version?: Version
}

export interface EmojiProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'size'> {
  /**
   * The id of the emoji to display.
   *
   * Use this, `shortcode` or `native` to display an emoji.
   */
  id?: string
  /**
   * The native emoji to display.
   *
   * Use this, `id` or `shortcode` to display an emoji.
   */
  native?: string
  /** The set of emoji to use to display the emoji. */
  set: `${EmojisSets}`
  /**
   * The shortcode of the emoji to display.
   *
   * Use this, `id` or `native` to display an emoji.
   */
  shortCode?: string
  /** The skin tone of the emoji. */
  skinTone?: SkinTone
}
