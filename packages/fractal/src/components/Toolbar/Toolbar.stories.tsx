import AlignCenterIcon from '@iconscout/react-unicons/dist/icons/uil-align-center-alt'
import JustifyIcon from '@iconscout/react-unicons/dist/icons/uil-align-justify'
import AlignLeftIcon from '@iconscout/react-unicons/dist/icons/uil-align-left'
import AlignRightIcon from '@iconscout/react-unicons/dist/icons/uil-align-right'
import BoldIcon from '@iconscout/react-unicons/dist/icons/uil-bold'
import ItalicIcon from '@iconscout/react-unicons/dist/icons/uil-italic'
import UnderlineIcon from '@iconscout/react-unicons/dist/icons/uil-underline'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Button } from '@/components/Button'
import { Select, SelectItem } from '@/components/Select'
import { Typography } from '@/components/Typography'

import {
  Toolbar,
  ToolbarOrientations,
  ToolbarSeparator,
  ToolbarToggle,
  ToolbarToggleGroup,
  ToolbarVariants,
} from '.'
import { DEFAULT_ORIENTATION, DEFAULT_VARIANT } from './Toolbar.constants'

const tools = (
  <>
    <Typography>Toolbar</Typography>

    <ToolbarSeparator />

    <div>
      <Select className="min-w-20" placeholder="Pick an option">
        <SelectItem label="Option 1" value="option-1" />
        <SelectItem label="Option 2" value="option-2" />
        <SelectItem label="Option 3" value="option-3" />
      </Select>
    </div>

    <ToolbarSeparator />

    <ToolbarToggleGroup multiple>
      <ToolbarToggle icon={<BoldIcon />} iconOnly label="Bold" value="bold" />
      <ToolbarToggle
        icon={<ItalicIcon />}
        iconOnly
        label="Italic"
        value="italic"
      />
      <ToolbarToggle
        icon={<UnderlineIcon />}
        iconOnly
        label="Underline"
        value="underline"
      />
    </ToolbarToggleGroup>

    <ToolbarToggleGroup>
      <ToolbarToggle icon={<AlignLeftIcon />} label="Align left" value="left" />
      <ToolbarToggle
        icon={<AlignCenterIcon />}
        label="Align center"
        value="center"
      />
      <ToolbarToggle
        icon={<JustifyIcon />}
        iconPosition="right"
        label="Justify"
        value="justify"
      />
      <ToolbarToggle
        icon={<AlignRightIcon />}
        iconPosition="right"
        label="Align right"
        value="right"
      />
    </ToolbarToggleGroup>

    <ToolbarSeparator />

    <div className="w-full justify-end">
      <Button label="Save" />
    </div>
  </>
)

type ToolbarProps = ComponentProps<typeof Toolbar>

const meta = {
  argTypes: {
    children: { control: { disable: true } },
    orientation: {
      options: Object.values(ToolbarOrientations),
      table: {
        defaultValue: { summary: DEFAULT_ORIENTATION },
        type: { summary: Object.values(ToolbarOrientations).join('|') },
      },
    },
    variant: {
      options: Object.values(ToolbarVariants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        disable: true,
        type: { summary: Object.values(ToolbarVariants).join('|') },
      },
    },
  },
  args: {
    children: tools,
    disabled: false,
    fullWidth: false,
  },
  component: Toolbar,
  parameters: {
    componentSubtitle:
      '🧌 Drool is a tool, kids. Use it - Prof. Knight - Monsters University',
  },

  title: 'Molecules/Toolbar',
} satisfies Meta<ToolbarProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    orientation: DEFAULT_ORIENTATION,
    variant: DEFAULT_VARIANT,
  },
}
