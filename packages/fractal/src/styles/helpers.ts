import clsx, { type ClassValue } from 'clsx'
import {
  extendTailwindMerge,
  fromTheme,
  twJoin,
  validators,
} from 'tailwind-merge'

export const isValidSpacing = (value: string) => {
  const valueAsInt = Number(value)

  return !Number.isNaN(valueAsInt) && valueAsInt >= 1 && valueAsInt <= 20
}

export const fractionRegex = /^\d+\/\d+$/
export const isFraction = (value: string) => fractionRegex.test(value)

export const tshirtUnitRegex = /^h-(x+s|sm|md|lg|x+l)$/
export const isTshirtSize = (value: string) => tshirtUnitRegex.test(value)

export const heightTshirtUnitRegex = /^h-(x+s|sm|md|lg|x+l)$/
export const isHeightTshirtSize = (value: string) =>
  heightTshirtUnitRegex.test(value)

export const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      borderRadius: [
        'browser',
        'unset',
        '0',
        'md',
        'rounded',
        'sm',
        'square',
        'xs',
      ],
    },
  },
  override: {
    classGroups: {
      content: [
        {
          content: [
            'none',
            'empty',
            'required',
            'space',
            validators.isArbitraryValue,
          ],
        },
      ],
      delay: [
        {
          delay: ['0', '1', validators.isNumber, validators.isArbitraryValue],
        },
      ],
      duration: [
        {
          delay: ['0', '1', validators.isNumber, validators.isArbitraryValue],
        },
      ],
      'font-size': [
        {
          text: [
            'size',
            'size-browser',
            'size-unset',
            'display-1-xxs',
            'display-1-md',
            'display-2-xxs',
            'display-2-md',
            'display-wide-xxs',
            'display-wide-md',
            'heading-1-xxs',
            'heading-1-md',
            'heading-2-xxs',
            'heading-2-md',
            'heading-3',
            'heading-4',
            'body-1',
            'body-2',
            'caption',
          ],
        },
      ],
      'font-weight': [
        {
          font: [
            'weight',
            'weight-browser',
            'weight-unset',
            'weight-bold',
            'weight-median',
            'weight-medium',
            'weight-normal',
            'weight-standard',
            'weight-display-1',
            'weight-display-2',
            'weight-display-wide',
            'weight-heading-1',
            'weight-heading-2',
            'weight-heading-3',
            'weight-heading-4',
            'weight-body-1',
            'weight-body-1-bold',
            'weight-body-1-median',
            'weight-body-1-link',
            'weight-body-2',
            'weight-body-2-bold',
            'weight-body-2-median',
            'weight-body-2-link',
            'weight-caption-bold',
            'weight-caption-median',
            'weight-caption-link',
          ],
        },
      ],
      h: [
        {
          h: [
            validators.isArbitraryValue,
            fromTheme('spacing'),
            isFraction,
            isHeightTshirtSize,
            'auto',
            'dvh',
            'fit',
            'full',
            'lvh',
            'max',
            'min',
            'screen',
            'svh',
            'unset',
          ],
        },
      ],
      leading: [
        {
          leading: [
            '',
            'none',
            'browser',
            'unset',
            'display-1-xxs',
            'display-1-md',
            'display-2-xxs',
            'display-2-md',
            'display-wide-xxs',
            'display-wide-md',
            'heading-1-xxs',
            'heading-1-md',
            'heading-2-xxs',
            'heading-2-md',
            'heading-3',
            'heading-4',
            'body-1',
            'body-2',
            'caption',
            validators.isArbitraryValue,
          ],
        },
      ],
      'max-h': [
        {
          'max-h': [
            validators.isArbitraryValue,
            fromTheme('spacing'),
            isFraction,
            isHeightTshirtSize,
            'dvh',
            'fit',
            'full',
            'lvh',
            'max',
            'min',
            'none',
            'screen',
            'svh',
            'unset',
          ],
        },
      ],
      'max-w': [
        {
          'max-w': [
            validators.isArbitraryValue,
            fromTheme('spacing'),
            isFraction,
            isTshirtSize,
            'fit',
            'full',
            'max',
            'min',
            'none',
            'prose',
            'unset',
          ],
        },
      ],
      'min-h': [
        {
          'min-h': [
            validators.isArbitraryValue,
            fromTheme('spacing'),
            isFraction,
            isHeightTshirtSize,
            'dvh',
            'fit',
            'full',
            'lvh',
            'max',
            'min',
            'none',
            'screen',
            'svh',
            'unset',
          ],
        },
      ],
      'min-w': [
        {
          'min-w': [
            validators.isArbitraryValue,
            fromTheme('spacing'),
            isFraction,
            isTshirtSize,
            'fit',
            'full',
            'max',
            'min',
            'none',
            'prose',
            'screen',
            'unset',
          ],
        },
      ],
      shadow: [
        '',
        'unset',
        '1',
        'brutal-1',
        '2',
        'brutal-2',
        'brutal',
        'disabled',
        'error',
        'hover',
        'none',
        'primary',
        'subtle',
        'success',
        'warning',
      ],
      stroke: [{ stroke: ['', 'none', 'separator', fromTheme('colors')] }],
      transition: [
        {
          transition: [
            '',
            'all',
            'background-color',
            'border-color',
            'colors',
            'margin',
            'margin-bottom',
            'margin-left',
            'margin-top',
            'margin-right',
            'max-height',
            'max-width',
            'none',
            'opacity',
            'shadow',
            'transform',
            'unset',
            validators.isArbitraryValue,
          ],
        },
      ],
      w: [
        {
          w: [
            validators.isArbitraryValue,
            fromTheme('spacing'),
            isFraction,
            isTshirtSize,
            'auto',
            'fit',
            'full',
            'max',
            'min',
            'none',
            'prose',
            'screen',
            'unset',
          ],
        },
      ],
    },
    theme: {
      borderWidth: ['', 'browser', 'unset', '0', 'half', '1', '2'],
      spacing: [
        'browser',
        'unset',
        '0',
        'px',
        'quarter',
        'half',
        'one-and-half',
        isValidSpacing,
      ],
    },
  },
})

