import LeftIcon from '@iconscout/react-unicons/icons/uil-arrow-left'
import HamburgerBarsIcon from '@iconscout/react-unicons/icons/uil-bars'
import SearchIcon from '@iconscout/react-unicons/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import isEmpty from 'lodash/fp/isEmpty'
import type { CSSProperties, ComponentProps } from 'react'

import Autocomplete from '@/components/Autocomplete/Autocomplete'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'

import { Header } from '.'

// eslint-disable-next-line perfectionist/sort-imports
import '@/styles/smartphones.css'

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
  none: '',
  'the-iphone': '',
}

const meta: Meta<{ device: string } & HeaderProps> = {
  argTypes: {
    children: {
      control: 'radio',
      mapping: {
        Nothing: false,
        'Search bar': <Autocomplete fullWidth prefix={<SearchIcon />} />,
        Title: 'The Empire Strikes Back',
      },
      options: ['Title', 'Search bar', 'Nothing'],
    },
    device: {
      control: 'radio',
      mapping: {
        'Google Pixel': 'google-pixel',
        'Google Pixel 6 Pro': 'google-pixel-6-pro',
        None: 'none',
        'Samsung Galaxy S8': 'galaxy-s8',
        'iPad Pro': 'ipad-pro',
        iPhone: 'the-iphone',
        'iPhone 8': 'iphone-8',
        'iPhone 14': 'iphone-14',
        'iPhone 14 Pro': 'iphone-14-pro',
        'iPhone X': 'iphone-x',
      },
      options: [
        'None',
        'iPhone 14 Pro',
        'iPhone 14',
        'Google Pixel 6 Pro',
        'iPhone X',
        'iPhone 8',
        'Google Pixel',
        'Samsung Galaxy S8',
        'iPhone',
        'iPad Pro',
      ],
    },
    left: {
      control: 'radio',
      mapping: {
        Back: (
          <Button
            icon={<LeftIcon />}
            iconOnly
            label="Back"
            variant="text"
            onClick={action('onBackClick')}
          />
        ),
        Logo: <Logo size="m" />,
        Nothing: false,
      },
      options: ['Back', 'Logo', 'Nothing'],
    },
    right: {
      control: 'radio',
      mapping: {
        Avatar: <span>👤</span>,
        Hamburger: (
          <Button
            icon={<HamburgerBarsIcon />}
            iconOnly
            label="Menu"
            variant="display"
            onClick={action('onHamburgerClick')}
          />
        ),
        Nothing: false,
      },
      options: ['Avatar', 'Hamburger', 'Nothing'],
    },
  },
  args: {
    children: 'Title',
    device: 'iPhone 14',
    left: 'Back',
    right: 'Hamburger',
  },
  component: Header,

  title: 'Organisms/Header',
} satisfies Meta<{ device: string } & HeaderProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ device, ...arguments_ }) => {
    if (device === 'none') {
      return (
        <div className="@container">
          <Header {...arguments_} />
        </div>
      )
    }

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
            <div className="device-screen @container">
              <Header {...arguments_} style={style} />
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
