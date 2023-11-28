import * as RxToggleGroup from '@radix-ui/react-toggle-group'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { DEFAULT_VARIANT } from '@/components/Toggle/Toggle.constants'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME } from './ToggleGoup.constants'
import type { ToggleGroupProps } from './ToggleGroup.types'
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
  children: radioButtons,
  defaultValue,
  disabled = false,
  fullWidth = false,
  onValueChange,
  orientation = 'vertical',
  type = 'single',
  value,
  variant = DEFAULT_VARIANT,
  ...props
}: ToggleGroupProps) => {
  return (
    // @ts-expect-error - I have a hard time using the proper type for the
    // `type` property.
    <RxToggleGroup.Root
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${variant}`,
        'flex max-w-full flex-col gap-3',
        'data-horizontal:flex-row data-horizontal:flex-wrap sm:data-horizontal:flex-nowrap',
        disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
        fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width w-full` : 'w-fit',
        props.className,
      )}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      disabled={disabled}
      {...(orientation !== undefined ? { orientation } : {})}
      type={type}
      value={value}
      {...(isFunction(onValueChange)
        ? {
            onValueChange: (newValue: string) => onValueChange(newValue),
          }
        : {})}
      {...omit(['className'], props)}
    >
      <ToggleGroupContext.Provider value={{ disabled, variant }}>
        {radioButtons}
      </ToggleGroupContext.Provider>
    </RxToggleGroup.Root>
  )
}
ToggleGroup.displayName = 'ToggleGroup'

export default ToggleGroup
