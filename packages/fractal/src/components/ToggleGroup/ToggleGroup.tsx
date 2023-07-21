import * as RxToggleGroup from '@radix-ui/react-toggle-group'
import { cx } from '@snowball-tech/fractal-panda/css'
import { toggleGroup } from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT } from '../Toggle/Toggle.constants'
import { GROUP_NAME } from './ToggleGroup.recipe'
import type { ToggleGroupProps } from './ToggleGroup.types'
import { ToggleGroupVariantContext } from './ToggleGroupVariantContext'

/**
 * `ToggleGroup` component is used to group multiple `Toggle` components
 * together.
 *
 * It can be used in either "one toggle toggled at a time" mode or "multiple
 * toggles toggled at the same time" mode.
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
  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}-group`,
    toggleGroup(),
    `variant-${variant}`,
    props.className,
    disabled ? 'disabled' : '',
    fullWidth ? 'full-width' : '',
  )

  return (
    // @ts-expect-error - I have a hard time using the proper type for the
    // `type` property.
    <RxToggleGroup.Root
      className={groupClassNames}
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
      <ToggleGroupVariantContext.Provider value={variant}>
        {radioButtons}
      </ToggleGroupVariantContext.Provider>
    </RxToggleGroup.Root>
  )
}
ToggleGroup.displayName = 'ToggleGroup'

export default ToggleGroup
