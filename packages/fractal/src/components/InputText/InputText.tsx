import {
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
} from '@iconscout/react-unicons'
import { Label as RxLabel } from '@radix-ui/react-label'
import { css, cx } from '@snowball-tech/fractal-panda/css'
import {
  inputText,
  inputTextDescription,
  inputTextField,
  inputTextIcon,
  inputTextLabel,
  inputTextMessage,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import uniqueId from 'lodash/fp/uniqueId'
import type { ChangeEvent } from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './InputText.recipe'
import type { InputTextProps } from './InputText.types'

/**
 * `InputText` component is used to take text values from the user.
 */
export default function InputText({
  autoFocus = false,
  defaultValue,
  description,
  disabled = false,
  error,
  icon,
  iconPosition = 'right',
  id = uniqueId('fractal-input-text-'),
  label,
  name,
  onChange,
  onRawChange,
  placeholder,
  readOnly = false,
  required = false,
  success,
  type = 'text',
  value,
  ...props
}: InputTextProps) {
  const hasErrorMessage = !isEmpty(error)
  const isInError = hasErrorMessage || error === true
  const hasSuccessMessage = !isEmpty(success)
  const isSuccessful = (hasSuccessMessage || success === true) && !isInError

  let iconToDisplay = icon
  if (isInError) {
    iconToDisplay = <ExclamationCircleIcon />
  } else if (isSuccessful) {
    iconToDisplay = <CheckCircleIcon />
  }

  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    inputTextField(),
    props.className,
    disabled ? 'disabled' : '',
    isInError ? 'invalid' : '',
    !isEmpty(iconToDisplay) ? `icon-${iconPosition}` : '',
    readOnly ? 'readonly' : '',
    required ? 'required' : '',
    isSuccessful ? 'valid' : '',
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isFunction(onRawChange)) {
      onRawChange(event)
    }

    if (isFunction(onChange)) {
      onChange(event.target.value)
    }
  }

  return (
    <div className={groupClassNames}>
      {!isEmpty(label) ? (
        <RxLabel
          className={cx(typography({ variant: 'body-1' }), inputTextLabel())}
          htmlFor={id}
        >
          {label}
        </RxLabel>
      ) : (
        false
      )}

      <div className={css({ position: 'relative', width: 'fit-content' })}>
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          className={cx(typography({ variant: 'body-1' }), inputText())}
          disabled={disabled}
          {...(defaultValue !== undefined ? { defaultValue } : {})}
          id={id}
          name={name || id}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          type={type}
          value={value}
          onChange={handleChange}
          // Be careful, arguments of `omit` from lodash FP are flipped!
          {...omit(['className'], props)}
        />

        {iconToDisplay ? (
          <div className={inputTextIcon()}>{iconToDisplay}</div>
        ) : (
          false
        )}
      </div>

      {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage ? (
        <div
          className={cx(
            typography({ variant: 'caption-median' }),
            inputTextDescription(),
          )}
        >
          {description}
        </div>
      ) : (
        false
      )}

      {hasErrorMessage || hasSuccessMessage ? (
        <div
          className={cx(
            typography({ variant: 'caption-median' }),
            inputTextMessage(),
          )}
        >
          {isInError ? error : success}
        </div>
      ) : (
        false
      )}
    </div>
  )
}
