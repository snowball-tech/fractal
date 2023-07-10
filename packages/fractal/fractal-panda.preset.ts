import { definePreset } from '@pandacss/dev'
import {
  SizeBreakpointLg,
  SizeBreakpointMd,
  SizeBreakpointSm,
  SizeBreakpointXl,
  SizeBreakpointXs,
  SizeBreakpointXxl,
} from '@snowball-tech/design-tokens'

import { Breakpoints } from '@/constants'
import * as recipes from '@/recipes'

const fractalPreset = definePreset({
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

  // Don't use default theme from PandaCSS.
  eject: true,
  // Only import the base presets with useful resets and utilities.
  presets: ['@pandacss/preset-base'],

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
        button: recipes.button,

        inputCheckbox: recipes.inputCheckbox,
        inputCheckboxCheckmark: recipes.inputCheckboxCheckmark,
        inputCheckboxContainer: recipes.inputCheckboxContainer,
        inputCheckboxLabel: recipes.inputCheckboxLabel,

        inputText: recipes.inputText,
        inputTextDescription: recipes.inputTextDescription,
        inputTextField: recipes.inputTextField,
        inputTextIcon: recipes.inputTextIcon,
        inputTextLabel: recipes.inputTextLabel,
        inputTextMessage: recipes.inputTextMessage,

        typography: recipes.typography,
      },
    },
  },

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
})

export default fractalPreset
