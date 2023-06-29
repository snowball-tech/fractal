import type { Meta, StoryObj } from '@storybook/react'

import Typography from './Typography'
import { DEFAULT_VARIANT, Variants } from './Typography.constants'

const meta = {
  argTypes: {
    children: { control: 'text' },
    element: {
      control: 'text',
      table: {
        defaultValue: {
          details: [
            `<h1 /> for ${Variants.Display1} and ${Variants.Heading1}`,
            `<h2 /> for ${Variants.Display2} and ${Variants.Heading2}`,
            `<h3 /> for ${Variants.DisplayWide} and ${Variants.Heading3}`,
            `<h4 /> for ${Variants.Heading4}`,
            `<a /> for ${Variants.Heading3Link}, ${Variants.Heading4Link}, ${Variants.Body1Link}, ${Variants.Body2Link} and ${Variants.CaptionLink}`,
            `<p /> for everything else`,
          ].join('\n'),
          summary: 'Depending on the variant',
        },
      },
    },
    variant: {
      options: Object.values(Variants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
  component: Typography,
  parameters: {
    componentSubtitle: '👮 Anything you say can be used against you',
    controls: { hideNoControlsWarning: true, include: ['children'] },
  },

  title: 'React/Typography/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: meta.args.children,
  },
  parameters: {
    controls: { include: ['children', 'element', 'variant'] },
  },
  render: ({ children, ...args }) => (
    <Typography {...args}>{children}</Typography>
  ),
}

export const Display: Story = {
  render: ({ children }) => (
    <>
      <Typography variant="display-1">
        {Variants.Display1}
        <br />
        {children}
      </Typography>
      <Typography variant="display-2">
        {Variants.Display2}
        <br />
        {children}
      </Typography>
      <Typography variant="display-wide">
        {Variants.DisplayWide}
        <br />
        {children}
      </Typography>
    </>
  ),
}

export const Headings: Story = {
  render: ({ children }) => (
    <>
      <Typography variant="heading-1">
        {Variants.Heading1}
        <br />
        {children}
      </Typography>
      <Typography variant="heading-2">
        {Variants.Heading2}
        <br />
        {children}
      </Typography>
      <Typography variant="heading-3">
        {Variants.Heading3}
        <br />
        {children}
      </Typography>
      <Typography variant="heading-3-link">
        {Variants.Heading3Link}
        <br />
        {children}
      </Typography>
      <Typography variant="heading-4">
        {Variants.Heading4}
        <br />
        {children}
      </Typography>
      <Typography variant="heading-4-link">
        {Variants.Heading4Link}
        <br />
        {children}
      </Typography>
    </>
  ),
}

export const Body1: Story = {
  render: ({ children }) => (
    <>
      <Typography variant="body-1">
        {Variants.Body1}
        <br />
        {children}
      </Typography>
      <Typography variant="body-1-median">
        {Variants.Body1Median}
        <br />
        {children}
      </Typography>
      <Typography variant="body-1-bold">
        {Variants.Body1Bold}
        <br />
        {children}
      </Typography>
      <Typography variant="body-1-link">
        {Variants.Body1Link}
        <br />
        {children}
      </Typography>
    </>
  ),
}

export const Body2: Story = {
  render: ({ children }) => (
    <>
      <Typography variant="body-2">
        {Variants.Body2}
        <br />
        {children}
      </Typography>
      <Typography variant="body-2-median">
        {Variants.Body2Median}
        <br />
        {children}
      </Typography>
      <Typography variant="body-2-bold">
        {Variants.Body2Bold}
        <br />
        {children}
      </Typography>
      <Typography variant="body-2-link">
        {Variants.Body2Link}
        <br />
        {children}
      </Typography>
    </>
  ),
}

export const Caption: Story = {
  render: ({ children }) => (
    <>
      <Typography variant="caption-median">
        {Variants.CaptionMedian}
        <br />
        {children}
      </Typography>
      <Typography variant="caption-bold">
        {Variants.CaptionBold}
        <br />
        {children}
      </Typography>
      <Typography variant="caption-link">
        {Variants.CaptionLink}
        <br />
        {children}
      </Typography>
    </>
  ),
}
