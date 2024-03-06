import type {
  ScrollAreaProps as RxScrollAreaProps,
  ScrollAreaScrollbarProps as RxScrollAreaScrollbarProps,
} from '@radix-ui/react-scroll-area'
import type { ReactNode } from 'react'

export interface ScrollAreaProps extends RxScrollAreaProps {
  /** The content of the scroll area. */
  children: ReactNode
  /**
   * The wanted scrollbar to appears.
   *
   *  - "both" means that both horizontal and vertical scrollbars are visible.
   *  - "horizontal" means that only horizontal scrollbar is visible.
   *  - "vertical" means that only vertical scrollbar is visible.
   */
  orientation?: 'both' | RxScrollAreaScrollbarProps['orientation']
  /**
   * If type is set to either "scroll" or "hover", this prop determines the
   * length of time, in milliseconds, before the scrollbars are hidden after the
   * user stops interacting with scrollbars.
   */
  scrollHideDelay?: number
  /**
   * Describes the nature of scrollbar visibility, similar to how the scrollbar
   * preferences in MacOS control visibility of native scrollbars.
   *
   *  - "auto" means that scrollbars are visible when content is overflowing on
   *    the corresponding orientation.
   *  - "always" means that scrollbars are always visible regardless of whether
   *    the content is overflowing.
   *  - "scroll" means that scrollbars are visible when the user is scrolling
   *    along its corresponding orientation.
   *  - "hover" when the user is scrolling along its corresponding orientation
   *    and when the user is hovering over the scroll area.
   */
  type?: RxScrollAreaProps['type']
  /** The CSS class names to apply to the scrollarea viewport element. */
  viewportClassName?: string
}
