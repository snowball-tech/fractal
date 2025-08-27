import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ComponentProps } from 'react'

import { Typography } from './Typography'
import { DEFAULT_VARIANT, Variants } from './Typography.constants'

type TypographyProps = ComponentProps<typeof Typography>

const perVariantStoriesParameters = {
  controls: {
    include: ['children'],
  },
}

const meta = {
  args: {
    children: 'I have a very bad feeling about this!',
  },
  argTypes: {
    children: { control: 'text' },
    element: {
      control: 'text',
      table: {
        defaultValue: {
          summary: [
            `<h1 /> for ${Variants.Display1} and ${Variants.Heading1}`,
            `<h2 /> for ${Variants.Display2} and ${Variants.Heading2}`,
            `<h3 /> for ${Variants.DisplayWide} and ${Variants.Heading3}`,
            `<h4 /> for ${Variants.Heading4}`,
            `<a /> for ${Variants.Heading3Link}, ${Variants.Heading4Link}, ${Variants.Body1Link}, ${Variants.Body2Link} and ${Variants.CaptionLink}`,
            `<p /> for everything else`,
          ].join('; '),
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
  component: Typography,
  parameters: {
    docs: {
      subtitle:
        "🐉 No. Your scroll must have a typo. That can't be! - Mushu - Mulan II",
    },
  },

  title: 'Molecules/Typography',
} satisfies Meta<TypographyProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: DEFAULT_VARIANT,
  },
}

export const Display: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: ({ children }) => (
    <>
      <Typography variant="display-1">
        {Variants.Display1}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="display-2">
        {Variants.Display2}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="display-wide">
        {Variants.DisplayWide}
        <blockquote>{children}</blockquote>
      </Typography>
    </>
  ),
}

export const Headings: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: ({ children }) => (
    <>
      <Typography variant="heading-1">
        {Variants.Heading1}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-2">
        {Variants.Heading2}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-3">
        {Variants.Heading3}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-3-link">
        {Variants.Heading3Link}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-4">
        {Variants.Heading4}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-4-link">
        {Variants.Heading4Link}
        <blockquote>{children}</blockquote>
      </Typography>
    </>
  ),
}

export const Body1: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: ({ children }) => (
    <>
      <Typography variant="body-1">
        {Variants.Body1}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-1-median">
        {Variants.Body1Median}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-1-bold">
        {Variants.Body1Bold}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-1-link">
        {Variants.Body1Link}
        <blockquote>{children}</blockquote>
      </Typography>
    </>
  ),
}

export const Body2: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: ({ children }) => (
    <>
      <Typography variant="body-2">
        {Variants.Body2}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-2-median">
        {Variants.Body2Median}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-2-bold">
        {Variants.Body2Bold}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-2-link">
        {Variants.Body2Link}
        <blockquote>{children}</blockquote>
      </Typography>
    </>
  ),
}

export const Caption: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: ({ children }) => (
    <>
      <Typography variant="caption-median">
        {Variants.CaptionMedian}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="caption-bold">
        {Variants.CaptionBold}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="caption-link">
        {Variants.CaptionLink}
        <blockquote>{children}</blockquote>
      </Typography>
    </>
  ),
}
