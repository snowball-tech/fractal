import isEmpty from 'lodash/fp/isEmpty'

export function extendConditions(
  baseConditions: Record<string, string>,
  withGroups: Record<string, string> = {},
) {
  const combinedConditions = {
    /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

    activeNotDisabled:
      '&:is(:active, [data-active]):not(:is(:disabled, [disabled], [data-disabled], .disabled))',
    activeDisabled:
      '&:is(:active, [data-active], :disabled, [disabled], [data-disabled], .disabled)',
    groupActiveNotDisabled:
      '.group:is(:active, [data-active]):not(:is(:disabled, [disabled], [data-disabled], .disabled)) &,',
    groupActiveDisabled:
      '.group:is(:active, [data-active], :disabled, [disabled], [data-disabled], .disabled) &',
    peerActiveNotDisabled:
      '.peer:is(:active, [data-active]):not(:is(:disabled, [disabled], [data-disabled], .disabled)) ~ &',
    peerActiveDisabled:
      '.peer:is(:active, [data-active], :disabled, [disabled], [data-disabled], .disabled) ~ &',

    readOnly: '&:is(:read-only, [data-read-only], .readonly)',
    groupReadOnly: '.group:is(:read-only, [data-read-only], .readonly) &',
    peerReadOnly: '.peer:is(:read-only, [data-read-only], .readonly) ~ &',
    readOnlyNotDisabled:
      '&:is(:read-only, [data-read-only], .readonly):not(:is(:disabled, [disabled], [data-disabled], .disabled))',
    groupReadOnlyNotDisabled:
      '.group:is(:read-only, [data-read-only], .readonly):not(:is(:disabled, [disabled], [data-disabled], .disabled)) &',
    peerReadOnlyNotDisabled:
      '.peer:is(:read-only, [data-read-only], .readonly):not(:is(:disabled, [disabled], [data-disabled], .disabled)) ~ &',

    writable:
      '&:not(:is(:disabled, [disabled], [data-disabled], .disabled, :read-only, [data-read-only], .readonly))',
    groupWritable:
      '.group:not(:is(:disabled, [disabled], [data-disabled], .disabled, :read-only, [data-read-only], .readonly)) &',
    peerWritable:
      '.peer:not(:is(:disabled, [disabled], [data-disabled], .disabled, :read-only, [data-read-only], .readonly)) ~ &',

    hoverFocus: '&:is(:hover, [data-hover], :focus, [data-focus])',
    hoverNotFocus: '&:is(:hover, [data-hover]):not(:is(:focus, [data-focus]))',
    groupHoverFocus: '.group:is(:hover, [data-hover], :focus, [data-focus]) &',
    groupHoverNotFocus:
      '.group:is(:hover, [data-hover]):not(:is(:focus, [data-focus])) &',
    peerHoverFocus: '.peer:is(:hover, [data-hover], :focus, [data-focus]) ~ &',
    peerHoverNotFocus:
      '.peer:is(:hover, [data-hover]):not(:is(:focus, [data-focus])) ~ &',

    hoverFocusNotDisabled:
      '&:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:disabled, [disabled], [data-disabled], .disabled))',
    groupHoverFocusNotDisabled:
      '.group:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:disabled, [disabled], [data-disabled], .disabled)) &',
    peerHoverFocusNotDisabled:
      '.peer:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:disabled, [disabled], [data-disabled], .disabled)) ~',

    hoverChecked:
      '&:is(:hover, [data-hover], :checked, [data-checked], .checked)',
    groupHoverChecked:
      '.group:is(:hover, [data-hover], :checked, [data-checked], .checked) &',
    peerHoverChecked:
      '.peer:is(:hover, [data-hover], :checked, [data-checked], .checked) ~',
    hoverNotChecked:
      '&:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:checked, [data-checked], .checked))',
    groupHoverNotChecked:
      '.group:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:checked, [data-checked], .checked)) &',
    peerHoverNotChecked:
      '.peer:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:checked, [data-checked], .checked)) ~',

    hoverFocusWritable:
      '&:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:disabled, [disabled], [data-disabled], .disabled, :read-only, [data-read-only], .readonly))',
    groupHoverFocusWritable:
      '.group:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:disabled, [disabled], [data-disabled], .disabled, :read-only, [data-read-only], .readonly)) &',
    peerHoverFocusWritable:
      '.peer:is(:hover, [data-hover], :focus, [data-focus]):not(:is(:disabled, [disabled], [data-disabled], .disabled, :read-only, [data-read-only], .readonly)) ~',

    disabled: '&:is(:disabled, [disabled], .disabled)',
    groupDisabled: '.group:is(:disabled, [disabled], .disabled) &',
    peerDisabled: '.peer:is(:disabled, [disabled], .disabled) ~ &',

    valid: '&:is(:valid, [valid], .valid)',
    groupValid: '.group:is(:valid, [valid], .valid) &',
    peerValid: '.peer:is(:valid, [valid], .valid) ~ &',

    invalid: '&:is(:invalid, [invalid], .invalid)',
    groupInvalid: '.group:is(:invalid, [invalid], .invalid) &',
    peerInvalid: '.peer:is(:invalid, [invalid], .invalid) ~ &',

    validOrInvalid:
      '&:is(:valid, [valid], .valid, :invalid, [invalid], .invalid)',
    groupValidOrInvalid:
      '.group:is(:valid, [valid], .valid, :invalid, [invalid], .invalid) &',
    peerValidOrInvalid:
      '.peer:is(:valid, [valid], .valid, :invalid, [invalid], .invalid) ~ &',

    required: '&:is(:required, [required], .required)',
    groupRequired: '.group:is(:required, [required], .required) &',
    peerRequired: '.peer:is(:required, [required], .required) ~ &',

    icon: '&:is(.icon,.icon-left,.icon-right)',
    groupIcon: '.group:is(.icon,.icon-left,.icon-right) &',
    peerIcon: '.peer:is(.icon,.icon-left,.icon-right) ~ &',

    iconLeft: '&.icon-left',
    groupIconLeft: '.group.icon-left &',
    peerIconLeft: '.peer.icon-left ~ &',

    iconRight: '&.icon-right',
    groupIconRight: '.group.icon-right &',
    peerIconRight: '.peer.icon-right ~ &',

    fullWidth: '&.full-width',
    groupFullWidth: '.group.full-width &',
    peerFullWidth: '.peer.full-width ~ &',

    opened: '&.opened',
    groupOpened: '.group.opened &',
    peerOpened: '.peer.opened ~ &',

    closed: '&.closed',
    groupClosed: '.group.closed &',
    peerClosed: '.peer.closed ~ &',

    checkedNotDisabled:
      '&:is(:checked, [data-checked], [aria-checked=true]):not(:is(:disabled, [disabled], .disabled))',
    checkedDisabled:
      '&:is(:checked, [data-checked], [aria-checked=true]):is(:disabled, [disabled], .disabled)',

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
