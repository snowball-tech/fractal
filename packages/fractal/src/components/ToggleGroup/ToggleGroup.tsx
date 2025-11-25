'use client'

import * as RxToggleGroup from '@radix-ui/react-toggle-group'

import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import type { ToggleGroupProps } from './ToggleGroup.types'

import { DEFAULT_VARIANT } from '../Toggle/Toggle.constants'
import { GROUP_NAME } from './ToggleGroup.constants'
import { ToggleGroupContext } from './ToggleGroupContext'

/**
 * `ToggleGroup` component is used to group multiple `Toggle` components
 * together.
 *
 * It can be used in either "one toggle toggled at a time" mode or "multiple
 * toggles toggled at the same time" mode.
 *
 * See https://www.radix-ui.com/primitives/docs/components/toggle-group for more
 * information.
 */
export const ToggleGroup = ({
  children,
  defaultValue,
  disabled = false,
  fullWidth = false,
  grouped = false,
  label,
  multiple = false,
  onValueChange,
  orientation = 'vertical',
  value,
  variant = DEFAULT_VARIANT,
  ...props
}: ToggleGroupProps) => (
  // @ts-expect-error - I have a hard time using the proper type for the
  // `type` property.
  <RxToggleGroup.Root
    aria-label={label}
    className={cn(
      `${PREFIX}-${GROUP_NAME}`,
      `${PREFIX}-${GROUP_NAME}--${variant}`,
      grouped ? `${PREFIX}-${GROUP_NAME}--grouped` : '',
      grouped
        ? orientation === 'horizontal'
          ? '[&>button:first-child]:rounded-l-full [&>button:last-child]:rounded-r-full'
          : 'justify-stretch [&>button:first-child]:rounded-t-full [&>button:last-child]:rounded-b-full'
        : 'gap-3',
      'flex max-w-full flex-col',
      'data-horizontal:flex-row data-horizontal:flex-wrap sm:data-horizontal:flex-nowrap',
      disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
      fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width w-full` : 'w-fit',
      props.className,
    )}
    title={label}
    {...(defaultValue === undefined ? {} : { defaultValue })}
    disabled={disabled}
    {...(orientation === undefined ? {} : { orientation })}
    type={multiple ? 'multiple' : 'single'}
    value={value}
    {...(isFunction(onValueChange)
      ? {
          onValueChange: (newValue: string) => onValueChange(newValue),
        }
      : {})}
    {...omit(['className'], props)}
  >
    <ToggleGroupContext.Provider
      value={{ disabled, grouped, orientation, variant }}
    >
      {children}
    </ToggleGroupContext.Provider>
  </RxToggleGroup.Root>
)
ToggleGroup.displayName = 'ToggleGroup'

export default ToggleGroup
