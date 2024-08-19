'use client'

import { composeRefs } from '@radix-ui/react-compose-refs'
import * as RxToggleGroup from '@radix-ui/react-toggle-group'

import {
  type ForwardedRef,
  type MouseEvent,
  forwardRef,
  useContext,
  useRef,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
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
  HTMLButtonElement,
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
      labelAsDiv = false,
      onToggle,
      value,
      ...props
    }: ToggleGroupItemProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `ToggleGroupItem` component',
      )
    }

    const buttonRef = useRef<HTMLButtonElement>(null)
    const combinedRef = composeRefs(ref, buttonRef)

    const variantClassNames = {
      [Variants.Primary]:
        'bg-white text-dark aria-unchecked:shadow-subtle aria-unchecked:hover:shadow-brutal aria-unchecked:focus:shadow-brutal aria-unchecked:active:shadow-none border-1 border-normal aria-unchecked:active:-translate-x-quarter aria-unchecked:active:translate-y-half aria-unchecked:hover:translate-x-0 aria-unchecked:hover:-translate-y-quarter aria-unchecked:focus:translate-x-0 aria-unchecked:focus:-translate-y-quarter aria-checked:bg-secondary aria-checked:text-light',
    }

    const disabledVariantClassNames = {
      [Variants.Primary]:
        'bg-white text-disabled shadow-none border-1 border-disabled aria-checked:bg-secondary aria-checked:text-disabled',
    }

    const { disabled: groupDisabled, variant } = useContext(ToggleGroupContext)

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
        ref={combinedRef}
        aria-label={label}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          'flex h-6 max-h-6 max-w-full items-center justify-center gap-2 rounded-full text-left outline-none transition-colors duration-300 ease-out active:transition-none',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed ${disabledVariantClassNames[variant]} ${toggleDisabledVariantClassNames[variant]}`
            : `cursor-pointer ${variantClassNames[variant]} ${toggleVariantClassNames[variant]}`,
          fullWidth && !iconOnly
            ? `${PREFIX}-${GROUP_NAME}--full-width w-full`
            : 'w-fit',
          isEmpty(icon)
            ? ''
            : `${PREFIX}-${GROUP_NAME}--addendum ${PREFIX}-${GROUP_NAME}--addendum--prefix`,
          iconOnly ? `${PREFIX}-${GROUP_NAME}--icon-only w-6 p-1` : 'px-3 py-1',
          props.className,
        )}
        disabled={isDisabled}
        title={label}
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
            element={labelAsDiv ? 'div' : 'label'}
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
