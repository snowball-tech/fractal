import { definePreset } from '@pandacss/dev'
import basePreset from '@pandacss/preset-base'
import {
  SizeBreakpointLg,
  SizeBreakpointMd,
  SizeBreakpointSm,
  SizeBreakpointXl,
  SizeBreakpointXs,
  SizeBreakpointXxl,
} from '@snowball-tech/design-tokens'

import * as ButtonRecipes from '@/components/Button/Button.recipe'
import * as InputCheckboxRecipes from '@/components/InputCheckbox/InputCheckbox.recipe'
import * as InputDateRecipes from '@/components/InputDate/InputDate.recipe'
import * as InputTextRecipes from '@/components/InputText/InputText.recipe'
import * as SelectRecipes from '@/components/Select/Select.recipe'
import * as TypographyRecipes from '@/components/Typography/Typography.recipe'

import { extendConditions } from './src/conditions'
import { Breakpoints, PREFIX } from './src/constants'

const GROUPS = {
  button: `${PREFIX}-${ButtonRecipes.GROUP_NAME}`,
  inputCheckbox: `${PREFIX}-${InputCheckboxRecipes.GROUP_NAME}`,
  inputDate: `${PREFIX}-${InputDateRecipes.GROUP_NAME}`,
  inputText: `${PREFIX}-${InputTextRecipes.GROUP_NAME}`,
  select: `${PREFIX}-${SelectRecipes.GROUP_NAME}`,
  typography: `${PREFIX}-${TypographyRecipes.GROUP_NAME}`,
}

const fractalPreset = definePreset({
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

  // Don't use default theme from PandaCSS.
  eject: true,
  // Only import the base presets with useful resets and utilities.
  presets: ['@pandacss/preset-base'],

  conditions: extendConditions(basePreset.conditions, GROUPS),

  theme: {
    breakpoints: {
      [Breakpoints.lg]: SizeBreakpointLg,
      [Breakpoints.md]: SizeBreakpointMd,
      [Breakpoints.sm]: SizeBreakpointSm,
      [Breakpoints.xl]: SizeBreakpointXl,
      [Breakpoints.xs]: SizeBreakpointXs,
      [Breakpoints.xxl]: SizeBreakpointXxl,
    },

    extend: {
      recipes: {
        button: ButtonRecipes.button,

        inputCheckbox: InputCheckboxRecipes.inputCheckbox,
        inputCheckboxCheckmark: InputCheckboxRecipes.inputCheckboxCheckmark,
        inputCheckboxContainer: InputCheckboxRecipes.inputCheckboxContainer,
        inputCheckboxLabel: InputCheckboxRecipes.inputCheckboxLabel,

        inputDateContainer: InputDateRecipes.inputDateContainer,
        inputDateDay: InputDateRecipes.inputDateDay,
        inputDateFields: InputDateRecipes.inputDateFields,
        inputDateLabel: InputDateRecipes.inputDateLabel,
        inputDateMessage: InputDateRecipes.inputDateMessage,
        inputDateMonth: InputDateRecipes.inputDateMonth,
        inputDateYear: InputDateRecipes.inputDateYear,

        inputText: InputTextRecipes.inputText,
        inputTextDescription: InputTextRecipes.inputTextDescription,
        inputTextField: InputTextRecipes.inputTextField,
        inputTextIcon: InputTextRecipes.inputTextIcon,
        inputTextLabel: InputTextRecipes.inputTextLabel,
        inputTextMessage: InputTextRecipes.inputTextMessage,

        selectContainer: SelectRecipes.selectContainer,
        selectDescription: SelectRecipes.selectDescription,
        selectDropdown: SelectRecipes.selectDropdown,
        selectIndicator: SelectRecipes.selectIndicator,
        selectItem: SelectRecipes.selectItem,
        selectItemGroup: SelectRecipes.selectItemGroup,
        selectItemSeparator: SelectRecipes.selectItemSeparator,
        selectLabel: SelectRecipes.selectLabel,
        selectTrigger: SelectRecipes.selectTrigger,
        selectValue: SelectRecipes.selectValue,

        typography: TypographyRecipes.typography,
      },
    },
  },

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
})

export default fractalPreset
