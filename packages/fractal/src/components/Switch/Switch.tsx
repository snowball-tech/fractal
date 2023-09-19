import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxSwitch from '@radix-ui/react-switch'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  switchContainer,
  switchLabel,
  switchThumb,
  switchToggle,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef, useId } from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Switch.recipe'
import type { SwitchProps } from './Switch.types'

/**
 * `Switch` component is used to allow the user to toggle an element on/off.
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
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
    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const switchClassNames = cx(
      `${PREFIX}-${GROUP_NAME}`,
      switchContainer(),
      `switch-${switchPosition}`,
      disabled ? 'disabled' : '',
      props.className,
    )

    return (
      <div className={switchClassNames}>
        <RxSwitch.Root
          id={uniqueId}
          ref={ref}
          aria-label={label}
          {...(checked !== undefined ? { checked } : {})}
          className={switchToggle()}
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
          <RxSwitch.Thumb className={switchThumb()} />
        </RxSwitch.Root>

        <RxLabel
          className={cx(typography({ variant: 'body-2' }), switchLabel())}
          htmlFor={uniqueId}
        >
          {label}
        </RxLabel>
      </div>
    )
  },
)
Switch.displayName = 'Switch'

export default Switch
