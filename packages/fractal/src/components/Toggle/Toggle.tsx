'use client'

import * as RxToggle from '@radix-ui/react-toggle'

import {
  type ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { ToggleProps } from './Toggle.types'

import { DEFAULT_VARIANT, GROUP_NAME, Variants } from './Toggle.constants'

export const variantClassNames = {
  [Variants.Primary]:
    'bg-white text-dark aria-not-pressed:shadow-subtle aria-not-pressed:hover:shadow-brutal aria-not-pressed:focus:shadow-brutal aria-not-pressed:active:shadow-none border-1 border-normal aria-not-pressed:active:-translate-x-quarter aria-not-pressed:active:translate-y-half aria-not-pressed:hover:translate-x-0 aria-not-pressed:hover:-translate-y-quarter aria-not-pressed:focus:translate-x-0 aria-not-pressed:focus:-translate-y-quarter aria-pressed:bg-secondary aria-pressed:text-light',
}

export const disabledVariantClassNames = {
  [Variants.Primary]:
    'bg-white text-disabled shadow-none border-1 border-disabled aria-pressed:bg-secondary aria-pressed:text-disabled',
}

/**
 * `Toggle` component is used to allow the user to enable/disabled things.
 *
 * See https://www.radix-ui.com/primitives/docs/components/toggle for more
 * information.
 */
export const Toggle = forwardRef<HTMLButtonElement | null, ToggleProps>(
  (
    {
      children,
      defaultToggled,
      disabled = false,
      fullWidth = false,
      icon,
      iconOnly = false,
      label,
      labelAsDiv = false,
      onToggle,
      toggled,
      variant = DEFAULT_VARIANT,
      ...props
    }: ToggleProps,
    ref?: ForwardedRef<HTMLButtonElement | null>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `Toggle` component',
      )
    }

    const buttonRef = useRef<HTMLButtonElement>(null)
    useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(
      ref,
      () => buttonRef.current,
    )

    const handleToggle = (newToggled: boolean) => {
      buttonRef?.current?.blur()

      if (isFunction(onToggle)) {
        onToggle(newToggled)
      }
    }

    return (
      <RxToggle.Root
        {...(props.id === undefined ? {} : { id: props.id })}
        ref={buttonRef}
        aria-label={label}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          'flex h-6 max-h-6 max-w-full items-center justify-center gap-2 rounded-full text-left outline-none transition-colors duration-300 ease-out active:transition-none',
          disabled
            ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed ${disabledVariantClassNames[variant]}`
            : `cursor-pointer ${variantClassNames[variant]}`,
          fullWidth && !iconOnly
            ? `${PREFIX}-${GROUP_NAME}--full-width w-full`
            : 'w-fit',
          isEmpty(icon)
            ? ''
            : `${PREFIX}-${GROUP_NAME}--addendum ${PREFIX}-${GROUP_NAME}--addendum--prefix`,
          iconOnly ? `${PREFIX}-${GROUP_NAME}--icon-only w-6 p-1` : 'px-3 py-1',
          props.className,
        )}
        {...(defaultToggled === undefined
          ? {}
          : { defaultPressed: defaultToggled })}
        disabled={disabled}
        title={label}
        {...(toggled === undefined ? {} : { pressed: toggled })}
        onPressedChange={handleToggle}
        {...omit(['className', 'id'], props)}
      >
        {icon}

        {!iconOnly && (
          <Typography
            className={cj(
              `${PREFIX}-${GROUP_NAME}__label`,
              'max-h-full max-w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center align-middle',
              disabled
                ? `${PREFIX}-${GROUP_NAME}__label--disabled cursor-not-allowed`
                : `cursor-pointer`,
            )}
            element={labelAsDiv ? 'div' : 'label'}
          >
            {hasChildren ? children : label}
          </Typography>
        )}
      </RxToggle.Root>
    )
  },
)
Toggle.displayName = 'Toggle'

export default Toggle
