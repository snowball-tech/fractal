import type { Meta, StoryObj } from '@storybook/react'

import {
  UilAlignCenterAlt as AlignCenterIcon,
  UilAlignLeft as AlignLeftIcon,
  UilAlignRight as AlignRightIcon,
  UilBold as BoldIcon,
  UilItalic as ItalicIcon,
  UilAlignJustify as JustifyIcon,
  UilLinkH as LinkIcon,
  UilUnderline as UnderlineIcon,
} from '@tooni/iconscout-unicons-react'

import type { ComponentProps } from 'react'

import {
  Toolbar,
  ToolbarButton,
  ToolbarDropdown,
  ToolbarDropdownItem,
  ToolbarElevations,
  ToolbarOrientations,
  ToolbarSeparator,
} from '.'
import { DEFAULT_ELEVATION, DEFAULT_ORIENTATION } from './Toolbar.constants'

const tools = (
  <>
    <ToolbarButton icon={<BoldIcon />} iconOnly label="Bold" value="bold" />
    <ToolbarButton
      icon={<ItalicIcon />}
      iconOnly
      label="Italic"
      value="italic"
    />
    <ToolbarButton
      icon={<UnderlineIcon />}
      iconOnly
      label="Underline"
      value="underline"
    />

    <ToolbarDropdown icon={<AlignLeftIcon />} iconOnly label="Alignment">
      <ToolbarDropdownItem
        icon={<AlignLeftIcon />}
        label="Align left"
        value="left"
      />
      <ToolbarDropdownItem
        icon={<AlignCenterIcon />}
        label="Align center"
        value="center"
      />
      <ToolbarDropdownItem
        icon={<AlignRightIcon />}
        label="Align right"
        value="right"
      />
      <ToolbarDropdownItem
        icon={<JustifyIcon />}
        label="Justify"
        value="justify"
      />
    </ToolbarDropdown>

    <ToolbarSeparator />

    <ToolbarButton icon={<LinkIcon />} label="Link" value="link" />
  </>
)

type ToolbarProps = ComponentProps<typeof Toolbar>

const meta = {
  args: {
    children: tools,
    disabled: false,
    elevation: DEFAULT_ELEVATION,
    fullWidth: false,
  },
  argTypes: {
    children: { control: { disable: true } },
    elevation: {
      control: 'radio',
      table: {
        defaultValue: { summary: DEFAULT_ELEVATION },
        type: { summary: Object.values(ToolbarElevations).join('|') },
      },
    },
    orientation: {
      options: Object.values(ToolbarOrientations),
      table: {
        defaultValue: { summary: DEFAULT_ORIENTATION },
        type: { summary: Object.values(ToolbarOrientations).join('|') },
      },
    },
  },
  component: Toolbar,
  parameters: {
    docs: {
      subtitle:
        '🧌 Drool is a tool, kids. Use it - Prof. Knight - Monsters University',
    },
  },

  title: 'Molecules/Toolbar',
} satisfies Meta<ToolbarProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    elevation: DEFAULT_ELEVATION,
    orientation: DEFAULT_ORIENTATION,
  },
}
