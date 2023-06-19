import type { Meta, StoryObj } from '@storybook/react'

import { Typography, Variants } from './index'

const meta = {
  argTypes: {
    children: { control: 'text' },
    element: {
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
      table: { defaultValue: { summary: Variants.Body1 } },
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
  // tags: ['autodocs'],
  title: 'Typography/Typography',
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
      <Typography variant={Variants.Display1}>
        {Variants.Display1}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Display2}>
        {Variants.Display2}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.DisplayWide}>
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
      <Typography variant={Variants.Heading1}>
        {Variants.Heading1}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Heading2}>
        {Variants.Heading2}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Heading3}>
        {Variants.Heading3}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Heading4}>
        {Variants.Heading4}
        <br />
        {children}
      </Typography>
    </>
  ),
}

export const Body1: Story = {
  render: ({ children }) => (
    <>
      <Typography variant={Variants.Body1}>
        {Variants.Body1}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Body1Median}>
        {Variants.Body1Median}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Body1Bold}>
        {Variants.Body1Bold}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Body1Link}>
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
      <Typography variant={Variants.Body2}>
        {Variants.Body2}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Body2Median}>
        {Variants.Body2Median}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Body2Bold}>
        {Variants.Body2Bold}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.Body2Link}>
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
      <Typography variant={Variants.CaptionMedian}>
        {Variants.CaptionMedian}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.CaptionBold}>
        {Variants.CaptionBold}
        <br />
        {children}
      </Typography>
      <Typography variant={Variants.CaptionLink}>
        {Variants.CaptionLink}
        <br />
        {children}
      </Typography>
    </>
  ),
}
