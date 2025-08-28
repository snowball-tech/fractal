import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ComponentProps } from 'react'

import { DEFAULT_THEME, Themes } from '@/constants'
import ThemeProvider from '@/ThemeProvider'

import { Paper } from './Paper'
import { DEFAULT_ELEVATION, Elevations } from './Paper.constants'

type PaperProps = ComponentProps<typeof Paper>

const meta = {
  args: {
    children:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',
    collapseButtonLabel: 'Collapse',
    collapsed: false,
    collapsible: false,
    defaultCollapsed: false,
    elevation: DEFAULT_ELEVATION,
    expandButtonLabel: 'Expand',
    theme: DEFAULT_THEME,
    title: undefined,
  },
  argTypes: {
    children: { control: 'text' },
    elevation: {
      control: 'radio',
      table: {
        defaultValue: { summary: DEFAULT_ELEVATION },
        type: { summary: Object.values(Elevations).join('|') },
      },
    },
    theme: {
      control: 'radio',
      options: Object.values(Themes),
      table: {
        defaultValue: { summary: DEFAULT_THEME },
        type: { summary: Object.values(Themes).join('|') },
      },
    },
    title: { control: 'text' },
  },
  component: Paper,
  parameters: {
    docs: {
      subtitle: `🦸‍♂️ I've been nice, I've stood for photos, signed every scrap of paper you pushed at me... - Mr. Incredible - The Incredibles`,
    },
  },

  title: 'Molecules/Paper',
} satisfies Meta<PaperProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    elevation: DEFAULT_ELEVATION,
    theme: DEFAULT_THEME,
  },
}

const separator = (
  <hr
    style={{
      margin: 'var(--size-spacing-3) 0',
      width: '100%',
    }}
  />
)

export const Papers: Story = {
  parameters: {
    controls: {
      include: ['children'],
    },
  },
  render: ({ children }) => (
    <div className="flex flex-col gap-2">
      <Paper elevation="flat">{children}</Paper>
      <Paper elevation="light">{children}</Paper>
      <Paper elevation="bordered">{children}</Paper>
      <Paper elevation="elevated">{children}</Paper>
      <Paper elevation="higher">{children}</Paper>

      {separator}

      <ThemeProvider theme={Themes.Dark}>
        <Paper elevation="flat">{children}</Paper>
        <Paper elevation="light">{children}</Paper>
        <Paper elevation="bordered">{children}</Paper>
        <Paper elevation="elevated">{children}</Paper>
        <Paper elevation="higher">{children}</Paper>
      </ThemeProvider>
    </div>
  ),
}

export const PapersWithTitle: Story = {
  parameters: {
    controls: {
      include: ['children', 'title'],
    },
  },
  render: ({ children, title = 'This is the title of the paper' }) => (
    <div className="flex flex-col gap-2">
      <Paper elevation="flat" title={title}>
        {children}
      </Paper>
      <Paper elevation="light" title={title}>
        {children}
      </Paper>
      <Paper elevation="bordered" title={title}>
        {children}
      </Paper>
      <Paper elevation="elevated" title={title}>
        {children}
      </Paper>
      <Paper elevation="higher" title={title}>
        {children}
      </Paper>

      {separator}

      <ThemeProvider theme={Themes.Dark}>
        <Paper elevation="flat" title={title}>
          {children}
        </Paper>
        <Paper elevation="light" title={title}>
          {children}
        </Paper>
        <Paper elevation="bordered" title={title}>
          {children}
        </Paper>
        <Paper elevation="elevated" title={title}>
          {children}
        </Paper>
        <Paper elevation="higher" title={title}>
          {children}
        </Paper>
      </ThemeProvider>
    </div>
  ),
}

export const CollapsiblePapers: Story = {
  parameters: {
    controls: {
      include: ['children'],
    },
  },
  render: ({ children }) => (
    <div className="flex flex-col gap-2">
      <Paper collapsible elevation="flat">
        {children}
      </Paper>
      <Paper collapsible elevation="light">
        {children}
      </Paper>
      <Paper collapsible elevation="bordered">
        {children}
      </Paper>
      <Paper collapsible elevation="elevated">
        {children}
      </Paper>
      <Paper collapsible elevation="higher">
        {children}
      </Paper>

      {separator}

      <ThemeProvider theme={Themes.Dark}>
        <Paper collapsible elevation="flat">
          {children}
        </Paper>
        <Paper collapsible elevation="light">
          {children}
        </Paper>
        <Paper collapsible elevation="bordered">
          {children}
        </Paper>
        <Paper collapsible elevation="elevated">
          {children}
        </Paper>
        <Paper collapsible elevation="higher">
          {children}
        </Paper>
      </ThemeProvider>
    </div>
  ),
}
export const CollapsiblePapersWithTitle: Story = {
  parameters: {
    controls: {
      include: ['children', 'title'],
    },
  },
  render: ({ children, title = 'This is the title of the paper' }) => (
    <div className="flex flex-col gap-2">
      <Paper collapsible elevation="flat" title={title}>
        {children}
      </Paper>
      <Paper collapsible elevation="light" title={title}>
        {children}
      </Paper>
      <Paper collapsible elevation="bordered" title={title}>
        {children}
      </Paper>
      <Paper collapsible elevation="elevated" title={title}>
        {children}
      </Paper>
      <Paper collapsible elevation="higher" title={title}>
        {children}
      </Paper>

      {separator}

      <ThemeProvider theme={Themes.Dark}>
        <Paper collapsible elevation="flat" title={title}>
          {children}
        </Paper>
        <Paper collapsible elevation="light" title={title}>
          {children}
        </Paper>
        <Paper collapsible elevation="bordered" title={title}>
          {children}
        </Paper>
        <Paper collapsible elevation="elevated" title={title}>
          {children}
        </Paper>
        <Paper collapsible elevation="higher" title={title}>
          {children}
        </Paper>
      </ThemeProvider>
    </div>
  ),
}
