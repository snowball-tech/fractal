import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'
import { useCallback, useEffect, useRef, useState } from 'react'

import { PREFIX } from '@/constants'
import { useTheme } from '@/hooks'
import { cn } from '@/styles/helpers'

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
  GROUP_NAME,
} from './EmojiPicker.constants'
import type { EmojiPickerProps } from './EmojiPicker.types'

/**
 * `EmojiPicker` component displays an emoji picker with search, preview and
 * skin tone customization..
 *
 * This component is based on `emoji-mart`.
 * See https://github.com/missive/emoji-mart for more information.
 */
export const EmojiPicker = ({
  autoFocus = true,
  categories = DEFAULT_CATEGORIES,
  custom = [],
  customIcon = {},
  exclude = [],
  frequentsRowNumber = 4,
  locale = DEFAULT_LOCALE,
  navPosition = DEFAULT_NAV_POSITION,
  onClickOutside,
  onSelect,
  perLine = 12,
  previewPosition = DEFAULT_PREVIEW_POSITION,
  searchPosition = DEFAULT_SEARCH_POSITION,
  set = DEFAULT_EMOJIS_SET,
  skinTone = DEFAULT_SKIN_TONE,
  skinTonePosition = DEFAULT_SKIN_TONE_POSITION,
  theme: themeOverride,
  version = DEFAULT_VERSION,
  ...props
}: EmojiPickerProps) => {
  const theme = useTheme(themeOverride)

  const pickerRef = useRef<HTMLDivElement | null>(null)
  const [rootElement, setRootElement] = useState<Element | null>(null)

  const checkPicker = useCallback(() => {
    if (!pickerRef.current) {
      return
    }

    const element = pickerRef.current.querySelector('em-emoji-picker')
    if (!element) {
      return
    }

    const { shadowRoot } = element
    if (!shadowRoot) {
      return
    }

    const root = shadowRoot.querySelector('#root')
    if (!root) {
      return
    }

    setRootElement(root)
  }, [pickerRef])

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    intervalRef.current = setInterval(checkPicker, 50)

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [checkPicker])
  useEffect(() => {
    if (rootElement && intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }
  }, [rootElement])

  useEffect(() => {
    if (!rootElement) {
      return
    }

    rootElement.setAttribute('part', `root root-${theme}`)

    if (!isEmpty(props.style)) {
      const styleString = Object.entries(props.style)
        .map(([k, v]) => `${k}:${v}`)
        .join(';')
      rootElement.setAttribute(
        'style',
        `${rootElement.getAttribute('style')}; ${styleString}`,
      )
    }

    const className = cn(
      `${PREFIX}-${GROUP_NAME}`,
      rootElement.getAttribute('class'),
      props.className,
    )
    rootElement.setAttribute('class', className)

    const nav = rootElement.querySelector('#nav')
    if (nav) {
      nav.setAttribute('part', `nav nav-${navPosition}`)

      const navInner = nav.querySelector('div.flex')
      if (navInner) {
        navInner.setAttribute('part', `nav-inner`)

        const categoriesNavWrapper = navInner.querySelectorAll('button')
        categoriesNavWrapper.forEach((categoryNav) => {
          categoryNav.setAttribute('part', `nav-button`)
        })
      }
    }

    const searchWrapper = rootElement.querySelector('.search')
    if (searchWrapper) {
      searchWrapper.setAttribute('part', 'search-wrapper')

      const search = searchWrapper.querySelector('input[type="search"]')
      if (search) {
        search.setAttribute('part', 'search-input')
      }
      const searchIcon = searchWrapper.querySelector('.icon')
      if (searchIcon) {
        searchIcon.setAttribute('part', 'search-icon')

        const svg = searchIcon.querySelector('svg')
        if (svg) {
          svg.setAttribute('part', 'search-icon-svg')
        }
      }
    }

    const scrollArea = rootElement.querySelector('.scroll')
    if (scrollArea) {
      scrollArea.setAttribute('part', 'scroll-area')

      const categoriesWrappers = scrollArea.querySelectorAll('.category')
      categoriesWrappers.forEach((category) => {
        // eslint-disable-next-line unicorn/prefer-dom-node-dataset
        const categoryId = category.getAttribute('data-id')

        category.setAttribute('part', `category category-${categoryId}`)

        const title = category.querySelector('div:first-child')
        if (title) {
          title.setAttribute(
            'part',
            `category-title category-${categoryId}-title`,
          )
        }

        const emojis = category.querySelector('div:last-child')
        if (emojis) {
          emojis.setAttribute(
            'part',
            `category-emojis category-${categoryId}-emojis`,
          )
        }
      })
    }

    const preview = rootElement.querySelector('#preview')
    if (preview) {
      preview.setAttribute('part', `preview preview-${previewPosition}`)

      const placeholder = preview.querySelector('.preview-placeholder')
      if (placeholder) {
        placeholder.setAttribute('part', 'preview-placeholder')
      }
    }
  })

  return (
    <div ref={pickerRef} className="min-w-[400px]">
      <Picker
        autoFocus={autoFocus}
        categories={categories}
        categoryIcons={customIcon}
        custom={custom}
        data={data}
        dynamicWidth={false}
        emojiVersion={version}
        exceptEmojis={exclude}
        locale={locale}
        maxFrequentRows={frequentsRowNumber}
        navPosition={navPosition}
        perLine={perLine}
        previewPosition={previewPosition}
        searchPosition={searchPosition}
        set={set}
        skin={skinTone}
        skinTonePosition={skinTonePosition}
        theme={theme || 'auto'}
        onClickOutside={onClickOutside}
        onEmojiSelect={onSelect}
        {...omit(['className', 'style'], props)}
      />
    </div>
  )
}
EmojiPicker.displayName = 'EmojiPicker'

export default EmojiPicker
