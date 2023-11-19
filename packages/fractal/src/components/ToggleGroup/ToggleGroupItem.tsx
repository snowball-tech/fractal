import { composeRefs } from '@radix-ui/react-compose-refs'
import * as RxToggleGroup from '@radix-ui/react-toggle-group'
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

import {
  disabledVariantClassNames as toggleDisabledVariantClassNames,
  variantClassNames as toggleVariantClassNames,
} from '../Toggle/Toggle'
import { Variants } from '../Toggle/Toggle.constants'
import { GROUP_NAME } from './ToggleGoup.constants'
import type { ToggleGroupItemProps } from './ToggleGroup.types'
import { ToggleGroupContext } from './ToggleGroupContext'

/**
 * `ToggleGroupItem` component is used to allow the user to make a single choice
 * amongst a group of multiple choices.
 *
 * You must use this component with the `InputRadioGroup` component.
 */
export const ToggleGroupItem = forwardRef<
  HTMLButtonElement,
  ToggleGroupItemProps
>(
  (
    {
      disabled = false,
      fullWidth = false,
      icon,
      iconOnly = false,
      label,
      onToggle,
      value,
      ...props
    }: ToggleGroupItemProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const combinedRef = composeRefs(ref, buttonRef)

    const variantClassNames = {
      [Variants.Primary]:
        'bg-white text-dark aria-unchecked:shadow-subtle aria-unchecked:hover:shadow-brutal aria-unchecked:focus:shadow-brutal aria-unchecked:active:shadow-none border-1 border-normal aria-unchecked:active:-translate-x-0.25 aria-unchecked:active:translate-y-0.5 aria-unchecked:hover:translate-x-0 aria-unchecked:hover:-translate-y-0.25 aria-unchecked:focus:translate-x-0 aria-unchecked:focus:-translate-y-0.25 aria-checked:bg-secondary aria-checked:text-light',
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
        {...(props.id !== undefined ? { id: props.id } : {})}
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
          !isEmpty(icon)
            ? `${PREFIX}-${GROUP_NAME}--addendum ${PREFIX}-${GROUP_NAME}--addendum--prefix`
            : '',
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
            element="label"
          >
            {label}
          </Typography>
        )}
      </RxToggleGroup.Item>
    )
  },
)
ToggleGroupItem.displayName = 'ToggleGroupItem'

export default ToggleGroupItem
