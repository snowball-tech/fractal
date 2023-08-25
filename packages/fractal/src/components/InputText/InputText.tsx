import { Label as RxLabel } from '@radix-ui/react-label'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  inputText,
  inputTextAddendum,
  inputTextContainer,
  inputTextDescription,
  inputTextLabel,
  inputTextMessage,
  inputTextPrefix,
  inputTextSuffix,
  inputTextWrapper,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import uniqueId from 'lodash/fp/uniqueId'
import {
  type ChangeEvent,
  type FocusEvent,
  type ForwardedRef,
  forwardRef,
} from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './InputText.recipe'
import type { InputTextProps } from './InputText.types'

/**
 * `InputText` component is used to allow the user to enter text values.
 */
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      autoFocus = false,
      defaultValue,
      description,
      disabled = false,
      error,
      fullWidth = false,
      id = uniqueId('fractal-input-text-'),
      label,
      name,
      onChange,
      placeholder,
      prefix,
      readOnly = false,
      required = false,
      selectOnFocus = true,
      success,
      suffix,
      type = 'text',
      value,
      ...props
    }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const hasErrorMessage = !isEmpty(error)
    const isInError = hasErrorMessage || error === true
    const hasSuccessMessage = !isEmpty(success)
    const isSuccessful = (hasSuccessMessage || success === true) && !isInError

    const groupClassNames = cx(
      `${PREFIX}-${GROUP_NAME}`,
      inputTextContainer(),
      props.className,
      disabled ? 'disabled' : '',
      fullWidth ? 'full-width' : '',
      isInError ? 'invalid' : '',
      !isEmpty(prefix) || !isEmpty(suffix) ? `addendum` : '',
      !isEmpty(prefix) ? `prefix` : '',
      !isEmpty(suffix) ? `suffix` : '',
      readOnly ? 'readonly' : '',
      required ? 'required' : '',
      isSuccessful ? 'valid' : '',
    )

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (isFunction(onChange)) {
        onChange(event, event.target.value)
      }
    }

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (isFunction(props.onFocus)) {
        props.onFocus(event)
      }

      if (selectOnFocus && event.target) {
        event.target.select()
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

        <div className={inputTextWrapper()}>
          {prefix ? (
            <div className={cx(inputTextAddendum(), inputTextPrefix())}>
              {prefix}
            </div>
          ) : (
            false
          )}

          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            className={cx(typography({ variant: 'body-1' }), inputText())}
            disabled={disabled}
            {...(defaultValue !== undefined ? { defaultValue } : {})}
            id={id}
            ref={ref}
            name={name || id}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            type={type}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            // Be careful, arguments of `omit` from lodash FP are flipped!
            {...omit(['className', 'onFocus'], props)}
          />

          {suffix ? (
            <div className={cx(inputTextAddendum(), inputTextSuffix())}>
              {suffix}
            </div>
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
  },
)
InputText.displayName = 'InputText'

export default InputText
