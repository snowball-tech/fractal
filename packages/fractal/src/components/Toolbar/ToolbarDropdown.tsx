'use client'

import { type ForwardedRef, forwardRef, useContext, useState } from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { Dropdown, DropdownElevations } from '@/components/Dropdown'
import { CombinedRefs as DropdownCombinedRefs } from '@/components/Dropdown/Dropdown.types'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import type { ToolbarDropdownProps } from './Toolbar.types'

import { GROUP_NAME } from './Toolbar.constants'
import ToolbarButton from './ToolbarButton'
import { ToolbarContext } from './ToolbarContext'

/**
 * `ToolbarDropdown` component is used to display a dropdown with a
 * `ToolbarButton` trigger.
 */
export const ToolbarDropdown = forwardRef<
  DropdownCombinedRefs,
  ToolbarDropdownProps
>(
  (
    {
      active = false,
      children,
      disabled = false,
      elevation = DropdownElevations.Elevated,
      icon,
      iconOnly = false,
      iconPosition = 'left',
      label,
      ...props
    }: ToolbarDropdownProps,
    ref: ForwardedRef<DropdownCombinedRefs>,
  ) => {
    if (isEmpty(label)) {
      console.warn(
        'You must provide a `label` to the `ToolbarDropdown` component',
      )
    }

    const { disabled: toolbarDisabled } = useContext(ToolbarContext)

    const isDisabled = disabled || toolbarDisabled

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuOpenChange = (open: boolean) => {
      if (isFunction(props.onMenuOpenChange)) {
        props.onMenuOpenChange(open)
      }

      setIsOpen(open)
    }

    return (
      <Dropdown
        ref={ref}
        aria-label={label}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__dropdown`,
          'group h-3 max-h-3 rounded-xs',
          isOpen && !isDisabled
            ? 'text-dark'
            : isDisabled
              ? 'text-disabled'
              : 'text-placeholder',
          isOpen && !isDisabled ? 'bg-decorative-pink-90' : '',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__dropdown--disabled`
            : 'hover:bg-decorative-pink-90 hover:text-dark',
        )}
        condensed
        disabled={isDisabled}
        dropdown={{
          className:
            'data-[side="bottom"]:mt-2 data-[side="top"]:mb-2 data-[side="right"]:ml-[calc(theme(spacing.2)+theme(spacing.half))] data-[side="left"]:mr-[calc(theme(spacing.2)+theme(spacing.half))]',
        }}
        elevation={elevation}
        open={props.open || isOpen}
        title={label}
        trigger={
          <ToolbarButton
            active={active}
            disabled={isDisabled}
            icon={icon}
            iconOnly={iconOnly}
            iconPosition={iconPosition}
            label={label}
          />
        }
        triggerAsButton={false}
        onMenuOpenChange={handleMenuOpenChange}
        {...omit(
          [
            'className',
            'condensed',
            'trigger',
            'onMenuOpenChange',
            'triggerAsButton',
          ],
          props,
        )}
      >
        {children}
      </Dropdown>
    )
  },
)
ToolbarDropdown.displayName = 'ToolbarDropdown'

export default ToolbarDropdown
