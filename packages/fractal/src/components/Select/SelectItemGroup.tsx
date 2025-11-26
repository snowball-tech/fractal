'use client'

import * as RxSelect from '@radix-ui/react-select'

import { useContext } from 'react'
import { onlyText } from 'react-children-utilities'

import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import type { SelectItemGroupProps } from './Select.types'

import { GROUP_NAME } from './Select.constants'
import { SelectContext } from './SelectContext'
import { SelectGroupContext } from './SelectGroupContext'

/**
 * `SelectItemGroup` component is used to group `SelectItem` components inside
 * of the dropdown of a `Select` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/select#group for more
 * information.
 */
export const SelectItemGroup = ({
  children,
  disabled = false,
  label,
  labelElement,
  rainbow = true,
  ...props
}: SelectItemGroupProps) => {
  const { disabled: selectDisabled, rainbow: selectRainbow } =
    useContext(SelectContext)

  const isDisabled = disabled || selectDisabled
  const isRainbow = rainbow && selectRainbow

  const textLabel = isString(label) ? label : onlyText(label)

  return (
    <RxSelect.Group
      aria-label={textLabel}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item-group`,
        'p-2 py-0',
        isDisabled ? `${PREFIX}-${GROUP_NAME}__item-group--disabled` : '',
        props.className,
      )}
      title={textLabel}
      {...omit(['className'], props)}
    >
      <RxSelect.Label
        asChild
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__label`,
          'block py-2',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__label--disabled text-disabled`
            : 'cursor-default text-placeholder',
        )}
      >
        <Typography
          element={labelElement || (isString(label) ? 'label' : 'div')}
        >
          {label}
        </Typography>
      </RxSelect.Label>

      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__items`,
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__items--disabled`
            : isRainbow
              ? alternatingBgColorLightClassNames
              : '',
        )}
        element="div"
      >
        <SelectGroupContext.Provider
          value={{ disabled: isDisabled, rainbow: isRainbow }}
        >
          {children}
        </SelectGroupContext.Provider>
      </Typography>
    </RxSelect.Group>
  )
}
SelectItemGroup.displayName = 'SelectItemGroup'

export default SelectItemGroup
