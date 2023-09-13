import { Label as RxLabel } from '@radix-ui/react-label'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  textarea,
  textareaContainer,
  textareaDescription,
  textareaLabel,
  textareaMessage,
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
import TextareaAutosize from 'react-textarea-autosize'

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
      id = uniqueId('fractal-textarea-'),
      label,
      maxRows,
      minRows = 1,
      name,
      onChange,
      onHeightChange,
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

    return (
      <div className={groupClassNames}>
        {!isEmpty(label) ? (
          <RxLabel
            className={cx(typography({ variant: 'body-1' }), textareaLabel())}
            htmlFor={id}
          >
            {label}
          </RxLabel>
        ) : (
          false
        )}

        <TextareaAutosize
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          className={cx(typography({ variant: 'body-1' }), textarea())}
          disabled={disabled}
          {...(defaultValue !== undefined ? { defaultValue } : {})}
          id={id}
          ref={ref}
          {...(maxRows !== undefined ? { maxRows } : {})}
          {...(minRows !== undefined ? { minRows } : {})}
          name={name || id}
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
