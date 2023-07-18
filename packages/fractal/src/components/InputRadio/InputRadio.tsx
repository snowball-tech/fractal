import { UilCheck as CheckIcon } from '@iconscout/react-unicons'
import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxRadio from '@radix-ui/react-radio-group'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  inputRadio,
  inputRadioCheckmark,
  inputRadioContainer,
  inputRadioLabel,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'
import uniqueId from 'lodash/fp/uniqueId'
import { useContext } from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './InputRadio.recipe'
import type { InputRadioProps } from './InputRadio.types'
import { InputRadioVariantContext } from './InputRadioVariantContext'

/**
 * `InputRadio` component is used to allow a user to make a single choice
 * amongst a group of multiple choices.
 *
 * You must use this component with the `InputRadioGroup` component.
 */
export default function InputRadio({
  disabled = false,
  fullWidth = false,
  id = uniqueId('fractal-input-checkbox-'),
  label,
  value,
  ...props
}: InputRadioProps) {
  const variant = useContext(InputRadioVariantContext)

  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    inputRadioContainer(),
    `variant-${variant}`,
    props.className,
    disabled ? 'disabled' : '',
    fullWidth ? 'full-width' : '',
  )

  return (
    <div className={groupClassNames}>
      <RxRadio.Item
        id={id}
        className={inputRadio()}
        disabled={disabled}
        value={value}
        {...omit(['className'], props)}
      >
        <RxRadio.Indicator className={inputRadioCheckmark()}>
          <CheckIcon />
        </RxRadio.Indicator>
      </RxRadio.Item>

      <RxLabel
        className={cx(typography({ variant: 'body-1' }), inputRadioLabel())}
        htmlFor={id}
      >
        {label}
      </RxLabel>
    </div>
  )
}
