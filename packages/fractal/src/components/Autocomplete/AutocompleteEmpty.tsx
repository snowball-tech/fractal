import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME } from './Autocomplete.constants'
import type { AutocompleteEmptyProps } from './Autocomplete.types'

/**
 * `AutocompleteEmpty` component is used to display an empty state inside of the
 * dropdown of an `Autocomplete` component.
 */
export const AutocompleteEmpty = ({
  children,
  ...props
}: AutocompleteEmptyProps) => {
  return (
    <RxDropdownMenu.Item
      className={cn(
        `${PREFIX}-${GROUP_NAME}__empty`,
        'cursor-default rounded-sm p-2 outline-none',
        props.className,
      )}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      <Typography element="div">{children}</Typography>
    </RxDropdownMenu.Item>
  )
}
AutocompleteEmpty.displayName = 'AutocompleteEmpty'

export default AutocompleteEmpty
