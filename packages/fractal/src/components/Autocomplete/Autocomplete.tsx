'use client'

import { Label as RxLabel } from '@radix-ui/react-label'
import type { DismissableLayerProps } from '@radix-ui/react-select'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import {
  type ChangeEvent,
  type FocusEvent,
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

import { Dropdown } from '@/components/Dropdown/Dropdown'
import type { CombinedRefs as DropdownCombinedRefs } from '@/components/Dropdown/Dropdown.types'
import { InputText } from '@/components/InputText'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Autocomplete.constants'
import type { AutocompleteProps, CombinedRefs } from './Autocomplete.types'

/**
 * `Autocomplete` component is used to allow the user to enter text and offer
 * them suggestion as they type.
 *
 * See
 * https://fractal.snowball.xyz/?path=/docs/molecules-dropdown--documentation
 * for more information.
 */
const Autocomplete = forwardRef<CombinedRefs, AutocompleteProps>(
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
    const dropdownRef = useRef<DropdownCombinedRefs>(null)

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

    const hasChildren = Boolean(children)

    const [keepFocus, setKeepFocus] = useState(false)

    const [isOpen, setIsOpen] = useState(
      open === true || (hasChildren && open !== false),
    )

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

    useEffect(() => {
      if (open === true || (hasChildren && open !== false)) {
        handleDropdownToggle(true)
      } else {
        handleDropdownToggle(false)
      }
      // We don't want to reopen the toggle based on the `handleOpenChange`
      // function. So we don't include it in the dependencies.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children, open])

    const handleDropdownInteractOutside: DismissableLayerProps['onInteractOutside'] =
      (event) => {
        const { target } = event
        if (target === window || target === null || target === undefined) {
          return
        }

        if (
          containerRef?.current?.contains(target as Element) ||
          dropdownRef?.current?.container?.contains(target as Element) ||
          dropdownRef?.current?.dropdown?.contains(target as Element)
        ) {
          event.preventDefault()
        } else if (isOpen && isFunction(onBlur)) {
          inputRef.current?.blur()
        }
      }

    const handleDropdownPointerDownOutside: DismissableLayerProps['onPointerDownOutside'] =
      (event) => {
        if (isFunction(dropdown.onPointerDownOutside)) {
          dropdown.onPointerDownOutside(event)
        }

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
      event.stopPropagation()

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
        if (!hasChildren) {
          return
        }

        if (!isOpen) {
          setKeepFocus(true)
          handleDropdownToggle(true)
        } else if (dropdownRef?.current) {
          dropdownRef.current.dropdown?.focus()
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
        }
      }
    }

    const handleInputClick = (event: MouseEvent<HTMLInputElement>) => {
      if (props.onClick) {
        props.onClick(event)
      }

      if (inputRef?.current) {
        if (document.activeElement !== inputRef.current) {
          inputRef.current.focus()
        }
      }

      if (hasChildren) {
        if (document.activeElement === inputRef.current && !isOpen) {
          setKeepFocus(true)
        }

        handleDropdownToggle(true)
      }
    }

    const handleInputFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (props.onFocus) {
        props.onFocus(event)
      }

      if (hasChildren) {
        if (!isOpen) {
          setKeepFocus(true)
        }
        handleDropdownToggle(true)
      }
    }

    const writable = !disabled && !readOnly

    return (
      <div
        ref={containerRef}
        className={cn(
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
            className={cj(
              `${PREFIX}-${GROUP_NAME}__label`,
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

        <Dropdown
          ref={dropdownRef}
          disabled={disabled}
          dropdown={{
            align: 'end',
            className: cn(
              `${PREFIX}-${GROUP_NAME}__dropdown`,
              dropdown.className,
            ),
            onPointerDownOutside: handleDropdownPointerDownOutside,
            style: { marginTop: 0 },
            ...omit(['className', 'onPointerDownOutside'], dropdown),
          }}
          fullWidth={fullWidth}
          {...(isFunction(onClose) ? { onClose } : {})}
          {...(isFunction(onOpen) ? { onOpen } : {})}
          open={isOpen}
          toggleOnTriggerClick={false}
          trigger={
            <InputText
              id={uniqueId}
              ref={inputRef}
              autoFocus={autoFocus}
              className={cj(`${PREFIX}-${GROUP_NAME}__input`, 'my-1')}
              {...(defaultValue !== undefined ? { defaultValue } : {})}
              disabled={disabled}
              error={hasErrorMessage}
              fullWidth={fullWidth}
              name={name || uniqueId}
              {...(placeholder !== undefined ? { placeholder } : {})}
              readOnly={readOnly}
              required={required}
              selectOnFocus={false}
              success={isSuccessful}
              type="text"
              {...(value !== undefined ? { value } : {})}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              onClick={handleInputClick}
              onFocus={handleInputFocus}
              onKeyDown={handleInputKeyDown}
              {...omit(
                ['className', 'onBlur', 'onKeyDown', 'onFocus', 'onClick'],
                props,
              )}
            />
          }
          width="trigger"
          withIndicator={false}
          onInteractOutside={handleDropdownInteractOutside}
          onKeyDown={handleDropdownKeyDown}
          onMenuOpenChange={handleDropdownToggle}
        >
          {children}
        </Dropdown>

        {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage && (
          <Typography
            className={cj(
              `${PREFIX}-${GROUP_NAME}__description`,
              'cursor-default text-dark',
            )}
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
