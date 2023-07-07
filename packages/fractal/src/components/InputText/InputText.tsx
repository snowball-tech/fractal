import {
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
} from '@iconscout/react-unicons'
import * as RxForm from '@radix-ui/react-form'
import { css, cx } from '@snowball-tech/fractal-panda/css'
import {
  inputText,
  inputTextField,
  inputTextIcon,
  inputTextLabel,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import uniqueId from 'lodash/fp/uniqueId'
import type { ReactNode } from 'react'

import { Typography } from '@/components/Typography'

import type { InputTextProps } from './InputText.types'

/**
 * `InputText` component is used to take text values from the user.
 */
export default function InputText({
  defaultValue,
  description,
  disabled = false,
  error,
  icon,
  iconPosition = 'right',
  label,
  name = uniqueId('fractal-input-text-'),
  onChange,
  readOnly = false,
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
    isInError ? 'error' : '',
    isSuccessful ? 'successfull' : '',
    !isEmpty(iconToDisplay) ? `icon-${iconPosition}` : '',
    readOnly ? 'readonly' : '',
    disabled ? 'disabled' : '',
  )

  const messageClassName = css({ margin: 0 })

  const labelContent = (
    <Typography className={css({ margin: 0 })} variant="body-1">
      {label}
    </Typography>
  )

  const inputElement = (
    <input
      className={inputText()}
      disabled={disabled}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      name={name}
      readOnly={readOnly}
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

      {iconToDisplay && <div className={inputTextIcon()}>{iconToDisplay}</div>}
    </div>
  )

  return standalone ? (
    <div className={groupClassNames}>
      <label className={inputTextLabel()} htmlFor={name}>
        {labelContent}
      </label>

      <InputWithIcon>{inputElement}</InputWithIcon>

      {!isEmpty(description) && !isInError && !isSuccessful && (
        <Typography className={messageClassName} variant="caption-median">
          {description}
        </Typography>
      )}

      {isInError && (
        <Typography className={messageClassName} variant="caption-median">
          {error}
        </Typography>
      )}

      {isSuccessful && (
        <Typography className={messageClassName} variant="caption-median">
          {success}
        </Typography>
      )}
    </div>
  ) : (
    <RxForm.Field
      className={groupClassNames}
      name={name}
      serverInvalid={!isEmpty(error)}
    >
      {!isEmpty(label) && (
        <RxForm.Label className={inputTextLabel()}>{labelContent}</RxForm.Label>
      )}

      <InputWithIcon>
        <RxForm.Control asChild>{inputElement}</RxForm.Control>
      </InputWithIcon>

      {!isEmpty(description) && !isInError && !isSuccessful && (
        <RxForm.Message forceMatch>
          <Typography className={messageClassName} variant="caption-median">
            {description}
          </Typography>
        </RxForm.Message>
      )}

      {isInError && (
        <RxForm.Message forceMatch>
          <Typography className={messageClassName} variant="caption-median">
            {error}
          </Typography>
        </RxForm.Message>
      )}

      {isSuccessful && (
        <RxForm.Message forceMatch>
          <Typography className={messageClassName} variant="caption-median">
            {success}
          </Typography>
        </RxForm.Message>
      )}
    </RxForm.Field>
  )
}
