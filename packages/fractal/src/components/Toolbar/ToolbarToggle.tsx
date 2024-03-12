'use client'

import { composeRefs } from '@radix-ui/react-compose-refs'
import * as RxToolbar from '@radix-ui/react-toolbar'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import {
  type ForwardedRef,
  type MouseEvent,
  forwardRef,
  useContext,
  useRef,
} from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME, Orientations, Variants } from './Toolbar.constants'
import type { ToolbarToggleProps } from './Toolbar.types'
import { ToolbarContext } from './ToolbarContext'
import { ToolbarToggleGroupContext } from './ToolbarToggleGroupContext'

/**
 * `ToolbarToggle` component is used to allow the user to make a choice
 * amongst a group of multiple choices.
 *
 * You must use this component with the `ToolbarToggleGroup` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/toolbar#toggleitem for
 * more information.
 */
export const ToolbarToggle = forwardRef<HTMLButtonElement, ToolbarToggleProps>(
  (
    {
      children,
      disabled = false,
      icon,
      iconOnly = false,
      iconPosition = 'left',
      label,
      onToggle,
      value,
      ...props
    }: ToolbarToggleProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const hasIcon = Boolean(icon)
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `ToolbarToggle` component',
      )
    }

    const buttonRef = useRef<HTMLButtonElement>(null)
    const combinedRef = composeRefs(ref, buttonRef)

    const variantClassNames = {
      [Variants.Secondary]:
        'bg-white text-dark border-1 aria-not-pressed:hover:shadow-hover aria-not-pressed:focus:shadow-hover aria-not-pressed:active:shadow-none border-normal aria-pressed:bg-black aria-pressed:text-light aria-unchecked:hover:shadow-hover aria-unchecked:focus:shadow-hover aria-unchecked:active:shadow-none aria-checked:bg-black aria-checked:text-light',
    }

    const disabledVariantClassNames = {
      [Variants.Secondary]:
        'bg-white text-disabled shadow-none border-disabled aria-checked:bg-black aria-checked:text-disabled',
    }

    const {
      disabled: toolbarDisabled,
      orientation,
      variant,
    } = useContext(ToolbarContext)
    const { disabled: groupDisabled } = useContext(ToolbarToggleGroupContext)

    const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
      buttonRef?.current?.blur()

      if (isFunction(onToggle)) {
        onToggle(
          event.currentTarget.attributes.getNamedItem('aria-checked')?.value ===
            'true',
        )
      }

      if (isFunction(props.onClick)) {
        props.onClick(event)
      }
    }

    const isDisabled = disabled || groupDisabled || toolbarDisabled

    return (
      <RxToolbar.ToggleItem
        {...(props.id !== undefined ? { id: props.id } : {})}
        ref={combinedRef}
        aria-label={label}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__toggle`,
          'flex h-6 max-h-6 max-w-full items-center justify-center gap-2 text-left outline-none transition-colors duration-300 ease-out active:transition-none',
          orientation === Orientations.Horizontal
            ? 'w-fit border-r-0 first-of-type:rounded-l-full last-of-type:rounded-r-full last-of-type:border-r-1'
            : 'w-full border-b-0 first-of-type:rounded-t-full last-of-type:rounded-b-full last-of-type:border-b-1',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__toggle--disabled cursor-not-allowed ${disabledVariantClassNames[variant]}`
            : `cursor-pointer ${variantClassNames[variant]}`,
          !isEmpty(icon)
            ? `${PREFIX}-${GROUP_NAME}__toggle--addendum ${PREFIX}-${GROUP_NAME}--addendum--${iconPosition === 'left' ? 'prefix' : 'suffix'}`
            : '',
          iconOnly
            ? `${PREFIX}-${GROUP_NAME}__toggle--icon-only w-6 p-1`
            : 'px-3 py-1',
          props.className,
        )}
        disabled={isDisabled}
        title={label}
        value={value}
        onClick={handleToggle}
        {...omit(['className', 'id', 'onClick'], props)}
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
          >
            {hasChildren ? children : label}
          </Typography>
        )}

        {hasIcon && iconPosition === 'right' && icon}
      </RxToolbar.ToggleItem>
    )
  },
)
ToolbarToggle.displayName = 'ToolbarToggle'

export default ToolbarToggle
