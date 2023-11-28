import * as RxScrollArea from '@radix-ui/react-scroll-area'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './ScrollArea.constants'
import type { ScrollAreaProps } from './ScrollArea.types'

/**
 * `ScrollArea` component allow to add nice scrollbar to a content.
 * See https://www.radix-ui.com/primitives/docs/components/scroll-area for more
 * information.
 */
export const ScrollArea = ({
  children,
  orientation = 'vertical',
  scrollHideDelay = 600,
  type = 'hover',
  ...props
}: ScrollAreaProps) => {
  const scrollBarClassNames =
    'flex touch-none select-none bg-grey-90 p-0.25 transition-background-color duration-300 ease-out hover:bg-grey-70'

  const scrollBarThumbClassNames =
    'relative flex-1 rounded-sm bg-grey-30 before:absolute before:content-empty'

  return (
    <RxScrollArea.Root
      className={cn(`${PREFIX}-${GROUP_NAME}`, props.className)}
      scrollHideDelay={scrollHideDelay}
      type={type}
      {...omit(['className'], props)}
    >
      <RxScrollArea.Viewport className="relative h-full w-full">
        {children}
      </RxScrollArea.Viewport>

      {(orientation === 'both' || orientation === 'vertical') && (
        <RxScrollArea.Scrollbar
          className={cj(
            `${PREFIX}-${GROUP_NAME}__scrollbar--y`,
            scrollBarClassNames,
            'w-1',
          )}
          orientation="vertical"
        >
          <RxScrollArea.Thumb
            className={cj(
              `${PREFIX}-${GROUP_NAME}__scrollbar--y__thumb`,
              scrollBarThumbClassNames,
              '!w-0.5 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2',
            )}
          />
        </RxScrollArea.Scrollbar>
      )}

      {(orientation === 'both' || orientation === 'horizontal') && (
        <RxScrollArea.Scrollbar
          className={cj(
            `${PREFIX}-${GROUP_NAME}__scrollbar--x`,
            scrollBarClassNames,
            'h-1 flex-col',
          )}
          orientation="horizontal"
        >
          <RxScrollArea.Thumb
            className={cj(
              `${PREFIX}-${GROUP_NAME}__scrollbar--x__thumb`,
              scrollBarThumbClassNames,
              '!h-0.5 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2',
            )}
          />
        </RxScrollArea.Scrollbar>
      )}

      <RxScrollArea.Corner className="bg-grey-50" />
    </RxScrollArea.Root>
  )
}
ScrollArea.displayName = 'ScrollArea'

export default ScrollArea
