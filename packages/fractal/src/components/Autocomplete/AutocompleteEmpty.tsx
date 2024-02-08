'use client'

import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME } from './Autocomplete.constants'
import type { AutocompleteEmptyProps } from './Autocomplete.types'

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
  ...props
}: AutocompleteEmptyProps) => {
  const hasChildren = Boolean(children)
  if (!hasChildren && isEmpty(label)) {
    console.warn(
      'You must provide a `label` or `children` to the `AutocompleteEmpty` component',
    )
  }

  return (
    <RxDropdownMenu.Item
      aria-label={label}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__empty`,
        'cursor-default rounded-sm p-2 outline-none',
        props.className,
      )}
      title={label}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      <Typography element="div">{hasChildren ? children : label}</Typography>
    </RxDropdownMenu.Item>
  )
}
AutocompleteEmpty.displayName = 'AutocompleteEmpty'

export default AutocompleteEmpty
