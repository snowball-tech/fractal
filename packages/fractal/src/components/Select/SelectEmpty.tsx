import * as RxSelect from '@radix-ui/react-select'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME } from './Select.constants'
import type { SelectEmptyProps } from './Select.types'

/**
 * `SelectEmpty` component is used to display an empty state inside of the
 * dropdown of an `Select` component.
 */
export const SelectEmpty = ({
  children,
  value = 'empty-value',
  ...props
}: SelectEmptyProps) => {
  return (
    <RxSelect.Item
      className={cn(
        `${PREFIX}-${GROUP_NAME}__empty`,
        'pointer-events-none flex cursor-default items-center gap-1 rounded-sm p-2 outline-none',
        props.className,
      )}
      value={value || 'empty-value'}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      <RxSelect.ItemText asChild>
        <Typography element="div">{children}</Typography>
      </RxSelect.ItemText>

      <RxSelect.ItemIndicator />
    </RxSelect.Item>
  )
}
SelectEmpty.displayName = 'SelectEmpty'

export default SelectEmpty
