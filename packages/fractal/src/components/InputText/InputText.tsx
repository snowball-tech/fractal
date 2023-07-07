import {
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
} from '@iconscout/react-unicons'
import * as RxForm from '@radix-ui/react-form'
import { css, cva, cx } from '@snowball-tech/fractal-panda/css'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import uniqueId from 'lodash/fp/uniqueId'
import type { ReactNode } from 'react'

import { Typography } from '@/components/Typography'

import type { InputTextProps } from './InputText.types'

const fieldClassName = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-spacing-1)',
    width: 'fit-content',
  },
})

const labelClassName = cva({
  base: {
    cursor: 'var(--cursor-clickable)',
  },

  variants: {
    disabled: {
      false: {},
      true: {
        cursor: 'unset',
      },
    },
    readonly: {
      false: {},
      true: {
        cursor: 'unset',
      },
    },
  },
})

const iconClassName = cva({
  base: {
    display: 'flex',
    position: 'absolute',
    right: 'var(--size-spacing-1)',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 'fit-content',
  },

  variants: {
    error: {
      false: {},
      true: {
        color: `var(--color-icon-input-error)`,
      },
    },

    position: {
      left: {
        left: 'var(--size-spacing-1)',
      },
      right: {
        right: 'var(--size-spacing-1)',
      },
    },

    readonly: {
      false: {},
      true: {},
    },

    success: {
      false: {},
      true: {
        color: `var(--color-icon-input-success)`,
      },
    },
  },
})

const inputTextClassName = cva({
  base: {
    '&:not(:is(:disabled, [disabled], [data-disabled]))': {
      _readOnly: {
        backgroundColor: `var(--color-background-input-disabled)`,
        border: `var(--border-input-disabled)`,
        color: `var(--color-text-input-base)`,
        cursor: 'unset',
        shadow: `var(--shadow-input-disabled)`,
      },
    },

    '&:not(:is(:disabled, [disabled], [data-disabled], :read-only, [data-read-only]))':
      {
        '&:not(:is(:focus, [data-focus]))': {
          _groupHover: {
            backgroundColor: `var(--color-background-input-hover)`,
            border: `var(--border-input-hover)`,
            color: `var(--color-text-input-hover)`,
            margin:
              '0 calc((var(--size-border-2) - var(--size-border-1)) * -1)',
            shadow: `var(--shadow-input-hover)`,
          },
        },

        _focus: {
          backgroundColor: `var(--color-background-input-focus)`,
          border: `var(--border-input-focus)`,
          color: `var(--color-text-input-focus)`,
          margin: '0 calc((var(--size-border-2) - var(--size-border-1)) * -1)',
          shadow: `var(--shadow-input-focus)`,
        },
      },

    _disabled: {
      backgroundColor: `var(--color-background-input-disabled)`,
      border: `var(--border-input-disabled)`,
      color: `var(--color-text-input-disabled)`,
      cursor: 'var(--cursor-disabled)',
      shadow: `var(--shadow-input-disabled)`,
    },

    _placeholder: {
      color: `var(--color-text-placeholder)`,
      fontStyle: 'var(--style-text-placeholder)',
    },

    all: 'unset',
    backgroundColor: `var(--color-background-input-base)`,
    border: `var(--border-input-base)`,
    borderRadius: 'var(--size-radius-s)',
    boxSizing: 'border-box',
    color: `var(--color-text-input-base)`,
    cursor: 'var(--cursor-clickable)',
    height: '48px',
    maxHeight: '48px',
    minWidth: '305px',
    outline: 'none',
    px: 'var(--size-spacing-2)',
    shadow: `var(--shadow-input-base)`,
    transition: 'border-color 300ms ease-out',
  },

  variants: {
    error: {
      false: {},
      true: {
        border: `var(--border-input-error)`,
      },
    },

    icon: {
      left: {
        pl: 'var(--size-spacing-5)',
      },
      none: {},
      right: {
        pr: 'var(--size-spacing-5)',
      },
    },

    success: {
      false: {},
      true: {
        border: `var(--border-input-success)`,
      },
    },
  },
})

const messageClassName = cva({
  base: {
    margin: 0,
  },
})

/**
 * `InputText` component is used to take text values from the user.
 */
export default function InputText({
  defaultValue,
  description,
  disabled = false,
  error,
  icon,
  iconPosition = 'right',
  label,
  name = uniqueId('fractal-input-text-'),
  onChange,
  readOnly = false,
  standalone = false,
  success,
  type = 'text',
  value,
  ...props
}: InputTextProps) {
  const isInError = !isEmpty(error)
  const isSuccessful = !isEmpty(success) && !isInError

  let iconToDisplay = icon
  if (isInError) {
    iconToDisplay = <ExclamationCircleIcon />
  } else if (isSuccessful) {
    iconToDisplay = <CheckCircleIcon />
  }

  const labelContent = (
    <Typography className={css({ margin: 0 })} variant="body-1">
      {label}
    </Typography>
  )

  const inputElement = (
    <input
      className={inputTextClassName({
        error: isInError,
        icon: !isEmpty(iconToDisplay) ? iconPosition : 'none',
        success: isSuccessful,
      })}
      disabled={disabled}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      name={name}
      readOnly={readOnly}
      type={type}
      value={value}
      {...(isFunction(onChange)
        ? {
            onChange: (event) => onChange(event),
          }
        : {})}
      // Be careful, arguments of `omit` from lodash FP are flipped!
      {...omit(['className'], props)}
    />
  )

  const groupClassNames = cx('group', fieldClassName(), props.className)

  const InputWithIcon = ({ children }: { children: ReactNode }) => (
    <div className={css({ position: 'relative' })}>
      {children}

      {iconToDisplay && (
        <div
          className={iconClassName({
            error: isInError,
            position: iconPosition,
            readonly: readOnly,
            success: isSuccessful,
          })}
        >
          {iconToDisplay}
        </div>
      )}
    </div>
  )

  return standalone ? (
    <div className={groupClassNames}>
      <label className={labelClassName()} htmlFor={name}>
        {labelContent}
      </label>

      <InputWithIcon>{inputElement}</InputWithIcon>

      {!isEmpty(description) && !isInError && !isSuccessful && (
        <Typography className={messageClassName()} variant="caption-median">
          {description}
        </Typography>
      )}

      {isInError && (
        <Typography className={messageClassName()} variant="caption-median">
          {error}
        </Typography>
      )}

      {isSuccessful && (
        <Typography className={messageClassName()} variant="caption-median">
          {success}
        </Typography>
      )}
    </div>
  ) : (
    <RxForm.Field
      className={groupClassNames}
      name={name}
      serverInvalid={!isEmpty(error)}
    >
      {!isEmpty(label) && (
        <RxForm.Label
          className={labelClassName({
            disabled,
            readonly: readOnly,
          })}
        >
          {labelContent}
        </RxForm.Label>
      )}

      <InputWithIcon>
        <RxForm.Control asChild>{inputElement}</RxForm.Control>
      </InputWithIcon>

      {!isEmpty(description) && !isInError && !isSuccessful && (
        <RxForm.Message forceMatch>
          <Typography className={messageClassName()} variant="caption-median">
            {description}
          </Typography>
        </RxForm.Message>
      )}

      {isInError && (
        <RxForm.Message forceMatch>
          <Typography className={messageClassName()} variant="caption-median">
            {error}
          </Typography>
        </RxForm.Message>
      )}

      {isSuccessful && (
        <RxForm.Message forceMatch>
          <Typography className={messageClassName()} variant="caption-median">
            {success}
          </Typography>
        </RxForm.Message>
      )}
    </RxForm.Field>
  )
}
