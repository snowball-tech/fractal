'use client'

import { composeRefs } from '@radix-ui/react-compose-refs'
import * as RxToolbar from '@radix-ui/react-toolbar'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef, useContext, useRef } from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Toolbar.constants'
import type { ToolbarButtonProps } from './Toolbar.types'
import { ToolbarContext } from './ToolbarContext'

/**
 * `ToolbarButton` component is used to offer actions to the user in a toolbar.
 *
 * See https://www.radix-ui.com/primitives/docs/components/toolbar#button for more
 * information.
 */
export const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  (
    {
      active = false,
      children,
      disabled = false,
      icon,
      iconOnly = false,
      iconPosition = 'left',
      label,
      onClick,
      ...props
    }: ToolbarButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const hasIcon = Boolean(icon)
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `ToolbarButton` component',
      )
    }

    const buttonRef = useRef<HTMLButtonElement>(null)
    const combinedRef = composeRefs(ref, buttonRef)

    const { disabled: toolbarDisabled } = useContext(ToolbarContext)

    const isDisabled = disabled || toolbarDisabled

    return (
      <RxToolbar.Button
        {...(props.id !== undefined ? { id: props.id } : {})}
        ref={combinedRef}
        aria-label={label}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__button`,
          'flex h-3 max-h-3 max-w-full items-center justify-center gap-1 rounded-xs bg-transparent p-0 text-left outline-none transition-colors duration-300 ease-out active:transition-none',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__button--disabled cursor-not-allowed`
            : `cursor-pointer hover:bg-decorative-pink-90 hover:text-dark`,
          // eslint-disable-next-line no-nested-ternary
          active && !isDisabled
            ? 'text-dark'
            : isDisabled
              ? 'text-disabled'
              : 'text-placeholder',
          !isEmpty(icon)
            ? `${PREFIX}-${GROUP_NAME}__button--addendum ${PREFIX}-${GROUP_NAME}--addendum--${iconPosition === 'left' ? 'prefix' : 'suffix'}`
            : '',
          iconOnly
            ? `${PREFIX}-${GROUP_NAME}__button--icon-only px-half`
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
        disabled={isDisabled}
        title={label}
        type="button"
        onClick={onClick}
        {...omit(['className', 'id', 'onClick', 'type'], props)}
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
            element={hasChildren ? 'div' : 'label'}
            variant={active ? 'body-1-median' : 'body-1'}
          >
            {hasChildren ? children : label}
          </Typography>
        )}

        {hasIcon && iconPosition === 'right' && icon}
      </RxToolbar.Button>
    )
  },
)
ToolbarButton.displayName = 'ToolbarButton'

export default ToolbarButton
