import { UilCheck as CheckIcon } from '@iconscout/react-unicons'
import * as RxCheckbox from '@radix-ui/react-checkbox'
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

import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT } from './InputCheckbox.constants'
import { GROUP_NAME } from './InputCheckbox.recipe'
import type { InputCheckboxProps } from './InputCheckbox.types'

/**
 * `Checkbox` component is used to allow a user to make a binary choice.
 */
export default function InputCheckbox({
  checked,
  defaultChecked,
  disabled = false,
  id = uniqueId('fractal-input-checkbox-'),
  label,
  name,
  onCheckedChange,
  required = false,
  value = 'on',
  variant = DEFAULT_VARIANT,
  ...props
}: InputCheckboxProps) {
  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    inputCheckboxContainer({ variant }),
    props.className,
    disabled ? 'disabled' : '',
    required ? 'required' : '',
  )

  return (
    <div className={groupClassNames}>
      <RxCheckbox.Root
        id={id}
        {...(checked !== undefined ? { checked } : {})}
        className={inputCheckbox({ variant })}
        {...(defaultChecked !== undefined ? { defaultChecked } : {})}
        disabled={disabled}
        name={name || id}
        required={required}
        value={value}
        {...(isFunction(onCheckedChange)
          ? { onCheckedChange: (checkedState) => onCheckedChange(checkedState) }
          : {})}
        {...omit(['className'], props)}
      >
        <RxCheckbox.Indicator className={inputCheckboxCheckmark({ variant })}>
          <CheckIcon />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>

      <RxLabel
        className={cx(
          typography({ variant: 'body-1' }),
          inputCheckboxLabel({ variant }),
        )}
        htmlFor={id}
      >
        {label}
      </RxLabel>
    </div>
  )
}
