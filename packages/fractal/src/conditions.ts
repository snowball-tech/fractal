import isEmpty from 'lodash/fp/isEmpty'

export function extendConditions(
  baseConditions: Record<string, string>,
  withGroups: Record<string, string> = {},
) {
  const combinedConditions = {
    /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

    activeNotDisabled:
      '&:is(:active, [data-active]):not(:is(:disabled, [disabled], [data-disabled], .disabled))',
    groupActiveNotDisabled:
      '.group:is(:active, [data-active]):not(:is(:disabled, [disabled], [data-disabled], .disabled)) &,',

    readOnlyNotDisabled:
      '&:is(:read-only, [data-read-only], .readonly):not(:is(:disabled, [disabled], [data-disabled], .disabled))',

    writable:
      '&:not(:is(:disabled, [disabled], [data-disabled], .disabled, :read-only, [data-read-only], .readonly))',
    groupNotWritable:
      '.group:is(:disabled, [disabled], [data-disabled], .disabled, :read-only, [data-read-only], .readonly) &',

    hoverNotChecked:
      '&:is(:hover, [data-hover]):not(:is(:checked, [data-checked], .checked))',

    hoverNotFocus: '&:is(:hover, [data-hover]):not(:is(:focus, [data-focus]))',
    hoverFocusNotDisabled:
      '&:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:disabled, [disabled], [data-disabled], .disabled))',

    checkedNotDisabled:
      '&:is(:checked, [data-checked], [aria-checked=true]):not(:is(:disabled, [disabled], .disabled))',

    disabled: '&:is(:disabled, [disabled], .disabled)',
    groupDisabled: '.group:is(:disabled, [disabled], .disabled) &',

    valid: '&:is(:valid, [valid], .valid)',
    groupValid: '.group:is(:valid, [valid], .valid) &',
    peerValid: '.peer:is(:valid, [valid], .valid) ~ &',

    invalid: '&:is(:invalid, [invalid], .invalid)',
    groupInvalid: '.group:is(:invalid, [invalid], .invalid) &',
    peerInvalid: '.peer:is(:invalid, [invalid], .invalid) ~ &',

    toggled: '&:is([aria-pressed="true"], [data-state="on"], .toggled)',

    toggledNotDisabled:
      '&:is([aria-pressed="true"], [data-state="on"], .toggled):not(:is(:disabled, [disabled], .disabled))',

    required: '&:is(:required, [required], .required)',
    groupRequired: '.group:is(:required, [required], .required) &',

    prefix: '&.prefix',
    groupPrefix: '.group.prefix &',

    suffix: '&.suffix',
    groupSuffix: '.group.suffix &',

    fullWidth: '&.full-width',
    groupFullWidth: '.group.full-width &',

    opened: '&.opened',
    groupOpened: '.group.opened &',

    completed: '&:is([data-completed="true"], .completed)',

    /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
  }

  const conditions = {
    ...baseConditions,
    ...combinedConditions,
  }

  const negativeConditions: Record<string, string> = {
    ...Object.entries(conditions).reduce((notConditions, [key, condition]) => {
      if (!condition.startsWith('&')) {
        return notConditions
      }

      const negativeCondition = `&:not(${condition.slice(1)})`

      return {
        ...notConditions,
        [`not${key.charAt(0).toUpperCase() + key.slice(1)}`]: negativeCondition,
      }
    }, {}),

    notDark: '&:not(.dark), :not(.dark) &',
    notLight: '&:not(.light), :not(.light) &',
    notLtr: ':not([dir=ltr]) &',
    notRtl: ':not([dir=rtl]) &',
  }

  if (isEmpty(withGroups)) {
    return {
      ...conditions,
      ...negativeConditions,
    }
  }

  const groupsConditions = Object.entries(withGroups).reduce(
    (groupConditions, [groupName, className]) => ({
      ...groupConditions,
      ...Object.entries({ ...(conditions ?? {}) })
        .filter(([key]) => key.startsWith('group'))
        .reduce((conditionsAcc, [key, condition]) => {
          return {
            ...conditionsAcc,
            [key.replace('group', groupName)]: condition.replace(
              '.group',
              `.${className}`,
            ),
          }
        }, {}),
    }),
    {},
  )

  return {
    ...conditions,
    ...negativeConditions,
    ...groupsConditions,
  }
}
