import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilPaperclip as AttachmentIcon,
  UilCancel as CancelIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'
import { action } from 'storybook/actions'
import { useArgs } from 'storybook/preview-api'
import { fn, userEvent, within } from 'storybook/test'

import type { ChangeEvent, ComponentProps, ReactNode } from 'react'

import { slowType } from '@/tests_helpers'
import { sleep } from '@/utils'

import { Textarea } from '.'

type TextareaProps = ComponentProps<typeof Textarea>

const longValue =
  'Mollit ea nulla sunt eu aute voluptate deserunt proident eu dolore minim consequat proident. Dolore minim reprehenderit commodo anim excepteur ea eiusmod officia ipsum sit mollit ad. Adipisicing fugiat reprehenderit occaecat pariatur nulla consequat ipsum reprehenderit. Est laboris sit sit ipsum eu mollit duis magna aliquip sint exercitation eiusmod duis minim. Laborum deserunt irure dolore enim. Ipsum aute reprehenderit cupidatat proident deserunt ut. Ut eiusmod culpa culpa cupidatat ut.'
const veryLongValue = `Sit culpa voluptate est eiusmod mollit commodo enim dolor dolore excepteur fugiat. Occaecat ea ex aliqua non culpa ipsum. Nisi ut aliqua consectetur laborum dolor ipsum incididunt commodo pariatur minim reprehenderit aliqua id.

Sit sit qui officia adipisicing exercitation elit do proident ex. Magna ullamco voluptate ea laborum consequat labore non anim nostrud consequat duis eiusmod. Esse laborum dolor adipisicing do cillum. Aute sit nostrud aute minim ipsum minim cupidatat amet nostrud. Amet magna voluptate adipisicing Lorem ullamco ipsum amet.

Aliquip nostrud ex nisi proident aliquip aute non voluptate nostrud ut deserunt cillum. Dolore dolor ut cupidatat nostrud Lorem laborum ipsum proident non aute adipisicing commodo. Labore culpa nulla culpa nulla excepteur elit in incididunt dolore dolore adipisicing est reprehenderit ex. Enim aliquip nulla ea do pariatur tempor aute elit nulla. Voluptate id consectetur id magna excepteur consequat dolore cupidatat quis cupidatat ex excepteur. Nulla velit labore nostrud ad in in deserunt occaecat incididunt laborum.

Ex aliqua ipsum voluptate ea nostrud. Consequat fugiat nulla labore mollit ad officia adipisicing laborum ex et non minim esse. Amet laboris veniam nulla consectetur dolore deserunt laboris. Amet Lorem dolor pariatur pariatur Lorem.

Labore cillum occaecat ipsum sit irure sunt anim. Ea nisi velit mollit consequat culpa veniam occaecat consequat dolor ut culpa velit nostrud non. Dolore duis commodo fugiat fugiat proident eu velit laboris aliquip anim consequat sit ut. Consectetur minim eu sint mollit ad.`

const meta: Meta<TextareaProps> = {
  args: {
    autoFocus: false,
    description: 'These aren’t the droids you’re looking for!',
    disabled: false,
    fullWidth: false,
    icon: 'None',
    iconDisabled: false,
    label: 'You don’t need to see his identification!',
    placeholder: 'I don’t need to see his identification...',
    readOnly: false,
    required: false,
  },
  argTypes: {
    defaultValue: { control: 'text' },
    error: { control: 'text' },
    icon: {
      mapping: {
        Attachment: <AttachmentIcon />,
        Cancel: <CancelIcon />,
        None: undefined,
        Search: <SearchIcon />,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['None', 'Attachment', 'Cancel', 'Send', 'Star'],
    },
    onChange: {
      control: false,
    },
    success: { control: 'text' },
  },
  component: Textarea,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (
        event: ChangeEvent<HTMLTextAreaElement>,
        newValue: string,
      ) => {
        context.args.onChange?.(event, newValue)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          setArgs({ value: newValue })
        }
      }

      return <Story args={{ ...context.args, onChange }} />
    },
  ],

  parameters: {
    controls: {
      exclude: ['value'],
    },
    docs: {
      subtitle:
        '🦡 Security! Sweep the area! - Dr Madge Honey Badger - Zootopia',
    },
  },

  title: 'Molecules/Textarea',
} satisfies Meta<TextareaProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    onHeightChange: fn(),
    value: '',
  },
}
export const Interactive: Story = {
  args: {
    onChange: fn(),
    onHeightChange: fn(),
    onIconClick: fn(),
    value: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const textarea = canvas.getByLabelText(/kenobi/i)

    await userEvent.hover(textarea)
    await sleep(500)

    await slowType(
      'Nulla ad id sint ipsum magna et aliqua duis cupidatat quis exercitation quis nulla culpa. Cillum dolor pariatur velit labore proident fugiat ut enim in occaecat labore.',
      textarea,
      { strokeDelay: 50 },
    )
    await textarea.blur()

    await sleep(500)
    await userEvent.hover(canvas.getByRole('button'))
    await sleep(500)
    await userEvent.click(canvas.getByRole('button'))
  },
  render: () => {
    const onIconClick = action('onIconClick')

    return (
      <Textarea
        icon={<AttachmentIcon />}
        label="General Kenobi"
        onIconClick={onIconClick}
      />
    )
  },
}

