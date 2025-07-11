import * as RxScrollArea from '@radix-ui/react-scroll-area'

import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { ScrollAreaProps } from './ScrollArea.types'

import { GROUP_NAME } from './ScrollArea.constants'

/**
 * `ScrollArea` component allow to add nice scrollbar to a content.
 *
 * See https://www.radix-ui.com/primitives/docs/components/scroll-area for more
 * information.
 */
export const LegacyScrollArea = ({
  children,
  orientation = 'vertical',
  scrollHideDelay = 600,
  type = 'hover',
  viewport,
  ...props
}: ScrollAreaProps) => {
  const scrollBarClassNames =
    'flex touch-none select-none bg-grey-90 p-quarter transition-background-color duration-300 ease-out hover:bg-grey-70'

  const scrollBarThumbClassNames =
    'relative flex-1 rounded-sm bg-grey-30 before:absolute before:content-empty'

  return (
    <RxScrollArea.Root
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        'overflow-hidden',
        orientation === 'vertical' || orientation === 'both'
          ? 'h-full max-h-full min-h-0'
          : '',
        orientation === 'horizontal' || orientation === 'both'
          ? 'w-full min-w-0 max-w-full'
          : '',
        props.className,
      )}
      scrollHideDelay={scrollHideDelay}
      type={type}
      {...omit(['className'], props)}
    >
      <RxScrollArea.Viewport
        className={cn(
          'relative size-full max-h-full max-w-full',
          viewport?.rootClassName,
        )}
        {...omit(['className'], viewport)}
      >
        <div className={viewport?.className}>{children}</div>
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
              '!w-half before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2',
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
              '!h-half before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2',
            )}
          />
        </RxScrollArea.Scrollbar>
      )}

      <RxScrollArea.Corner className="bg-grey-50" />
    </RxScrollArea.Root>
  )
}
LegacyScrollArea.displayName = 'LegacyScrollArea'

export default LegacyScrollArea
