import { UilAngleDown as AngleDownIcon } from '@iconscout/react-unicons'
import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxSelect from '@radix-ui/react-select'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  selectContainer,
  selectDescription,
  selectDropdown,
  selectLabel,
  selectTrigger,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import uniqueId from 'lodash/fp/uniqueId'

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
  id = uniqueId('fractal-select-'),
  label,
  name,
  onOpenChange,
  onValueChange,
  open,
  placeholder,
  required = false,
  value,
  ...props
}: SelectProps) {
  const groupClassNames = cx(
    'group',
    selectContainer(),
    props.className,
    disabled ? 'disabled' : '',
    required ? 'required' : '',
  )

  const dropdownClassNames = cx(
    'group',
    selectDropdown(),
    disabled ? 'disabled' : '',
    required ? 'required' : '',
  )

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
        {...(isFunction(onValueChange)
          ? {
              onValueChange: (newValue: string) => onValueChange(newValue),
            }
          : {})}
        {...(isFunction(onOpenChange)
          ? {
              onOpenChange: (isOpened: boolean) => onOpenChange(isOpened),
            }
          : {})}
        // Be careful, arguments of `omit` from lodash FP are flipped!
        {...omit(['autoComplete', 'className', 'dir'], props)}
      >
        <RxSelect.Trigger
          className={cx(typography({ variant: 'body-1' }), selectTrigger())}
        >
          {isEmpty(displayedValue) ? (
            <RxSelect.Value placeholder={placeholder} />
          ) : (
            <RxSelect.Value placeholder={placeholder}>
              {displayedValue}
            </RxSelect.Value>
          )}
          <RxSelect.Icon>
            <AngleDownIcon />
          </RxSelect.Icon>
        </RxSelect.Trigger>

        <RxSelect.Portal>
          <RxSelect.Content
            align="center"
            className={dropdownClassNames}
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