const separator = <hr className="my-3 w-full" />

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-start gap-2">{children}</div>
)

export const Basics: Story = {
  render: () => (
    <>
      <Wrapper>
        <Textarea />
        <Textarea placeholder="This is the placeholder" />
        <Textarea defaultValue="This is the value" />
        <Textarea defaultValue={longValue} />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea label="Textarea with a label" />
        <Textarea
          label="Textarea with a label"
          placeholder="And the placeholder"
        />
        <Textarea defaultValue="And a value" label="Textarea with a label" />
        <Textarea defaultValue={longValue} label="Textarea with a label" />
        <Textarea label="Required textarea with a label" required />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          description="This is the description"
          label="This is the label"
        />
        <Textarea
          description="This is the description"
          label="This is the label"
          placeholder="This is the placeholder"
        />
        <Textarea
          defaultValue="This is the value"
          description="This is the description"
          label="This is the label"
        />
        <Textarea
          defaultValue={longValue}
          description="This is the description"
          label="This is the label"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          defaultValue="A value"
          description="And a description"
          fullWidth
          label="This is a full width textarea with a label"
        />
        <Textarea
          defaultValue={veryLongValue}
          description="And a description"
          fullWidth
          label="This is a full width textarea with a label"
        />
      </Wrapper>
    </>
  ),
}

export const DisabledAndReadOnly: Story = {
  render: () => (
    <>
      <Wrapper>
        <Textarea disabled />
        <Textarea disabled placeholder="This is the disabled placeholder" />
        <Textarea defaultValue="This is the disabled value" disabled />
        <Textarea defaultValue="This is the read-only value" readOnly />
        <Textarea defaultValue={longValue} disabled />
        <Textarea defaultValue={longValue} readOnly />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea disabled label="Disabled textarea with a label" />
        <Textarea
          disabled
          label="Disabled textarea with a label"
          placeholder="And the placeholder"
        />
        <Textarea
          defaultValue="And a value"
          disabled
          label="Disabled textarea with a label"
        />
        <Textarea
          defaultValue="And a value"
          label="Read-only textarea with a label"
          readOnly
        />
        <Textarea
          defaultValue={longValue}
          disabled
          label="Disabled textarea with a label"
        />
        <Textarea
          defaultValue={longValue}
          label="Read-only textarea with a label"
          readOnly
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="And a value"
          disabled
          label="Required disabled textarea with a label"
          required
        />
        <Textarea
          defaultValue="And a value"
          label="Required read-only textarea with a label"
          readOnly
          required
        />
        <Textarea
          defaultValue={longValue}
          disabled
          label="Required disabled textarea with a label"
          required
        />
        <Textarea
          defaultValue={longValue}
          label="Required read-only textarea with a label"
          readOnly
          required
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          description="This is the description"
          disabled
          label="This is the label when disabled"
        />
        <Textarea
          description="This is the description"
          disabled
          label="This is the label when disabled"
          placeholder="This is the placeholder"
        />
        <Textarea
          defaultValue="This is the value"
          description="This is the description"
          disabled
          label="This is the label when disabled"
        />
        <Textarea
          defaultValue="This is the value"
          description="This is the description"
          label="This is the label when in read-only"
          readOnly
        />
        <Textarea
          defaultValue={longValue}
          description="This is the description"
          disabled
          label="This is the label when disabled"
        />
        <Textarea
          defaultValue={longValue}
          description="This is the description"
          label="This is the label when in read-only"
          readOnly
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          defaultValue="A value"
          description="And a description"
          disabled
          fullWidth
          label="This is a disabled full width textarea with a label"
        />
        <Textarea
          defaultValue={veryLongValue}
          description="And a description"
          disabled
          fullWidth
          label="This is a disabled full width textarea with a label"
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="A value"
          description="And a description"
          fullWidth
          label="This is a read-only full width textarea with a label"
          readOnly
        />
        <Textarea
          defaultValue={veryLongValue}
          description="And a description"
          fullWidth
          label="This is a read-only full width textarea with a label"
          readOnly
        />
      </Wrapper>
    </>
  ),
}

