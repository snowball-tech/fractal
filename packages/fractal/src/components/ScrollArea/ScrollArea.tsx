import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import type { ScrollAreaProps } from './ScrollArea.types'

import { GROUP_NAME } from './ScrollArea.constants'

/**
 * `ScrollArea` component allow to add nice scrollbar to a content.
 *
 * See https://www.radix-ui.com/primitives/docs/components/scroll-area for more
 * information.
 */
export const ScrollArea = ({
  children,
  horizontal = true,
  scrollbarOnHover = true,
  vertical = true,
  ...props
}: ScrollAreaProps) => (
  <div
    className={cn(
      `${PREFIX}-${GROUP_NAME}`,
      vertical && horizontal ? 'overflow-auto' : '',
      vertical && !horizontal ? 'overflow-y-auto' : '',
      !vertical && horizontal ? 'overflow-x-auto' : '',
      scrollbarOnHover
        ? 'sm:invisible sm:transition-[visibility] sm:duration-600 sm:hover:visible sm:focus:visible'
        : '',
      props.className,
    )}
    {...omit(['className'], props)}
  >
    <div className={cn('sm:visible', props.contentClassName)}>{children}</div>
  </div>
)
ScrollArea.displayName = 'ScrollArea'

export default ScrollArea
