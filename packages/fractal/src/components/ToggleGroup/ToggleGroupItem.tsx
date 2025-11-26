'use client'

import * as RxToggleGroup from '@radix-ui/react-toggle-group'

import {
  type ForwardedRef,
  type MouseEvent,
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react'
import { onlyText } from 'react-children-utilities'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { ToggleGroupItemProps } from './ToggleGroup.types'

import {
  disabledVariantClassNames as toggleDisabledVariantClassNames,
  variantClassNames as toggleVariantClassNames,
} from '../Toggle/Toggle'
import { Variants } from '../Toggle/Toggle.constants'
import { GROUP_NAME } from './ToggleGroup.constants'
import { ToggleGroupContext } from './ToggleGroupContext'

/**
 * `ToggleGroupItem` component is used to allow the user to make a choice
 * amongst a group of multiple choices.
 *
 * You must use this component with the `ToggleGroup` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/toggle-group#item for
 * more information.
 */
export const ToggleGroupItem = forwardRef<
  HTMLButtonElement | null,
  ToggleGroupItemProps
>(
  (
    {
      children,
      disabled = false,
      fullWidth = false,
      icon,
      iconOnly = false,
      label,
      labelElement,
      onToggle,
      value,
      ...props
    }: ToggleGroupItemProps,
    ref?: ForwardedRef<HTMLButtonElement | null>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && !label) {
      console.warn(
        'You must provide a `label` or `children` to the `ToggleGroupItem` component',
      )
    }

    const textLabel = isString(label)
      ? label
      : isEmpty(label)
        ? onlyText(children)
        : onlyText(label)

    const buttonRef = useRef<HTMLButtonElement>(null)
    useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(
      ref,
      () => buttonRef.current,
    )

    const variantClassNames = {
      [Variants.Primary]:
        'bg-white text-dark aria-unchecked:shadow-subtle aria-unchecked:hover:shadow-brutal aria-unchecked:focus:shadow-brutal aria-unchecked:active:shadow-none border-1 border-normal aria-unchecked:active:-translate-x-quarter aria-unchecked:active:translate-y-half aria-unchecked:hover:translate-x-0 aria-unchecked:hover:-translate-y-quarter aria-unchecked:focus:translate-x-0 aria-unchecked:focus:-translate-y-quarter aria-checked:bg-secondary aria-checked:text-light',
      [Variants.Secondary]:
        'bg-white text-dark aria-unchecked:hover:bg-primary aria-unchecked:focus:bg-primary aria-unchecked:active:bg-black  aria-unchecked:active:text-light border-1 border-normal aria-checked:bg-secondary aria-checked:text-light',
    }

    const disabledVariantClassNames = {
      [Variants.Primary]:
        'bg-white text-disabled shadow-none border-1 border-disabled aria-checked:bg-secondary aria-checked:text-disabled',
      [Variants.Secondary]:
        'bg-white text-disabled shadow-none border-1 border-disabled aria-checked:bg-secondary aria-checked:text-disabled',
    }

    const {
      disabled: groupDisabled,
      grouped,
      orientation,
      variant,
    } = useContext(ToggleGroupContext)

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

    const isDisabled = disabled || groupDisabled

    return (
      <RxToggleGroup.Item
        {...(props.id === undefined ? {} : { id: props.id })}
        ref={buttonRef}
        aria-label={textLabel}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          grouped ? `${PREFIX}-${GROUP_NAME}--grouped` : '',
          'flex h-6 max-h-6 max-w-full items-center justify-center gap-2 text-left outline-none transition-colors duration-300 ease-out active:transition-none',
          grouped ? '' : 'rounded-full',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed ${disabledVariantClassNames[variant]} ${toggleDisabledVariantClassNames[variant]}`
            : `cursor-pointer ${variantClassNames[variant]} ${toggleVariantClassNames[variant]}`,
          fullWidth && !iconOnly
            ? `${PREFIX}-${GROUP_NAME}--full-width w-full`
            : grouped && orientation === 'vertical'
              ? 'w-full'
              : 'w-fit',
          isEmpty(icon)
            ? ''
            : `${PREFIX}-${GROUP_NAME}--addendum ${PREFIX}-${GROUP_NAME}--addendum--prefix`,
          iconOnly ? `${PREFIX}-${GROUP_NAME}--icon-only w-6 p-1` : 'px-3 py-1',
          props.className,
        )}
        disabled={isDisabled}
        title={textLabel}
        value={value}
        onClick={handleToggle}
        {...omit(['className', 'id', 'onClick'], props)}
      >
        {icon}

        {!iconOnly && (
          <Typography
            className={cj(
              `${PREFIX}-${GROUP_NAME}__label`,
              'max-h-full max-w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center align-middle',
              isDisabled
                ? `${PREFIX}-${GROUP_NAME}__label--disabled cursor-not-allowed`
                : `cursor-pointer`,
            )}
            element={
              labelElement ||
              (isString(hasChildren ? children : label) ? 'label' : 'div')
            }
          >
            {hasChildren ? children : label}
          </Typography>
        )}
      </RxToggleGroup.Item>
    )
  },
)
ToggleGroupItem.displayName = 'ToggleGroupItem'

export default ToggleGroupItem
