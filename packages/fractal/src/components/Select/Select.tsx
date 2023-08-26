'use client'

import AngleDownIcon from '@iconscout/react-unicons/dist/icons/uil-angle-down'
import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxScrollArea from '@radix-ui/react-scroll-area'
import * as RxSelect from '@radix-ui/react-select'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  selectContainer,
  selectDescription,
  selectDropdown,
  selectDropdownScrollViewport,
  selectDropdownScrollbar,
  selectDropdownScrollbarThumbs,
  selectIndicator,
  selectLabel,
  selectTrigger,
  selectValue,
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
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Select.recipe'
import type { CombinedRefs, SelectProps } from './Select.types'

/**
 * `Select` component is used to offer the user choices they can select.
 */
export const Select = forwardRef<CombinedRefs, SelectProps>(
  (
    {
      autoFocus = false,
      children: items,
      defaultValue,
      description,
      disabled = false,
      displayedValue,
      dropdown = {},
      fullWidth = false,
      id = uniqueId('fractal-select-'),
      label,
      name,
      onClose,
      onOpen,
      onSelect,
      open,
      placeholder,
      readOnly = false,
      required = false,
      value,
      ...props
    }: SelectProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const triggerRef = useRef<HTMLButtonElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      get container() {
        return containerRef?.current ?? null
      },

      get dropdown() {
        return dropdownRef?.current ?? null
      },

      get trigger() {
        return triggerRef?.current ?? null
      },
    }))

    const [isOpen, setIsOpen] = useState(open === true)
    useEffect(() => {
      setIsOpen(open === true)
    }, [open])

    const groupClassNames = cx(
      `${PREFIX}-${GROUP_NAME}`,
      selectContainer(),
      props.className,
      disabled ? 'disabled' : '',
      fullWidth ? 'full-width' : '',
      readOnly ? 'readonly' : '',
      required ? 'required' : '',
      isOpen ? 'opened' : 'closed',
    )

    const handleSelect = (newValue: string) => {
      if (isFunction(onSelect)) {
        onSelect(newValue)
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

    const handlePointerDownOutside: RxSelect.DismissableLayerProps['onPointerDownOutside'] =
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

    return (
      <div ref={containerRef} className={groupClassNames}>
        {!isEmpty(label) ? (
          <RxLabel
            className={cx(typography({ variant: 'body-1' }), selectLabel())}
            htmlFor={id}
            onClick={() => setIsOpen(true)}
          >
            {label}
          </RxLabel>
        ) : (
          false
        )}

        <RxSelect.Root
          {...(defaultValue !== undefined ? { defaultValue } : {})}
          defaultOpen={autoFocus}
          {...(props.dir !== undefined
            ? { dir: props.dir as RxSelect.Direction }
            : {})}
          disabled={disabled || readOnly || false}
          name={name || id}
          open={isOpen}
          required={required}
          {...(value !== undefined ? { value } : {})}
          onOpenChange={handleDropdownToggle}
          onValueChange={handleSelect}
          // Be careful, arguments of `omit` from lodash FP are flipped!
          {...omit(['autoComplete', 'className', 'dir'], props)}
        >
          <RxSelect.Trigger
            id={id}
            ref={triggerRef}
            className={cx(
              `${PREFIX}-${GROUP_NAME}-trigger`,
              typography({ variant: 'body-1' }),
              selectTrigger(),
            )}
          >
            <div className={selectValue()}>
              {isEmpty(displayedValue) ? (
                <RxSelect.Value placeholder={placeholder} />
              ) : (
                <RxSelect.Value placeholder={placeholder}>
                  {displayedValue}
                </RxSelect.Value>
              )}
            </div>

            <RxSelect.Icon className={selectIndicator()}>
              <AngleDownIcon />
            </RxSelect.Icon>
          </RxSelect.Trigger>

          <RxSelect.Portal>
            <RxSelect.Content
              ref={dropdownRef}
              align="center"
              className={cx(
                `${PREFIX}-${GROUP_NAME}-dropdown`,
                selectDropdown(),
                ...(dropdown?.className?.split(' ') || []),
              )}
              position="popper"
              side="bottom"
              style={{
                display: undefined,
              }}
              onPointerDownOutside={handlePointerDownOutside}
              {...omit(['className'], dropdown)}
            >
              <RxScrollArea.Root
                {...(props.dir !== undefined
                  ? { dir: props.dir as RxScrollArea.Direction }
                  : {})}
                type="hover"
              >
                <RxSelect.Viewport asChild>
                  <RxScrollArea.Viewport
                    className={selectDropdownScrollViewport()}
                    style={{
                      overflowY: undefined,
                    }}
                  >
                    {items}
                  </RxScrollArea.Viewport>
                </RxSelect.Viewport>

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
            </RxSelect.Content>
          </RxSelect.Portal>
        </RxSelect.Root>

        {!isEmpty(description) ? (
          <div
            className={cx(
              typography({ variant: 'caption-median' }),
              selectDescription(),
            )}
          >
            {description}
          </div>
        ) : (
          false
        )}
      </div>
    )
  },
)
Select.displayName = 'Select'

export default Select
