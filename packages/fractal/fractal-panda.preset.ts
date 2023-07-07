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
        inputCheckboxContainer: recipes.inputCheckboxContainer,
        inputCheckboxCheckmark: recipes.inputCheckboxCheckmark,
        inputCheckboxLabel: recipes.inputCheckboxLabel,
        inputCheckbox: recipes.inputCheckbox,
        typography: recipes.typography,
        inputTextField: recipes.inputTextField,
        inputTextLabel: recipes.inputTextLabel,
        inputTextIcon: recipes.inputTextIcon,
        inputText: recipes.inputText,
      },
    },
  },

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
})

export default fractalPreset
