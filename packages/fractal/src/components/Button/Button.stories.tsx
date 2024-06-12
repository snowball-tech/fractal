import CancelIcon from '@iconscout/react-unicons/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/icons/uil-search-alt'
import type { Meta, StoryObj } from '@storybook/react'
import { fn, userEvent, within } from '@storybook/test'
import type { ComponentProps, ReactNode } from 'react'

import ThemeProvider from '@/ThemeProvider'
import { Paper } from '@/components/Paper'
import { DEFAULT_THEME, Themes } from '@/constants'

import { Button, ButtonVariants } from '.'
import { DEFAULT_VARIANT } from './Button.constants'

type ButtonProps = ComponentProps<typeof Button>

const meta = {
  argTypes: {
    element: {
      control: 'text',
      table: {
        defaultValue: {
          summary: [
            `<a /> for components with \`href\``,
            `<button /> for components with \`onClick\` and anything else if you didn't provided an \`element\` prop.`,
          ].join('; '),
        },
      },
    },
    icon: {
      mapping: {
        Cancel: <CancelIcon />,
        Check: <CheckCircleIcon />,
        Error: <ExclamationCircleIcon />,
        None: undefined,
        Search: <SearchIcon />,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['None', 'Cancel', 'Check', 'Error', 'Send', 'Star'],
    },
    theme: {
      control: 'radio',
      options: Object.values(Themes),
      table: {
        defaultValue: { summary: DEFAULT_THEME },
        type: { summary: Object.values(Themes).join('|') },
      },
    },
    variant: {
      options: Object.values(ButtonVariants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(ButtonVariants).join('|') },
      },
    },
  },
  args: {
    disabled: false,
    fullWidth: false,
    href: '',
    icon: 'Send',
    iconOnly: false,
    iconPosition: 'right',
    inlineStyle: false,
    label: 'Punch it, Chewie!',
    target: '',
    theme: DEFAULT_THEME,
    truncate: true,
    type: 'button',
    underlined: true,
    wrap: false,
  },
  component: Button,
  parameters: {
    componentSubtitle:
      "🧑‍✈️ Hey, Auto, what's that flashing button? - Axiom's Captain B. McCrea - Wall-E",
  },

  title: 'Molecules/Button',
} satisfies Meta<ButtonProps>

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

const separator = (
  <hr
    style={{
      margin: 'var(--size-spacing-3) 0',
      width: '100%',
    }}
  />
)

const displayButtons = (
  <>
    <Wrapper>
      <Button label='"Display" button' variant="display" />
      <Button
        icon={<StarIcon />}
        label='"Display" button with right icon'
        variant="display"
      />
      <Button
        icon={<StarIcon />}
        iconPosition="left"
        label='"Display" button with left icon'
        variant="display"
      />
      <Button
        icon={<StarIcon />}
        iconOnly
        label='"Display" button with icon only'
        variant="display"
      />
    </Wrapper>

    <Wrapper>
      <Button disabled label='"Display" disabled button' variant="display" />
      <Button
        disabled
        icon={<StarIcon />}
        label='"Display" disabled button with right icon'
        variant="display"
      />
      <Button
        disabled
        icon={<StarIcon />}
        iconPosition="left"
        label='"Display" disabled button with left icon'
        variant="display"
      />
      <Button
        disabled
        icon={<StarIcon />}
        iconOnly
        label='"Display" disabled button with icon only'
        variant="display"
      />
    </Wrapper>

    <Wrapper>
      <Button
        element="p"
        label='"Display" button as a `p` element'
        variant="display"
      />
    </Wrapper>

    <Wrapper>
      <Button fullWidth label='Full width "Display" button' variant="display" />
    </Wrapper>
  </>
)
export const Display: Story = {
  render: () => (
    <>
      {displayButtons}

      {separator}

      <ThemeProvider theme={Themes.Dark}>
        <Paper>{displayButtons}</Paper>
      </ThemeProvider>
    </>
  ),
}

export const InteractiveDisplay: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('button'))
  },
  render: () => <Button label='"Display" button' variant="display" />,
}

