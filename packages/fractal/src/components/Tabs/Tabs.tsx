import * as RxTabs from '@radix-ui/react-tabs'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { DEFAULT_ORIENTATION, GROUP_NAME, Orientations } from './Tabs.constants'
import type { TabsProps } from './Tabs.types'
import { TabsContext } from './TabsContext'

/**
 * `Tabs` component is used to allow the user to change the content displayed in
 * a page/container.
 *
 * See https://www.radix-ui.com/primitives/docs/components/tabs for more
 * information.
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      children,
      defaultTab,
      disabled = false,
      label,
      onTabChange,
      orientation = DEFAULT_ORIENTATION,
      tab,
      tabs,
      ...props
    }: TabsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <RxTabs.Root
        ref={ref}
        activationMode="manual"
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${orientation}`,
          'flex',
          orientation === Orientations.Vertical ? '' : 'flex-col',
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          props.className,
        )}
        {...(defaultTab !== undefined ? { defaultValue: defaultTab } : {})}
        {...(tab !== undefined ? { value: tab } : {})}
        orientation={orientation}
        {...(isFunction(onTabChange) ? { onValueChange: onTabChange } : {})}
        {...omit(
          ['className', 'defaultValue', 'value', 'onValueChange'],
          props,
        )}
      >
        <RxTabs.List
          aria-label={label}
          className={cj(
            `${PREFIX}-${GROUP_NAME}__tabs`,
            'flex w-fit items-center justify-between border-normal bg-white',
            orientation === Orientations.Vertical
              ? 'h-full w-6 min-w-6 flex-col border-r-1'
              : 'h-6 min-h-6 w-full border-b-1',
          )}
          loop
        >
          <TabsContext.Provider value={{ disabled, orientation }}>
            {tabs}
          </TabsContext.Provider>
        </RxTabs.List>

        {children}
      </RxTabs.Root>
    )
  },
)
Tabs.displayName = 'Tabs'

export default Tabs
