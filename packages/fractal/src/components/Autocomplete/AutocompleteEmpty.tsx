'use client'

import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'

import isEmpty from 'lodash/fp/isEmpty'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'
import { onlyText } from '@/utils'

import type { AutocompleteEmptyProps } from './Autocomplete.types'

import { GROUP_NAME } from './Autocomplete.constants'

/**
 * `AutocompleteEmpty` component is used to display an empty state inside of the
 * dropdown of an `Autocomplete` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item
 * for more information.
 */
export const AutocompleteEmpty = ({
  children,
  label,
  labelElement,
  ...props
}: AutocompleteEmptyProps) => {
  const hasChildren = Boolean(children)
  if (!hasChildren && !label) {
    console.warn(
      'You must provide a `label` or `children` to the `AutocompleteEmpty` component',
    )
  }

  const textLabel = isString(label)
    ? label
    : isEmpty(label)
      ? onlyText(children)
      : onlyText(label)

  return (
    <RxDropdownMenu.Item
      aria-label={textLabel}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__empty`,
        'cursor-default rounded-sm p-2 outline-none',
        props.className,
      )}
      title={textLabel}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      <Typography
        element={
          labelElement || isString(hasChildren ? children : label)
            ? undefined
            : 'div'
        }
      >
        {hasChildren ? children : label}
      </Typography>
    </RxDropdownMenu.Item>
  )
}
AutocompleteEmpty.displayName = 'AutocompleteEmpty'

export default AutocompleteEmpty
