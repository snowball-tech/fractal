import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import isBoolean from 'lodash/fp/isBoolean'
import omit from 'lodash/fp/omit'
import { twJoin, twMerge } from 'tailwind-merge'

import { Loader } from '@/components/Loader'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Autocomplete.constants'
import type { AutocompleteLoadingProps } from './Autocomplete.types'

/**
 * `AutocompleteLoading` component is used to display a loader in the dropdown
 * of an `Autocomplete` component.
 */
export const AutocompleteLoading = ({
  children,
  icon = true,
  spin = true,
  ...props
}: AutocompleteLoadingProps) => {
  return (
    <RxDropdownMenu.Item
      className={twMerge(
        `${PREFIX}-${GROUP_NAME}__loading`,
        'flex items-center gap-2 rounded-sm p-2 outline-none ',
        icon ? `${PREFIX}-${GROUP_NAME}__loadingwith-icon` : '',
        spin && icon !== true
          ? `${PREFIX}-${GROUP_NAME}__loading--spinning`
          : '',
        props.className,
      )}
      onSelect={(event) => event.preventDefault()}
      {...omit(['className', 'disabled', 'onSelect'], props)}
    >
      {icon && (
        <div
          className={twJoin(
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
        className={twJoin(
          `${PREFIX}-${GROUP_NAME}__loading__label`,
          'w-full flex-1',
        )}
        element="div"
      >
        {children}
      </Typography>
    </RxDropdownMenu.Item>
  )
}
AutocompleteLoading.displayName = 'AutocompleteLoading'

export default AutocompleteLoading
