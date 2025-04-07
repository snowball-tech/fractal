import isNil from 'lodash/fp/isNil'
import omit from 'lodash/fp/omit'

import { cn } from '@/styles/helpers'

import type { TooltipProps } from './Tooltip.types'

import { Popover } from '../Popover'
import { Typography } from '../Typography'

/**
 * `Tooltip` component allow to wrap anything that should display an small
 * tooltip when hovered (or click).
 */
export const Tooltip = ({
  align = 'center',
  children,
  content,
  disabled = false,
  fullWidth = false,
  onDisplayChange,
  onHide,
  onInteractOutside,
  onShow,
  show,
  side = 'top',
  toggleOnTriggerClick = false,
  toggleOnTriggerHover = true,
  tooltip = {},
  withArrow = true,
  wrapInButton = false,
  ...props
}: TooltipProps) => {
  const hasTrigger = Boolean(children)
  const hasContent = Boolean(content)

  if (!hasTrigger || !hasContent) {
    return false
  }

  return (
    <Popover
      align={align}
      disabled={disabled}
      elevation="1"
      fullWidth={fullWidth}
      modal={false}
      open={!isNil(show) ? show : undefined}
      popover={{
        ...omit(['className'], tooltip),
        className: cn(
          'px-1 py-0 rounded-xs bg-dark text-light',
          tooltip.className,
        ),
      }}
      side={side}
      toggleOnTriggerClick={toggleOnTriggerClick}
      toggleOnTriggerHover={toggleOnTriggerHover}
      trigger={children}
      triggerAsButton={wrapInButton}
      width="fit"
      withArrow={withArrow}
      withCloseButton={false}
      withScroll={false}
      onClose={onHide}
      onInteractOutside={onInteractOutside}
      onOpen={onShow}
      onOpenChange={onDisplayChange}
      {...omit(
        ['width', 'elevation', 'modal', 'open', 'popover', 'withCloseButton'],
        props,
      )}
    >
      <Typography element="div" variant="caption-median">
        {content}
      </Typography>
    </Popover>
  )
}
Tooltip.displayName = 'Tooltip'

export default Tooltip
