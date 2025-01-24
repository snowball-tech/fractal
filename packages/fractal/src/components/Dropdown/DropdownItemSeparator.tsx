import * as RxSelect from '@radix-ui/react-select'

import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME } from './Dropdown.constants'
import { DropdownItemSeparatorProps } from './Dropdown.types'

/**
 * `ItemSeparator` component is used to display a separator between groups or
 * items in a dropdown.
 *
 * See https://www.radix-ui.com/primitives/docs/components/select#separator for
 * more information.
 */
export default function DropdownItemSeparator({
  ...props
}: DropdownItemSeparatorProps) {
  return (
    <RxSelect.Separator
      className={cn(
        `${PREFIX}-${GROUP_NAME}__separator`,
        'bg-separator mx-2 my-1 h-px',
        props.className,
      )}
      {...omit(['className'], props)}
    />
  )
}
