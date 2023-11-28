import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useContext } from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Dropdown.constants'
import type { DropdownItemProps } from './Dropdown.types'
import { DropdownGroupContext } from './DropdownGroupContext'

/**
 * `Item` displays items in a dropdown.
 *
 * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item
 * for more information.
 */
export const DropdownItem = ({
  disabled,
  href,
  icon,
  label,
  onClick,
  onSelect,
  target,
  value,
  ...props
}: DropdownItemProps) => {
  const { disabled: groupDisabled } = useContext(DropdownGroupContext)

  const isDisabled = disabled || groupDisabled

  const isLink = !isEmpty(href)

  return (
    <RxDropdownMenu.Item
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item`,
        'alternatee',
        'flex items-center gap-1',
        'rounded-sm p-2 outline-none transition-background-color duration-300 ease-out',
        icon ? `${PREFIX}-${GROUP_NAME}__with-icon` : '',
        isDisabled
          ? `${PREFIX}-${GROUP_NAME}__item--disabled cursor-not-allowed !bg-transparent text-disabled`
          : 'cursor-pointer text-dark',
        isLink ? `${PREFIX}-${GROUP_NAME}__item__link no-underline` : '',
        props.className,
      )}
      {...(isLink ? { href, target } : {})}
      {...(value !== undefined ? { 'data-value': value } : {})}
      disabled={isDisabled}
      {...(isFunction(onClick) ? { onSelect: onClick } : {})}
      {...(isFunction(onSelect) ? { onSelect } : {})}
      {...omit(['className', 'data-value'], props)}
      asChild
    >
      <Typography element={isLink ? 'a' : 'div'}>
        {icon && (
          <div
            className={cj(
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
