'use client'

import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cn } from '@/styles/helpers'

import { DEFAULT_ORIENTATION, GROUP_NAME } from './Menu.constants'
import type { MenuProps } from './Menu.types'

/**
 * `Menu` component displays a menu menu when a trigger is clicked.
 *
 * See https://www.radix-ui.com/primitives/docs/components/menu-menu for
 * more information.
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      children,
      disabled = false,
      fullWidth = false,
      orientation = DEFAULT_ORIENTATION,
      ...props
    }: MenuProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          props.className,
        )}
        {...omit(['className'], props)}
      >
        <div aria-orientation={orientation} role="menu">
          <Typography
            className={alternatingBgColorLightClassNames}
            element="div"
            variant="body-1"
          >
            {children}
          </Typography>
        </div>
      </div>
    )
  },
)
Menu.displayName = 'Menu'

export default Menu
