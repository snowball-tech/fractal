import * as RxTabs from '@radix-ui/react-tabs'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME } from './Tabs.constants'
import type { TabContentProps } from './Tabs.types'

/**
 * `TabContent` component is used to display the content of a tab inside of a
 * `Tabs` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/tabs#content for more
 * information.
 */
export const Tab = forwardRef<HTMLDivElement, TabContentProps>(
  (
    { children, forceMount = false, name, ...props }: TabContentProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <RxTabs.Content
        ref={ref}
        className={cn(`${PREFIX}-${GROUP_NAME}__content`, '', props.className)}
        {...(forceMount ? { forceMount: true } : {})}
        value={name}
        {...omit(['className'], props)}
      >
        {children}
      </RxTabs.Content>
    )
  },
)
Tab.displayName = 'Tab'

export default Tab
