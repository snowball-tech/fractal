import {
  Root,
  type PopoverContentProps as RxPopoverContentProps,
} from '@radix-ui/react-popover'
import type {
  AllHTMLAttributes,
  CSSProperties,
  ComponentProps,
  ReactNode,
} from 'react'

export type CombinedRefs = {
  container: HTMLDivElement | null
  content: HTMLDivElement | null
  trigger: HTMLElement | null
}

export interface PopoverProps extends AllHTMLAttributes<HTMLDivElement> {
  /**
   * The content of the popover.
   */
  children: ReactNode
  /**
   * The label of the small "x" close button in the top right corner of the
   * popover.
   */
  closeButtonLabel?: string
  /** Indicates if the popover is disabled. */
  disabled?: boolean
  /** Indicates if the popover should take all the available width. */
  fullWidth?: boolean
  /** Event handler called when the popover is closed. */
  onClose?: () => void
  /** Event handler called when the small "x" close button is clicked. */
  onCloseButtonClick?: () => void
  /**
   * Event handler called when an interaction is made outside of the popover.
   */
  onInteractOutside?: RxPopoverContentProps['onInteractOutside']
  /** Event handler called when the popover is opened. */
  onOpen?: () => void
  /** Event handler called when the popover is opened or closed. */
  onOpenChange?: ComponentProps<typeof Root>['onOpenChange']
  /**
   * Indicates if the popover is open.
   *
   * Can be used to force a state of the popover or when using a custom
   * (non-text) trigger.
   */
  open?: boolean
  /**
   * Options to tweak the position of the popover.
   * See https://www.radix-ui.com/primitives/docs/components/popover#content
   *
   * You can on top of that add the `className` and `style` properties to
   * customize the style of the popover.
   */
  popover?: Partial<
    Omit<RxPopoverContentProps, 'asChild' | 'onInteractOutside'> & {
      className?: string
      style?: CSSProperties
    }
  >
  /**
   * Indicates if you want to toggle the popover when clicking on the trigger
   * (if provided of course).
   *
   * If you pass this to `false`, you will have to handle the opening/closing of
   * the dropdown on your own.
   */
  toggleOnTriggerClick?: boolean
  /** The trigger of the popover. */
  trigger?: ReactNode
  /**
   * Indicates how to compute the width of the popover:
   *  - `fit`: the width of the popover will be computed in order to fit the
   *    content of the popover;
   *  - `trigger`: the width of the popover will be the same as the trigger;
   *  - `full`: the width of the popover will take as much space as available;
   *  - `auto`: the width of the popover will be computed using the best
   *    option;
   */
  width?: 'auto' | 'fit' | 'full' | 'trigger' | number
  /** Indicates if the popover should have an arrow indicator on the side. */
  withArrow?: boolean
  /** Indicates if the popover should have a small "x" close button. */
  withCloseButton?: boolean
}
