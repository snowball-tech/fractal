'use client'

import * as RxTabs from '@radix-ui/react-tabs'

import { type ForwardedRef, forwardRef } from 'react'

import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'
import { extendChildren, hasChildWithProps } from '@/utils'

import type { TabsProps } from './Tabs.types'

import Tab from './Tab'
import {
  DEFAULT_ORIENTATION,
  DEFAULT_POSITION,
  GROUP_NAME,
  Orientations,
  Positions,
} from './Tabs.constants'

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
      large = false,
      onTabChange,
      orientation = DEFAULT_ORIENTATION,
      tab,
      tabs,
      tabsPosition = DEFAULT_POSITION,
      ...props
    }: TabsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const shouldBeLarge =
      large ||
      hasChildWithProps(tabs, Tab, 'large') ||
      hasChildWithProps(tabs, Tab, ['icon', 'label'], ['iconOnly'])

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
        {...(defaultTab === undefined ? {} : { defaultValue: defaultTab })}
        {...(tab === undefined ? {} : { value: tab })}
        orientation={orientation}
        {...(isFunction(onTabChange) ? { onValueChange: onTabChange } : {})}
        {...omit(
          ['className', 'defaultValue', 'value', 'onValueChange'],
          props,
        )}
      >
        {tabsPosition === Positions.End && children}

        <RxTabs.List
          aria-label={label}
          className={cj(
            `${PREFIX}-${GROUP_NAME}__tabs`,
            shouldBeLarge ? `${PREFIX}-${GROUP_NAME}__tabs--large` : '',
            'flex w-fit items-center justify-between border-normal bg-white [z-index:1]',
            orientation === Orientations.Vertical
              ? 'h-full w-6 min-w-6 flex-col'
              : 'max-h-10 w-full',
            !shouldBeLarge && orientation === Orientations.Horizontal
              ? 'min-h-6'
              : '',
            shouldBeLarge && orientation === Orientations.Horizontal
              ? 'min-h-10'
              : '',
            tabsPosition === Positions.Start
              ? orientation === Orientations.Horizontal
                ? 'border-b-1'
                : 'border-r-1'
              : orientation === Orientations.Horizontal
                ? 'border-t-1'
                : 'border-l-1',
          )}
          loop
        >
          {extendChildren(
            tabs,
            (childProps) => ({
              disabled: disabled || childProps.disabled,
              large: shouldBeLarge || childProps.large,
              orientation,
              tabsPosition,
            }),
            'Tab',
          )}
        </RxTabs.List>

        {tabsPosition === Positions.Start && children}
      </RxTabs.Root>
    )
  },
)
Tabs.displayName = 'Tabs'

export default Tabs
