'use client'

import { UilAngleDown as AngleDownIcon } from '@iconscout/react-unicons'
import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxScrollArea from '@radix-ui/react-scroll-area'
import * as RxSelect from '@radix-ui/react-select'
import { css, cx } from '@snowball-tech/fractal-panda/css'
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
import { useState } from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Select.recipe'
import type { SelectProps } from './Select.types'

/**
 * `Select` component is used to offer the user choices they can select.
 */
export default function Select({
  autoComplete,
  autoFocus = false,
  children: items,
  defaultValue,
  description,
  dir,
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
  required = false,
  value,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(open)

  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    selectContainer(),
    props.className,
    disabled ? 'disabled' : '',
    fullWidth ? 'full-width' : '',
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

  return (
    <div className={groupClassNames}>
      {!isEmpty(label) ? (
        <RxLabel
          className={cx(typography({ variant: 'body-1' }), selectLabel())}
          htmlFor={id}
        >
          {label}
        </RxLabel>
      ) : (
        false
      )}

      <RxSelect.Root
        {...(defaultValue !== undefined ? { defaultValue } : {})}
        defaultOpen={autoFocus}
        {...(autoComplete !== undefined ? { autoComplete } : {})}
        {...(dir !== undefined ? { dir } : {})}
        disabled={disabled}
        name={name || id}
        required={required}
        {...(open !== undefined ? { open } : {})}
        {...(value !== undefined ? { value } : {})}
        onOpenChange={handleDropdownToggle}
        onValueChange={handleSelect}
        // Be careful, arguments of `omit` from lodash FP are flipped!
        {...omit(['autoComplete', 'className', 'dir'], props)}
      >
        <RxSelect.Trigger
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
            align="center"
            className={cx(
              `${PREFIX}-${GROUP_NAME}-dropdown`,
              selectDropdown(),
              ...(dropdown?.className?.split(' ') || []),
            )}
            position="popper"
            side="bottom"
            {...omit(['className'], dropdown)}
          >
            <RxScrollArea.Root
              className={css({
                height: '100%',
                overflow: 'hidden',
                width: '100%',
              })}
              {...(dir !== undefined ? { dir } : {})}
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
                className={selectDropdownScrollbar()}
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
}
