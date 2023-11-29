import * as RxTabs from '@radix-ui/react-tabs'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef, useContext } from 'react'

import { Typography } from '@/components/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME, Orientations } from './Tabs.constants'
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
    { disabled = false, label, name, ...props }: TabProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { disabled: groupDisabled, orientation } = useContext(TabsContext)

    const isDisabled = disabled || groupDisabled

    let indicatorClassNames =
      'after:-bottom-px after:left-1/2 after:h-0.25 after:w-0 after:-translate-x-1/2 after:transition-[width]'
    let activeIndicatorClassNames = 'aria-selected:after:w-3/4'
    if (orientation === Orientations.Vertical) {
      indicatorClassNames =
        'after:-right-px after:top-1/2 after:w-0.25 after:h-0 after:-translate-y-1/2 after:transition-[height]'
      activeIndicatorClassNames = 'aria-selected:after:h-3/4'
    }

    return (
      <RxTabs.Trigger
        ref={ref}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__tab`,
          'cursor-pointer border-0 bg-[unset] px-0 py-0 text-left',
          'relative min-h-6 flex-1 text-center text-grey-30',
          'after:absolute after:block after:bg-primary after:duration-300 after:content-empty',
          indicatorClassNames,
          'aria-selected:text-dark',
          activeIndicatorClassNames,
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__tab--disabled cursor-not-allowed bg-disabled-light text-disabled`
            : '',
          orientation === Orientations.Vertical ? 'w-full px-3' : 'h-full',
          isDisabled && orientation === Orientations.Horizontal
            ? 'border-b-1'
            : '',
          props.className,
        )}
        disabled={isDisabled}
        value={name}
        {...omit(['className', 'value'], props)}
      >
        <Typography variant="caption-median">{label}</Typography>
      </RxTabs.Trigger>
    )
  },
)
Tab.displayName = 'Tab'

export default Tab
