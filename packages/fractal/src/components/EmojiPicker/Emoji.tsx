import { useEffect, useState } from 'react'

import isEmpty from 'lodash/fp/isEmpty'

import { cn } from '@/styles/helpers'

import type { EmojiProps } from './EmojiPicker.types'

import { DEFAULT_EMOJIS_SET, DEFAULT_SKIN_TONE } from './EmojiPicker.constants'

/**
 * `Emoji` component displays an emoji based on it's id, short code or native
 * character
 *
 * This component is based on `emoji-mart`. See
 * https://github.com/missive/emoji-mart#-emoji-component for more information.
 */
export const Emoji = ({
  id,
  native,
  set = DEFAULT_EMOJIS_SET,
  shortCode,
  skinTone = DEFAULT_SKIN_TONE,
  ...props
}: EmojiProps) => {
  const className = '[font-size:inherit]'

  let actualShortCode = shortCode?.startsWith(':') ? shortCode : `:${shortCode}`
  actualShortCode = actualShortCode?.endsWith(':')
    ? actualShortCode
    : `${actualShortCode}:`
  if (!isEmpty(id) && isEmpty(shortCode) && isEmpty(native)) {
    actualShortCode = `:${id}:`
  }
  if (!isEmpty(actualShortCode) && !actualShortCode.includes('skin-tone')) {
    actualShortCode = `${actualShortCode}:skin-tone-${skinTone}:`
  }

  const [emojiRef, setEmojiRef] = useState<HTMLDivElement | null>(null)
  useEffect(() => {
    if (emojiRef) {
      emojiRef.setAttribute('class', cn(className, props.className))
    }
  }, [emojiRef, props.className])

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Despite the fact that the `em-emoji` element is defined in
    // the global.d.ts file, Typescript keeps spitting errors... I give up.
    <em-emoji
      id={isEmpty(native) ? id : undefined}
      ref={(ref: HTMLDivElement) => setEmojiRef(ref)}
      native={native || undefined}
      set={set}
      shortcodes={isEmpty(native) ? actualShortCode : ''}
      skin={skinTone}
      {...props}
    />
  )
}
Emoji.displayName = 'Emoji'

export default Emoji
