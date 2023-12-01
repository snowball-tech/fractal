import type { AllHTMLAttributes } from 'react'

import { ButtonProps } from '@/components/Button/Button.types'

import { Variants } from './InputFile.constants'

export type CombinedRefs = {
  fileInput: HTMLInputElement | null
  trigger: HTMLButtonElement | null
}

export interface InputFileProps
  extends Omit<AllHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Prevents the user from interacting with the input file and the trigger. */
  disabled?: boolean
  /** The label of the trigger of the input file. */
  label: string
  /** Event handler called when one or multiple files are selected. */
  onChange?: (files: FileList | null) => void
  /** The props to pass to the trigger of the input file. */
  triggerProps?: Partial<
    Omit<
      ButtonProps,
      'disabled' | 'href' | 'label' | 'target' | 'type' | 'variant'
    >
  >
  /**
   * The variant of the input file.
   *
   * Currently, only trigger button variants are available (and the variants
   * name follow the variants name of the `Button` component).
   */
  variant?: `${Variants}`
}
