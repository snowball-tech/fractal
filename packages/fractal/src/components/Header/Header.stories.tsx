import { UilBars as HamburgerBarsIcon } from '@iconscout/react-unicons'
import type { Meta, StoryObj } from '@storybook/react'
import isEmpty from 'lodash/fp/isEmpty'
import type { CSSProperties, ComponentProps } from 'react'

import { Button } from '@/components/Button'
import '@/styles/smartphones.css'

import Header from './Header'

type HeaderProps = ComponentProps<typeof Header>

const SAFE_AREAS: Record<string, string> = {
  'galaxy-s8': '',
  'google-pixel': '',
  'google-pixel-6-pro': '30px',
  'ipad-pro': '',
  'iphone-8': '',
  'iphone-14': '30px',
  'iphone-14-pro': '40px',
  'iphone-x': '30px',
  'macbook-pro': '12px',
  'the-iphone': '',
}

const meta: Meta<HeaderProps & { device: string }> = {
  argTypes: {
    children: { control: 'text' },
    device: {
      control: 'radio',
      mapping: {
        'Google Pixel': 'google-pixel',
        'Google Pixel 6 Pro': 'google-pixel-6-pro',
        'MacBook Pro': 'macbook-pro',
        'Samsung Galaxy S8': 'galaxy-s8',
        'iPad Pro': 'ipad-pro',
        iPhone: 'the-iphone',
        'iPhone 8': 'iphone-8',
        'iPhone 14': 'iphone-14',
        'iPhone 14 Pro': 'iphone-14-pro',
        'iPhone X': 'iphone-x',
      },
      options: [
        'iPhone 14 Pro',
        'iPhone 14',
        'Google Pixel 6 Pro',
        'iPhone X',
        'iPhone 8',
        'Google Pixel',
        'Samsung Galaxy S8',
        'iPhone',
        'iPad Pro',
        'MacBook Pro',
      ],
    },
    menu: {
      control: 'radio',
      mapping: {
        Hamburger: (
          <Button
            icon={<HamburgerBarsIcon />}
            iconOnly
            label="Menu"
            variant="display"
          />
        ),
        None: false,
      },
      options: ['Hamburger', 'None'],
    },
  },
  args: {
    back: false,
    children: '',
    device: 'iPhone 14 Pro',
    menu: 'Hamburger',
    title: 'The Empire Strikes Back',
  },
  component: Header,

  title: 'Organisms/Header',
} satisfies Meta<HeaderProps & { device: string }>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ device, ...args }) => {
    const style: CSSProperties = {
      borderRadius: '16px 16px 0 0',
      position: 'relative',
    }

    const safeArea = SAFE_AREAS[device]
    if (!isEmpty(safeArea)) {
      style.top = safeArea
    }

    return (
      <div className="smartphone">
        <div className={`device device-${device}`}>
          <div className="device-frame">
            <div className="device-screen">
              <Header {...args} style={style} />
            </div>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
          <div className="device-home"></div>
        </div>
      </div>
    )
  },
}
