'use client'

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
import { AnimatePresence, motion } from 'framer-motion'
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

import { InputText } from '@/components/InputText'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Autocomplete.recipe'
import type { AutocompleteProps, CombinedRefs } from './Autocomplete.types'

const dropdownAnimation = {
  animate: { height: 'auto' },
  exit: { height: 0 },
  initial: { height: 0 },
  transition: { duration: 0.6 },
}

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

      if (isOpened && isFunction(onOpen)) {
        onOpen()
      }

      if (!isOpened && isFunction(onClose)) {
        onClose()
      }
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
        }
      }

    const handleDropdownPointerDownOutside: DismissableLayerProps['onPointerDownOutside'] =
      () => {
        if (inputRef?.current) {
          setKeepFocus(false)
          inputRef.current.blur()
        }
      }

    const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (isFunction(props.onBlur)) {
        props.onBlur(event)
      }

      if (keepFocus) {
        setKeepFocus(false)
        if (inputRef?.current) {
          inputRef.current.focus()
        }
      }
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
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

        event.preventDefault()

        if (!isOpen) {
          setKeepFocus(true)
          handleDropdownToggle(true)
        } else if (dropdownRef?.current) {
          dropdownRef.current.focus()
        }
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

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (props.onFocus) {
        props.onFocus(event)
      }

      if (!isOpen) {
        setKeepFocus(true)
      }
    }

    useEffect(() => {
      if (open === true || (Boolean(children) && open !== false)) {
        handleDropdownToggle(true)
      }
      // We don't want to reopen the toggle based on the `handleDropdownToggle`
      // function. So we don't include it in the dependencies.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children, open])

    return (
      <div ref={containerRef} className={groupClassNames}>
        {!isEmpty(label) ? (
          <RxLabel
            className={cx(
              typography({ variant: 'body-1' }),
              autocompleteLabel(),
            )}
            htmlFor={uniqueId}
          >
            {label}
          </RxLabel>
        ) : (
          false
        )}

        <InputText
          id={uniqueId}
          ref={inputRef}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          className={autocompleteInput()}
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
          {...omit(['className', 'onBlur'], props)}
        />

        <RxDropdownMenu.Root
          modal={false}
          open={isOpen}
          onOpenChange={handleDropdownToggle}
        >
          <RxDropdownMenu.Trigger
            className={css({
              borderBottom: 0,
              borderTop: 0,
              height: 0,
              maxHeight: 0,
              py: 0,
              visibility: 'hidden',
            })}
            onPointerDown={(event) => {
              event.preventDefault()
              event.stopPropagation()
            }}
          />

          <RxDropdownMenu.Portal>
            <AnimatePresence mode="popLayout">
              {isOpen && (
                <RxDropdownMenu.Content
                  ref={dropdownRef}
                  align="center"
                  asChild
                  className={cx(
                    `${PREFIX}-${GROUP_NAME}-dropdown`,
                    typography({ variant: 'body-1' }),
                    selectDropdown(),
                    autocompleteDropdown(),
                    ...(dropdown?.className?.split(' ') || []),
                    !children ? css({ visibility: 'hidden' }) : '',
                  )}
                  loop
                  side="bottom"
                  style={{
                    display: undefined,
                  }}
                  onFocus={handleFocus}
                  onInteractOutside={handleDropdownInteractOutside}
                  onKeyDown={handleDropdownKeyDown}
                  onPointerDownOutside={handleDropdownPointerDownOutside}
                  {...omit(['className'], dropdown)}
                >
                  <motion.div {...dropdownAnimation}>
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
                        className={cx(
                          `${PREFIX}-scrollarea-scrollbar-y`,
                          selectDropdownScrollbar(),
                        )}
                        orientation="vertical"
                      >
                        <RxScrollArea.Thumb
                          className={selectDropdownScrollbarThumbs()}
                        />
                      </RxScrollArea.Scrollbar>
                    </RxScrollArea.Root>
                  </motion.div>
                </RxDropdownMenu.Content>
              )}
            </AnimatePresence>
          </RxDropdownMenu.Portal>
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
