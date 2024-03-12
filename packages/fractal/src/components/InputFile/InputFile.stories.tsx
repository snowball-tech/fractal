import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import type { Meta, StoryObj } from '@storybook/react'
import { fn, userEvent, within } from '@storybook/test'
import type { ComponentProps, ReactNode } from 'react'

import { sleep } from '@/utils'

import { InputFile, InputFileVariants } from '.'
import { DEFAULT_VARIANT } from './InputFile.constants'

type InputFileProps = ComponentProps<typeof InputFile>

const meta = {
  argTypes: {
    variant: {
      options: Object.values(InputFileVariants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(InputFileVariants).join('|') },
      },
    },
  },
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
  component: InputFile,
  parameters: {
    componentSubtitle:
      "🐆 Yikes! That is the smallest case file I've ever seen. - Agent Clawhauser - Zootopia",
    controls: {
      exclude: ['triggerProps'],
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
  <div
    style={{
      alignItems: 'flex-end',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--size-spacing-2)',
      marginBottom: 'var(--size-spacing-2)',
    }}
  >
    {children}
  </div>
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
