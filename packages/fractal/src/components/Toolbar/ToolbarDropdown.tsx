'use client'

import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef, useContext, useState } from 'react'

import { Dropdown, DropdownElevations } from '@/components/Dropdown'
import { CombinedRefs as DropdownCombinedRefs } from '@/components/Dropdown/Dropdown.types'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Toolbar.constants'
import type { ToolbarDropdownProps } from './Toolbar.types'
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
    const hasIcon = Boolean(icon)
    if (isEmpty(label)) {
      console.warn(
        'You must provide a `label` to the `ToolbarDropdown` component',
      )
    }

    const { disabled: toolbarDisabled } = useContext(ToolbarContext)

    const isDisabled = disabled || toolbarDisabled

    const [isOpen, setIsOpen] = useState(props.defaultOpen || props.open)
    const handleMenuOpenChange = (open: boolean) => {
      setIsOpen(open)
    }

    return (
      <Dropdown
        ref={ref}
        aria-label={label}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__dropdown`,
          'group h-3 max-h-3 rounded-xs',
          // eslint-disable-next-line no-nested-ternary
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
        title={label}
        trigger={
          <div
            className={cn(
              `${PREFIX}-${GROUP_NAME}__dropdown__trigger`,
              'flex h-3 max-h-3 max-w-full items-center justify-center gap-1 rounded-xs bg-transparent p-0 text-left outline-none transition-colors duration-300 ease-out active:transition-none',
              isDisabled
                ? `${PREFIX}-${GROUP_NAME}__dropdown__trigger--disabled cursor-not-allowed`
                : `cursor-pointer hover:text-dark group-hover:text-dark`,
              // eslint-disable-next-line no-nested-ternary
              (active || isOpen) && !isDisabled
                ? 'text-dark'
                : isDisabled
                  ? 'text-disabled'
                  : 'text-placeholder',
              !isEmpty(icon)
                ? `${PREFIX}-${GROUP_NAME}__dropdown__trigger--addendum ${PREFIX}-${GROUP_NAME}--addendum--${iconPosition === 'left' ? 'prefix' : 'suffix'}`
                : '',
              iconOnly
                ? `${PREFIX}-${GROUP_NAME}__dropdown__trigger--icon-only px-half`
                : 'w-fit',
              // eslint-disable-next-line no-nested-ternary
              !iconOnly
                ? // eslint-disable-next-line no-nested-ternary
                  hasIcon
                  ? iconPosition === 'left'
                    ? 'pl-half pr-1'
                    : 'pl-1 pr-half'
                  : 'px-1'
                : '',
              props.className,
            )}
          >
            {hasIcon && iconPosition === 'left' && icon}

            {!iconOnly && (
              <Typography
                className={cj(
                  `${PREFIX}-${GROUP_NAME}__toggle__label`,
                  'max-h-full max-w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center align-middle',
                  isDisabled
                    ? `${PREFIX}-${GROUP_NAME}__toggle_label--disabled cursor-not-allowed`
                    : `cursor-pointer`,
                )}
                element="label"
                variant={active ? 'body-1-bold' : 'body-1'}
              >
                {label}
              </Typography>
            )}

            {hasIcon && iconPosition === 'right' && icon}
          </div>
        }
        onMenuOpenChange={handleMenuOpenChange}
        {...omit(
          ['className', 'condensed', 'trigger', 'onMenuOpenChange'],
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
