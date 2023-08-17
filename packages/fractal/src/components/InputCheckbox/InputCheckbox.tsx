import CheckIcon from '@iconscout/react-unicons/dist/icons/uil-check'
import * as RxCheckbox from '@radix-ui/react-checkbox'
import { composeRefs } from '@radix-ui/react-compose-refs'
import { Label as RxLabel } from '@radix-ui/react-label'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  inputCheckbox,
  inputCheckboxCheckmark,
  inputCheckboxContainer,
  inputCheckboxLabel,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import uniqueId from 'lodash/fp/uniqueId'
import { type ForwardedRef, MouseEvent, forwardRef, useRef } from 'react'

import { PREFIX } from '@/constants'

import { DEFAULT_COLOR, DEFAULT_VARIANT } from './InputCheckbox.constants'
import { GROUP_NAME } from './InputCheckbox.recipe'
import type { InputCheckboxProps } from './InputCheckbox.types'

/**
 * `InputCheckbox` component is used to allow the user to make a binary choice.
 */
export const InputCheckbox = forwardRef<HTMLButtonElement, InputCheckboxProps>(
  (
    {
      checked,
      color = DEFAULT_COLOR,
      defaultChecked,
      disabled = false,
      fullWidth = false,
      id = uniqueId('fractal-input-checkbox-'),
      label,
      name,
      onCheckedChange,
      required = false,
      value = 'on',
      variant = DEFAULT_VARIANT,
      ...props
    }: InputCheckboxProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const checkboxRef = useRef<HTMLButtonElement>(null)
    const combinedRef = composeRefs(ref, checkboxRef)

    const groupClassNames = cx(
      `${PREFIX}-${GROUP_NAME}`,
      inputCheckboxContainer({ color, variant }),
      props.className,
      disabled ? 'disabled' : '',
      fullWidth ? 'full-width' : '',
      required ? 'required' : '',
    )

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (event.target) {
        ;(event.target as HTMLButtonElement).blur()
      }
    }

    return (
      <div className={groupClassNames}>
        <RxCheckbox.Root
          id={id}
          ref={combinedRef}
          {...(checked !== undefined ? { checked } : {})}
          className={inputCheckbox({ color, variant })}
          {...(defaultChecked !== undefined ? { defaultChecked } : {})}
          disabled={disabled}
          name={name || id}
          required={required}
          value={value}
          onClick={handleClick}
          {...(isFunction(onCheckedChange) ? { onCheckedChange } : {})}
          {...omit(['className'], props)}
        >
          <RxCheckbox.Indicator
            className={inputCheckboxCheckmark({ color, variant })}
          >
            <CheckIcon />
          </RxCheckbox.Indicator>
        </RxCheckbox.Root>

        <RxLabel
          className={cx(
            typography({ variant: 'body-1' }),
            inputCheckboxLabel({ color, variant }),
          )}
          htmlFor={id}
        >
          {label}
        </RxLabel>
      </div>
    )
  },
)
InputCheckbox.displayName = 'InputCheckbox'

export default InputCheckbox
