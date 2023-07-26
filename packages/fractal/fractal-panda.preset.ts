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

import * as AutocompleteRecipes from '@/components/Autocomplete/Autocomplete.recipe'
import * as ButtonRecipes from '@/components/Button/Button.recipe'
import * as CardRecipes from '@/components/Card/Card.recipe'
import * as InputCheckboxRecipes from '@/components/InputCheckbox/InputCheckbox.recipe'
import * as InputDateRecipes from '@/components/InputDate/InputDate.recipe'
import * as InputPhoneRecipes from '@/components/InputPhone/InputPhone.recipe'
import * as InputPinCodeRecipes from '@/components/InputPinCode/InputPinCode.recipe'
import * as InputRadioRecipes from '@/components/InputRadio/InputRadio.recipe'
import * as InputTextRecipes from '@/components/InputText/InputText.recipe'
import * as SelectRecipes from '@/components/Select/Select.recipe'
import * as ToggleRecipes from '@/components/Toggle/Toggle.recipe'
import * as ToggleGroupRecipes from '@/components/ToggleGroup/ToggleGroup.recipe'
import * as TypographyRecipes from '@/components/Typography/Typography.recipe'

import { extendConditions } from './src/conditions'
import { Breakpoints, PREFIX } from './src/constants'

const GROUPS = {
  autocomplete: `${PREFIX}-${AutocompleteRecipes.GROUP_NAME}`,
  button: `${PREFIX}-${ButtonRecipes.GROUP_NAME}`,
  card: `${PREFIX}-${CardRecipes.GROUP_NAME}`,
  inputCheckbox: `${PREFIX}-${InputCheckboxRecipes.GROUP_NAME}`,
  inputDate: `${PREFIX}-${InputDateRecipes.GROUP_NAME}`,
  inputPhone: `${PREFIX}-${InputPhoneRecipes.GROUP_NAME}`,
  inputPinCode: `${PREFIX}-${InputPinCodeRecipes.GROUP_NAME}`,
  inputRadio: `${PREFIX}-${InputRadioRecipes.GROUP_NAME}`,
  inputRadioGroup: `${PREFIX}-${InputRadioRecipes.GROUP_NAME}-group`,
  inputText: `${PREFIX}-${InputTextRecipes.GROUP_NAME}`,
  select: `${PREFIX}-${SelectRecipes.GROUP_NAME}`,
  selectTrigger: `${PREFIX}-${SelectRecipes.GROUP_NAME}-trigger`,
  toggle: `${PREFIX}-${ToggleRecipes.GROUP_NAME}`,
  toggleGroup: `${PREFIX}-${ToggleGroupRecipes.GROUP_NAME}`,
  toggleGroupItem: `${PREFIX}-${ToggleGroupRecipes.GROUP_NAME}-item`,
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
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },

      recipes: {
        autocompleteContainer: AutocompleteRecipes.autocompleteContainer,
        autocompleteDescription: AutocompleteRecipes.autocompleteDescription,
        autocompleteDropdown: AutocompleteRecipes.autocompleteDropdown,
        autocompleteEmpty: AutocompleteRecipes.autocompleteEmpty,
        autocompleteInput: AutocompleteRecipes.autocompleteInput,
        autocompleteItem: AutocompleteRecipes.autocompleteItem,
        autocompleteItemGroup: AutocompleteRecipes.autocompleteItemGroup,
        autocompleteItemSeparator:
          AutocompleteRecipes.autocompleteItemSeparator,
        autocompleteLabel: AutocompleteRecipes.autocompleteLabel,
        autocompleteLoading: AutocompleteRecipes.autocompleteLoading,
        autocompleteMessage: AutocompleteRecipes.autocompleteMessage,

        button: ButtonRecipes.button,
        buttonLabel: ButtonRecipes.buttonLabel,

        card: CardRecipes.card,

        inputCheckbox: InputCheckboxRecipes.inputCheckbox,
        inputCheckboxCheckmark: InputCheckboxRecipes.inputCheckboxCheckmark,
        inputCheckboxContainer: InputCheckboxRecipes.inputCheckboxContainer,
        inputCheckboxLabel: InputCheckboxRecipes.inputCheckboxLabel,

        inputDateContainer: InputDateRecipes.inputDateContainer,
        inputDateDay: InputDateRecipes.inputDateDay,
        inputDateField: InputDateRecipes.inputDateField,
        inputDateFields: InputDateRecipes.inputDateFields,
        inputDateLabel: InputDateRecipes.inputDateLabel,
        inputDateMessage: InputDateRecipes.inputDateMessage,
        inputDateMonth: InputDateRecipes.inputDateMonth,
        inputDateYear: InputDateRecipes.inputDateYear,

        inputPhoneContainer: InputPhoneRecipes.inputPhoneContainer,
        inputPhoneDescription: InputPhoneRecipes.inputPhoneDescription,
        inputPhoneFields: InputPhoneRecipes.inputPhoneFields,
        inputPhoneLabel: InputPhoneRecipes.inputPhoneLabel,
        inputPhoneMessage: InputPhoneRecipes.inputPhoneMessage,
        inputPhoneNumber: InputPhoneRecipes.inputPhoneNumber,
        inputPhoneNumberInputText: InputPhoneRecipes.inputPhoneNumberInputText,
        inputPhoneNumberPrefixHelper:
          InputPhoneRecipes.inputPhoneNumberPrefixHelper,
        inputPhonePrefix: InputPhoneRecipes.inputPhonePrefix,
        inputPhonePrefixDropdown: InputPhoneRecipes.inputPhonePrefixDropdown,
        inputPhonePrefixSearch: InputPhoneRecipes.inputPhonePrefixSearch,

        inputPinCodeContainer: InputPinCodeRecipes.inputPinCodeContainer,
        inputPinCodeDescription: InputPinCodeRecipes.inputPinCodeDescription,
        inputPinCodeField: InputPinCodeRecipes.inputPinCodeField,
        inputPinCodeFields: InputPinCodeRecipes.inputPinCodeFields,
        inputPinCodeLabel: InputPinCodeRecipes.inputPinCodeLabel,
        inputPinCodeMessage: InputPinCodeRecipes.inputPinCodeMessage,

        inputRadio: InputRadioRecipes.inputRadio,
        inputRadioCheckmark: InputRadioRecipes.inputRadioCheckmark,
        inputRadioContainer: InputRadioRecipes.inputRadioContainer,
        inputRadioGroup: InputRadioRecipes.inputRadioGroup,
        inputRadioLabel: InputRadioRecipes.inputRadioLabel,

        inputText: InputTextRecipes.inputText,
        inputTextContainer: InputTextRecipes.inputTextContainer,
        inputTextDescription: InputTextRecipes.inputTextDescription,
        inputTextAddendum: InputTextRecipes.inputTextAddendum,
        inputTextPrefix: InputTextRecipes.inputTextPrefix,
        inputTextSuffix: InputTextRecipes.inputTextSuffix,
        inputTextLabel: InputTextRecipes.inputTextLabel,
        inputTextMessage: InputTextRecipes.inputTextMessage,
        inputTextWrapper: InputTextRecipes.inputTextWrapper,

        selectContainer: SelectRecipes.selectContainer,
        selectDescription: SelectRecipes.selectDescription,
        selectDropdown: SelectRecipes.selectDropdown,
        selectDropdownScrollbar: SelectRecipes.selectDropdownScrollbar,
        selectDropdownScrollbarThumbs:
          SelectRecipes.selectDropdownScrollbarThumbs,
        selectDropdownScrollViewport:
          SelectRecipes.selectDropdownScrollViewport,
        selectIndicator: SelectRecipes.selectIndicator,
        selectItem: SelectRecipes.selectItem,
        selectItemGroup: SelectRecipes.selectItemGroup,
        selectItemSeparator: SelectRecipes.selectItemSeparator,
        selectLabel: SelectRecipes.selectLabel,
        selectTrigger: SelectRecipes.selectTrigger,
        selectValue: SelectRecipes.selectValue,

        toggle: ToggleRecipes.toggle,
        toggleGroup: ToggleGroupRecipes.toggleGroup,
        toggleLabel: ToggleRecipes.toggleLabel,

        typography: TypographyRecipes.typography,
      },
    },
  },

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
})

export default fractalPreset
