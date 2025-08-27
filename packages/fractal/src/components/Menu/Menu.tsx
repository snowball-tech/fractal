'use client'

import {
  type ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'

import isNumber from 'lodash/fp/isNumber'
import omit from 'lodash/fp/omit'

import {
  ELEVATIONS as PAPER_ELEVATIONS,
  Elevations as PaperElevations,
} from '@/components/Paper/Paper.constants'
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
      rainbow = true,
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

    const convertedElevation = isNumber(elevation)
      ? (String(elevation) as PaperElevations)
      : elevation
    let actualElevation = PAPER_ELEVATIONS[convertedElevation]
    if (
      ![
        PaperElevations.Bordered,
        PaperElevations.Elevated,
        PaperElevations.Higher,
      ].includes(actualElevation)
    ) {
      actualElevation = DEFAULT_ELEVATION
    }
    const elevationClassNames = {
      [PaperElevations.Bordered]: 'rounded-sm shadow-none',

      [PaperElevations.Elevated]: 'rounded-sm shadow-subtle ml-quarter',

      [PaperElevations.Higher]: 'rounded-sm shadow-brutal ml-quarter',
    }

    return (
      <div
        ref={containerRef}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${actualElevation}`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          'pointer-events-auto relative z-50',
          embedded ? '' : 'rounded-sm border-1 border-normal bg-white p-1',
          hasChildren ? '' : `${PREFIX}-${GROUP_NAME}__menu--empty invisible`,
          embedded ? '' : elevationClassNames[actualElevation],
          props.className,
        )}
        {...omit(['className'], props)}
      >
        <div ref={menuRef} aria-orientation={orientation} role="menu" {...menu}>
          <MenuContext.Provider
            value={{ condensed, disabled, orientation, rainbow }}
          >
            <Typography
              className={rainbow ? alternatingBgColorLightClassNames : ''}
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
