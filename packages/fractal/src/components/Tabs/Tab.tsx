import * as RxTabs from '@radix-ui/react-tabs'

import { type ForwardedRef, forwardRef } from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'
import { onlyText } from '@/utils'

import type { TabProps } from './Tabs.types'

import {
  DEFAULT_ORIENTATION,
  DEFAULT_POSITION,
  DEFAULT_SIZE,
  GROUP_NAME,
  Orientations,
  Positions,
  Sizes,
} from './Tabs.constants'

/**
 * `Tab` component is used to display a tab inside of a `Tabs` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/tabs#trigger for more
 * information.
 */
export const Tab = forwardRef<HTMLButtonElement | null, TabProps>(
  (
    {
      children,
      disabled = false,
      icon,
      iconOnly = false,
      label,
      large = false,
      name,
      orientation = DEFAULT_ORIENTATION,
      size = DEFAULT_SIZE,
      tabsPosition = DEFAULT_POSITION,
      withIndicator = true,
      ...props
    }: TabProps,
    ref?: ForwardedRef<HTMLButtonElement | null>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && !label) {
      console.warn(
        'You must provide a `label` or `children` to the `Tab` component',
      )
    }

    const textLabel = isString(label)
      ? label
      : isEmpty(label)
        ? onlyText(children)
        : onlyText(label)

    const hasIcon = Boolean(icon)

    const isDisabled = disabled
    const isLarge = large || (hasIcon && !iconOnly && !isEmpty(label))

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
        aria-label={textLabel}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__tab`,
          'cursor-pointer border-0 bg-[unset] px-0 py-0 text-left',
          'relative h-full flex-1 self-end text-center text-grey-30',
          isLarge ? `${PREFIX}-${GROUP_NAME}__tab--large min-h-10` : 'min-h-6',
          'after:absolute after:block after:bg-primary after:duration-300 after:content-empty',
          withIndicator ? indicatorClassNames : '',
          'aria-selected:text-secondary',
          withIndicator ? activeIndicatorClassNames : '',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__tab--disabled cursor-not-allowed text-grey-70`
            : 'hover:text-secondary',
          orientation === Orientations.Vertical ? 'w-full px-3' : 'h-full',
          props.className,
        )}
        disabled={isDisabled}
        title={textLabel}
        value={name}
        {...omit(['className', 'value'], props)}
      >
        <Typography
          className={cj(
            'flex h-full items-center justify-center gap-1 p-1',
            orientation === Orientations.Horizontal ? 'flex-col' : '',
          )}
          element="div"
          variant={
            size === Sizes.Large
              ? 'body-1-median'
              : size === Sizes.Medium
                ? 'body-2-median'
                : 'caption-median'
          }
        >
          {icon}
          {!iconOnly && (hasChildren ? children : label)}
        </Typography>
      </RxTabs.Trigger>
    )
  },
)
Tab.displayName = 'Tab'

export default Tab
