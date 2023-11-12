import CancelIcon from '@iconscout/react-unicons/dist/icons/uil-cancel'
import CheckCircleIcon from '@iconscout/react-unicons/dist/icons/uil-check-circle'
import StarIcon from '@iconscout/react-unicons/dist/icons/uil-envelope-star'
import ExclamationCircleIcon from '@iconscout/react-unicons/dist/icons/uil-exclamation-circle'
import SendIcon from '@iconscout/react-unicons/dist/icons/uil-message'
import SearchIcon from '@iconscout/react-unicons/dist/icons/uil-search-alt'
import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import {
  userEvent,
  waitForElementToBeRemoved,
  within,
} from '@storybook/testing-library'
import isChromatic from 'chromatic/isChromatic'
// eslint-disable-next-line lodash-fp/use-fp
import debounce from 'lodash/debounce'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isNil from 'lodash/fp/isNil'
import kebabCase from 'lodash/fp/kebabCase'
import {
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
  useEffect,
} from 'react'

import { jedis, others, siths } from '@/mocks'
import { sleep } from '@/utils'

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

let abort: AbortController | null = null

const debouncedLoad = debounce((newValue: string, setArgs, onSelect) => {
  if (!isNil(abort) && isFunction(abort?.abort)) {
    abort.abort()
  }
  abort = null
  abort = new AbortController()

  const promises = []
  promises.push(
    fetch(`https://swapi.dev/api/people/?search=${newValue}`, {
      signal: abort?.signal,
    }),
  )
  promises.push(
    fetch(`https://swapi.dev/api/planets/?search=${newValue}`, {
      signal: abort?.signal,
    }),
  )

  void Promise.all(promises)
    .then(async ([charactersResponse, planetsResponse]) => {
      const { results: characters } = (await charactersResponse?.json()) ?? {}
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
    })
    .catch((error) => {
      if (error.name === 'AbortError') {
        return
      }

      console.error('Error when loading Star Wars characters and planets', {
        error,
        newValue,
      })
    })
}, 200)

let unmounted = false

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
    ...(isChromatic()
      ? [
          (storyFn: () => ReactNode) => (
            <div style={{ height: '1200px' }}>{storyFn()}</div>
          ),
        ]
      : []),
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onSelect = (event: Event) => {
        const element = event.target as HTMLElement
        const selectedValue = element?.textContent ?? ''

        action('onSelect')(selectedValue)

        if (!unmounted) {
          setArgs({
            children: false,
            value: selectedValue,
          })
        }
      }

      const onChange = (
        event: ChangeEvent<HTMLInputElement> | null,
        newValue: string,
      ) => {
        context.args.onChange?.(event, newValue)

        // Check if the component is controlled.
        if (context.args.value !== undefined && !unmounted) {
          setArgs({
            value: newValue,
          })
        }

        if (isEmpty(newValue) && !unmounted) {
          setArgs({
            children: false,
          })
        }

        if (!unmounted) {
          setArgs({
            children: (
              <AutocompleteLoading>
                Loading Star Wars characters and planets...
              </AutocompleteLoading>
            ),
          })

          debouncedLoad(newValue, setArgs, onSelect)
        }
      }

      useEffect(() => {
        unmounted = false
        if (!isEmpty(context.args.value) && !context.args.children) {
          setTimeout(() => onChange(null, String(context.args.value)), 100)
        }

        return () => {
          abort?.abort()
          debouncedLoad.cancel()

          unmounted = true
        }
        // We only want to run this effect once.
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      return <Story args={{ ...context.args, onChange }} />
    },
  ],
  parameters: {
    chromatic: { delay: 500 },
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

export const InteractiveSearching: Story = {
  args: { value: '' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('textbox')
    await userEvent.click(input)

    await sleep(500)
    await userEvent.type(input, 'an', {
      delay: 100,
    })

    await body.getByText(/loading star wars/i)
  },
}

export const InteractiveSearch: Story = {
  args: { value: '' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('textbox')
    await userEvent.click(input)

    await sleep(500)
    await userEvent.type(input, 'an', {
      delay: 100,
    })

    const loader = await body.getByText(/loading star wars/i)
    await waitForElementToBeRemoved(loader, { timeout: 10000 })

    const menuItems = body.getAllByRole('menuitem')
    if (menuItems.length > 0) {
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      await userEvent.hover(menuItems.at(0)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(1)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(2)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(3)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(4)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(5)!)
      await sleep(500)
      await userEvent.hover(menuItems.at(6)!)
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
    }
  },
}

export const InteractiveSearchAndSelect: Story = {
  args: { value: '' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('textbox')
    await userEvent.click(input)

    await sleep(500)
    await userEvent.type(input, 'an', {
      delay: 100,
    })

    const loader = await body.getByText(/loading star wars/i)
    await waitForElementToBeRemoved(loader, { timeout: 10000 })

    const menuItems = body.getAllByRole('menuitem')
    if (menuItems.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await userEvent.hover(menuItems.at(0)!)
      await sleep(500)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await userEvent.click(menuItems.at(0)!)
    }
  },
}

export const InteractiveEmptySearch: Story = {
  args: { value: '' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('textbox')
    await userEvent.click(input)

    await sleep(500)
    await userEvent.type(input, 'pzgvf')

    const loader = await body.getByText(/loading star wars/i)
    await waitForElementToBeRemoved(loader, { timeout: 10000 })

    await body.getByText(/nothing found/i)
  },
}
