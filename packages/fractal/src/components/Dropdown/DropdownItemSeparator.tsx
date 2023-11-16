import * as RxSelect from '@radix-ui/react-select'
import omit from 'lodash/fp/omit'
import { twMerge } from 'tailwind-merge'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Dropdown.constants'
import { DropdownItemSeparatorProps } from './Dropdown.types'

/**
 * `ItemSeparator` component is used to display a separator between groups or
 * items in a dropdown.
 */
export default function DropdownItemSeparator({
  ...props
}: DropdownItemSeparatorProps) {
  return (
    <RxSelect.Separator
      className={twMerge(
        `${PREFIX}-${GROUP_NAME}__separator`,
        'mx-2 my-1 h-[1px] bg-separator',
        props.className,
      )}
      {...omit(['className'], props)}
    />
  )
}
