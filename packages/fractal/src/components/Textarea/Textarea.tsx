import { Label as RxLabel } from '@radix-ui/react-label'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  textarea,
  textareaContainer,
  textareaDescription,
  textareaIcon,
  textareaIconWrapper,
  textareaLabel,
  textareaMessage,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
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

import { Button } from '@/components/Button'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Textarea.recipe'
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

    const groupClassNames = cx(
      `${PREFIX}-${GROUP_NAME}`,
      textareaContainer(),
      props.className,
      disabled ? 'disabled' : '',
      fullWidth ? 'full-width' : '',
      isInError ? 'invalid' : '',
      readOnly ? 'readonly' : '',
      required ? 'required' : '',
      isSuccessful ? 'valid' : '',
      icon ? 'with-icon' : '',
      isFunction(onIconClick) && icon ? 'with-action' : '',
    )

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

    return (
      <div className={groupClassNames}>
        {!isEmpty(label) ? (
          <RxLabel
            className={cx(typography({ variant: 'body-1' }), textareaLabel())}
            htmlFor={uniqueId}
          >
            {label}
          </RxLabel>
        ) : (
          false
        )}

        <div className={textareaIconWrapper()}>
          <TextareaAutosize
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            className={cx(typography({ variant: 'body-1' }), textarea())}
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

          {icon && isFunction(onIconClick) && (
            <Button
              className={cx(textareaIcon(), isIconDisabled ? 'disabled' : '')}
              disabled={isIconDisabled}
              icon={icon}
              iconOnly
              label=""
              variant="text"
              onClick={onIconClick}
            />
          )}

          {icon && !isFunction(onIconClick) && (
            <div
              className={cx(textareaIcon(), isIconDisabled ? 'disabled' : '')}
            >
              {icon}
            </div>
          )}
        </div>

        {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage ? (
          <div
            className={cx(
              typography({ variant: 'caption-median' }),
              textareaDescription(),
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
              textareaMessage(),
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
Textarea.displayName = 'Textarea'

export default Textarea