export const cj = twJoin

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}

export const alternatingBgColorLightClassNames = cj(
  '[&_.alternatee:nth-child(1):hover]:bg-decorative-pink-90',
  '[&_.alternatee:nth-child(5n+1):hover]:bg-decorative-pink-90',
  '[&_.alternatee:nth-child(1):focus]:bg-decorative-pink-90',
  '[&_.alternatee:nth-child(5n+1):focus]:bg-decorative-pink-90',
  '[&_.alternatee:nth-child(1)[data-highlighted]]:bg-decorative-pink-90',
  '[&_.alternatee:nth-child(5n+1)[data-highlighted]]:bg-decorative-pink-90',

  '[&_.alternatee:nth-child(2):hover]:bg-decorative-yellow-90',
  '[&_.alternatee:nth-child(5n+2):hover]:bg-decorative-yellow-90',
  '[&_.alternatee:nth-child(2):focus]:bg-decorative-yellow-90',
  '[&_.alternatee:nth-child(5n+2):focus]:bg-decorative-yellow-90',
  '[&_.alternatee:nth-child(2)[data-highlighted]]:bg-decorative-yellow-90',
  '[&_.alternatee:nth-child(5n+2)[data-highlighted]]:bg-decorative-yellow-90',

  '[&_.alternatee:nth-child(3):hover]:bg-decorative-green-90',
  '[&_.alternatee:nth-child(5n+3):hover]:bg-decorative-green-90',
  '[&_.alternatee:nth-child(3):focus]:bg-decorative-green-90',
  '[&_.alternatee:nth-child(5n+3):focus]:bg-decorative-green-90',
  '[&_.alternatee:nth-child(3)[data-highlighted]]:bg-decorative-green-90',
  '[&_.alternatee:nth-child(5n+3)[data-highlighted]]:bg-decorative-green-90',

  '[&_.alternatee:nth-child(4):hover]:bg-decorative-blue-90',
  '[&_.alternatee:nth-child(5n+4):hover]:bg-decorative-blue-90',
  '[&_.alternatee:nth-child(4):focus]:bg-decorative-blue-90',
  '[&_.alternatee:nth-child(5n+4):focus]:bg-decorative-blue-90',
  '[&_.alternatee:nth-child(4)[data-highlighted]]:bg-decorative-blue-90',
  '[&_.alternatee:nth-child(5n+4)[data-highlighted]]:bg-decorative-blue-90',

  '[&_.alternatee:nth-child(5):hover]:bg-decorative-purple-90',
  '[&_.alternatee:nth-child(5n+5):hover]:bg-decorative-purple-90',
  '[&_.alternatee:nth-child(5):focus]:bg-decorative-purple-90',
  '[&_.alternatee:nth-child(5n+5):focus]:bg-decorative-purple-90',
  '[&_.alternatee:nth-child(5)[data-highlighted]]:bg-decorative-purple-90',
  '[&_.alternatee:nth-child(5n+5)[data-highlighted]]:bg-decorative-purple-90',
)
