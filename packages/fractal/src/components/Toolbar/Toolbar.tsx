import * as RxToolbar from '@radix-ui/react-toolbar'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import {
  DEFAULT_ORIENTATION,
  DEFAULT_VARIANT,
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
      fullWidth = false,
      orientation = DEFAULT_ORIENTATION,
      variant = DEFAULT_VARIANT,
      ...props
    }: ToolbarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <RxToolbar.Root
        ref={ref}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${orientation}`,
          'flex items-center gap-1 rounded-sm border-1 border-grey-50',
          orientation === Orientations.Horizontal
            ? 'h-7 flex-row px-half'
            : 'w-7 flex-col p-half',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width w-full` : 'w-fit',
          disabled
            ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed bg-disabled-light text-disabled`
            : 'cursor-default bg-white',
          props.className,
        )}
        {...(orientation !== undefined ? { orientation } : {})}
        {...omit(['className'], props)}
      >
        <ToolbarContext.Provider value={{ disabled, orientation, variant }}>
          {children}
        </ToolbarContext.Provider>
      </RxToolbar.Root>
    )
  },
)
Toolbar.displayName = 'Toolbar'

export default Toolbar
