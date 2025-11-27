'use client'

import * as RxSelect from '@radix-ui/react-select'

import isEmpty from 'lodash/fp/isEmpty'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'
import { onlyText } from '@/utils'

import type { SelectEmptyProps } from './Select.types'

import { GROUP_NAME } from './Select.constants'

/**
 * `SelectEmpty` component is used to display an empty state inside of the
 * dropdown of an `Select` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/select#item for more
 * information.
 */
export const SelectEmpty = ({
  children,
  label,
  labelElement,
  value = 'empty-value',
  ...props
}: SelectEmptyProps) => {
  const hasChildren = Boolean(children)
  if (!hasChildren && !label) {
    console.warn(
      'You must provide a `label` or `children` to the `SelectEmpty` component',
    )
  }

  const textLabel = isString(label)
    ? label
    : isEmpty(label)
      ? onlyText(children)
      : onlyText(label)

  return (
    <RxSelect.Item
      aria-label={textLabel}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__empty`,
        'pointer-events-none flex cursor-default items-center gap-1 rounded-sm p-2 outline-none',
        props.className,
      )}
      title={textLabel}
      value={value || 'empty-value'}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      <RxSelect.ItemText asChild>
        <Typography
          element={
            labelElement ||
            (isString(hasChildren ? children : label) ? undefined : 'div')
          }
        >
          {hasChildren ? children : label}
        </Typography>
      </RxSelect.ItemText>

      <RxSelect.ItemIndicator />
    </RxSelect.Item>
  )
}
SelectEmpty.displayName = 'SelectEmpty'

export default SelectEmpty
