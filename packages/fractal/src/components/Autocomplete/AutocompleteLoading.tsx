'use client'

import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'

import isBoolean from 'lodash/fp/isBoolean'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { Loader } from '@/components/Loader'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { AutocompleteLoadingProps } from './Autocomplete.types'

import { GROUP_NAME } from './Autocomplete.constants'

/**
 * `AutocompleteLoading` component is used to display a loader in the dropdown
 * of an `Autocomplete` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item
 * for more information.
 */
export const AutocompleteLoading = ({
  children,
  icon = true,
  label,
  spin = true,
  ...props
}: AutocompleteLoadingProps) => {
  const hasChildren = Boolean(children)
  if (!hasChildren && isEmpty(label)) {
    console.warn(
      'You must provide a `label` or `children` to the `AutocompleteLoading` component',
    )
  }

  return (
    <RxDropdownMenu.Item
      className={cn(
        `${PREFIX}-${GROUP_NAME}__loading`,
        'flex items-center gap-2 rounded-sm p-2 outline-hidden',
        icon ? `${PREFIX}-${GROUP_NAME}__loadingwith-icon` : '',
        spin && icon !== true
          ? `${PREFIX}-${GROUP_NAME}__loading--spinning`
          : '',
        props.className,
      )}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
      aria-label={label}
      title={label}
    >
      {icon && (
        <div
          className={cj(
            `${PREFIX}-${GROUP_NAME}__loading__icon`,
            'flex items-center justify-center',
            isBoolean(icon)
              ? `${PREFIX}-${GROUP_NAME}__loading__icon--loader`
              : `${PREFIX}-${GROUP_NAME}__loading__icon--icon min-w-3 [&>svg]:min-w-3`,
            spin && !isBoolean(icon)
              ? `${PREFIX}-${GROUP_NAME}__loading__icon--icon--spinning [&>svg]:animate-spin`
              : '',
          )}
        >
          &nbsp;
          {isBoolean(icon) ? <Loader size="m" /> : icon}
        </div>
      )}

      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__loading__label`,
          'w-full flex-1',
        )}
        element="div"
      >
        {hasChildren ? children : label}
      </Typography>
    </RxDropdownMenu.Item>
  )
}
AutocompleteLoading.displayName = 'AutocompleteLoading'

export default AutocompleteLoading
