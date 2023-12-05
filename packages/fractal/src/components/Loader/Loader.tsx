import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { DEFAULT_SIZE, DURATION, GROUP_NAME, Sizes } from './Loader.constants'
import type { LoaderProps } from './Loader.types'

/**
 * `Loader` component allow to build interface with level and hierarchy.
 * experience.
 */
export const Loader = ({
  label,
  size = DEFAULT_SIZE,
  ...props
}: LoaderProps) => {
  const sizeClassNames = {
    /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

    [Sizes.XS]: 'h-3 max-h-3 min-h-3 w-3 max-w-3 min-w-3',
    [Sizes.S]: 'h-4 max-h-4 min-h-4 w-4 max-w-4 min-w-4',
    [Sizes.M]: 'h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6',
    [Sizes.L]: 'h-12 max-h-12 min-h-12 w-12 max-w-12 min-w-12',
    [Sizes.XL]: 'h-20 max-h-20 min-h-20 w-20 max-w-20 min-w-20',

    /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
  }

  const transformDuration = parseFloat(DURATION) / 4

  return (
    <svg
      aria-label={label}
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${size}`,
        sizeClassNames[size],
        props.className,
      )}
      display="block"
      preserveAspectRatio="xMidYMid"
      style={{ background: '0 0', margin: 'auto' }}
      title={label}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...omit(['className'], props)}
    >
      <g transform="translate(50 50)">
        <g>
          <animateTransform
            attributeName="transform"
            calcMode="discrete"
            dur={DURATION}
            keyTimes="0;0.25;0.5;0.75;1"
            repeatCount="indefinite"
            type="rotate"
            values="0;90;180;270;360"
          />
          <path d="M-40 0a40 40 0 1 0 80 0" fill="#ffc6e7">
            <animate
              attributeName="fill"
              calcMode="discrete"
              dur={DURATION}
              keyTimes="0;0.24;0.49;0.74;0.99"
              repeatCount="indefinite"
              values="#ffc6e7;#fff29b;#adface;#d9beff;#ffc6e7"
            />
          </path>
          <path d="M-40 0a40 40 0 0 1 80 0" fill="#fff29b">
            <animate
              attributeName="fill"
              calcMode="discrete"
              dur={DURATION}
              keyTimes="0;0.25;0.5;0.75;1"
              repeatCount="indefinite"
              values="#fff29b;#adface;#d9beff;#ffc6e7;#fff29b"
            />
          </path>
          <path d="M-39 0h78" stroke="#ff3eae" strokeWidth="2">
            <animate
              attributeName="stroke"
              dur={DURATION}
              keyTimes="0;0.124;0.125;0.25;0.374;0.375;0.5;0.624;0.625;0.75;0.874;0.875;1"
              repeatCount="indefinite"
              values="#ffc6e7;#ff3eae;#ffe220;#fff29b;#ffe220;#35f387;#adface;#35f387;#8b38ff;#d9beff;#8b38ff;#ff3eae;#ffc6e7"
            />
          </path>
          <path d="M-40 0a40 40 0 0 1 80 0Z" fill="#ff3eae">
            <animate
              attributeName="fill"
              dur={DURATION}
              keyTimes="0;0.124;0.125;0.25;0.374;0.375;0.5;0.624;0.625;0.75;0.874;0.875;1"
              repeatCount="indefinite"
              values="#ffc6e7;#ff3eae;#ffe220;#fff29b;#ffe220;#35f387;#adface;#35f387;#8b38ff;#d9beff;#8b38ff;#ff3eae;#ffc6e7"
            />
            <animateTransform
              attributeName="transform"
              dur={`${transformDuration}s`}
              keyTimes="0;0.5;0.999;1"
              repeatCount="indefinite"
              type="scale"
              values="1 1;1 0;1 -1;1 1"
            />
          </path>
        </g>
      </g>
    </svg>
  )
}
Loader.displayName = 'Loader'

export default Loader
