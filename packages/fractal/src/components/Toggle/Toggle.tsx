import { composeRefs } from '@radix-ui/react-compose-refs'
import * as RxToggle from '@radix-ui/react-toggle'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  toggle,
  toggleLabel,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef, useRef } from 'react'

import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT } from './Toggle.constants'
import { GROUP_NAME } from './Toggle.recipe'
import type { ToggleProps } from './Toggle.types'

/**
 * `Toggle` component is used to allow the user to enable/disabled things.
 */
export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      defaultToggled,
      disabled = false,
      fullWidth = false,
      icon,
      label,
      onToggle,
      toggled,
      variant = DEFAULT_VARIANT,
      ...props
    }: ToggleProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const combinedRef = composeRefs(ref, buttonRef)

    const buttonClassNames = cx(
      `${PREFIX}-${GROUP_NAME}`,
      toggle({ variant }),
      props.className,
      disabled ? 'disabled' : '',
      fullWidth ? 'full-width' : '',
      defaultToggled || toggled ? 'toggled' : '',
      !isEmpty(icon) ? `addendum prefix` : '',
    )

    const handleToggle = (newToggled: boolean) => {
      buttonRef.current?.blur()

      if (isFunction(onToggle)) {
        onToggle(newToggled)
      }
    }

    return (
      <RxToggle.Root
        {...(props.id !== undefined ? { id: props.id } : {})}
        ref={combinedRef}
        aria-label={label}
        className={buttonClassNames}
        {...(defaultToggled !== undefined
          ? { defaultPressed: defaultToggled }
          : {})}
        disabled={disabled}
        {...(toggled !== undefined ? { pressed: toggled } : {})}
        onPressedChange={handleToggle}
        {...omit(['className', 'id'], props)}
      >
        {icon}

        <div className={cx(toggleLabel(), typography({ variant: 'body-1' }))}>
          {label}
        </div>
      </RxToggle.Root>
    )
  },
)
Toggle.displayName = 'Toggle'

export default Toggle
