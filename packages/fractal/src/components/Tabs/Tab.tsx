import * as RxTabs from '@radix-ui/react-tabs'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef, useContext } from 'react'

import { Typography } from '@/components/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME, Orientations, Positions } from './Tabs.constants'
import type { TabProps } from './Tabs.types'
import { TabsContext } from './TabsContext'

/**
 * `Tab` component is used to display a tab inside of a `Tabs` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/tabs#trigger for more
 * information.
 */
export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  (
    { disabled = false, icon, label, large = false, name, ...props }: TabProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const hasIcon = Boolean(icon)

    const {
      disabled: groupDisabled,
      large: groupLarge,
      orientation,
      tabsPosition,
    } = useContext(TabsContext)

    const isDisabled = disabled || groupDisabled
    const isLarge = large || groupLarge || (hasIcon && !isEmpty(label))

    let indicatorClassNames =
      'after:left-1/2 after:h-quarter after:w-0 after:-translate-x-1/2 after:transition-[width] '
    indicatorClassNames +=
      tabsPosition === Positions.Start ? 'after:-bottom-px' : 'after:-top-px'

    let activeIndicatorClassNames = 'aria-selected:after:w-3/4'

    if (orientation === Orientations.Vertical) {
      indicatorClassNames =
        'after:top-1/2 after:w-quarter after:h-0 after:-translate-y-1/2 after:transition-[height] '
      indicatorClassNames +=
        tabsPosition === Positions.Start ? 'after:-right-px' : 'after:-left-px'

      activeIndicatorClassNames = 'aria-selected:after:h-3/4'
    }

    return (
      <RxTabs.Trigger
        ref={ref}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__tab`,
          'cursor-pointer border-0 bg-[unset] px-0 py-0 text-left',
          'relative h-full flex-1 self-end text-center text-grey-30',
          isLarge ? 'min-h-10' : 'min-h-6',
          'after:absolute after:block after:bg-primary after:duration-300 after:content-empty',
          indicatorClassNames,
          'aria-selected:text-secondary',
          activeIndicatorClassNames,
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__tab--disabled cursor-not-allowed text-grey-70`
            : 'hover:text-secondary',
          orientation === Orientations.Vertical ? 'w-full px-3' : 'h-full',
          props.className,
        )}
        disabled={isDisabled}
        value={name}
        {...omit(['className', 'value'], props)}
      >
        <Typography
          className={cj(
            'flex h-full items-center justify-center gap-1 p-1',
            orientation === Orientations.Horizontal ? 'flex-col' : '',
          )}
          element="div"
          variant="caption-median"
        >
          {icon}
          {label}
        </Typography>
      </RxTabs.Trigger>
    )
  },
)
Tab.displayName = 'Tab'

export default Tab
