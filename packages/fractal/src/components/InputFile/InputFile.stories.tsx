import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilCancel as CancelIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'
import { fn, userEvent, within } from 'storybook/test'

import type { ComponentProps, ReactNode } from 'react'

import { sleep } from '@/utils'

import { InputFile } from './InputFile'
import { DEFAULT_VARIANT, Variants } from './InputFile.constants'

type InputFileProps = ComponentProps<typeof InputFile>

const meta = {
  args: {
    disabled: false,
    label: 'Punch it, Chewie!',
    triggerProps: {
      fullWidth: false,
      icon: <SendIcon />,
      iconOnly: false,
      iconPosition: 'right',
    },
  },
  argTypes: {
    variant: {
      options: Object.values(Variants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  component: InputFile,
  parameters: {
    controls: {
      exclude: ['triggerProps'],
    },
    docs: {
      subtitle:
        "🐆 Yikes! That is the smallest case file I've ever seen. - Agent Clawhauser - Zootopia",
    },
  },

  title: 'Molecules/Input/InputFile',
} satisfies Meta<InputFileProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: DEFAULT_VARIANT,
  },
}

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-end gap-2">{children}</div>
)

export const Display: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputFile
          label='"Display" input file trigger button'
          variant="display"
        />
        <InputFile
          label='"Display" input file trigger button with right icon'
          triggerProps={{ icon: <StarIcon /> }}
          variant="display"
        />
        <InputFile
          label='"Display" input file trigger button with left icon'
          triggerProps={{ icon: <StarIcon />, iconPosition: 'left' }}
          variant="display"
        />
        <InputFile
          label='"Display" input file trigger button with icon only'
          triggerProps={{ icon: <StarIcon />, iconOnly: true }}
          variant="display"
        />
      </Wrapper>

      <Wrapper>
        <InputFile
          disabled
          label='"Display" disabled input file trigger button'
          variant="display"
        />
        <InputFile
          disabled
          label='"Display" disabled input file trigger button with right icon'
          triggerProps={{ icon: <StarIcon /> }}
          variant="display"
        />
        <InputFile
          disabled
          label='"Display" disabled input file trigger button with left icon'
          triggerProps={{ icon: <StarIcon />, iconPosition: 'left' }}
          variant="display"
        />
        <InputFile
          disabled
          label='"Display" disabled input file trigger button with icon only'
          triggerProps={{ icon: <StarIcon />, iconOnly: true }}
          variant="display"
        />
      </Wrapper>

      <Wrapper>
        <InputFile
          label='Full width "Display" input file trigger button'
          triggerProps={{ fullWidth: true }}
          variant="display"
        />
      </Wrapper>
    </>
  ),
}

export const InteractiveDisplay: Story = {
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('button'))
    await sleep(500)
    await userEvent.click(canvas.getByRole('button'))
  },
  render: () => (
    <InputFile label='"Display" input file trigger button' variant="display" />
  ),
}

export const Primary: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputFile
          label="Primary input file trigger button"
          variant="primary"
        />
        <InputFile
          label="Primary input file trigger button with right icon"
          triggerProps={{ icon: <SendIcon /> }}
        />
        <InputFile
          label="Primary input file trigger button with left icon"
          triggerProps={{ icon: <SendIcon />, iconPosition: 'left' }}
        />
        <InputFile
          label="Primary input file trigger button with icon only"
          triggerProps={{ icon: <SendIcon />, iconOnly: true }}
        />
      </Wrapper>

      <Wrapper>
        <InputFile
          disabled
          label="Primary disabled input file trigger button"
        />
        <InputFile
          disabled
          label="Primary disabled input file trigger button with right icon"
          triggerProps={{ icon: <SendIcon /> }}
        />
        <InputFile
          disabled
          label="Primary disabled input file trigger button with left icon"
          triggerProps={{ icon: <SendIcon />, iconPosition: 'left' }}
        />
        <InputFile
          disabled
          label="Primary disabled input file trigger button with icon only"
          triggerProps={{ icon: <SendIcon />, iconOnly: true }}
        />
      </Wrapper>

      <Wrapper>
        <InputFile
          label="Full width primary input file trigger button"
          triggerProps={{ fullWidth: true }}
        />
      </Wrapper>
    </>
  ),
}

