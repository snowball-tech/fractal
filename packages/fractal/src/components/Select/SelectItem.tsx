'use client'

import * as RxSelect from '@radix-ui/react-select'

import { useContext } from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import type { SelectItemProps } from './Select.types'

import { GROUP_NAME } from './Select.constants'
import { SelectContext } from './SelectContext'
import { SelectGroupContext } from './SelectGroupContext'

/**
 * `SelectItem` component is used to display choices inside of the dropdown of a
 * `Select` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/select#item for more
 * information.
 */
export const SelectItem = ({
  children,
  disabled = false,
  label,
  rainbow = true,
  value,
  ...props
}: SelectItemProps) => {
  const hasChildren = Boolean(children)
  if (!hasChildren && isEmpty(label)) {
    console.warn(
      'You must provide a `label` or `children` to the `SelectItem` component',
    )
  }

  const { disabled: groupDisabled, rainbow: groupRainbow } =
    useContext(SelectGroupContext)
  const { disabled: selectDisabled, rainbow: selectRainbow } =
    useContext(SelectContext)

  const isDisabled = disabled || groupDisabled || selectDisabled
  const isRainbow = rainbow && groupRainbow && selectRainbow

  return (
    <RxSelect.Item
      aria-label={label}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item`,
        isRainbow ? 'alternatee' : '',
        'flex select-none items-center gap-1 rounded-sm p-2 outline-none transition-background-color duration-300 ease-out',
        isDisabled
          ? `${PREFIX}-${GROUP_NAME}__item--disabled cursor-not-allowed !bg-transparent text-disabled`
          : 'cursor-pointer text-dark',
        !isDisabled && !isRainbow ? 'hover:bg-decorative-pink-90' : '',
        props.className,
      )}
      disabled={isDisabled}
      title={label}
      value={value}
      {...omit(['className'], props)}
    >
      <RxSelect.ItemText asChild>
        <Typography element="div">{hasChildren ? children : label}</Typography>
      </RxSelect.ItemText>

      <RxSelect.ItemIndicator />
    </RxSelect.Item>
  )
}
SelectItem.displayName = 'SelectItem'

export default SelectItem
