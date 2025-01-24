'use client'

import {
  type ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'

import omit from 'lodash/fp/omit'

import { Elevations } from '@/components/Paper/Paper.constants'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cn } from '@/styles/helpers'

import type { CombinedRefs, MenuProps } from './Menu.types'

import {
  DEFAULT_ELEVATION,
  DEFAULT_ORIENTATION,
  GROUP_NAME,
} from './Menu.constants'
import { MenuContext } from './MenuContext'

/**
 * `Menu` component displays a menu menu when a trigger is clicked.
 */
export const Menu = forwardRef<CombinedRefs, MenuProps>(
  (
    {
      children,
      condensed = false,
      disabled = false,
      elevation = DEFAULT_ELEVATION,
      embedded = false,
      fullWidth = false,
      menu = {},
      orientation = DEFAULT_ORIENTATION,
      ...props
    }: MenuProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      get container() {
        return containerRef?.current ?? null
      },

      get menu() {
        return menuRef?.current ?? null
      },
    }))

    const hasChildren = Boolean(children)

    const elevationClassNames = {
      [Elevations.Bordered]: 'rounded-sm shadow-none',

      [Elevations.Elevated]: 'rounded-sm shadow-subtle ml-quarter',

      [Elevations.Higher]: 'rounded-sm shadow-brutal ml-quarter',
    }

    return (
      <div
        ref={containerRef}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${elevation}`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          'pointer-events-auto relative z-50',
          embedded ? '' : 'border-normal rounded-sm border-1 bg-white p-1',
          hasChildren ? '' : `${PREFIX}-${GROUP_NAME}__menu--empty invisible`,
          embedded ? '' : elevationClassNames[elevation],
          props.className,
        )}
        {...omit(['className'], props)}
      >
        <div ref={menuRef} aria-orientation={orientation} role="menu" {...menu}>
          <MenuContext.Provider value={{ condensed, disabled, orientation }}>
            <Typography
              className={alternatingBgColorLightClassNames}
              element="div"
              variant="body-1"
            >
              {children}
            </Typography>
          </MenuContext.Provider>
        </div>
      </div>
    )
  },
)
Menu.displayName = 'Menu'

export default Menu
