import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useContext } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Dropdown.constants'
import type { DropdownItemProps } from './Dropdown.types'
import { DropdownGroupContext } from './DropdownGroupContext'

/**
 * `Item` displays items in a dropdown.
 */
export const DropdownItem = ({
  disabled,
  icon,
  label,
  onClick,
  onSelect,
  value,
  ...props
}: DropdownItemProps) => {
  const { disabled: groupDisabled } = useContext(DropdownGroupContext)

  const isDisabled = disabled || groupDisabled

  return (
    <RxDropdownMenu.Item
      className={twMerge(
        `${PREFIX}-${GROUP_NAME}__item alternatee`,
        'flex items-center gap-1',
        'rounded-sm p-2 outline-none transition-background-color duration-300 ease-out',
        icon ? `${PREFIX}-${GROUP_NAME}__with-icon` : '',
        isDisabled
          ? `${PREFIX}-${GROUP_NAME}__item--disabled cursor-not-allowed !bg-[transparent] text-disabled`
          : 'cursor-pointer text-dark',
        props.className,
      )}
      {...(value !== undefined ? { 'data-value': value } : {})}
      disabled={isDisabled}
      {...(isFunction(onClick) ? { onSelect: onClick } : {})}
      {...(isFunction(onSelect) ? { onSelect } : {})}
      {...omit(['className', 'data-value'], props)}
      asChild
    >
      <Typography element="div">
        {icon && (
          <div
            className={twJoin(
              `${PREFIX}-${GROUP_NAME}__item__icon`,
              'max-h-3 max-w-3',
            )}
          >
            {icon}
          </div>
        )}

        {label}
      </Typography>
    </RxDropdownMenu.Item>
  )
}
DropdownItem.displayName = 'DropdownItem'

export default DropdownItem
