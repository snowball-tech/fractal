'use client'

import { Label as RxLabel } from '@radix-ui/react-label'
import type { DismissableLayerProps } from '@radix-ui/react-select'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import {
  type ChangeEvent,
  type ForwardedRef,
  type KeyboardEvent,
  type MouseEvent,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { Dropdown } from '@/components/Dropdown/Dropdown'
import { InputText } from '@/components/InputText'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Autocomplete.constants'
import type { AutocompleteProps, CombinedRefs } from './Autocomplete.types'

/**
 * `Autocomplete` component is used to allow the user to enter text and offer
 * them suggestion as they type.
 */
export const Autocomplete = forwardRef<CombinedRefs, AutocompleteProps>(
  (
    {
      autoFocus = false,
      children,
      defaultValue,
      description,
      disabled = false,
      dropdown = {},
      error,
      fullWidth = false,
      id,
      label,
      name,
      onBlur,
      onChange,
      onClose,
      onInputChange,
      onOpen,
      open,
      placeholder,
      readOnly = false,
      required = false,
      success,
      value,
      ...props
    }: AutocompleteProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      get container() {
        return containerRef?.current ?? null
      },

      get dropdown() {
        return dropdownRef?.current ?? null
      },

      get input() {
        return inputRef?.current ?? null
      },
    }))

    const [keepFocus, setKeepFocus] = useState(false)

    const [isOpen, setIsOpen] = useState(
      open === true || (Boolean(children) && open !== false),
    )
    useEffect(() => {
      setIsOpen(open === true)
    }, [open])

    const hasErrorMessage = !isEmpty(error)
    const hasSuccessMessage = !isEmpty(success)

    const isInError = hasErrorMessage
    const isSuccessful = hasSuccessMessage && !isInError

    const handleInputChange = (
      event: ChangeEvent<HTMLInputElement>,
      newValue: string,
    ) => {
      if (!isOpen) {
        setKeepFocus(true)
      }

      if (isFunction(onInputChange)) {
        onInputChange(event, newValue)
      }

      if (isFunction(onChange)) {
        onChange(event, newValue)
      }
    }

    const handleDropdownToggle = (isOpened: boolean) => {
      setIsOpen(isOpened)
    }

    const handleDropdownInteractOutside: DismissableLayerProps['onInteractOutside'] =
      (event) => {
        const { target } = event
        if (target === window || target === null || target === undefined) {
          return
        }

        if (
          containerRef?.current?.contains(target as Element) ||
          dropdownRef?.current?.contains(target as Element)
        ) {
          event.preventDefault()
        } else if (isOpen && isFunction(onBlur)) {
          onBlur()
        }
      }

    const handleDropdownPointerDownOutside: DismissableLayerProps['onPointerDownOutside'] =
      () => {
        if (inputRef?.current) {
          setKeepFocus(false)
          inputRef.current.blur()
        }
      }

    const handleInputBlur = () => {
      if (keepFocus) {
        setKeepFocus(false)
        if (inputRef?.current) {
          inputRef.current.focus()
        }
      } else if (isFunction(onBlur) && !isOpen) {
        onBlur()
      }
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (isFunction(props.onKeyDown)) {
        props.onKeyDown(event)
      }

      if (event.key === 'Escape') {
        event.preventDefault()

        if (isOpen) {
          handleDropdownToggle(false)
        } else if (inputRef?.current) {
          setKeepFocus(false)
          inputRef.current.blur()
        }
      } else if (event.key === 'Enter') {
        event.preventDefault()

        if (isFunction(onChange)) {
          onChange(null, String(value) ?? '')
        }
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        if (!children) {
          return
        }

        if (!isOpen) {
          setKeepFocus(true)
          handleDropdownToggle(true)
        } else if (dropdownRef?.current) {
          dropdownRef.current.focus()
        }

        event.preventDefault()
      }
    }

    const handleDropdownKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Escape') {
        if (inputRef?.current) {
          if (document.activeElement === inputRef.current) {
            setKeepFocus(true)
          }
          inputRef.current.focus()
        }
      }
    }

    const handleTriggerClick = (event: MouseEvent<HTMLInputElement>) => {
      if (props.onClick) {
        props.onClick(event)
      }

      if (inputRef?.current) {
        if (document.activeElement !== inputRef.current) {
          inputRef.current.focus()
        }
      }

      if (children && !isOpen) {
        if (document.activeElement === inputRef.current) {
          setKeepFocus(true)
        }

        handleDropdownToggle(true)
      }
    }

    const writable = !disabled && !readOnly

    return (
      <div
        ref={containerRef}
        className={twMerge(
          `${PREFIX}-${GROUP_NAME}`,
          'flex w-full max-w-full flex-col',
          `${PREFIX}-${GROUP_NAME}--${!writable ? 'not-' : ''}writable`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          isInError ? `${PREFIX}-${GROUP_NAME}--with-error` : '',
          readOnly ? `${PREFIX}-${GROUP_NAME}--readonly` : '',
          required ? `${PREFIX}-${GROUP_NAME}--required` : '',
          isSuccessful ? `${PREFIX}-${GROUP_NAME}--with-success` : '',
          props.className,
        )}
      >
        {!isEmpty(label) && (
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
        )}

        <InputText
          id={uniqueId}
          ref={inputRef}
          autoFocus={autoFocus}
          className={twJoin(`${PREFIX}-${GROUP_NAME}__input`, 'my-1')}
          {...(defaultValue !== undefined ? { defaultValue } : {})}
          disabled={disabled}
          error={hasErrorMessage}
          fullWidth={fullWidth}
          name={name || uniqueId}
          {...(placeholder !== undefined ? { placeholder } : {})}
          readOnly={readOnly}
          required={required}
          selectOnFocus={!keepFocus}
          success={isSuccessful}
          type="text"
          {...(value !== undefined ? { value } : {})}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          onClick={handleTriggerClick}
          onKeyDown={handleInputKeyDown}
          {...omit(['className', 'onBlur', 'onKeyDown'], props)}
        />

        <Dropdown
          className={twJoin(
            `${PREFIX}-${GROUP_NAME}__dropdown`,
            'invisible h-0 max-h-0 w-full',
            isOpen ? '-mt-3 mb-3' : '',
          )}
          disabled={disabled}
          dropdown={{ ...dropdown, align: 'center' }}
          {...(isFunction(onClose) ? { onClose } : {})}
          {...(isFunction(onOpen) ? { onOpen } : {})}
          open={isOpen}
          side="bottom"
          width="trigger"
          withIndicator={false}
          onInteractOutside={handleDropdownInteractOutside}
          onKeyDown={handleDropdownKeyDown}
          onPointerDownOutside={handleDropdownPointerDownOutside}
        >
          {children}
        </Dropdown>

        {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage && (
          <Typography
            className={`${PREFIX}-${GROUP_NAME}__description`}
            variant="caption-median"
          >
            {description}
          </Typography>
        )}

        {(hasErrorMessage || hasSuccessMessage) && (
          <Typography
            className={`${PREFIX}-${GROUP_NAME}__message ${PREFIX}-${GROUP_NAME}__message--${
              isInError ? 'error' : 'success'
            }`}
            value="caption-median"
          >
            {isInError ? error : success}
          </Typography>
        )}
      </div>
    )
  },
)
Autocomplete.displayName = 'Autocomplete'

export default Autocomplete
