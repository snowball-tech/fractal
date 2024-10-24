'use client'

import { Label as RxLabel } from '@radix-ui/react-label'

import {
  type ChangeEvent,
  type FocusEvent,
  type ForwardedRef,
  forwardRef,
  useId,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isNil from 'lodash/fp/isNil'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { InputTextProps } from './InputText.types'

import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'
import { GROUP_NAME } from './InputText.constants'

/**
 * `InputText` component is used to allow the user to enter text values.
 */
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      autoFocus = false,
      button: buttonProps = {},
      defaultValue,
      description,
      disabled = false,
      error,
      fullWidth = false,
      id,
      label,
      name,
      onButtonClick,
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
      withButton = false,
      withSpinButton = false,
      ...props
    }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const hasErrorMessage = !isEmpty(error)
    const isInError = hasErrorMessage || error === true
    const hasSuccessMessage = !isEmpty(success)
    const isSuccessful = (hasSuccessMessage || success === true) && !isInError

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

    let inputMode = props.inputMode ?? 'text'
    switch (type) {
      case 'email': {
        inputMode = 'email'
        break
      }

      case 'number': {
        inputMode = 'decimal'
        break
      }

      case 'search': {
        inputMode = 'search'
        break
      }

      case 'tel': {
        inputMode = 'tel'
        break
      }

      case 'url': {
        inputMode = 'url'
        break
      }

      default: {
        break
      }
    }

    const writable = !disabled && !readOnly
    const hasPrefix = Boolean(prefix)
    const hasSuffix = Boolean(suffix)

    const addendumClasses =
      'flex max-w-full absolute top-1/2 -translate-y-1/2 w-fit'

    const isButtonDisabled = isNil(buttonProps?.disabled)
      ? disabled || readOnly
      : buttonProps.disabled
    const button = withButton && (
      <Button
        className={cn(
          'rounded-0 border-1 border-l-0 hover:bg-primary hover:text-dark focus:bg-primary focus:text-dark active:border-l-0 active:!border-black active:shadow-hover',
          isButtonDisabled
            ? 'border-disabled hover:bg-disabled hover:text-light focus:bg-disabled focus:text-light active:border-1 active:border-l-0 active:!border-disabled active:shadow-none'
            : '',
          (disabled || readOnly) && !isButtonDisabled
            ? 'border-l-1 active:border-l-1'
            : '',
          buttonProps?.position === 'left'
            ? 'rounded-l-full'
            : 'rounded-r-full',
          buttonProps?.className,
        )}
        disabled={isButtonDisabled}
        variant="primary"
        onClick={onButtonClick}
        {...omit(
          ['variant', 'onClick', 'className', 'position', 'disabled'],
          buttonProps,
        )}
      />
    )

    return (
      <div
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          'flex w-full max-w-full flex-col gap-1 text-dark',
          `${PREFIX}-${GROUP_NAME}--${writable ? '' : 'not-'}-writable`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          readOnly && !disabled ? 'cursor-default' : '',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          isInError ? `${PREFIX}-${GROUP_NAME}--with-error` : '',
          !isEmpty(prefix) || !isEmpty(suffix)
            ? `${PREFIX}-${GROUP_NAME}--with-addendum`
            : '',
          isEmpty(prefix) ? '' : `${PREFIX}-${GROUP_NAME}--with-prefix`,
          isEmpty(suffix) ? '' : `${PREFIX}-${GROUP_NAME}--with-suffix`,
          readOnly ? `${PREFIX}-${GROUP_NAME}--readonly` : '',
          required ? `${PREFIX}-${GROUP_NAME}--required` : '',
          isSuccessful ? `${PREFIX}-${GROUP_NAME}--with-success` : '',
          props.className,
        )}
      >
        {isEmpty(label) ? (
          false
        ) : (
          <RxLabel
            asChild
            className={cj(
              `${PREFIX}-${GROUP_NAME}__label`,
              'text-dark',
              disabled
                ? `${PREFIX}-${GROUP_NAME}__label--disabled cursor-default`
                : 'cursor-pointer',
              required
                ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-required`
                : '',
            )}
            htmlFor={uniqueId}
          >
            <Typography element="label">{label}</Typography>
          </RxLabel>
        )}

        <Typography
          className={cj(
            `${PREFIX}-${GROUP_NAME}__wrapper`,
            'w-full max-w-full',
            fullWidth ? '' : 'sm:w-fit',
            withButton ? 'flex' : '',
          )}
          element="div"
        >
          {withButton && buttonProps?.position === 'left' && button}

          <div
            className={cj(
              `${PREFIX}-${GROUP_NAME}__icon-wrapper`,
              'relative',
              fullWidth ? 'w-full' : '',
            )}
          >
            {hasPrefix && (
              <div
                className={cj(
                  `${PREFIX}-${GROUP_NAME}__addendum ${PREFIX}-${GROUP_NAME}__addendum--prefix`,
                  addendumClasses,
                  writable ? '' : 'text-disabled',
                  withButton ? 'left-2' : 'left-1',
                )}
              >
                {prefix}
              </div>
            )}

            <input
              autoFocus={autoFocus}
              className={cj(
                `${PREFIX}-${GROUP_NAME}__input`,
                'box-border h-6 max-h-6 w-full min-w-6 max-w-full border-1 px-2 py-1 text-left outline-none transition-border-color duration-300 ease-out placeholder:text-placeholder',
                withButton
                  ? `${PREFIX}-${GROUP_NAME}__input--with-button ${PREFIX}-${GROUP_NAME}__input--with-button--${buttonProps?.position ?? 'right'}`
                  : 'rounded-sm',
                withButton && buttonProps?.position === 'left'
                  ? 'rounded-r-full'
                  : '',
                withButton &&
                  (isEmpty(buttonProps?.position) ||
                    buttonProps?.position === 'right')
                  ? 'rounded-l-full'
                  : '',
                writable
                  ? `${PREFIX}-${GROUP_NAME}__input--writable bg-white hover:border-normal hover:shadow-hover focus:border-primary focus:shadow-primary [&:is([data-state="open"])]:bg-primary [&:is([data-state="open"])]:shadow-primary`
                  : `${PREFIX}-${GROUP_NAME}__input--not-writable border-disabled bg-disabled-light placeholder:text-transparent`,
                disabled
                  ? `${PREFIX}-${GROUP_NAME}__input--disabled cursor-not-allowed text-disabled`
                  : 'text-dark',
                readOnly && !disabled
                  ? `${PREFIX}-${GROUP_NAME}__input--readonly cursor-default`
                  : '',
                fullWidth
                  ? `${PREFIX}-${GROUP_NAME}__input--full-width w-full`
                  : 'sm:w-unset',
                isInError
                  ? `${PREFIX}-${GROUP_NAME}__input--with-error border-error shadow-error`
                  : '',
                isSuccessful
                  ? `${PREFIX}-${GROUP_NAME}__input--with-success border-success shadow-success`
                  : '',
                writable && !isInError && !isSuccessful ? 'border-normal' : '',
                hasPrefix ? (withButton ? 'pl-6' : 'pl-5') : '',
                hasSuffix ? (withButton ? 'pr-6' : 'pr-5') : '',
                required ? `${PREFIX}-${GROUP_NAME}--required` : '',
                withSpinButton
                  ? ''
                  : '[appearance:textfield] [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden',
                withButton && isButtonDisabled && writable
                  ? 'border-r-disabled'
                  : '',
              )}
              disabled={disabled}
              {...(defaultValue === undefined ? {} : { defaultValue })}
              id={uniqueId}
              ref={ref}
              inputMode={inputMode}
              name={name || uniqueId}
              pattern={
                (props.pattern ?? type === 'number') ? '[0-9]*' : undefined
              }
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

            {hasSuffix && (
              <div
                className={cj(
                  `${PREFIX}-${GROUP_NAME}__addendum ${PREFIX}-${GROUP_NAME}__addendum--suffix`,
                  addendumClasses,
                  'right-1',
                  !writable && !isInError && !isSuccessful
                    ? 'text-disabled'
                    : '',
                  isInError ? 'text-error' : '',
                  isSuccessful ? 'text-success' : '',
                )}
              >
                {suffix}
              </div>
            )}
          </div>

          {withButton &&
            (isEmpty(buttonProps?.position) ||
              buttonProps?.position === 'right') &&
            button}
        </Typography>

        {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage && (
          <Typography
            className={cj(
              `${PREFIX}-${GROUP_NAME}__description`,
              'cursor-default text-dark',
            )}
            element="div"
            variant="caption-median"
          >
            {description}
          </Typography>
        )}

        {(hasErrorMessage || hasSuccessMessage) && (
          <Typography
            className={cj(
              `${PREFIX}-${GROUP_NAME}__message ${PREFIX}-${GROUP_NAME}__message--${
                isInError ? 'error' : 'success'
              }`,
              'cursor-default text-dark',
            )}
            element="div"
            variant="caption-median"
          >
            {isInError ? error : success}
          </Typography>
        )}
      </div>
    )
  },
)
InputText.displayName = 'InputText'

export default InputText
