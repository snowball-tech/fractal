import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

import { cj, cn } from '@/styles/helpers'

import { Logo, LogoSizes } from '.'
import { DEFAULT_SIZE } from './Logo.constants'

const note = (
  <blockquote className="mb-8 ml-0">
    <h5>ℹ️ Note</h5>
    <hr />
    <p>
      The black background is only there to make light logo/picto/brand variants
      visible in the Storybook, it won&#39;t be there when actually using the
      component.
    </p>
  </blockquote>
)

type LogoProps = ComponentProps<typeof Logo>

const meta: Meta<LogoProps> = {
  argTypes: {
    size: {
      options: Object.values(LogoSizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(LogoSizes).join('|') },
      },
    },
  },
  component: Logo,
  decorators: [
    // eslint-disable-next-line unicorn/prevent-abbreviations
    function WithArgs(Story, context) {
      const isLight =
        context.args.pictoVariant === 'light' ||
        context.args.brandVariant === 'light'

      return (
        <>
          {isLight && note}

          <div className={cj('w-fit rounded-sm p-2', isLight ? 'bg-dark' : '')}>
            <Story args={{ ...context.args }} />
          </div>
        </>
      )
    },
  ],
  parameters: {
    componentSubtitle: `🦸‍♀️ What is it? - It's the SHIELD logo - Does announcing your identity on clothing help with the covert part of your job? - Carol Denver - Captain Marvel`,
  },

  title: 'Molecules/Logo',
} satisfies Meta<LogoProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    size: DEFAULT_SIZE,
  },
}

const separator = <hr className="my-3 w-full" />

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <div className={cn('flex flex-col gap-2 rounded-sm p-2', className)}>
    {children}
  </div>
)

export const FullLogo: Story = {
  render: () => (
    <>
      {note}

      <Wrapper>
        <Logo brandVariant="dark" pictoVariant="dark" size="s" />
        <Logo brandVariant="dark" pictoVariant="dark" size="m" />
        <Logo brandVariant="dark" pictoVariant="dark" size="l" />
        <Logo brandVariant="dark" pictoVariant="dark" size="xl" />
        <Logo brandVariant="dark" pictoVariant="dark" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper>
        <Logo brandVariant="dark" pictoVariant="primary" size="s" />
        <Logo brandVariant="dark" pictoVariant="primary" size="m" />
        <Logo brandVariant="dark" pictoVariant="primary" size="l" />
        <Logo brandVariant="dark" pictoVariant="primary" size="xl" />
        <Logo brandVariant="dark" pictoVariant="primary" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper className="bg-dark">
        <Logo brandVariant="light" pictoVariant="light" size="s" />
        <Logo brandVariant="light" pictoVariant="light" size="m" />
        <Logo brandVariant="light" pictoVariant="light" size="l" />
        <Logo brandVariant="light" pictoVariant="light" size="xl" />
        <Logo brandVariant="light" pictoVariant="light" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper className="bg-dark">
        <Logo brandVariant="light" pictoVariant="primary" size="s" />
        <Logo brandVariant="light" pictoVariant="primary" size="m" />
        <Logo brandVariant="light" pictoVariant="primary" size="l" />
        <Logo brandVariant="light" pictoVariant="primary" size="xl" />
        <Logo brandVariant="light" pictoVariant="primary" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper>
        <Logo brandVariant="primary" pictoVariant="primary" size="s" />
        <Logo brandVariant="primary" pictoVariant="primary" size="m" />
        <Logo brandVariant="primary" pictoVariant="primary" size="l" />
        <Logo brandVariant="primary" pictoVariant="primary" size="xl" />
        <Logo brandVariant="primary" pictoVariant="primary" size="fluid" />
      </Wrapper>
    </>
  ),
}

export const PictoOnly: Story = {
  render: () => (
    <>
      {note}

      <Wrapper>
        <Logo brandVariant="none" pictoVariant="dark" size="s" />
        <Logo brandVariant="none" pictoVariant="dark" size="m" />
        <Logo brandVariant="none" pictoVariant="dark" size="l" />
        <Logo brandVariant="none" pictoVariant="dark" size="xl" />
        <Logo brandVariant="none" pictoVariant="dark" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper className="bg-dark">
        <Logo brandVariant="none" pictoVariant="light" size="s" />
        <Logo brandVariant="none" pictoVariant="light" size="m" />
        <Logo brandVariant="none" pictoVariant="light" size="l" />
        <Logo brandVariant="none" pictoVariant="light" size="xl" />
        <Logo brandVariant="none" pictoVariant="light" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper>
        <Logo brandVariant="none" pictoVariant="primary" size="s" />
        <Logo brandVariant="none" pictoVariant="primary" size="m" />
        <Logo brandVariant="none" pictoVariant="primary" size="l" />
        <Logo brandVariant="none" pictoVariant="primary" size="xl" />
        <Logo brandVariant="none" pictoVariant="primary" size="fluid" />
      </Wrapper>
    </>
  ),
}

export const BrandNameOnly: Story = {
  render: () => (
    <>
      {note}
      <Wrapper>
        <Logo brandVariant="dark" pictoVariant="none" size="s" />
        <Logo brandVariant="dark" pictoVariant="none" size="m" />
        <Logo brandVariant="dark" pictoVariant="none" size="l" />
        <Logo brandVariant="dark" pictoVariant="none" size="xl" />
        <Logo brandVariant="dark" pictoVariant="none" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper className="bg-dark">
        <Logo brandVariant="light" pictoVariant="none" size="s" />
        <Logo brandVariant="light" pictoVariant="none" size="m" />
        <Logo brandVariant="light" pictoVariant="none" size="l" />
        <Logo brandVariant="light" pictoVariant="none" size="xl" />
        <Logo brandVariant="light" pictoVariant="none" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper>
        <Logo brandVariant="primary" pictoVariant="none" size="s" />
        <Logo brandVariant="primary" pictoVariant="none" size="m" />
        <Logo brandVariant="primary" pictoVariant="none" size="l" />
        <Logo brandVariant="primary" pictoVariant="none" size="xl" />
        <Logo brandVariant="primary" pictoVariant="none" size="fluid" />
      </Wrapper>
    </>
  ),
}
