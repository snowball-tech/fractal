import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { useCallback, useEffect, useRef, useState } from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import noop from 'lodash/fp/noop'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { useTheme } from '@/hooks'
import { cn } from '@/styles/helpers'

import type { EmojiPickerProps } from './EmojiPicker.types'

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
  search,
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

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const delayedUpdateShadowDom = () => setTimeout(updateShadowDom, 1)
  const updateShadowDom = useCallback(() => {
    if (!rootElement) {
      return noop
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
    let navInner: Element | null = null
    if (nav) {
      nav.setAttribute('part', `nav nav-${navPosition}`)

      navInner = nav.querySelector('div.flex')
      if (navInner) {
        navInner.setAttribute('part', `nav-inner`)

        const categoriesNavWrapper = navInner.querySelectorAll('button')
        categoriesNavWrapper.forEach((categoryNav) => {
          categoryNav.setAttribute(
            'part',
            `nav-button${categoryNav.getAttribute('aria-selected') ? ' nav-button-active' : ''}`,
          )

          categoryNav.removeEventListener('click', delayedUpdateShadowDom)
          categoryNav.addEventListener('click', delayedUpdateShadowDom)
        })
      }
    }

    const searchWrapper = rootElement.querySelector('.search')
    if (searchWrapper) {
      searchWrapper.setAttribute('part', 'search-wrapper')

      const searchInput = searchWrapper.querySelector(
        'input[type="search"]',
      ) as HTMLInputElement
      if (searchInput) {
        searchInput.setAttribute('part', 'search-input')

        if (!isEmpty(search)) {
          searchInput.value = search
          searchInput.dispatchEvent(new Event('input', { bubbles: true }))
        }
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

    const scrollArea = rootElement.querySelector('.scroll') as HTMLDivElement
    if (scrollArea) {
      scrollArea.setAttribute('part', 'scroll-area')

      scrollArea.addEventListener('scroll', delayedUpdateShadowDom)

      const categoriesWrappers = scrollArea.querySelectorAll('.category')
      categoriesWrappers.forEach((category) => {
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

    return () => {
      if (nav && navInner) {
        const categoriesNavWrapper = navInner.querySelectorAll('button')
        categoriesNavWrapper.forEach((categoryNav) => {
          categoryNav.setAttribute(
            'part',
            `nav-button${categoryNav.getAttribute('aria-selected') ? ' nav-button-active' : ''}`,
          )

          categoryNav.addEventListener('click', delayedUpdateShadowDom)
        })
      }

      if (scrollArea) {
        scrollArea.removeEventListener('scroll', delayedUpdateShadowDom)
      }
    }
    // We don't want to depend on `delayedUpdateShadowDom`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    navPosition,
    previewPosition,
    props.className,
    props.style,
    rootElement,
    search,
    theme,
  ])
  useEffect(() => updateShadowDom(), [updateShadowDom])

  const styles = `
    em-emoji-picker {
      --border-radius: var(--size-radius-s);
      --border-size: var(--size-border-1);
      --font-family: var(--typography-body-1-font-family);
      --font-size: var(--typography-body-1-font-size);
      --preview-subtitle-size: var(--typography-body-2-font-size);
      --preview-title-size: var(--typography-body-1-font-size);
      --category-icon-size: var(--size-spacing-5);
    }

    em-emoji-picker::part(root-light) {
      --rgb-accent: var(--color-brand-primary-light);
      --rgb-background: var(--color-background-body-white);
      --rgb-border: var(--color-border-default);
      --rgb-color: var(--color-text-dark);
      --rgb-input: var(--color-background-body-white);
      --rgb-button: var(--color-decorative-pink-90);
      --shadow-color: var(--color-text-dark);
      --shadow: var(--shadow-brutal-2-light);
    }

    em-emoji-picker::part(root-dark) {
      --rgb-accent: var(--color-brand-primary-dark);
      --rgb-background: var(--color-brand-body-dark);
      --rgb-border: var(--color-border-dark);
      --rgb-color: var(--color-text-light);
      --rgb-input: var(--color-background-body-dark);
      --rgb-button: var(--color-decorative-pink-90);
      --shadow-color: var(--color-brand-primary-dark);
      --shadow: var(--shadow-brutal-2-dark);
    }

    em-emoji-picker::part(root) {
      background-color: var(--rgb-background);
      border: var(--border-size) solid var(--rgb-border);
      box-shadow: var(--shadow);
      color: var(--rgb-color);
      width: fit-content !important;

      --padding: var(--size-spacing-1);
      --sidebar-width: var(--size-spacing-half);
      --em-color-border: var(--color-base-grey-70);
      --em-color-border-over: var(--color-base-grey-50);
    }

    em-emoji-picker::part(nav)::before,
    em-emoji-picker::part(preview)::before {
      display: none;
      content: '';
    }

    em-emoji-picker::part(nav),
    em-emoji-picker::part(preview) {
      padding: var(--padding);
    }

    em-emoji-picker::part(nav) {
      padding-block: var(--size-spacing-1);
    }

    em-emoji-picker::part(nav-bottom) {
      border-top: var(--border-size) solid var(--rgb-border);
    }

    em-emoji-picker::part(nav-top) {
      border-bottom: var(--border-size) solid var(--rgb-border);
    }

    em-emoji-picker::part(nav-inner) {
      flex-wrap: wrap;
      gap: var(--size-spacing-1);
    }

    em-emoji-picker::part(nav-button) {
      align-items: center;
      background-color: transparent;
      border-radius: var(--size-radius-rounded);
      display: flex;
      height: var(--category-icon-size);
      justify-content: center;
      max-height: var(--category-icon-size);
      max-width: var(--category-icon-size);
      min-height: var(--category-icon-size);
      min-width: var(--category-icon-size);
      outline-offset: 2px;
      outline: 2px solid transparent;
      padding: var(--size-spacing-1);
      position: relative;
      text-decoration-line: none;
      transition-property: 0.3s;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      width: var(--category-icon-size);
    }

    em-emoji-picker::part(nav-button-active)::after {
      content: '';
      position: absolute;
      bottom: calc(var(--size-spacing-1) * -1);
      height: 2px;
      width: 100%;
      background-color: var(--rgb-accent);
    }

    em-emoji-picker::part(nav-button):hover {
      background-color: var(--rgb-button);
    }

    em-emoji-picker::part(search-wrapper) {
      width: 100%;
      font-family: var(--typography-body-1-font-family);
      font-size: var(--typography-body-1-font-size);
      font-weight: var(--typography-body-1-font-weight);
      letter-spacing: 0;
      line-height: var(--typography-body-1-line-height);
      max-width: 100%;
      position: relative;
    }

    em-emoji-picker::part(search-icon) {
      display: flex;
      left: var(--size-spacing-1);
      max-width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: fit-content;
    }

    em-emoji-picker::part(search-icon-svg) {
      color: var(--rgb-color);
      height: var(--size-spacing-3);
      width: var(--size-spacing-3);
    }

    em-emoji-picker::part(search-input) {
      align-items: center;
      appearance: textfield;
      background-color: var(--rgb-input);
      border-radius: var(--border-radius);
      border: var(--border-size) solid var(--rgb-border);
      display: flex;
      height: var(--size-spacing-6);
      max-height: var(--size-spacing-6);
      max-width: 100%;
      min-width: var(--size-spacing-6);
      outline-offset: 2px;
      outline: 2px solid transparent;
      padding-block: var(--size-spacing-1);
      padding-inline: var(--size-spacing-2);
      padding-left: var(--size-spacing-5);
      text-align: left;
      transition-duration: 0.3s;
      transition-property: border-color;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      width: 100%;
    }

    em-emoji-picker::part(search-input):hover {
      border-color: var(--rgb-border);
      box-shadow: inset 0 0 0 1px var(--shadow-color);
    }

    em-emoji-picker::part(search-input):focus {
      border-color: var(--rgb-accent);
      box-shadow: inset 0 0 0 1px var(--rgb-accent);
    }

    em-emoji-picker::part(search-input)::placeholder {
      color: var(--color-text-placeholder);
      font-size: var(--typography-body-1-font-size) !important;
      opacity: 1;
    }

    em-emoji-picker::part(category) {
      margin-bottom: var(--size-spacing-1);
    }

    em-emoji-picker::part(category-title) {
      background-color: var(--rgb-background);
      backdrop-filter: unset;
      font-family: var(--typography-body-1-median-font-family);
      font-size: var(--typography-body-1-median-font-size);
      font-weight: var(--typography-body-1-median-font-weight);
      letter-spacing: 0;
      line-height: var(--typography-body-1-median-line-height);
    }

    em-emoji-picker::part(preview) {
      max-height: var(--size-spacing-9);
      min-height: var(--size-spacing-9);
      height: var(--size-spacing-9);
      padding-block: var(--size-spacing-2);
    }

    em-emoji-picker::part(preview-bottom) {
      border-top: var(--border-size) solid var(--rgb-border);
    }

    em-emoji-picker::part(preview-top) {
      border-bottom: var(--border-size) solid var(--rgb-border);
    }

    em-emoji-picker::part(preview-placeholder) {
      font-family: var(--typography-heading-4-font-family);
      font-size: var(--typography-heading-4-font-size);
      font-weight: var(--typography-heading-4-font-weight);
      letter-spacing: 0;
      line-height: var(--typography-heading-4-line-height);
    }
  `

  return (
    <div ref={pickerRef} className="min-w-[400px]">
      <style>{styles}</style>

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
