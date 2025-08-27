'use client'

import * as RxToolbar from '@radix-ui/react-toolbar'

import { useContext } from 'react'

import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME, Orientations } from './Toolbar.constants'
import { ToolbarSeparatorProps } from './Toolbar.types'
import { ToolbarContext } from './ToolbarContext'

/**
 * `ToolbarSeparator` component is used to display a separator between groups or
 * items in a toolbar.
 */
export function ToolbarSeparator({ ...props }: ToolbarSeparatorProps) {
  const { orientation } = useContext(ToolbarContext)

  return (
    <RxToolbar.Separator
      className={cn(
        `${PREFIX}-${GROUP_NAME}__separator`,
        `${PREFIX}-${GROUP_NAME}__separator--${orientation}`,
        'bg-separator',
        orientation === Orientations.Horizontal ? 'h-full w-px' : 'h-px w-full',
        props.className,
      )}
      {...omit(['className'], props)}
    />
  )
}
ToolbarSeparator.displayName = 'ToolbarSeparator'

export default ToolbarSeparator
