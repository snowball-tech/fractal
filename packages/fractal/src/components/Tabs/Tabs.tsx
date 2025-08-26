'use client'

import * as RxTabs from '@radix-ui/react-tabs'

import { type ForwardedRef, forwardRef } from 'react'

import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'
import { extendChildren, hasChildWithProps } from '@/utils'

import type { TabsProps } from './Tabs.types'

import Tab from './Tab'
import {
  DEFAULT_ORIENTATION,
  DEFAULT_POSITION,
  DEFAULT_VARIANT,
  GROUP_NAME,
  Orientations,
  Positions,
  Variants,
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
      barClassName,
      children,
      defaultTab,
      disabled = false,
      fullWidth = true,
      label,
      large = false,
      onTabChange,
      orientation = DEFAULT_ORIENTATION,
      tab,
      tabs,
      tabsPosition = DEFAULT_POSITION,
      variant = DEFAULT_VARIANT,
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
          `${PREFIX}-${GROUP_NAME}--${variant}`,
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
          className={cn(
            `${PREFIX}-${GROUP_NAME}__tabs`,
            fullWidth ? `${PREFIX}-${GROUP_NAME}__tabs--full-width` : '',
            shouldBeLarge ? `${PREFIX}-${GROUP_NAME}__tabs--large` : '',
            'flex items-center justify-between border-normal [z-index:1]',
            variant === Variants.Plain ? 'bg-white' : 'bg-transparent',
            orientation === Orientations.Vertical
              ? 'w-6 min-w-6 flex-col'
              : 'max-h-10',
            fullWidth
              ? orientation === Orientations.Horizontal
                ? 'h-fit w-full'
                : 'h-full w-fit'
              : 'h-fit w-fit',
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
            barClassName,
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
