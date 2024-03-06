import * as RxToolbar from '@radix-ui/react-toolbar'
import omit from 'lodash/fp/omit'
import { useContext } from 'react'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { GROUP_NAME, Orientations } from './Toolbar.constants'
import { ToolbarSeparatorProps } from './Toolbar.types'
import { ToolbarContext } from './ToolbarContext'

/**
 * `ToolbarSeparator` component is used to display a separator between groups or
 * items in a toolbar.
 */
export default function ToolbarSeparator({ ...props }: ToolbarSeparatorProps) {
  const { orientation } = useContext(ToolbarContext)

  return (
    <RxToolbar.Separator
      className={cn(
        `${PREFIX}-${GROUP_NAME}__separator`,
        'bg-separator',
        orientation === Orientations.Horizontal ? 'h-full w-px' : 'h-px w-full',
        props.className,
      )}
      {...omit(['className'], props)}
    />
  )
}
ToolbarSeparator.displayName = 'ToolbarSeparator'
