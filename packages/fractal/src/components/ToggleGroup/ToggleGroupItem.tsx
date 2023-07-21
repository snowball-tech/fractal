import * as RxToggleGroup from '@radix-ui/react-toggle-group'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  toggle,
  toggleLabel,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef, useContext } from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './ToggleGroup.recipe'
import type { ToggleGroupItemProps } from './ToggleGroup.types'
import { ToggleGroupVariantContext } from './ToggleGroupVariantContext'

/**
 * `ToggleGroupItem` component is used to allow the user to make a single choice
 * amongst a group of multiple choices.
 *
 * You must use this component with the `InputRadioGroup` component.
 */
export const ToggleGroupItem = forwardRef<
  HTMLButtonElement,
  ToggleGroupItemProps
>(
  (
    {
      disabled = false,
      fullWidth = false,
      icon,
      label,
      value,
      ...props
    }: ToggleGroupItemProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const variant = useContext(ToggleGroupVariantContext)

    const groupClassNames = cx(
      `${PREFIX}-${GROUP_NAME}-item`,
      toggle({ variant }),
      props.className,
      disabled ? 'disabled' : '',
      fullWidth ? 'full-width' : '',
      !isEmpty(icon) ? `addendum prefix` : '',
    )

    return (
      <RxToggleGroup.Item
        ref={ref}
        className={groupClassNames}
        disabled={disabled}
        value={value}
        {...omit(['className'], props)}
      >
        {icon}

        <span className={cx(toggleLabel(), typography({ variant: 'body-1' }))}>
          {label}
        </span>
      </RxToggleGroup.Item>
    )
  },
)
ToggleGroupItem.displayName = 'ToggleGroupItem'

export default ToggleGroupItem
