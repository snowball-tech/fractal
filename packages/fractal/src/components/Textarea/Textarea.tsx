import { Label as RxLabel } from '@radix-ui/react-label'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isNil from 'lodash/fp/isNil'
import omit from 'lodash/fp/omit'
import {
  type ChangeEvent,
  type FocusEvent,
  type ForwardedRef,
  forwardRef,
  useId,
} from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { twJoin, twMerge } from 'tailwind-merge'

import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Textarea.constants'
import type { TextareaProps } from './Textarea.types'

/**
 * `Textarea` component is used to allow the user to enter long textual values.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      autoFocus = false,
      defaultValue,
      description,
      disabled = false,
      error,
      fullWidth = false,
      icon,
      iconDisabled,
      id,
      label,
      maxRows,
      minRows = 1,
      name,
      onChange,
      onHeightChange,
      onIconClick,
      placeholder,
      readOnly = false,
      required = false,
      selectOnFocus = true,
      success,
      value,
      ...props
    }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const hasErrorMessage = !isEmpty(error)
    const isInError = hasErrorMessage || error === true
    const hasSuccessMessage = !isEmpty(success)
    const isSuccessful = (hasSuccessMessage || success === true) && !isInError

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (isFunction(onChange)) {
        onChange(event, event.target.value)
      }
    }

    const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
      if (isFunction(props.onFocus)) {
        props.onFocus(event)
      }

      if (selectOnFocus && event.target) {
        event.target.select()
      }
    }

    let isIconDisabled = disabled
    if (isFunction(onIconClick)) {
      isIconDisabled = isNil(iconDisabled) ? disabled : iconDisabled
    }

    const writable = !disabled && !readOnly

    const hasIcon = Boolean(icon)

    return (
      <div
        className={twMerge(
          `${PREFIX}-${GROUP_NAME}`,
          'flex w-full max-w-full flex-col gap-1 text-dark',
          `${PREFIX}-${GROUP_NAME}--${!writable ? 'not-' : ''}writable`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          readOnly && !disabled ? 'cursor-default' : '',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          isInError ? `${PREFIX}-${GROUP_NAME}--with-error` : '',
          readOnly ? `${PREFIX}-${GROUP_NAME}--readonly` : '',
          required ? `${PREFIX}-${GROUP_NAME}--required` : '',
          isSuccessful ? `${PREFIX}-${GROUP_NAME}--with-success` : '',
          icon ? `${PREFIX}-${GROUP_NAME}--with-icon` : '',
          isFunction(onIconClick) && icon
            ? `${PREFIX}-${GROUP_NAME}--with-action`
            : '',
          props.className,
        )}
      >
        {!isEmpty(label) ? (
          <RxLabel
            asChild
            className={twJoin(
              `${PREFIX}-${GROUP_NAME}__label`,
              required
                ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-["_*"]`
                : '',
            )}
            htmlFor={uniqueId}
          >
            <Typography element="label">{label}</Typography>
          </RxLabel>
        ) : (
          false
        )}

        <Typography
          className={twJoin(
            `${PREFIX}-${GROUP_NAME}__wrapper`,
            'relative w-full',
            fullWidth ? '' : 'sm:w-fit',
          )}
          element="div"
        >
          <TextareaAutosize
            autoFocus={autoFocus}
            className={twJoin(
              `${PREFIX}-${GROUP_NAME}__input`,
              'box-border min-h-6 w-full max-w-full resize-none rounded-sm border-1 px-2 py-[calc(theme(spacing.1)+theme(spacing.half)+theme(spacing.quarter))] text-left outline-none transition-border-color duration-300 ease-out placeholder:text-placeholder focus:cursor-text',
              writable
                ? `${PREFIX}-${GROUP_NAME}__input--writable bg-white hover:border-normal hover:shadow-hover focus:border-primary focus:shadow-primary [&:is([data-state="open"])]:bg-primary [&:is([data-state="open"])]:shadow-primary`
                : `${PREFIX}-${GROUP_NAME}__input--not-writable border-disabled bg-disabled-light`,
              disabled
                ? `${PREFIX}-${GROUP_NAME}__input--disabled cursor-not-allowed text-disabled`
                : 'text-dark',
              readOnly && !disabled
                ? `${PREFIX}-${GROUP_NAME}__input--readonly cursor-default`
                : '',
              fullWidth
                ? `${PREFIX}-${GROUP_NAME}__input--fullWidth`
                : 'sm:w-[unset]',
              isInError
                ? `${PREFIX}-${GROUP_NAME}__input--with-error border-error shadow-error`
                : '',
              isSuccessful
                ? `${PREFIX}-${GROUP_NAME}__input--with-success border-success shadow-success`
                : '',
              writable && !isInError && !isSuccessful ? 'border-normal' : '',
              required ? `${PREFIX}-${GROUP_NAME}--required` : '',
              hasIcon ? 'pr-6' : '',
            )}
            disabled={disabled}
            {...(defaultValue !== undefined ? { defaultValue } : {})}
            id={uniqueId}
            ref={ref}
            {...(maxRows !== undefined ? { maxRows } : {})}
            {...(minRows !== undefined ? { minRows } : {})}
            name={name || uniqueId}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            {...(isFunction(onHeightChange) ? { onHeightChange } : {})}
            // Be careful, arguments of `omit` from lodash FP are flipped!
            {...omit(['className', 'onFocus'], props)}
          />

          {hasIcon && (
            <div className="absolute bottom-1.5 right-0.5">
              {isFunction(onIconClick) && (
                <Button
                  className={twJoin(
                    `${PREFIX}-${GROUP_NAME}__action`,
                    'mb-0.5 text-grey-50',
                    isIconDisabled
                      ? `${PREFIX}-${GROUP_NAME}__action--disabled cursor-not-allowed !text-grey-70`
                      : 'hover:!text-dark',
                  )}
                  disabled={isIconDisabled}
                  icon={icon}
                  iconOnly
                  label=""
                  variant="text"
                  onClick={onIconClick}
                />
              )}

              {!isFunction(onIconClick) && (
                <div
                  className={twJoin(
                    `${PREFIX}-${GROUP_NAME}__icon`,
                    'mr-1.5 text-grey-50',
                    isIconDisabled || disabled
                      ? `${PREFIX}-${GROUP_NAME}__icon--disabled cursor-not-allowed !text-grey-70`
                      : '',
                  )}
                >
                  {icon}
                </div>
              )}
            </div>
          )}
        </Typography>

        {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage && (
          <Typography
            className={twJoin(
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
            className={twJoin(
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
Textarea.displayName = 'Textarea'

export default Textarea
