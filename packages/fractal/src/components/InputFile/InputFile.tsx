'use client'

import { cx } from '@snowball-tech/fractal-panda/css'
import {
  inputFileButton,
  inputFileButtonIcon,
  inputFileButtonLabel,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isNil from 'lodash/fp/isNil'
import omit from 'lodash/fp/omit'
import {
  type ForwardedRef,
  type MouseEvent,
  type ReactNode,
  type TouchEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'

import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT, Variants } from './InputFile.constants'
import { GROUP_NAME } from './InputFile.recipe'
import type { CombinedRefs, InputFileProps } from './InputFile.types'

/**
 * `InputFile` component is used to allow the user to select one or multiple
 * files using a specific trigger (button, ...) instead of the file input
 * itself.
 */
export const InputFile = forwardRef<CombinedRefs, InputFileProps>(
  (
    {
      disabled = false,
      label,
      onChange,
      triggerProps = {},
      variant = DEFAULT_VARIANT,
      ...props
    }: InputFileProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const triggerRef = useRef<HTMLButtonElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
      get fileInput() {
        return fileInputRef?.current ?? null
      },

      get trigger() {
        return triggerRef?.current ?? null
      },
    }))

    const handleTriggerClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (isFunction(triggerProps.onClick)) {
        triggerProps.onClick(event)
      }

      if (fileInputRef.current) {
        fileInputRef.current.click()
      }
    }

    const handleTouchStart = (event: TouchEvent<HTMLButtonElement>) => {
      if (isFunction(triggerProps.onTouchStart)) {
        triggerProps.onTouchStart(event)

        return
      }

      if ('ontouchstart' in document.documentElement) {
        handleTriggerClick(event as unknown as MouseEvent<HTMLButtonElement>)
      }
    }

    const groupClassName = cx(
      `${PREFIX}-${GROUP_NAME}`,
      inputFileButton({ variant }),
      triggerProps.fullWidth && !triggerProps.iconOnly ? 'full-width' : '',
      disabled ? 'disabled' : '',
      !isEmpty(triggerProps.icon)
        ? `addendum ${
            (triggerProps.iconPosition || 'right') === 'right'
              ? 'suffix'
              : 'prefix'
          }`
        : '',
      triggerProps.iconOnly ? 'icon-only' : '',
      props.className,
    )

    return (
      <>
        <button
          {...(!isNil(triggerProps.id)
            ? { id: triggerProps.id as string }
            : {})}
          ref={triggerRef}
          aria-label={label}
          className={groupClassName}
          {...(triggerProps.dir !== undefined
            ? { dir: triggerProps.dir as 'ltr' | 'rtl' }
            : {})}
          disabled={disabled}
          title={label}
          type="button"
          onClick={handleTriggerClick}
          onTouchStart={handleTouchStart}
          {...omit(
            ['className', 'dir', 'id', 'type', 'onTouchStart'],
            triggerProps,
          )}
        >
          {triggerProps.icon &&
          (triggerProps.iconPosition || 'right') === 'left' ? (
            <div className={inputFileButtonIcon({ variant })}>
              {triggerProps.icon as ReactNode}
            </div>
          ) : (
            false
          )}

          {!triggerProps.iconOnly ? (
            <div
              className={cx(
                inputFileButtonLabel({ variant }),
                typography({
                  variant: variant === Variants.Text ? 'body-1-link' : 'body-1',
                }),
              )}
            >
              {label}
            </div>
          ) : (
            false
          )}

          {triggerProps.icon &&
          (triggerProps.iconPosition || 'right') === 'right' ? (
            <div className={inputFileButtonIcon({ variant })}>
              {triggerProps.icon as ReactNode}
            </div>
          ) : (
            false
          )}
        </button>

        <input
          ref={fileInputRef}
          disabled={disabled}
          hidden
          type="file"
          {...(isFunction(onChange)
            ? { onChange: (event) => onChange(event.target.files) }
            : {})}
          {...omit(['type'], props)}
        />
      </>
    )
  },
)
InputFile.displayName = 'InputFile'

export default InputFile
