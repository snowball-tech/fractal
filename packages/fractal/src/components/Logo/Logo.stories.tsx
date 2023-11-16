import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

import { Logo, LogoSizes } from '.'
import { DEFAULT_SIZE } from './Logo.constants'

const note = (
  <blockquote style={{ marginBottom: 'var(--size-spacing-8)', marginLeft: 0 }}>
    <h5>ℹ️ Note</h5>
    <hr />
    <p>
      The grey background is only there to make light logo/picto/brand variants
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
    function WithArgs(Story, context) {
      const isLight =
        context.args.pictoVariant === 'light' ||
        context.args.brandVariant === 'light'

      return (
        <>
          {isLight && note}

          <div
            style={{
              backgroundColor: isLight ? 'grey' : 'initial',
              borderRadius: 'var(--size-radius-m)',
              padding: 'var(--size-spacing-2)',
              width: 'fit-content',
            }}
          >
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

const separator = (
  <hr
    style={{
      margin: 'var(--size-spacing-3) 0',
      width: '100%',
    }}
  />
)

const Wrapper = ({
  children,
  style = {},
}: {
  children: ReactNode
  style?: Record<string, unknown>
}) => (
  <div
    style={{
      ...style,
      borderRadius: 'var(--size-radius-m)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--size-spacing-2)',
      padding: 'var(--size-spacing-2)',
    }}
  >
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

      <Wrapper style={{ backgroundColor: 'grey' }}>
        <Logo brandVariant="dark" pictoVariant="light" size="s" />
        <Logo brandVariant="dark" pictoVariant="light" size="m" />
        <Logo brandVariant="dark" pictoVariant="light" size="l" />
        <Logo brandVariant="dark" pictoVariant="light" size="xl" />
        <Logo brandVariant="dark" pictoVariant="light" size="fluid" />
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

      <Wrapper style={{ backgroundColor: 'grey' }}>
        <Logo brandVariant="light" pictoVariant="dark" size="s" />
        <Logo brandVariant="light" pictoVariant="dark" size="m" />
        <Logo brandVariant="light" pictoVariant="dark" size="l" />
        <Logo brandVariant="light" pictoVariant="dark" size="xl" />
        <Logo brandVariant="light" pictoVariant="dark" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper style={{ backgroundColor: 'grey' }}>
        <Logo brandVariant="light" pictoVariant="light" size="s" />
        <Logo brandVariant="light" pictoVariant="light" size="m" />
        <Logo brandVariant="light" pictoVariant="light" size="l" />
        <Logo brandVariant="light" pictoVariant="light" size="xl" />
        <Logo brandVariant="light" pictoVariant="light" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper style={{ backgroundColor: 'grey' }}>
        <Logo brandVariant="light" pictoVariant="primary" size="s" />
        <Logo brandVariant="light" pictoVariant="primary" size="m" />
        <Logo brandVariant="light" pictoVariant="primary" size="l" />
        <Logo brandVariant="light" pictoVariant="primary" size="xl" />
        <Logo brandVariant="light" pictoVariant="primary" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper>
        <Logo brandVariant="primary" pictoVariant="dark" size="s" />
        <Logo brandVariant="primary" pictoVariant="dark" size="m" />
        <Logo brandVariant="primary" pictoVariant="dark" size="l" />
        <Logo brandVariant="primary" pictoVariant="dark" size="xl" />
        <Logo brandVariant="primary" pictoVariant="dark" size="fluid" />
      </Wrapper>

      {separator}

      <Wrapper style={{ backgroundColor: 'grey' }}>
        <Logo brandVariant="primary" pictoVariant="light" size="s" />
        <Logo brandVariant="primary" pictoVariant="light" size="m" />
        <Logo brandVariant="primary" pictoVariant="light" size="l" />
        <Logo brandVariant="primary" pictoVariant="light" size="xl" />
        <Logo brandVariant="primary" pictoVariant="light" size="fluid" />
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

      <Wrapper style={{ backgroundColor: 'grey' }}>
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

      <Wrapper style={{ backgroundColor: 'grey' }}>
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