export const Validations: Story = {
  render: () => (
    <>
      <Wrapper>
        <Textarea
          defaultValue="This is a correct value"
          success="With a success message!"
        />

        <Textarea
          defaultValue="This is a correct value"
          description="This is the description, not a success message"
          success
        />

        <Textarea defaultValue={longValue} success="With a success message!" />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="This is a correct value"
          fullWidth
          label="This is a success"
          success="With a success message!"
        />
        <Textarea
          defaultValue={veryLongValue}
          fullWidth
          label="This is a success"
          success="With a success message!"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          defaultValue="This is an invalid value"
          error="This is an error message!"
        />

        <Textarea
          defaultValue="This is an invalid value"
          description="This is the description, not an error message"
          error
        />

        <Textarea defaultValue={longValue} error="This is an error message!" />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="This is an invalid value"
          error="This is an error message!"
          fullWidth
          label="There is an error"
        />
        <Textarea
          defaultValue={veryLongValue}
          error="This is an error message!"
          fullWidth
          label="There is an error"
        />
      </Wrapper>
    </>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <>
      <Wrapper>
        <Textarea icon={<AttachmentIcon />} />
        <Textarea
          icon={<AttachmentIcon />}
          placeholder="This is the placeholder"
        />
        <Textarea defaultValue="This is the value" icon={<AttachmentIcon />} />
      </Wrapper>

      <Wrapper>
        <Textarea disabled icon={<AttachmentIcon />} />
        <Textarea
          disabled
          icon={<AttachmentIcon />}
          placeholder="This is the disabled placeholder"
        />
        <Textarea
          defaultValue="This is the value"
          disabled
          icon={<AttachmentIcon />}
        />
      </Wrapper>

      <Wrapper>
        <Textarea defaultValue={longValue} icon={<AttachmentIcon />} />
        <Textarea defaultValue={longValue} disabled icon={<AttachmentIcon />} />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea icon={<AttachmentIcon />} label="Textarea with a label" />
        <Textarea
          icon={<AttachmentIcon />}
          label="Textarea with a label"
          placeholder="And the placeholder"
        />
        <Textarea
          defaultValue="And a value"
          icon={<AttachmentIcon />}
          label="Textarea with a label"
        />
        <Textarea
          icon={<AttachmentIcon />}
          label="Required textarea with a label"
          required
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          disabled
          icon={<AttachmentIcon />}
          label="Textarea with a label"
        />
        <Textarea
          disabled
          icon={<AttachmentIcon />}
          label="Textarea with a label"
          placeholder="And the placeholder"
        />
        <Textarea
          defaultValue="And a value"
          disabled
          icon={<AttachmentIcon />}
          label="Textarea with a label"
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue={longValue}
          icon={<AttachmentIcon />}
          label="Textarea with a label"
        />
        <Textarea
          defaultValue={longValue}
          disabled
          icon={<AttachmentIcon />}
          label="Textarea with a label"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          description="This is the description"
          icon={<AttachmentIcon />}
          label="This is the label"
        />
        <Textarea
          description="This is the description"
          icon={<AttachmentIcon />}
          label="This is the label"
          placeholder="This is the placeholder"
        />
        <Textarea
          defaultValue="This is the value"
          description="This is the description"
          icon={<AttachmentIcon />}
          label="This is the label"
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          description="This is the description"
          disabled
          icon={<AttachmentIcon />}
          label="This is the label"
        />
        <Textarea
          description="This is the description"
          disabled
          icon={<AttachmentIcon />}
          label="This is the label"
          placeholder="This is the placeholder"
        />
        <Textarea
          defaultValue="This is the value"
          description="This is the description"
          disabled
          icon={<AttachmentIcon />}
          label="This is the label"
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue={longValue}
          description="This is the description"
          icon={<AttachmentIcon />}
          label="This is the label"
        />
        <Textarea
          defaultValue={longValue}
          description="This is the description"
          disabled
          icon={<AttachmentIcon />}
          label="This is the label"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          defaultValue="A value"
          description="And a description"
          fullWidth
          icon={<AttachmentIcon />}
          label="This is a full width textarea with a label"
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="A value"
          description="And a description"
          disabled
          fullWidth
          icon={<AttachmentIcon />}
          label="This is a full width textarea with a label"
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue={veryLongValue}
          description="And a description"
          fullWidth
          icon={<AttachmentIcon />}
          label="This is a full width textarea with a label"
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue={veryLongValue}
          description="And a description"
          disabled
          fullWidth
          icon={<AttachmentIcon />}
          label="This is a full width textarea with a label"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          defaultValue="This is a correct value"
          icon={<AttachmentIcon />}
          success="With a success message!"
        />
        <Textarea
          defaultValue="This is an invalid value"
          error="This is an error message!"
          icon={<AttachmentIcon />}
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue={longValue}
          icon={<AttachmentIcon />}
          success="With a success message!"
        />
        <Textarea
          defaultValue={longValue}
          error="This is an error message!"
          icon={<AttachmentIcon />}
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="This is a correct value"
          fullWidth
          icon={<AttachmentIcon />}
          label="This is a success"
          success="With a success message!"
        />
        <Textarea
          defaultValue={veryLongValue}
          fullWidth
          icon={<AttachmentIcon />}
          label="This is a success"
          success="With a success message!"
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="This is an invalid value"
          error="This is an error message!"
          fullWidth
          icon={<AttachmentIcon />}
          label="There is an error"
        />
        <Textarea
          defaultValue={veryLongValue}
          error="This is an error message!"
          fullWidth
          icon={<AttachmentIcon />}
          label="There is an error"
        />
      </Wrapper>
    </>
  ),
}

