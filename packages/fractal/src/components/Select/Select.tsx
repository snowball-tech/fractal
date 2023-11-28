'use client'

import AngleDownIcon from '@iconscout/react-unicons/dist/icons/uil-angle-down'
import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxScrollArea from '@radix-ui/react-scroll-area'
import * as RxSelect from '@radix-ui/react-select'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import {
  type ForwardedRef,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Select.constants'
import type { CombinedRefs, SelectProps } from './Select.types'

/**
 * `Select` component is used to offer the user choices they can select.
 *
 * See https://www.radix-ui.com/primitives/docs/components/select for more
 * information.
 */
export const Select = forwardRef<CombinedRefs, SelectProps>(
  (
    {
      autoFocus = false,
      children: items,
      defaultValue,
      description,
      disabled = false,
      displayedValue,
      dropdown = {},
      fullWidth = false,
      id,
      label,
      name,
      onClose,
      onOpen,
      onSelect,
      open,
      placeholder,
      readOnly = false,
      required = false,
      value,
      ...props
    }: SelectProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const triggerRef = useRef<HTMLButtonElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      get container() {
        return containerRef?.current ?? null
      },

      get dropdown() {
        return dropdownRef?.current ?? null
      },

      get trigger() {
        return triggerRef?.current ?? null
      },
    }))

    const writable = !disabled && !readOnly

    const [isOpen, setIsOpen] = useState(open === true)
    useEffect(() => {
      setIsOpen(open === true)
    }, [open])

    const handleSelect = (newValue: string) => {
      if (isFunction(onSelect)) {
        onSelect(newValue)
      }
    }

    const handleDropdownToggle = (isOpened: boolean) => {
      if (!writable) {
        return
      }

      setIsOpen(isOpened)

      if (isOpened && isFunction(onOpen)) {
        onOpen()
      }

      if (!isOpened && isFunction(onClose)) {
        onClose()
      }
    }

    const handleLabelClick = () => {
      handleDropdownToggle(!isOpen)
    }

    const handlePointerDownOutside: RxSelect.DismissableLayerProps['onPointerDownOutside'] =
      (event) => {
        if (isFunction(dropdown.onPointerDownOutside)) {
          dropdown.onPointerDownOutside(event)
        }

        const { target } = event
        if (target === window || target === null || target === undefined) {
          return
        }

        if (
          containerRef?.current?.contains(target as Element) ||
          dropdownRef?.current?.contains(target as Element)
        ) {
          event.preventDefault()
        }
      }

    const widthClassNames =
      'min-w-[var(--radix-popper-anchor-width,"100%")] w-[var(--radix-popper-anchor-width,"100%")]'

    return (
      <div
        ref={containerRef}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          'flex w-full max-w-full flex-col gap-1',
          `${PREFIX}-${GROUP_NAME}--${!writable ? 'not-' : ''}writable`,
          `${PREFIX}-${GROUP_NAME}--${isOpen ? 'opened' : 'closed'}`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          readOnly ? `${PREFIX}-${GROUP_NAME}--readonly` : '',
          required ? `${PREFIX}-${GROUP_NAME}--required` : '',
          isOpen ? '' : '',
          props.className,
        )}
      >
        {!isEmpty(label) ? (
          <RxLabel
            asChild
            className={cj(
              `${PREFIX}-${GROUP_NAME}__label`,
              'block',
              writable ? 'cursor-pointer' : 'cursor-default',
              required
                ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-required`
                : '',
            )}
            htmlFor={uniqueId}
            onClick={handleLabelClick}
          >
            <Typography element="label">{label}</Typography>
          </RxLabel>
        ) : (
          false
        )}

        <RxSelect.Root
          {...(defaultValue !== undefined ? { defaultValue } : {})}
          defaultOpen={autoFocus}
          {...(props.dir !== undefined
            ? { dir: props.dir as RxSelect.Direction }
            : {})}
          disabled={!writable}
          name={name || uniqueId}
          open={isOpen}
          required={required}
          {...(value !== undefined ? { value } : {})}
          onOpenChange={handleDropdownToggle}
          onValueChange={handleSelect}
          // Be careful, arguments of `omit` from lodash FP are flipped!
          {...omit(['autoComplete', 'className', 'dir'], props)}
        >
          <RxSelect.Trigger
            id={uniqueId}
            ref={triggerRef}
            asChild
            className={cj(
              `${PREFIX}-${GROUP_NAME}__trigger`,
              'flex h-6 max-h-6 items-center rounded-sm border-1 border-normal px-2 py-unset text-left outline-none transition-border-color duration-300 ease-out data-with-placeholder:text-placeholder',
              writable
                ? 'cursor-pointer border-normal bg-white'
                : 'border-disabled bg-disabled-light',
              disabled
                ? `${PREFIX}-${GROUP_NAME}__trigger--disabled cursor-not-allowed`
                : 'hover:border-1 hover:shadow-hover',
              !disabled && isOpen
                ? 'hover:shadow-over border-primary shadow-primary'
                : '',
              readOnly ? 'cursor-default' : '',
            )}
          >
            <Typography element="div">
              <div
                className={cj(
                  `${PREFIX}-${GROUP_NAME}__trigger__value`,
                  'w-full flex-grow self-center',
                )}
              >
                {isEmpty(displayedValue) ? (
                  <RxSelect.Value placeholder={placeholder} />
                ) : (
                  <RxSelect.Value placeholder={placeholder}>
                    {displayedValue}
                  </RxSelect.Value>
                )}
              </div>

              <RxSelect.Icon
                className={cj(
                  `${PREFIX}-${GROUP_NAME}__trigger__indicator`,
                  'h-full self-center transition-transform duration-300 ease-out',
                  writable ? 'text-dark' : 'text-disabled',
                  isOpen ? 'rotate-180' : '',
                )}
              >
                <AngleDownIcon className="h-full" />
              </RxSelect.Icon>
            </Typography>
          </RxSelect.Trigger>

          <RxSelect.Portal>
            <RxSelect.Content
              ref={dropdownRef}
              align="center"
              asChild
              className={cn(
                `${PREFIX}-${GROUP_NAME}__dropdown`,
                'pointer-events-auto relative z-50 mt-1 overflow-hidden rounded-sm border-1 border-normal bg-white p-1',
                widthClassNames,
                dropdown?.className,
              )}
              position="popper"
              side="bottom"
              style={{
                display: undefined,
                ...(props.style ?? {}),
              }}
              onPointerDownOutside={handlePointerDownOutside}
              {...omit(['className', 'onPointerDownOutside'], dropdown)}
            >
              <RxScrollArea.Root
                className={`${PREFIX}-${GROUP_NAME}__dropdown__scrollarea`}
                {...(props.dir !== undefined
                  ? { dir: props.dir as RxScrollArea.Direction }
                  : {})}
                type="hover"
              >
                <RxSelect.Viewport asChild>
                  <RxScrollArea.Viewport
                    className={cj(
                      `${PREFIX}-${GROUP_NAME}__dropdown__scrollarea__viewport`,
                      `relative h-full max-h-[calc(var(--radix-popper-available-height)-theme(spacing.4))] w-full overflow-auto [&:has(+_.${PREFIX}-${GROUP_NAME}__dropdown__scrollarea__scrollbar--y)]:w-[calc(100%-theme(spacing.1)+theme(spacing.quarter))]`,
                    )}
                    style={{
                      overflowY: undefined,
                    }}
                  >
                    <Typography
                      className={alternatingBgColorLightClassNames}
                      element="div"
                      variant="body-1"
                    >
                      {items}
                    </Typography>
                  </RxScrollArea.Viewport>
                </RxSelect.Viewport>

                <RxScrollArea.Scrollbar
                  className={cj(
                    `${PREFIX}-${GROUP_NAME}__dropdown__scrollarea__scrollbar--y`,
                    '[data-orientation="vertical"]:w-1 flex touch-none select-none rounded-r-sm bg-grey-90 p-0.25 transition-background-color duration-300 ease-out hover:bg-grey-70',
                  )}
                  orientation="vertical"
                >
                  <RxScrollArea.Thumb
                    className={cj(
                      `${PREFIX}-${GROUP_NAME}__dropdown__scrollarea__scrollbar--y__thumb`,
                      'before:l-1/2 relative !w-0.5 flex-1 rounded-sm bg-grey-30 before:absolute before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-empty',
                    )}
                  />
                </RxScrollArea.Scrollbar>
              </RxScrollArea.Root>
            </RxSelect.Content>
          </RxSelect.Portal>
        </RxSelect.Root>

        {!isEmpty(description) && (
          <Typography
            className={cj(
              `${PREFIX}-${GROUP_NAME}__description`,
              'cursor-default',
            )}
            element="div"
            variant="caption-median"
          >
            {description}
          </Typography>
        )}
      </div>
    )
  },
)
Select.displayName = 'Select'

export default Select
