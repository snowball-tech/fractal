import { UilSearchAlt as SearchIcon } from '@iconscout/react-unicons'
import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import isEmpty from 'lodash/fp/isEmpty'
import { type ComponentProps } from 'react'

import Autocomplete from './Autocomplete'
import AutocompleteEmpty from './AutocompleteEmpty'
import AutocompleteItem from './AutocompleteItem'
import AutocompleteItemGroup from './AutocompleteItemGroup'
import AutocompleteItemSeparator from './AutocompleteItemSeparator'
import AutocompleteLoading from './AutocompleteLoading'

type AutocompleteProps = ComponentProps<typeof Autocomplete>

const meta: Meta<AutocompleteProps> = {
  argTypes: {
    onChange: { control: false },
    onClose: { control: false },
    onInputChange: {
      control: false,
    },
    onOpen: { control: false },
  },
  args: {
    autoFocus: false,
    description: 'This is a description',
    disabled: false,
    label: 'This is the label',
    placeholder: 'This is the placeholder',
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
      exclude: ['value'],
    },
  },

  title: 'Autocomplete',
} satisfies Meta<AutocompleteProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { icon: <SearchIcon />, value: '' },
}
