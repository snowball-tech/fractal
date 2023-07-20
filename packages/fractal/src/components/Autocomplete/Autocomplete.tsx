'use client'

import { composeRefs } from '@radix-ui/react-compose-refs'
import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxScrollArea from '@radix-ui/react-scroll-area'
import type { DismissableLayerProps } from '@radix-ui/react-select'
import { css, cx } from '@snowball-tech/fractal-panda/css'
import {
  autocompleteContainer,
  autocompleteDescription,
  autocompleteDropdown,
  autocompleteInput,
  autocompleteLabel,
  autocompleteMessage,
  selectDropdown,
  selectDropdownScrollViewport,
  selectDropdownScrollbar,
  selectDropdownScrollbarThumbs,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import uniqueId from 'lodash/fp/uniqueId'
import {
  type ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'

import { InputText } from '@/components/InputText'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Autocomplete.recipe'
import type { AutocompleteProps } from './Autocomplete.types'

/**
 * `Autocomplete` component is used to allow the user to enter text and offer
 * them suggestion as they type.
 */
export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
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
      icon,
      id = uniqueId('fractal-autocomplete-'),
      label,
      name,
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
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const combinedRef = composeRefs(ref, inputRef)
    const containerRef = useRef<HTMLDivElement>(null)

    const [keepFocus, setKeepFocus] = useState(false)
    const [isOpen, setIsOpen] = useState(
      open === true || (Boolean(children) && open !== false),
    )

    useEffect(() => {
      setIsOpen(open === true || (Boolean(children) && open !== false))
    }, [open, children])

    const hasErrorMessage = !isEmpty(error)
    const hasSuccessMessage = !isEmpty(success)

    const isInError = hasErrorMessage
    const isSuccessful = hasSuccessMessage && !isInError

    const groupClassNames = cx(
      `${PREFIX}-${GROUP_NAME}`,
      autocompleteContainer(),
      props.className,
      disabled ? 'disabled' : '',
      fullWidth ? 'full-width' : '',
      isInError ? 'error' : '',
      readOnly ? 'readonly' : '',
      required ? 'required' : '',
      isSuccessful ? 'success' : '',
    )

    const handleInputChange = (newValue: string) => {
      if (!isOpen) {
        setKeepFocus(true)
      }

      if (isFunction(onInputChange)) {
        onInputChange(newValue)
      }

      if (isFunction(onChange)) {
        onChange(newValue)
      }
    }

    const handleDropdownToggle = (isOpened: boolean) => {
      setIsOpen(isOpened)

      if (isOpened && isFunction(onOpen)) {
        onOpen()
      }

      if (!isOpened && isFunction(onClose)) {
        onClose()
      }
    }

    const handleInteractOutside: DismissableLayerProps['onInteractOutside'] = (
      event,
    ) => {
      const { target } = event
      if (target === window || target === null || target === undefined) {
        return
      }

      if (containerRef?.current?.contains(target as Element)) {
        event.preventDefault()
      }
    }

    const handleInputBlur = () => {
      if (keepFocus) {
        if (inputRef.current) {
          inputRef.current.focus()
        }

        setKeepFocus(false)
      }
    }

    return (
      <div ref={containerRef} className={groupClassNames}>
        {!isEmpty(label) ? (
          <RxLabel
            className={cx(
              typography({ variant: 'body-1' }),
              autocompleteLabel(),
            )}
            htmlFor={id}
          >
            {label}
          </RxLabel>
        ) : (
          false
        )}

        <InputText
          id={id}
          ref={combinedRef}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          className={autocompleteInput()}
          {...(defaultValue !== undefined ? { defaultValue } : {})}
          disabled={disabled}
          error={hasErrorMessage}
          fullWidth={fullWidth}
          name={name || id}
          prefix={icon}
          {...(placeholder !== undefined ? { placeholder } : {})}
          readOnly={readOnly}
          required={required}
          success={isSuccessful}
          type="text"
          {...(value !== undefined ? { value } : {})}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
        />

        <RxDropdownMenu.Root
          modal={false}
          open={isOpen}
          onOpenChange={handleDropdownToggle}
        >
          <RxDropdownMenu.Trigger
            className={css({ maxHeight: 0, visibility: 'hidden' })}
          />
          <RxDropdownMenu.Content
            align="center"
            className={cx(
              `${PREFIX}-${GROUP_NAME}-dropdown`,
              typography({ variant: 'body-1' }),
              selectDropdown(),
              autocompleteDropdown(),
              ...(dropdown?.className?.split(' ') || []),
            )}
            loop
            side="bottom"
            onInteractOutside={handleInteractOutside}
            {...omit(['className'], dropdown)}
          >
            <RxScrollArea.Root
              {...(props.dir !== undefined
                ? { dir: props.dir as RxScrollArea.Direction }
                : {})}
              type="hover"
            >
              <RxScrollArea.Viewport
                className={selectDropdownScrollViewport()}
                style={{
                  overflowY: undefined,
                }}
              >
                {children}
              </RxScrollArea.Viewport>

              <RxScrollArea.Scrollbar
                className={selectDropdownScrollbar()}
                orientation="vertical"
              >
                <RxScrollArea.Thumb
                  className={selectDropdownScrollbarThumbs()}
                />
              </RxScrollArea.Scrollbar>
            </RxScrollArea.Root>
          </RxDropdownMenu.Content>
        </RxDropdownMenu.Root>

        {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage ? (
          <div
            className={cx(
              typography({ variant: 'caption-median' }),
              autocompleteDescription(),
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
              autocompleteMessage(),
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
Autocomplete.displayName = 'Autocomplete'

export default Autocomplete