export const InteractivePrimary: Story = {
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('button'))
    await sleep(500)
    await userEvent.click(canvas.getByRole('button'))
  },
  render: () => (
    <InputFile label="Primary input file trigger button" variant="primary" />
  ),
}

export const Secondary: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputFile
          label="Secondary input file trigger button"
          variant="secondary"
        />
        <InputFile
          label="Secondary input file trigger button with right icon"
          triggerProps={{ icon: <CancelIcon /> }}
          variant="secondary"
        />
        <InputFile
          label="Secondary input file trigger button with left icon"
          triggerProps={{ icon: <CancelIcon />, iconPosition: 'left' }}
          variant="secondary"
        />
        <InputFile
          label="Secondary input file trigger button with icon only"
          triggerProps={{ icon: <CancelIcon />, iconOnly: true }}
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputFile
          disabled
          label="Secondary disabled input file trigger button"
          variant="secondary"
        />
        <InputFile
          disabled
          label="Secondary disabled input file trigger button with right icon"
          triggerProps={{ icon: <CancelIcon /> }}
          variant="secondary"
        />
        <InputFile
          disabled
          label="Secondary disabled input file trigger button with left icon"
          triggerProps={{ icon: <CancelIcon />, iconPosition: 'left' }}
          variant="secondary"
        />
        <InputFile
          disabled
          label="Secondary disabled input file trigger button with icon only"
          triggerProps={{ icon: <CancelIcon />, iconOnly: true }}
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputFile
          label="Full width secondary input file trigger button"
          triggerProps={{ fullWidth: true }}
          variant="secondary"
        />
      </Wrapper>
    </>
  ),
}

export const InteractiveSecondary: Story = {
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('button'))
    await sleep(500)
    await userEvent.click(canvas.getByRole('button'))
  },
  render: () => (
    <InputFile
      label="Secondary input file trigger button"
      variant="secondary"
    />
  ),
}

export const Text: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputFile label="Text input file trigger button" variant="text" />
        <InputFile
          label="Text input file trigger button with right icon"
          triggerProps={{ icon: <SearchIcon /> }}
          variant="text"
        />
        <InputFile
          label="Text input file trigger button with left icon"
          triggerProps={{ icon: <SearchIcon />, iconPosition: 'left' }}
          variant="text"
        />
        <InputFile
          label="Text input file trigger button with icon only"
          triggerProps={{ icon: <SearchIcon />, iconOnly: true }}
          variant="text"
        />
      </Wrapper>

      <Wrapper>
        <InputFile
          disabled
          label="Text disabled input file trigger button"
          variant="text"
        />
        <InputFile
          disabled
          label="Text disabled input file trigger button with right icon"
          triggerProps={{ icon: <SearchIcon /> }}
          variant="text"
        />
        <InputFile
          disabled
          label="Text disabled input file trigger button with left icon"
          triggerProps={{ icon: <SearchIcon />, iconPosition: 'left' }}
          variant="text"
        />
        <InputFile
          disabled
          label="Text disabled input file trigger button with icon only"
          triggerProps={{ icon: <SearchIcon />, iconOnly: true }}
          variant="text"
        />
      </Wrapper>

      <Wrapper>
        <InputFile
          label="Full width text input file trigger button"
          triggerProps={{ fullWidth: true }}
          variant="text"
        />
      </Wrapper>
    </>
  ),
}

export const InteractiveText: Story = {
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('button'))
    await sleep(500)
    await userEvent.click(canvas.getByRole('button'))
  },
  render: () => (
    <InputFile label="Text input file trigger button" variant="text" />
  ),
}