export const WithIconAction: Story = {
  render: () => {
    const onIconClick = action('onIconClick')

    return (
      <>
        <Wrapper>
          <Textarea icon={<AttachmentIcon />} onIconClick={onIconClick} />
          <Textarea
            icon={<AttachmentIcon />}
            placeholder="This is the placeholder"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="This is the value"
            icon={<AttachmentIcon />}
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            disabled
            icon={<AttachmentIcon />}
            onIconClick={onIconClick}
          />
          <Textarea
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            onIconClick={onIconClick}
          />
          <Textarea
            disabled
            icon={<AttachmentIcon />}
            placeholder="This is the disabled placeholder"
            onIconClick={onIconClick}
          />
          <Textarea
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            placeholder="This is the disabled placeholder"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="This is the value"
            disabled
            icon={<AttachmentIcon />}
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="This is the value"
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            defaultValue={longValue}
            icon={<AttachmentIcon />}
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={longValue}
            disabled
            icon={<AttachmentIcon />}
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={longValue}
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            onIconClick={onIconClick}
          />
        </Wrapper>

        {separator}

        <Wrapper>
          <Textarea
            icon={<AttachmentIcon />}
            label="Textarea with a label"
            onIconClick={onIconClick}
          />
          <Textarea
            icon={<AttachmentIcon />}
            label="Textarea with a label"
            placeholder="And the placeholder"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="And a value"
            icon={<AttachmentIcon />}
            label="Textarea with a label"
            onIconClick={onIconClick}
          />
          <Textarea
            icon={<AttachmentIcon />}
            label="Required textarea with a label"
            required
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            disabled
            icon={<AttachmentIcon />}
            label="Textarea with a label"
            onIconClick={onIconClick}
          />
          <Textarea
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="Textarea with a label"
            onIconClick={onIconClick}
          />
          <Textarea
            disabled
            icon={<AttachmentIcon />}
            label="Textarea with a label"
            placeholder="And the placeholder"
            onIconClick={onIconClick}
          />
          <Textarea
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="Textarea with a label"
            placeholder="And the placeholder"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="And a value"
            disabled
            icon={<AttachmentIcon />}
            label="Textarea with a label"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="And a value"
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="Textarea with a label"
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            defaultValue={longValue}
            icon={<AttachmentIcon />}
            label="Textarea with a label"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={longValue}
            disabled
            icon={<AttachmentIcon />}
            label="Textarea with a label"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={longValue}
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="Textarea with a label"
            onIconClick={onIconClick}
          />
        </Wrapper>

        {separator}

        <Wrapper>
          <Textarea
            description="This is the description"
            icon={<AttachmentIcon />}
            label="This is the label"
            onIconClick={onIconClick}
          />
          <Textarea
            description="This is the description"
            icon={<AttachmentIcon />}
            label="This is the label"
            placeholder="This is the placeholder"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="This is the value"
            description="This is the description"
            icon={<AttachmentIcon />}
            label="This is the label"
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            description="This is the description"
            disabled
            icon={<AttachmentIcon />}
            label="This is the label"
            onIconClick={onIconClick}
          />
          <Textarea
            description="This is the description"
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="This is the label"
            onIconClick={onIconClick}
          />
          <Textarea
            description="This is the description"
            disabled
            icon={<AttachmentIcon />}
            label="This is the label"
            placeholder="This is the placeholder"
            onIconClick={onIconClick}
          />
          <Textarea
            description="This is the description"
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="This is the label"
            placeholder="This is the placeholder"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="This is the value"
            description="This is the description"
            disabled
            icon={<AttachmentIcon />}
            label="This is the label"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="This is the value"
            description="This is the description"
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="This is the label"
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            defaultValue={longValue}
            description="This is the description"
            icon={<AttachmentIcon />}
            label="This is the label"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={longValue}
            description="This is the description"
            disabled
            icon={<AttachmentIcon />}
            label="This is the label"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={longValue}
            description="This is the description"
            disabled
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="This is the label"
            onIconClick={onIconClick}
          />
        </Wrapper>

        {separator}

        <Wrapper>
          <Textarea
            defaultValue="A value"
            description="And a description"
            fullWidth
            icon={<AttachmentIcon />}
            label="This is a full width textarea with a label"
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            defaultValue="A value"
            description="And a description"
            disabled
            fullWidth
            icon={<AttachmentIcon />}
            label="This is a full width textarea with a label"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="A value"
            description="And a description"
            disabled
            fullWidth
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="This is a full width textarea with a label"
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            defaultValue={veryLongValue}
            description="And a description"
            fullWidth
            icon={<AttachmentIcon />}
            label="This is a full width textarea with a label"
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            defaultValue={veryLongValue}
            description="And a description"
            disabled
            fullWidth
            icon={<AttachmentIcon />}
            label="This is a full width textarea with a label"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={veryLongValue}
            description="And a description"
            disabled
            fullWidth
            icon={<AttachmentIcon />}
            iconDisabled={false}
            label="This is a full width textarea with a label"
            onIconClick={onIconClick}
          />
        </Wrapper>

        {separator}

        <Wrapper>
          <Textarea
            defaultValue="This is a correct value"
            icon={<AttachmentIcon />}
            success="With a success message!"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue="This is an invalid value"
            error="This is an error message!"
            icon={<AttachmentIcon />}
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            defaultValue={longValue}
            icon={<AttachmentIcon />}
            success="With a success message!"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={longValue}
            error="This is an error message!"
            icon={<AttachmentIcon />}
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            defaultValue="This is a correct value"
            fullWidth
            icon={<AttachmentIcon />}
            label="This is a success"
            success="With a success message!"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={veryLongValue}
            fullWidth
            icon={<AttachmentIcon />}
            label="This is a success"
            success="With a success message!"
            onIconClick={onIconClick}
          />
        </Wrapper>

        <Wrapper>
          <Textarea
            defaultValue="This is an invalid value"
            error="This is an error message!"
            fullWidth
            icon={<AttachmentIcon />}
            label="There is an error"
            onIconClick={onIconClick}
          />
          <Textarea
            defaultValue={veryLongValue}
            error="This is an error message!"
            fullWidth
            icon={<AttachmentIcon />}
            label="There is an error"
            onIconClick={onIconClick}
          />
        </Wrapper>
      </>
    )
  },
}
