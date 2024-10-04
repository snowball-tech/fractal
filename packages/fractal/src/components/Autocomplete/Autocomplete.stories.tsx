import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/preview-api'
import {
  fn,
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@storybook/test'
import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'
import isChromatic from 'chromatic/isChromatic'

import {
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
  useEffect,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isNil from 'lodash/fp/isNil'
import kebabCase from 'lodash/fp/kebabCase'

import AutocompleteItem from '@/components/Dropdown/DropdownItem'
import AutocompleteItemGroup from '@/components/Dropdown/DropdownItemGroup'
import AutocompleteItemSeparator from '@/components/Dropdown/DropdownItemSeparator'
import { jedis, others, siths } from '@/mocks'
import { sleep } from '@/utils'

import Autocomplete from './Autocomplete'
import AutocompleteEmpty from './AutocompleteEmpty'
import AutocompleteLoading from './AutocompleteLoading'

const EMPTY_SEARCH = 'pzgvf'

type AutocompleteProps = ComponentProps<typeof Autocomplete>

function asItem(list: Array<string>, withDisabled = false): ReactNode {
  return list.map((item, index) => {
    const value = kebabCase(item)
    const disabled = (index + 1) % 3 === 0 && withDisabled

    return (
      <AutocompleteItem
        key={value}
        disabled={disabled}
        label={item}
        value={value}
      />
    )
  })
}

const jedisItems = asItem(jedis)
const sithsItems = asItem(siths)
const othersItems = asItem(others, true)

const itemsWithGroupsAndSeparators = (
  <>
    <AutocompleteItemGroup label="Jedis">{jedisItems}</AutocompleteItemGroup>
    <AutocompleteItemGroup label="Siths">{sithsItems}</AutocompleteItemGroup>

    <AutocompleteItemSeparator />

    {othersItems}
  </>
)

let abort: AbortController | null = null

const loadData = (
  newValue: string,
  setArgs: (newArgs: Partial<AutocompleteProps>) => void,
  onSelect: (event: Event) => void,
) => {
  if (!isNil(abort) && isFunction(abort?.abort)) {
    abort.abort()
  }
  abort = null
  abort = new AbortController()

  const promises = []
  promises.push(
    fetch(`https://swapi.tech/api/people/?search=${newValue}`, {
      signal: abort?.signal,
    }),
    fetch(`https://swapi.tech/api/planets/?search=${newValue}`, {
      signal: abort?.signal,
    }),
  )

  void Promise.all(promises)
    .then(async ([charactersResponse, planetsResponse]) => {
      const { results: characters } = (await charactersResponse?.json()) ?? {}
      const { results: planets } = (await planetsResponse?.json()) ?? {}

      if (
        (isEmpty(characters) && isEmpty(planets)) ||
        EMPTY_SEARCH.startsWith(newValue) ||
        EMPTY_SEARCH === newValue ||
        newValue.startsWith(EMPTY_SEARCH)
      ) {
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
              <>
                {isEmpty(characters) && (
                  <AutocompleteEmpty>
                    No character matching the search found!
                  </AutocompleteEmpty>
                )}
                {!isEmpty(characters) &&
                  characters.map(({ name }: { name: string }) => (
                    <AutocompleteItem
                      key={name}
                      label={name}
                      onSelect={onSelect}
                    />
                  ))}
              </>
            </AutocompleteItemGroup>

            <AutocompleteItemSeparator />

            <AutocompleteItemGroup label="Planets">
              <>
                {isEmpty(planets) && (
                  <AutocompleteEmpty>
                    No planet matching the search found!
                  </AutocompleteEmpty>
                )}
                {!isEmpty(planets) &&
                  planets.map(({ name }: { name: string }) => (
                    <AutocompleteItem
                      key={name}
                      label={name}
                      onSelect={onSelect}
                    />
                  ))}
              </>
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
}

let unmounted = false

const meta: Meta<AutocompleteProps> = {
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
  argTypes: {
    children: {
      control: 'radio',
      mapping: {
        Empty: (
          <AutocompleteEmpty>
            This indicates that there are no item matching your search!
          </AutocompleteEmpty>
        ),
        Loading: (
          <AutocompleteLoading>
            This indicates that your search is loading...
          </AutocompleteLoading>
        ),
        'Mixed items': itemsWithGroupsAndSeparators,
      },
      options: ['Empty', 'Loading', 'Mixed items'],
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
  component: Autocomplete,
  decorators: [
    ...(isChromatic()
      ? [
          (storyFunction: () => ReactNode) => (
            <div className="h-[1200px]">{storyFunction()}</div>
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

          loadData(newValue, setArgs, onSelect)
        }
      }

      useEffect(() => {
        unmounted = false
        if (!isEmpty(context.args.value) && !context.args.children) {
          setTimeout(() => onChange(null, String(context.args.value)), 100)
        }

        return () => {
          abort?.abort()

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
    controls: {
      exclude: ['dropdown', 'open', 'type', 'value'],
    },
    docs: {
      subtitle:
        '🧑‍🚀 Our mission with Andy is complete, Woody - Buzz Lightyear - Toy Story 3',
    },
  },

  title: 'Molecules/Autocomplete',
} satisfies Meta<AutocompleteProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    onOpen: fn(),
    value: '',
  },
}
export const InteractiveSearching: Story = {
  args: {
    onBlur: fn(),
    onChange: fn(),
    onClose: fn(),
    onInputChange: fn(),
    onOpen: fn(),
    value: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('textbox')
    await userEvent.click(input)

    await sleep(500)
    await userEvent.type(input, 'an', {
      delay: 100,
    })

    await waitFor(() => body.getByText(/loading star wars/i), {
      timeout: 10_000,
    })
  },
}

export const InteractiveSearch: Story = {
  args: {
    onBlur: fn(),
    onChange: fn(),
    onClose: fn(),
    onInputChange: fn(),
    onOpen: fn(),
    value: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('textbox')
    await userEvent.click(input)

    await sleep(500)
    await userEvent.type(input, 'an', {
      delay: 100,
    })

    await waitFor(() => body.getByText(/loading star wars/i), {
      timeout: 10_000,
    })

    const loader = await body.getByText(/loading star wars/i)
    await waitForElementToBeRemoved(loader, { timeout: 30_000 })

    const menuItems = body.getAllByRole('menuitem')
    if (menuItems.length > 0) {
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
    }
  },
}

export const InteractiveSearchAndSelect: Story = {
  args: {
    onBlur: fn(),
    onChange: fn(),
    onClose: fn(),
    onInputChange: fn(),
    onOpen: fn(),
    value: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('textbox')
    await userEvent.click(input)

    await sleep(500)
    await userEvent.type(input, 'an', {
      delay: 100,
    })

    await waitFor(() => body.getByText(/loading star wars/i), {
      timeout: 10_000,
    })

    const loader = await body.getByText(/loading star wars/i)
    await waitForElementToBeRemoved(loader, { timeout: 30_000 })

    const menuItems = body.getAllByRole('menuitem')
    if (menuItems.length > 0) {
      await userEvent.hover(menuItems.at(0)!)
      await sleep(500)
      await userEvent.click(menuItems.at(0)!)
    }
  },
}

export const InteractiveEmptySearch: Story = {
  args: {
    onBlur: fn(),
    onChange: fn(),
    onClose: fn(),
    onInputChange: fn(),
    onOpen: fn(),
    value: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('textbox')
    await userEvent.click(input)
    await sleep(500)

    for (let index = 0; index < EMPTY_SEARCH.length; index += 1) {
      // eslint-disable-next-line no-await-in-loop
      await userEvent.type(input, EMPTY_SEARCH[index]!, { skipClick: true })
      // eslint-disable-next-line no-await-in-loop
      await sleep(50)
    }

    await waitFor(() => body.getByText(/loading star wars/i), {
      timeout: 10_000,
    })

    const loader = await body.getByText(/loading star wars/i)
    await waitForElementToBeRemoved(loader, { timeout: 30_000 })

    await body.getByText(/nothing found/i)
  },
}
