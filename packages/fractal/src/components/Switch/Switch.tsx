import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxSwitch from '@radix-ui/react-switch'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef, useId } from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Switch.constants'
import type { SwitchProps } from './Switch.types'

/**
 * `Switch` component is used to allow the user to toggle an element on/off.
 *
 * See https://www.radix-ui.com/primitives/docs/components/switch for more
 * information.
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      children,
      defaultChecked,
      disabled = false,
      id,
      label,
      name,
      onToggle,
      required = false,
      switchPosition = 'left',
      value = 'on',
      ...props
    }: SwitchProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `Switch` component',
      )
    }

    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    return (
      <div
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${switchPosition}`,
          'flex items-center gap-1',
          switchPosition === 'right' ? 'flex-row-reverse' : '',
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          props.className,
        )}
      >
        <RxSwitch.Root
          id={uniqueId}
          ref={ref}
          aria-label={label}
          {...(checked !== undefined ? { checked } : {})}
          className={cj(
            `${PREFIX}-${GROUP_NAME}__toggle`,
            'relative h-1 max-h-1 w-5 max-w-4 rounded-full border-1 border-normal bg-body-light px-unset py-unset text-left text-color-unset [display:unset]',
            '',
            disabled
              ? `${PREFIX}-${GROUP_NAME}__toggle--disabled cursor-not-allowed !border-disabled`
              : 'cursor-pointer data-state-checked:bg-decorative-pink-90',
          )}
          {...(defaultChecked !== undefined ? { defaultChecked } : {})}
          disabled={disabled}
          name={name || uniqueId}
          required={required}
          title={label}
          value={value}
          {...(isFunction(onToggle)
            ? { onCheckedChange: (event) => onToggle(event) }
            : {})}
          {...omit(['className'], props)}
        >
          <RxSwitch.Thumb
            className={cj(
              `${PREFIX}-${GROUP_NAME}__toggle__thumb`,
              'block h-2 w-2 -translate-x-quarter translate-y-[-5.5px] rounded-full border-1 border-normal bg-white transition-transform duration-100',
              'data-state-checked:translate-x-[15px]',
              disabled
                ? '!border-disabled data-state-checked:bg-decorative-pink-90'
                : 'border-normal data-state-checked:bg-primary',
            )}
          />
        </RxSwitch.Root>

        <RxLabel
          asChild
          className={cj(
            `${PREFIX}-${GROUP_NAME}__label`,
            'h-full max-h-full w-fit max-w-full overflow-hidden text-ellipsis whitespace-nowrap align-middle',
            disabled
              ? 'cursor-not-allowed text-disabled'
              : 'cursor-pointer text-dark',
            required
              ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-required`
              : '',
          )}
          htmlFor={uniqueId}
        >
          <Typography element={hasChildren ? 'div' : 'label'} variant="body-2">
            {hasChildren ? children : label}
          </Typography>
        </RxLabel>
      </div>
    )
  },
)
Switch.displayName = 'Switch'

export default Switch
