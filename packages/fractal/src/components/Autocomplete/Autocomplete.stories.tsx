import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@iconscout/react-unicons'
import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import isEmpty from 'lodash/fp/isEmpty'
import kebabCase from 'lodash/fp/kebabCase'
import type { ComponentProps, ReactNode } from 'react'

import { jedis, others, siths } from '@/mocks'

import Autocomplete from './Autocomplete'
import AutocompleteEmpty from './AutocompleteEmpty'
import AutocompleteItem from './AutocompleteItem'
import AutocompleteItemGroup from './AutocompleteItemGroup'
import AutocompleteItemSeparator from './AutocompleteItemSeparator'
import AutocompleteLoading from './AutocompleteLoading'

type AutocompleteProps = ComponentProps<typeof Autocomplete>

function asItem(list: Array<string>, withDisabled = false): ReactNode {
  return list.map((item, index) => {
    const value = kebabCase(item)
    const disabled = (index + 1) % 3 === 0 && withDisabled

    return (
      <AutocompleteItem key={value} disabled={disabled} value={value}>
        {item}
      </AutocompleteItem>
    )
  })
}

const jedisItems = asItem(jedis)
const sithsItems = asItem(siths)
const othersItems = asItem(others, true)

const items = (
  <>
    {jedisItems}
    {sithsItems}
    {othersItems}
  </>
)

const itemsWithGroups = (
  <>
    <AutocompleteItemGroup label="Jedis">{jedisItems}</AutocompleteItemGroup>
    <AutocompleteItemGroup label="Siths">{sithsItems}</AutocompleteItemGroup>
    <AutocompleteItemGroup label="Others">{othersItems}</AutocompleteItemGroup>
  </>
)

const itemsWithGroupsAndSeparators = (
  <>
    <AutocompleteItemGroup label="Jedis">{jedisItems}</AutocompleteItemGroup>
    <AutocompleteItemGroup label="Siths">{sithsItems}</AutocompleteItemGroup>
    <AutocompleteItemSeparator />
    {othersItems}
  </>
)

const meta: Meta<AutocompleteProps> = {
  argTypes: {
    children: {
      control: 'radio',
      mapping: {
        Empty: (
          <AutocompleteEmpty>
            This indicates that there are no item matching your search!
          </AutocompleteEmpty>
        ),
        'Grouped items': itemsWithGroups,
        Loading: (
          <AutocompleteLoading>
            This indicates that your search is loading...
          </AutocompleteLoading>
        ),
        'Mixed items': itemsWithGroupsAndSeparators,
        'Simple items': items,
      },
      options: [
        'Empty',
        'Loading',
        'Simple items',
        'Grouped items',
        'Mixed items',
      ],
      table: {
        type: {
          summary:
            'AutocompleteEmpty | AutocompleteLoading | AutocompleteItem | AutocompleteItemGroup | AutocompleteItemSeparator | Array<AutocompleteItem | AutocompleteItemGroup | AutocompleteItemSeparator>',
        },
      },
    },
    defaultValue: { control: 'text' },
    onRawChange: {
      table: { disable: true },
    },
    prefix: {
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
    suffix: {
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
    type: { table: { disable: true } },
  },
  args: {
    autoFocus: false,
    description: 'Find any character or planet in Star Wars',
    disabled: false,
    fullWidth: false,
    label: 'Search the Star Wars universe',
    placeholder: 'Enter your search',
    prefix: 'Search',
    readOnly: false,
    required: false,
  },
  component: Autocomplete,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onSelect = (event: Event) => {
        const element = event.target as HTMLElement
        const selectedValue = element?.textContent ?? ''

        action('onSelect')(selectedValue)

        setArgs({
          children: false,
          value: selectedValue,
        })
      }

      const onChange = (newValue: string) => {
        context.args.onChange?.(newValue)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          setArgs({
            value: newValue,
          })
        }

        if (isEmpty(newValue)) {
          setArgs({
            children: false,
          })

          return
        }

        setArgs({
          children: (
            <AutocompleteLoading>
              Loading Star Wars characters and planets...
            </AutocompleteLoading>
          ),
        })

        const promises = []
        promises.push(fetch(`https://swapi.dev/api/people/?search=${newValue}`))
        promises.push(
          fetch(`https://swapi.dev/api/planets/?search=${newValue}`),
        )

        void Promise.all(promises).then(
          async ([charactersResponse, planetsResponse]) => {
            const { results: characters } =
              (await charactersResponse?.json()) ?? {}
            const { results: planets } = (await planetsResponse?.json()) ?? {}

            if (isEmpty(characters) && isEmpty(planets)) {
              setArgs({
                children: (
                  <AutocompleteEmpty>
                    Nothing found in Star Wars matching your search!
                  </AutocompleteEmpty>
                ),
              })

              return {}
            }

            setArgs({
              children: (
                <>
                  <AutocompleteItemGroup label="Characters">
                    {characters.map(({ name }: { name: string }) => (
                      <AutocompleteItem key={name} onSelect={onSelect}>
                        {name}
                      </AutocompleteItem>
                    ))}
                  </AutocompleteItemGroup>

                  <AutocompleteItemSeparator />

                  <AutocompleteItemGroup label="Planets">
                    {planets.map(({ name }: { name: string }) => (
                      <AutocompleteItem key={name} onSelect={onSelect}>
                        {name}
                      </AutocompleteItem>
                    ))}
                  </AutocompleteItemGroup>
                </>
              ),
            })

            return { characters, planets }
          },
        )
      }

      return <Story args={{ ...context.args, onChange }} />
    },
  ],
  parameters: {
    componentSubtitle:
      '🧑‍🚀 Our mission with Andy is complete, Woody - Buzz Lightyear - Toy Story 3',
    controls: {
      exclude: ['dropdown', 'open', 'type', 'value'],
    },
  },

  title: 'Molecules/Autocomplete',
} satisfies Meta<AutocompleteProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: '' },
}
