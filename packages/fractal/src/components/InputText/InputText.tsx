import {
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
} from '@iconscout/react-unicons'
import * as RxForm from '@radix-ui/react-form'
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
import type { ReactNode } from 'react'

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
  placeholder,
  readOnly = false,
  required = false,
  standalone = false,
  success,
  type = 'text',
  value,
  ...props
}: InputTextProps) {
  const isInError = !isEmpty(error)
  const isSuccessful = !isEmpty(success) && !isInError

  let iconToDisplay = icon
  if (isInError) {
    iconToDisplay = <ExclamationCircleIcon />
  } else if (isSuccessful) {
    iconToDisplay = <CheckCircleIcon />
  }

  const groupClassNames = cx(
    'group',
    inputTextField(),
    props.className,
    disabled ? 'disabled' : '',
    isInError ? 'error' : '',
    !isEmpty(iconToDisplay) ? `icon-${iconPosition}` : '',
    readOnly ? 'readonly' : '',
    required ? 'required' : '',
    isSuccessful ? 'successfull' : '',
  )

  const inputElement = (
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
      {...(isFunction(onChange)
        ? {
            onChange: (event) => onChange(event),
          }
        : {})}
      // Be careful, arguments of `omit` from lodash FP are flipped!
      {...omit(['className'], props)}
    />
  )

  const InputWithIcon = ({ children }: { children: ReactNode }) => (
    <div className={css({ position: 'relative' })}>
      {children}

      {iconToDisplay ? (
        <div className={inputTextIcon()}>{iconToDisplay}</div>
      ) : (
        false
      )}
    </div>
  )

  return standalone ? (
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

      <InputWithIcon>{inputElement}</InputWithIcon>

      {!isEmpty(description) && !isInError && !isSuccessful ? (
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

      {isInError || isSuccessful ? (
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
  ) : (
    <RxForm.Field
      className={groupClassNames}
      name={name || id}
      serverInvalid={!isEmpty(error)}
    >
      {!isEmpty(label) ? (
        <RxForm.Label
          className={cx(typography({ variant: 'body-1' }), inputTextLabel())}
        >
          {label}
        </RxForm.Label>
      ) : (
        false
      )}

      <InputWithIcon>
        <RxForm.Control asChild>{inputElement}</RxForm.Control>
      </InputWithIcon>

      {!isEmpty(description) && !isInError && !isSuccessful ? (
        <RxForm.Message
          className={cx(
            typography({ variant: 'caption-median' }),
            inputTextDescription(),
          )}
          forceMatch
        >
          {description}
        </RxForm.Message>
      ) : (
        false
      )}

      {isInError || isSuccessful ? (
        <RxForm.Message
          className={cx(
            typography({ variant: 'caption-median' }),
            inputTextMessage(),
          )}
          forceMatch
        >
          {isInError ? error : success}
        </RxForm.Message>
      ) : (
        false
      )}
    </RxForm.Field>
  )
}
