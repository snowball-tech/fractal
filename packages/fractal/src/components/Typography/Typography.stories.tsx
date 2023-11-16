import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Typography, TypographyVariants } from '.'
import { DEFAULT_VARIANT } from './Typography.constants'

type TypographyProps = ComponentProps<typeof Typography>

const perVariantStoriesParameters = {
  controls: {
    include: ['children'],
  },
}

const meta = {
  argTypes: {
    children: { control: 'text' },
    element: {
      control: 'text',
      table: {
        defaultValue: {
          summary: [
            `<h1 /> for ${TypographyVariants.Display1} and ${TypographyVariants.Heading1}`,
            `<h2 /> for ${TypographyVariants.Display2} and ${TypographyVariants.Heading2}`,
            `<h3 /> for ${TypographyVariants.DisplayWide} and ${TypographyVariants.Heading3}`,
            `<h4 /> for ${TypographyVariants.Heading4}`,
            `<a /> for ${TypographyVariants.Heading3Link}, ${TypographyVariants.Heading4Link}, ${TypographyVariants.Body1Link}, ${TypographyVariants.Body2Link} and ${TypographyVariants.CaptionLink}`,
            `<p /> for everything else`,
          ].join('; '),
        },
      },
    },
    variant: {
      options: Object.values(TypographyVariants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(TypographyVariants).join('|') },
      },
    },
  },
  args: {
    children: 'I have a very bad feeling about this!',
  },
  component: Typography,
  parameters: {
    componentSubtitle:
      "🐉 No. Your scroll must have a typo. That can't be! - Mushu - Mulan II",
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
        {TypographyVariants.Display1}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="display-2">
        {TypographyVariants.Display2}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="display-wide">
        {TypographyVariants.DisplayWide}
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
        {TypographyVariants.Heading1}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-2">
        {TypographyVariants.Heading2}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-3">
        {TypographyVariants.Heading3}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-3-link">
        {TypographyVariants.Heading3Link}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-4">
        {TypographyVariants.Heading4}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="heading-4-link">
        {TypographyVariants.Heading4Link}
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
        {TypographyVariants.Body1}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-1-median">
        {TypographyVariants.Body1Median}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-1-bold">
        {TypographyVariants.Body1Bold}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-1-link">
        {TypographyVariants.Body1Link}
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
        {TypographyVariants.Body2}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-2-median">
        {TypographyVariants.Body2Median}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-2-bold">
        {TypographyVariants.Body2Bold}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="body-2-link">
        {TypographyVariants.Body2Link}
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
        {TypographyVariants.CaptionMedian}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="caption-bold">
        {TypographyVariants.CaptionBold}
        <blockquote>{children}</blockquote>
      </Typography>
      <Typography variant="caption-link">
        {TypographyVariants.CaptionLink}
        <blockquote>{children}</blockquote>
      </Typography>
    </>
  ),
}
