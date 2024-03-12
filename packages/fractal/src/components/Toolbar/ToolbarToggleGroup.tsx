'use client'

import * as RxToolbar from '@radix-ui/react-toolbar'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useContext } from 'react'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME, Orientations } from './Toolbar.constants'
import type { ToolbarToggleGroupProps } from './Toolbar.types'
import { ToolbarContext } from './ToolbarContext'
import { ToolbarToggleGroupContext } from './ToolbarToggleGroupContext'

/**
 * `ToolbarToggleGroup` component is used to group multiple `ToolbarToggle`
 * components together inside of a `Toolbar`.
 *
 * It can be used in either "one toggle toggled at a time" mode or "multiple
 * toggles toggled at the same time" mode.
 *
 * See https://www.radix-ui.com/primitives/docs/components/toolbar#togglegroup for more
 * information.
 */
export const ToolbarToggleGroup = ({
  children,
  defaultValue,
  disabled = false,
  label,
  multiple = false,
  onValueChange,
  value,
  ...props
}: ToolbarToggleGroupProps) => {
  const {
    disabled: toolbarDisabled,
    orientation,
    variant,
  } = useContext(ToolbarContext)

  const isDisabled = toolbarDisabled || disabled

  return (
    // @ts-expect-error - I have a hard time using the proper type for the
    // `type` property.
    <RxToolbar.ToggleGroup
      aria-label={label}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__toggle-group`,
        `${PREFIX}-${GROUP_NAME}__toggle-group--${variant}`,
        `${PREFIX}-${GROUP_NAME}__toggle-group--${orientation}`,
        'flex w-fit max-w-full',
        orientation === Orientations.Horizontal
          ? 'flex-row items-center'
          : 'flex-col justify-center',
        isDisabled ? `${PREFIX}-${GROUP_NAME}__toggle-group--disabled` : '',
        props.className,
      )}
      title={label}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      disabled={isDisabled}
      type={multiple ? 'multiple' : 'single'}
      value={value}
      {...(isFunction(onValueChange)
        ? {
            onValueChange: (newValue: string) => onValueChange(newValue),
          }
        : {})}
      {...omit(['className'], props)}
    >
      <ToolbarToggleGroupContext.Provider value={{ disabled }}>
        {children}
      </ToolbarToggleGroupContext.Provider>
    </RxToolbar.ToggleGroup>
  )
}
ToolbarToggleGroup.displayName = 'ToolbarToggleGroup'

export default ToolbarToggleGroup
