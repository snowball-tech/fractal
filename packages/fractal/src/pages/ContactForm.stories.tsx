import type { Meta, StoryObj } from '@storybook/react-vite'

import { UilMessage as SendIcon } from '@tooni/iconscout-unicons-react'
import { fn } from 'storybook/test'

import type { FormEvent } from 'react'

import { Button } from '@/components/Button/Button'
import { InputText } from '@/components/InputText/InputText'
import { Paper } from '@/components/Paper/Paper'
import { Textarea } from '@/components/Textarea/Textarea'
import { Typography } from '@/components/Typography/Typography'
import { Themes } from '@/constants'
import ThemeProvider from '@/ThemeProvider'

interface ContactFormProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.(event)
  }

  return (
    <div className="mx-auto max-w-lg p-4">
      <Paper elevation="higher">
        <Typography className="mb-1" variant="heading-2">
          Contactez-nous
        </Typography>
        <Typography className="mb-3 text-grey-70" variant="body-1">
          Une question ? Une suggestion ? N&apos;hésitez pas à nous écrire !
        </Typography>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <InputText
            fullWidth
            label="Nom"
            name="name"
            placeholder="Jean Dupont"
            required
          />

          <InputText
            fullWidth
            label="Email"
            name="email"
            placeholder="jean.dupont@exemple.fr"
            required
            type="email"
          />

          <InputText
            fullWidth
            label="Sujet"
            name="subject"
            placeholder="Question sur mon abonnement"
            required
          />

          <Textarea
            fullWidth
            label="Message"
            name="message"
            placeholder="Décrivez votre demande..."
            required
          />

          <div className="mt-2">
            <Button
              fullWidth
              icon={<SendIcon />}
              label="Envoyer"
              type="submit"
              variant="primary"
            />
          </div>
        </form>
      </Paper>
    </div>
  )
}

const meta = {
  component: ContactForm,
  parameters: {
    docs: {
      subtitle:
        '📬 Un exemple de formulaire de contact utilisant les composants Fractal',
    },
    layout: 'fullscreen',
  },

  title: 'Pages/ContactForm',
} satisfies Meta<ContactFormProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: fn(),
  },
}

export const DarkMode: Story = {
  args: {
    onSubmit: fn(),
  },
  render: (args) => (
    <ThemeProvider theme={Themes.Dark}>
      <div className="min-h-screen bg-body-dark py-4">
        <ContactForm {...args} />
      </div>
    </ThemeProvider>
  ),
}
