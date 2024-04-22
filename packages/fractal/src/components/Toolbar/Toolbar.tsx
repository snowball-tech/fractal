'use client'

import * as RxToolbar from '@radix-ui/react-toolbar'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import { Paper } from '@/components/Paper/Paper'
import { Elevations } from '@/components/Paper/Paper.constants'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import {
  DEFAULT_ELEVATION,
  DEFAULT_ORIENTATION,
  GROUP_NAME,
  Orientations,
} from './Toolbar.constants'
import type { ToolbarProps } from './Toolbar.types'
import { ToolbarContext } from './ToolbarContext'

/**
 * `Toolbar` component displays a bar with a collection of tools.
 *
 * See https://www.radix-ui.com/primitives/docs/components/toolbar for more
 * information.
 */
export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  (
    {
      children,
      disabled = false,
      elevation = DEFAULT_ELEVATION,
      fullWidth = false,
      orientation = DEFAULT_ORIENTATION,
      ...props
    }: ToolbarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Paper
        className={cj(
          `${PREFIX}-${GROUP_NAME}__wrapper`,
          `${PREFIX}-${GROUP_NAME}__wrapper--${orientation}`,
          'h-5 max-h-5 min-h-5 px-half py-0',
          fullWidth
            ? `${PREFIX}-${GROUP_NAME}__wrapper--full-width w-full`
            : 'w-fit',
          disabled ? `${PREFIX}-${GROUP_NAME}__wrapper--disabled` : '',
        )}
        elevation={elevation}
      >
        <RxToolbar.Root
          ref={ref}
          className={cn(
            `${PREFIX}-${GROUP_NAME}`,
            `${PREFIX}-${GROUP_NAME}--${orientation}`,
            'flex items-center gap-1 p-1',
            elevation === Elevations.Higher ? 'rounded-full' : 'rounded-sm',
            orientation === Orientations.Horizontal ? 'flex-row' : 'flex-col',
            fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width w-full` : 'w-fit',
            disabled
              ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed bg-disabled-light text-disabled`
              : 'cursor-default',
            props.className,
          )}
          {...(orientation === undefined ? {} : { orientation })}
          {...omit(['className'], props)}
        >
          <ToolbarContext.Provider value={{ disabled, orientation }}>
            {children}
          </ToolbarContext.Provider>
        </RxToolbar.Root>
      </Paper>
    )
  },
)
Toolbar.displayName = 'Toolbar'

export default Toolbar
