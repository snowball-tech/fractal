'use client'

import { UilAngleDown as AngleDownIcon } from '@iconscout/react-unicons'
import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxSelect from '@radix-ui/react-select'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  selectContainer,
  selectDescription,
  selectDropdown,
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
            className={cx('fractal-select-dropdown', selectDropdown())}
            position="popper"
            side="bottom"
            {...dropdown}
          >
            <RxSelect.ScrollUpButton />
            <RxSelect.Viewport>{items}</RxSelect.Viewport>
            <RxSelect.ScrollDownButton />
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
