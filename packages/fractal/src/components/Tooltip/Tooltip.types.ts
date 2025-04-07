import type { AllHTMLAttributes, ReactNode } from 'react'

import type { PopoverProps } from '../Popover'

export interface TooltipProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * The trigger of the tooltip (i.e. the thing that should display the tooltip
   * when hovered/clicked.
   */
  children: PopoverProps['trigger']
  /** The content of the tooltip (i.e. the thing displayed in it). */
  content: ReactNode
  /** Indicates where to align the tooltip relative to the trigger. */
  align?: PopoverProps['align']
  /** Indicates if the tooltip is disabled (i.e. won't be displayed). */
  disabled?: PopoverProps['disabled']
  /** Indicates if the tooltip wrapper should take all the available width. */
  fullWidth?: boolean
  /**
   * Indicates if the tooltip is shown.
   *
   * Can be used to force the display of the tooltip or when using a custom
   * (non-text) trigger.
   */
  show?: PopoverProps['open']
  /** The preferred side of the trigger to render the tooltip. */
  side?: PopoverProps['side']
  /**
   * Indicates if you want to toggle the tooltip when clicking on the trigger
   * (if provided of course).
   */
  toggleOnTriggerClick?: PopoverProps['toggleOnTriggerClick']
  /**
   * Indicates if you want to toggle the tooltip when hovering on the trigger
   * (if provided of course).
   *
   * If you pass this to `false`, you will have to handle the opening/closing of
   * the tooltip on your own or use `toggleOnTriggerClick`.
   */
  toggleOnTriggerHover?: PopoverProps['toggleOnTriggerHover']
  /**
   * Options to tweak the position of the tooltip.
   * See https://www.radix-ui.com/primitives/docs/components/popover#content
   *
   * You can on top of that add the `className` and `style` properties to
   * customize the style of the tooltip.
   */
  tooltip?: PopoverProps['popover']
  /** The trigger of the tooltip. */
  trigger?: PopoverProps['trigger']
  /** Indicates if the tooltip should have an arrow indicator on the side. */
  withArrow?: PopoverProps['withArrow']
  /**
   * Indicates if you want the trigger to be wrapped in a `button` element.
   */
  wrapInButton?: PopoverProps['triggerAsButton']
  /** Event handler called when the tooltip is shown or hidden. */
  onDisplayChange?: PopoverProps['onOpenChange']
  /** Event handler called when the tooltip is hidden. */
  onHide?: PopoverProps['onClose']
  /**
   * Event handler called when an interaction is made outside of the tooltip.
   */
  onInteractOutside?: PopoverProps['onInteractOutside']
  /** Event handler called when the tooltip is shown. */
  onShow?: PopoverProps['onOpen']
}
