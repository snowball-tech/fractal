import { AllHTMLAttributes, ReactNode } from 'react'

import { Orientations } from './Tabs.constants'

export interface TabsProps
  extends Omit<
    AllHTMLAttributes<HTMLDivElement>,
    'defaultValue' | 'dir' | 'value'
  > {
  /**
   * The content of the tabs.
   *
   * You must use `TabContent` components.
   */
  children: ReactNode
  /**
   * The selected tab when tabs initially renders.
   *
   * Use this when you do not need to control the selected tab.
   */
  defaultTab?: string
  /** The reading direction of the tabs. */
  dir?: 'ltr' | 'rtl'
  /** Prevents the user from interacting with any tab. */
  disabled?: boolean
  /**
   * The label for the tabs
   *
   * Will be mainly used for accessibility purposes.
   */
  label?: string
  /** Event handler called when the selected tab changes. */
  onTabChange?: (newTab: string) => void
  /** The orientations of the tabs. */
  orientation?: `${Orientations}`
  /**
   * The controlled selected tab.
   *
   * Must be used in conjunction with `onTabChange`.
   */
  tab?: string
  /**
   * The list of the tabs to display.
   *
   * You must use `Tab` components.
   */
  tabs: ReactNode
}

export interface TabProps
  extends Omit<AllHTMLAttributes<HTMLButtonElement>, 'type' | 'value'> {
  /** Prevents the user from interacting with the tab. */
  disabled?: boolean
  /** The label of the tab. */
  label: string
  /**
   * The name of the tab.
   * Must be the same as the linked content.
   */
  name: string
}

export interface TabContentProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'value'> {
  /** The actual content. */
  children: ReactNode
  /**
   * Used to force mounting when more control is needed.
   *
   * Useful when controlling animation with React animation libraries for
   * example.
   */
  forceMount?: boolean
  /**
   * The name of the content.
   * Must be the same as the linked tab.
   */
  name: string
}