const primaryButtons = (
  <>
    <Wrapper>
      <Button label="Primary button" variant="primary" />
      <Button icon={<SendIcon />} label="Primary button with right icon" />
      <Button
        icon={<SendIcon />}
        iconPosition="left"
        label="Primary button with left icon"
      />
      <Button
        icon={<SendIcon />}
        iconOnly
        label="Primary button with icon only"
      />
    </Wrapper>

    <Wrapper>
      <Button disabled label="Primary disabled button" />
      <Button
        disabled
        icon={<SendIcon />}
        label="Primary disabled button with right icon"
      />
      <Button
        disabled
        icon={<SendIcon />}
        iconPosition="left"
        label="Primary disabled button with left icon"
      />
      <Button
        disabled
        icon={<SendIcon />}
        iconOnly
        label="Primary disabled button with icon only"
      />
    </Wrapper>

    <Wrapper>
      <Button element="p" label="Primary button as a `p` element" />
    </Wrapper>

    <Wrapper>
      <Button fullWidth label="Full width primary button" />
    </Wrapper>
  </>
)

export const Primary: Story = {
  render: () => (
    <>
      {primaryButtons}

      {separator}

      <ThemeProvider theme={Themes.Dark}>
        <Paper>{primaryButtons}</Paper>
      </ThemeProvider>
    </>
  ),
}

export const InteractivePrimary: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('button'))
  },
  render: () => <Button label="Primary button" variant="primary" />,
}

const secondaryButtons = (
  <>
    <Wrapper>
      <Button label="Secondary button" variant="secondary" />
      <Button
        icon={<CancelIcon />}
        label="Secondary button with right icon"
        variant="secondary"
      />
      <Button
        icon={<CancelIcon />}
        iconPosition="left"
        label="Secondary button with left icon"
        variant="secondary"
      />
      <Button
        icon={<CancelIcon />}
        iconOnly
        label="Secondary button with icon only"
        variant="secondary"
      />
    </Wrapper>

    <Wrapper>
      <Button disabled label="Secondary disabled button" variant="secondary" />
      <Button
        disabled
        icon={<CancelIcon />}
        label="Secondary disabled button with right icon"
        variant="secondary"
      />
      <Button
        disabled
        icon={<CancelIcon />}
        iconPosition="left"
        label="Secondary disabled button with left icon"
        variant="secondary"
      />
      <Button
        disabled
        icon={<CancelIcon />}
        iconOnly
        label="Secondary disabled button with icon only"
        variant="secondary"
      />
    </Wrapper>

    <Wrapper>
      <Button
        element="p"
        label="Seconcary button as a `p` element"
        variant="secondary"
      />
    </Wrapper>

    <Wrapper>
      <Button
        fullWidth
        label="Full width secondary button"
        variant="secondary"
      />
    </Wrapper>
  </>
)
export const Secondary: Story = {
  render: () => (
    <>
      {secondaryButtons}

      {separator}

      <ThemeProvider theme={Themes.Dark}>
        <Paper>{secondaryButtons}</Paper>
      </ThemeProvider>
    </>
  ),
}

export const InteractiveSecondary: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('button'))
  },
  render: () => <Button label="Secondary button" variant="secondary" />,
}

const textButtons = (
  <>
    <Wrapper>
      <Button label="Text button" variant="text" />
      <Button
        icon={<CancelIcon />}
        label="Text button with right icon"
        variant="text"
      />
      <Button
        icon={<CancelIcon />}
        iconPosition="left"
        label="Text button with left icon"
        variant="text"
      />
      <Button
        icon={<CancelIcon />}
        iconOnly
        label="Text button with icon only"
        variant="text"
      />
    </Wrapper>

    <Wrapper>
      <Button disabled label="Text disabled button" variant="text" />
      <Button
        disabled
        icon={<CancelIcon />}
        label="Text disabled button with right icon"
        variant="text"
      />
      <Button
        disabled
        icon={<CancelIcon />}
        iconPosition="left"
        label="Text disabled button with left icon"
        variant="text"
      />
      <Button
        disabled
        icon={<CancelIcon />}
        iconOnly
        label="Text disabled button with icon only"
        variant="text"
      />
    </Wrapper>

    <Wrapper>
      <Button element="p" label="Text button as a `p` element" variant="text" />
    </Wrapper>

    <Wrapper>
      <Button fullWidth label="Full width text button" variant="text" />
    </Wrapper>
  </>
)
export const Text: Story = {
  render: () => (
    <>
      {textButtons}

      {separator}

      <ThemeProvider theme={Themes.Dark}>
        <Paper>{textButtons}</Paper>
      </ThemeProvider>
    </>
  ),
}

export const InteractiveText: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('button'))
  },
  render: () => <Button label="Text button" variant="text" />,
}
