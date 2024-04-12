import * as RxSelect from '@radix-ui/react-select'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME } from './Select.constants'
import type { SelectEmptyProps } from './Select.types'

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
  value = 'empty-value',
  ...props
}: SelectEmptyProps) => {
  const hasChildren = Boolean(children)
  if (!hasChildren && isEmpty(label)) {
    console.warn(
      'You must provide a `label` or `children` to the `SelectEmpty` component',
    )
  }

  return (
    <RxSelect.Item
      aria-label={label}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__empty`,
        'pointer-events-none flex cursor-default items-center gap-1 rounded-sm p-2 outline-none',
        props.className,
      )}
      title={label}
      value={value || 'empty-value'}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      <RxSelect.ItemText asChild>
        <Typography element="div">{hasChildren ? children : label}</Typography>
      </RxSelect.ItemText>

      <RxSelect.ItemIndicator />
    </RxSelect.Item>
  )
}
SelectEmpty.displayName = 'SelectEmpty'

export default SelectEmpty
