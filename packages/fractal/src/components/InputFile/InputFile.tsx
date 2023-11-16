'use client'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
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
import { twJoin, twMerge } from 'tailwind-merge'

import { PREFIX } from '@/constants'

import { Typography } from '..'
import { variantClassNames, variantDisabledClassNames } from '../Button/Button'
import { DEFAULT_VARIANT, GROUP_NAME, Variants } from './InputFile.constants'
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

    const isTextVariant = variant === Variants.Text

    const classNames = twMerge(
      `${PREFIX}-${GROUP_NAME}`,
      `${PREFIX}-${GROUP_NAME}--${variant}`,
      props.required ? `${PREFIX}-${GROUP_NAME}--required` : '',
      'flex max-h-6 max-w-full items-center justify-center gap-2 rounded-full outline-none transition-colors duration-300 ease-out active:transition-none px-[unset] appearance-none outline-none box-border',
      !isTextVariant ? 'h-6 px-3 py-1' : '',
      triggerProps.fullWidth && !triggerProps.iconOnly
        ? `${PREFIX}-${GROUP_NAME}--full-width w-full`
        : '',
      disabled
        ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed ${variantDisabledClassNames[variant]}`
        : `${variantClassNames[variant]} cursor-pointer`,
      !isEmpty(triggerProps.icon)
        ? `${PREFIX}-${GROUP_NAME}--with-addendum ${PREFIX}-${GROUP_NAME}--with-addendum-${triggerProps.iconPosition}`
        : '',
      triggerProps.iconOnly ? `${PREFIX}-${GROUP_NAME}--icon-only w-6` : '',
      triggerProps.iconOnly && triggerProps.fullWidth ? '' : 'w-fit',
      props.className,
    )

    const iconElement = (
      <div
        className={twJoin(
          `${PREFIX}-${GROUP_NAME}__icon--${triggerProps.iconPosition}`,
          'flex h-3 w-3 items-center [&>svg]:h-3',
          isTextVariant ? 'mt-0' : '',
        )}
      >
        {triggerProps.icon as ReactNode}
      </div>
    )

    const labelElement = (
      <Typography
        className={twJoin(
          `${PREFIX}-${GROUP_NAME}__label`,
          `${PREFIX}-${GROUP_NAME}__label--${variant}`,
          'flex max-h-full max-w-full flex-1 items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap text-center align-middle',
          isTextVariant ? 'pt-0' : '',
          props.required
            ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-["_*"]`
            : '',
        )}
        element="div"
        variant={isTextVariant ? 'body-1-link' : 'body-1'}
      >
        {label}
      </Typography>
    )

    const hasIcon = Boolean(triggerProps.icon)

    return (
      <>
        <button
          {...(triggerProps.id !== undefined
            ? { id: triggerProps.id as string }
            : {})}
          ref={triggerRef}
          aria-label={label}
          className={classNames}
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
          {hasIcon &&
            (triggerProps.iconPosition || 'right') === 'left' &&
            iconElement}

          {!triggerProps.iconOnly && labelElement}

          {hasIcon &&
            (triggerProps.iconPosition || 'right') === 'right' &&
            iconElement}
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
