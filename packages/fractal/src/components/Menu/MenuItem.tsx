import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'
import { useContext } from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Menu.constants'
import type { MenuItemProps } from './Menu.types'
import { MenuGroupContext } from './MenuGroupContext'

/**
 * `Item` displays items in a menu.
 *
 * See https://www.radix-ui.com/primitives/docs/components/menu-menu#item
 * for more information.
 */
export const MenuItem = ({
  active = false,
  children,
  disabled,
  href,
  icon,
  label,
  target,
  ...props
}: MenuItemProps) => {
  const hasChildren = Boolean(children)
  if (!hasChildren && isEmpty(label)) {
    console.warn(
      'You must provide a `label` or `children` to the `MenuItem` component',
    )
  }

  const { disabled: groupDisabled } = useContext(MenuGroupContext)

  const isDisabled = disabled || groupDisabled

  const isLink = !isEmpty(href)

  return (
    <div
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item`,
        'alternatee',
        'flex flex-row items-center gap-1',
        'rounded-sm p-2 outline-none transition-background-color duration-300 ease-out',
        icon ? `${PREFIX}-${GROUP_NAME}__with-icon` : '',
        isDisabled
          ? `${PREFIX}-${GROUP_NAME}__item--disabled pointer-events-none cursor-not-allowed !bg-transparent text-disabled`
          : 'cursor-pointer text-dark',
        isLink ? `${PREFIX}-${GROUP_NAME}__item__link no-underline` : '',
        props.className,
      )}
      {...(active ? { 'data-highlighted': active } : {})}
      role="menuitem"
      tabIndex={-1}
      {...(isLink ? { href, target } : {})}
      {...omit(['className', 'data-value'], props)}
      aria-label={label}
      title={label}
    >
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

      <Typography element={isLink ? 'a' : 'div'}>
        {hasChildren ? children : label}
      </Typography>
    </div>
  )
}
MenuItem.displayName = 'MenuItem'

export default MenuItem
