import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Header } from '@/components/Header'

import { Skeleton, SkeletonColors, SkeletonShapes } from '.'
import { DEFAULT_COLOR } from './Skeleton.constants'

type StepperProps = ComponentProps<typeof Skeleton>

const perVariantStoriesParameters = {
  controls: {
    include: ['children', 'color'],
  },
}

const meta: Meta<StepperProps> = {
  argTypes: {
    color: {
      options: Object.values(SkeletonColors),
      table: {
        defaultValue: { summary: DEFAULT_COLOR },
        type: { summary: Object.values(SkeletonColors).join('|') },
      },
    },
    shape: {
      options: Object.values(SkeletonShapes),
      table: {
        type: { summary: Object.values(SkeletonShapes).join('|') },
      },
    },
  },
  args: {
    children: '',
    color: DEFAULT_COLOR,
    shape: SkeletonShapes.Rectangle,
  },
  component: Skeleton,
  parameters: {
    componentSubtitle:
      "🦴 I'm walking like a skeleton. Blending in. - Miguel - Coco",
  },

  title: 'Molecules/Skeleton',
} satisfies Meta<StepperProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Shapes: Story = {
  parameters: { ...perVariantStoriesParameters },
  render: ({ children, color = DEFAULT_COLOR }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-3)',
      }}
    >
      <div style={{ height: '200px', width: '400px' }}>
        <Skeleton color={color} shape="circle">
          {children}
        </Skeleton>
      </div>

      <div style={{ height: '200px', width: '400px' }}>
        <Skeleton color={color} shape="rectangle">
          {children}
        </Skeleton>
      </div>

      <div style={{ height: '200px', width: '400px' }}>
        <Skeleton color={color} shape="roundedRectangle">
          {children}
        </Skeleton>
      </div>

      <div style={{ height: '200px', width: '400px' }}>
        <Skeleton color={color} shape="square">
          {children}
        </Skeleton>
      </div>
    </div>
  ),
}

export const RealLifeExample: Story = {
  render: () => {
    const sidebarItem = (
      <div className="flex h-6 w-full gap-1 p-1">
        <Skeleton className="min-w-4" shape="circle" />
        <div className="flex h-full w-full flex-col justify-around">
          <Skeleton className="max-h-1" shape="roundedRectangle" />
          <Skeleton className="max-h-1" shape="roundedRectangle" />
        </div>
      </div>
    )

    const userMessage = (
      <Skeleton
        className="min-h-8 w-[calc(100%-theme(spacing.10))]"
        color="light-grey"
        shape="rectangle"
      />
    )

    const ownMessage = (
      <Skeleton
        className="min-h-8 w-[calc(100%-theme(spacing.10))] self-end"
        color="green"
        shape="rectangle"
      />
    )

    return (
      <div
        className="flex flex-col overflow-hidden border-1 border-normal @container"
        style={{ height: '550px', width: '1200px' }}
      >
        <Header className="min-h-8">Header</Header>

        <div className="flex h-full">
          <div
            className="flex h-full flex-col gap-2 border-r-1 border-grey-50 p-2"
            style={{ width: '300px' }}
          >
            {sidebarItem}
            {sidebarItem}
            {sidebarItem}
            {sidebarItem}
            {sidebarItem}
            {sidebarItem}
            {sidebarItem}
            {sidebarItem}
          </div>
          <div className="h-full w-full p-3">
            <div className="flex h-[calc(100%-theme(spacing.7))] w-full flex-col rounded-md border-1 border-grey-50">
              <div className="flex h-10 items-center gap-2 rounded-t-md border-b-1 border-grey-50 bg-white p-2">
                <Skeleton className="h-5 w-5" shape="circle" />
                <Skeleton
                  className="max-h-2 max-w-[240px]"
                  shape="roundedRectangle"
                />
              </div>

              <div className="flex h-full w-full flex-col gap-2 overflow-hidden p-2">
                {ownMessage}
                {userMessage}
                {ownMessage}
                {userMessage}
              </div>

              <div className="flex min-h-10 items-center gap-2 rounded-b-md border-t-1 border-grey-50 bg-white p-2">
                <Skeleton
                  className="h-full w-full"
                  color="light-grey"
                  shape="rectangle"
                />
                <Skeleton className="h-full w-20" shape="roundedRectangle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
