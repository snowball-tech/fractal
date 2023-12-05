import { AllHTMLAttributes, ReactNode } from 'react'

import { Orientations, Positions } from './Tabs.constants'

export interface TabsProps
  extends Omit<
    AllHTMLAttributes<HTMLDivElement>,
    'defaultValue' | 'dir' | 'value'
  > {
  /**
   * The content of the tabs.
   *
   * You must use `TabContent` components inside of this.
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
  /** The accessible label for the tabs. */
  label?: string
  /**
   * Indicates if the tab bar should be larger (in height) than usual.
   *
   * This is only needed if you want to force the tab bar to be large because
   * otherwise, each `Tab` children component is checked to see if there is an
   * icon and a text and set this to `true` accordingly.
   *
   * Only has an effet in horizontal orientation.
   */
  large?: boolean
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
  tabsPosition?: `${Positions}`
}

export interface TabProps
  extends Omit<
    AllHTMLAttributes<HTMLButtonElement>,
    'label' | 'type' | 'value'
  > {
  /**
   * The content of the tab.
   *
   * Use this for complex content where a string (passed to the `label` prop) is
   * not enough.
   */
  children?: ReactNode
  /** Prevents the user from interacting with the tab. */
  disabled?: boolean
  /** An icon to display before the label. */
  icon?: ReactNode
  /**
   * The content of the tab.
   *
   * Use this when you only need to display text in a tab.
   * If you need more complex content, use the `children` prop.
   *
   * When using the `children` prop, you can use this prop to set a simple
   * textual representation of the item that will be used as the `aria-label`
   * and `title` for the tab.
   */
  label?: string
  /**
   * Indicates if the tab should be larger (in height) than usual.
   *
   * This is only needed if you want to force the tab bar to be large because
   * otherwise, each `Tab` children component is checked to see if there is an
   * icon and a text and set this to `true` accordingly.
   *
   * Only has an effet in horizontal orientation.
   */
  large?: boolean
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
