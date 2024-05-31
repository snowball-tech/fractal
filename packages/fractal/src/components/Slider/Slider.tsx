import * as RxSlider from '@radix-ui/react-slider'
import isFunction from 'lodash/fp/isFunction'
import isNumber from 'lodash/fp/isNumber'
import omit from 'lodash/fp/omit'
import range from 'lodash/fp/range'
import { useId } from 'react'

import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME, Orientations } from './Slider.constants'
import type { SliderProps } from './Slider.types'

/**
 * `Slider` component is used to display a sliderion to the user.
 *
 * See https://www.radix-ui.com/primitives/docs/components/slider for more
 * information.
 */
export const Slider = ({
  defaultValue,
  disabled = false,
  id,
  inverted = false,
  label,
  max = 100,
  min = 0,
  minStepsBetweenThumbs = 0,
  name,
  onValueChange,
  onValueCommit,
  orientation = Orientations.Horizontal,
  step = 1,
  value,
  ...props
}: SliderProps) => {
  const generatedId = useId()
  const uniqueId = (id ?? generatedId) || generatedId

  const valueToUse = value || defaultValue
  const length = isNumber(valueToUse) ? 1 : valueToUse?.length ?? 1
  const thumbsRange = range(0)(length)

  const handleValueChange = (newValue: number[]) => {
    if (!isFunction(onValueChange)) {
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onValueChange(length === 1 ? newValue[0]! : newValue)
  }

  const handleValueCommit = (committedValue: number[]) => {
    if (!isFunction(onValueCommit)) {
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onValueCommit(length === 1 ? committedValue[0]! : committedValue)
  }

  return (
    <RxSlider.Root
      id={uniqueId}
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        'relative box-border flex rounded-full border-1 border-normal',
        orientation === Orientations.Vertical
          ? 'h-full max-h-full w-1 flex-col justify-center'
          : 'h-1 w-full max-w-full items-center',
        props.className,
      )}
      defaultValue={isNumber(defaultValue) ? [defaultValue] : defaultValue}
      disabled={disabled}
      inverted={inverted}
      max={max}
      min={min}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
      name={name || uniqueId}
      orientation={orientation}
      step={step}
      value={isNumber(value) ? [value] : value}
      onValueChange={handleValueChange}
      onValueCommit={handleValueCommit}
      {...omit(['className', 'dir'], props)}
    >
      <RxSlider.Track
        className={cj(
          `${PREFIX}-${GROUP_NAME}__track`,
          'relative h-full w-full flex-1 rounded-full',
          disabled ? 'bg-disabled' : 'bg-highlight',
          orientation === Orientations.Vertical ? 'w-1' : '',
        )}
      >
        <RxSlider.Range
          className={cj(
            `${PREFIX}-${GROUP_NAME}__range`,
            'absolute rounded-full bg-secondary transition-transform delay-100 duration-600 [transition-property:cubic-bezier(0.65,0,0.35,1)]',
            orientation === Orientations.Vertical ? 'w-full' : 'h-full',
          )}
        />
      </RxSlider.Track>

      {thumbsRange.map((_, index) => (
        <RxSlider.Thumb
          key={`thumbs-${index}`}
          aria-label={label}
          className={cj(
            `${PREFIX}-${GROUP_NAME}__thumb`,
            `${PREFIX}-${GROUP_NAME}__thumb--${index}`,
            'block size-2 rounded-full bg-secondary',
          )}
        />
      ))}
    </RxSlider.Root>
  )
}
Slider.displayName = 'Slider'

export default Slider
