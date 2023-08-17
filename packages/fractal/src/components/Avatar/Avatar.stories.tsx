import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Avatar from './Avatar'
import { Sizes as AvailableSizes, DEFAULT_SIZE } from './Avatar.constants'

const IMAGE_URL =
  // eslint-disable-next-line no-secrets/no-secrets
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgYGhocHBwZGhwaGhocGhwZGhwaGhwcIS4lHx4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBISGjQhISE0NDQ0NDE0NDQ0MTQ0NDQ0MTE0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0PzQ0NDQ/ND8/PzQxP//AABEIAQQAwgMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAADBAUAAQIGB//EADsQAAEDAgMGAwcEAgEDBQAAAAEAAhEDIQQxUQUSQWFxkYGx8BQiMqHB0eEGE0LxFVJicoKiFiOSstL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABsRAQEBAQEBAQEAAAAAAAAAAAABEQIhMRJB/9oADAMBAAIRAxEAPwDwrdnNRfYAiP3guA8rDTsbNZyXbcA2LQgPe4ItGqUHLtnk5JSpspyr08WAu/a2lPR5t+z3jJBdhH816n9xpWyG/wBK6YhYTYb3xJjuVYofp2kPjeekgeuyfoNebNbut45iepzKbZRAE7oGpGSzeq3OSDf07SPwvv8A8Tfuk8Z+nd25G83UWI681YqkjTqE1Rx/B3vZ55x11+6m0yPFV9kD+OWd+A1OuqVbs4L2u0sOHNO4Lx7piZEgw7mCPmvP4nCvZeONxp+FvWbE3/GhLYjBEZKk2o45NcY0BWm1DxaesWVRF9kcjswB4qm97QuWVZU0F2fs8AZI1RjWmEWm/dCmYqtJsoHi9qE+qeCnuc7gh/uuWg57S6U0ysYUf98hZ7aVMNVvaHLFI9qKxMNVn4xpS7sYApJpPWfsOVxFR2PC0McFNGFemKWznHNMBH7Qui0cZJXVHZM8E9Q2K0Gf7BOmqmmOsPvGLZ5cU7SpXl5hovfMnU/b7Jqg0NG4wAuAu6xA5aHpMCeKI3ZrXCXPmOQjwnJYt10kxw3aDBZrsv8AXP14J3D4yQIJJjj+AusNs2mOJ7xCc3WM+EAan1eLLNrQIpl4sxw5/wAfmtf495yG94C3iYhVm4oEfxvxufMptmJteOsDzSURMPgKjL53mCMoNpVNtZrrObfiIFvCUd+KB+JsjX4v/tkl6tRhHuwHdJPcEfIrX1E/auwGPBcG+9wF47GQvIbV/T9VvvBhMcRvONtPeI9ZL3dLGGY3nEC2cj5pqvVkXuOO6bqypeXyh2EcAS614jj24eMIdJq99j8NRqWG7NxJIDr53y+XDNefxOxnMMi45XjrE91WbE5skQgVKCfeyEF+SIDQaDmivwwjJCp5pwusglYjDWKmMokuhXnpZtMSroH7KFpPSsUDPso0WxhRonQQhF41WkKVKUcF1RKytWCXbiJMBBXoxE6LitWtMxwB+gHEpZ9SBc24n6BMYWm0w94J/wBQbQOFlm1rmD4Kw00F9DEkWF1wNqCYbJJsQWm+gz5aFO+0gzDQ0jmY48BnmkHPe4+6BGpYG9buv2AWWx/8mB8bS3lMj8Fa/wAk0WbvdCZ8LBTsTh2n+AP/AE739fJTn0T/ABb3smQ2vSt2iBynOSY7JuhtIDLd/wDGfOV5KkxwtB+XkmWsJzI8YhMNer/yjQcx0Bueyx20Wk2Hax7mV5ZlFscL6THkrWysO45ZWkGe6uYs9eiwrS8bw8Dx6GM0xRqtMh8i8SLR65yE7sXBwJPy4IO2cCWy9guMxwP18Vi1r86m7U2YQd5oEHjEE9iPNRjvgwA88jJA7kk+EK3TxstBzacwTkfXgp21MNI323bxg5dQfn4Fblc7EfGYV5JkeJIHheFNxFEtz48wfJN1sU5j4cBBtPI5Rw+U5JLGmTA65qsUtvQUVuKaM0L2MuXI2cVoaxWKCSbjFQbs5aOzwECntYWJr2ILEHcvPFcOD04KnJaL54IJzqTzxTGEolnvOudEy0ycvXRFcYANydLx46rNqyAU6Ze4E5C/X19E8a8w0axYDghYdoAl13O5x35fdM1an7Yyl5yY0QGj/k7M9Co0O6sGD3hw48fBTcRtFzvhuBxmw8Db5JHG4qBLzJP8Rl0U5+Je/M20GXZJDVF+Lec3+A+kIb6k2Jc7qT9UOlTP9WVDC4OUtkanIVKl16FP0cJMJuhs+2Ss4HCDRYvTc5K4DZ94iy9LgsCBBhCw7ADCpUnx0Wdrc5kVMMwAZLnENlCZXXW/KlJ48Pj2GhXLc2PvGk6c5RqNTctmx3Dg4ff1yVP9UbP36e8PibcKFgKhezddmCROhz8F05rl3PSW18C2N0fCfeYdOO6Y9fWE7n116iVffV3TuP8AgJi2bTq09iFHxWF3XkTM5REHmJK25UXDvELbjdKUnFqZNULSNlyGVsPBWnvQb3QsQP3FiATqrVjawUD2golKsSYmOf8AamD1VKm17d8ZjMWnw1n76JbE0odMzPO8afRdYGha2ecDPwn4hpH95XYZ4jrwPELNajGVIM8RpkOnNLY3Fw22Z7dTquaz90W8B9Spz329ahWFoFZxLro2GZdcNbcp3DMTqrzD+HYFUwwAKmUnQU5TeZXKusXaLrc03hXXzUrC1DN1Rw0b1x81K6Q+98XTFOtISBfxH3TOFfNvmo0rYepZNApLCiyba1ajFaqskEHjK8d+1uPew5E56RMHwXtTkvH7fG5WkZmD1/I+iTyp17EvaTN4EOzFjGnAgcvuFPeJYQ8mQLG8Hry4+CsY4OIDmwXRl/sOXMfNThUc5j9LERm0zwnIf0urz1CrVC2J9Dh9UI4wImJw5nrf+0qMMtMnKWKC4rYlKtokFE/bQde0LF37OsQRv2kTDYUuMJ6lSBCfwtJo0U0Fp0n02gEmDcCLc4nJCxWIgc/mBz06BEp1Xw9okgXBFwOFtFKxDDJm2p+llloOtVsXHjl9PolmXA9afZaxD5gDII1JsDoFpHVC5VGg1TsNwCo0s1jp05NsanKTEKgyU2xnNZbh3CtGsqtRogxf5qA1jgZBMJyni3NcJnryWa3KruoQLfNFwR1zhK1sWNyfBc4bFtaRvcfJSRq1fovEeKea5eepbVY0ET09aLv/ADLSLQtM3F9wsvKfrJsBjxwMfbzVChtDnPzSX6pO/h94XILT80n1L8S6T95u6dJHL1ceAQcPAJBj3pBEZ9462Q9m1JA1Ho/SOibYwNfw5aFdI40htDCMid8C1hBi1he6itYL8l7pux31veqvho/i0XnqSoG2qlISxgFjk073Lec+PedyFhzWoxYiuhLlwlGgIT2Koz9xYuYWLI5ZRcmMPRIN5v6CPhSqFNu8PdEnQIFMOQwvcQJ3eYmbEWUHH15NhDeA+6rY3DS7ec4AwAGzOWoHkpuIYDcDvDT/AEip9FiPUs0+vXDuumMJ6aDyWY3TRBzhTdUqRU3CBUH2CzfrfPw2zFZaJllU8XW7fMqHTr7kmVsYovMTCYv6WjjQ3N1uo8oWVNsMjOdPULzeJMOIBPLjJsgAHjZa/KTuvZYXaG/DRlbmqu2sJuMbU3rRlqvPfpdoJEjive7W2cKuH3PEeC5Xy47c+8vBVcUR8Ik58gOZKxm0XiJy6c4+qJicAWP3SPh4fXVUMNgGvAlk/wDcRbSy1M/rFl/h7Zu0LhpbEmMuOXiLK3jW72GeI4T2v5BDweEbuAboEZQqYoD9stjNpH0UufxvmX+vD0HAO93KxH2VWliG2cTHXVSMNTMXtJA6rjDY5pEEwdIkHpp66LUc+pirtzHveyN+GAfCDB7Drxy0yXjq+KbJGW7EdJiPXNelGOYTusHvEQS4CDyEceZUHaOznbxBi5EZcOFrbsLccuonHGLn21FqbP3c0B2GCqCe1BYg+zLangpYavBBjLv8+Cu0WMeJk03crtJ8LhTadFqcFJu6CCWkWOhEJYR1V2c4zD2uHIEntl3UnGUQ3PtILj1hdVtoBp/i6/EgeSXqbYYPhYZ6kgdLx8ln1rY29u6JPu+vXdS8RVk278SuMTinPMuPghgyJWsTTeFVAs3hZTqGap4d6xXTkjVwxm67pNI6K1TptcLrRwbRxU/S/lNJOnyQmYMkyrAw4QsUCN0NFzZP0fkxsWgQ8QvpOGBLBK+f7LpvDoIvkvd7Kcd2D4rF+uvPwttHZjH3IuOKltwTmOvlqvTVQ6DAmMhryQ6L21GSB4aFGsAwrOibeQBCX3w22Wi5ZUJRLHnsU1jGOef4b5E6xYdyB3XiQ6YM2NvFej/Vzv8A23MB/kCdbEkea8lgMTundOR5fRdeZ449dbcVGtIsc+B1/KcoV3EbhNtZiOd0OjukQfA8PwUw/D8yRyHn9wmsWEKtCTczHWPBaGFVFrBqutwKspnsoWKjC2rgTY+FmIeN25t6smXUQk8bTgWvdKkRsW1nAS7iTkPXNTng+vwqWLJAAmLmTFydUhUcNPukKWcUbCOEwePmhuC4a6DKopsbBTjEjTqgp6jcLFdOaK2sQjMrkoBYsY0hZxqKdGpql8Titx4OcDzXVFwi5QcQyQVGt8c0NuHfzvK9lsnbbpB1Xz2rhuOeXryVbDUKgcG75gRmcsp+ZHdavMZ56sew/wDV7jV3G0nwDG8WwD0uqmFqllU2hr/eA0cbkd1H2ULAm/vEEHjlB9aK/Wp7wBi7YNvXELFdub4LimSVqm2AjZtJGcWQXk5+Py/tCvF/q2kAxx5gf/K5nlb5leGrMLHCMjcHmvefquqBTOc7wAzvEx+eRXin4W3vOa2OBPyjh+F05+PP19UNlV99pGTh2PUKnRxBb8QjQjLxByUHZzCBvjMECdQbQrr3AtBPGO6lnpL4dcwG8+IuD80B7o4oWFeQ7czBy5TdLbQrljoPH168VqVnqGd/msUn28ra0yub1kvW8l0KvRBrGbm+g/j4jj3WRG2gyQXcBl9SkKGHLmk87qvi5eCOAF0HZVGxbkdD/IFFS6tAi3ZLvavV1sGHNvYj166KVWwrSPeIBHGc/BXRPoP4eKp0ngD16KlEbrtU5SqSpYc3FKk6UZrJStJ1vXr12YZUus10lEYy6O2ibTkSPNEpGLTYf2SULEYxsx/FsZ/7Ej5/lSQtdYdjS4k2i9/Ej5x2S78YQ9pm3vE3zIBufWiVrYoyQ33p4eIv280MYeq6/u8rSVvEy16vAY8S3pN7fEddYaD4Beq2Xiw5rSTdog85MfJfMcPgawIO9YGclf2di3sG474SOWcyfCJWbGpsfQrXjrHry5qZj6rmiW8DHhl9lvAY4OAAOp8L6+rJfH1Du714kzGkZjz6rOet/rx539Rua5oOeTgD0MeR+S8i+CZ48dAV6H9V7oY1u9P+oHzaD4ea8xSw9R1gxzW5kv8AdF+JJ+i6ONqiaoawNbmTPicvNEr72VyIbkJs0ecrmls6HNLngmOAyvHHh9k49v8AyIEXMwPnn5KAGCqF0EgtjXPj34J7amFbUYJ+Js5eTuk/NDaxoGkZ5STHn911Tp7rYMjPPUQT65qCL+04W3G25uWK9+yPTWrSupjz7dpTktt2hOa7Zs8LTyxgMEEi1/zYrVZg4qS2QLH5pHEYkARplCXrYqbHy0yslXVEw00cY4fC4jxS7qp1Q95YCrhrlxlFpvIuFwV1TdHrmgoNfFzPNN4dxJ8bDyU9j7gkZ/ePqmqcnrmenl6KljUpvE4mGwDnmcrTw9cEgW7x6kTp6z7oxoGCfHx/qVug3y/I+qimaTBHuxbjoMhCo0cM4RBvDTH/AFWH9JLANAje1uOJ4ADre+hyTtTaII925tfmJggf9ufLoo1KNQ394jeJ0nuAfXFMfsh0c+Hr1kg4d4LhGsdvdjoSFYw+Fc5zRrHmfqQpi66wFNwPuzwGVoH994TdPECAP4kbpmMzqNPeM9FYweHG6bcu4t5eamYqgGy4Nm8gcZa7KRpMdHKznGb08n+oqg3w0Nu0uAkgyQXSSDrftztGbVc/d3rG4HPIZHjPkmdrvY595zlxzAda8jPw1KWdWLblw8CYiDnNhwzyVYHwzYdMlxIJDc79R67FMVH2k3z42uAHSJjevkOeWSmOxQAzFjcTqQTDg7LlbJEftH+GV7OsTBvF8tJTF1U3RcGS4ZnlMgk8By+uezWDAN6JvuiCOB5wBaZUVuKgSTmLgTYgzPxfnVYzFXkkm7dRvWH8Qb5z+Uw1a9pdoOw//SxQxW/5N/8AL7rFMNExuK3GiMyodfEl1yck5jmVHyQx26OO6ctUnRoQ6Xghoz4HkFuMgFxWrqpUax0bsC2Ry6yEm+noqhdoXTQthsLe5xCDFuVoHVbLUDOGfw8R8lSpOEGOHE5ZQPJQskzQranw55KWLK9EAIjXyn8fJbdSAHeZ01S7a07t/wC4I+qacd4gTaPLksqDUMA2y3j0LZhEpt3exPiGmw5fhY8Xdy3o5krGu0PrK3Uk9imLKe2czKL3gzYQN8EnxHlqvZbKY0RqcupM2+a8ps0SRawvxjXhpK9RhK4u/gIjhfj5jsrIdVbpw1h149jPmF53b20Qxj3tu4OeR1kgW0n7I+0tqhjJsTBdBysCe3ulfNNt7WdWdugktEGNTEeIz7laZ0NrXPe4vc1oJJgEEntYeaDiMC8TukkIVEOGg0OZTD8U92bifkmJpN1J4NzHMlcbpGR8RZNERmef9lDLxw/KuDgsJ/OS4c12c+KK0OOQ73Rm4BxzKngS/ddqtql/jRoVimqt06zXn3A6RqMuchCx43RugbzncCAY5meKpYpjKTIaATpME8JN5/tefbgHvJcZaNZtnkNUCL8Ic89d2AB5jshvJAvBHeFXqM3QGbucwG2JNvvnZArYEn3iQ46cB016oYmsptImR0P3QnMAyiNEzUowbggoTqfMeOfyRAHNB4FDiMkVyG5UaBWLRK1KBtmJMXPbNUMLi4zNlEldNqEcVMV6hj5Fjnn00W3tuINpItr6I7rz9DHEETdV8Ni2bhl/QHlCYa9Bgj7hiwtrnbToU7j9otY1omTHgLTJ5R5heSxG24sy8gX4du/rKbi8c+o4kkweHgLTpZVD209quqOcZsSfEERHQCAkRUA58kFlIlNUsFNyU0wM1VtjHHgqNLCAJunQU1cSBhSc5TNLBBV2YdMMwvRTROpYUJtmHCdFC0euy2KccFAp+zyWJ7c5O7BYgi061NxLiM8gbEwbRPmUertBvw7wbqTBjk2OMcf6UqtiiRdgjIcD24oVKkXW3TC0LNJ1OPddPhJPUlaqU5yPYflT6GHcDay7rYot90Ont8kGYyg1oF5PTLxhTqjB/f1WVsTrnzAzQWlxzn6IjP2wStOojgumnQLDJzQCNFcOphON5BDLECppjRcFg0TT2ITmqgO6sARNxYGIOWhHYxcMYmqbFNXHTGpykIyQWMTtGn65ootNhPq6fw7JhBoMmPqncNTggnh3WQanQi5WnVALeuKLUqeaXcRnl64ogrHSfXmikTf1zySgfHkiCrogJ+3z81iF7SNT68FtB5LfpsP++mnU3RP8u+Ia0DonKGz2R7xBIzW3UWM/jPT7rQnPbVeCXODW858gljQI1M/7DPoq9epvZNtnefJcU6c3yANwNfHJDCVHAke8+2g4o5wpPCAqrKQAmAu40uPkgjswi1VoQVUc2J9QlXtQIvZ2XDWpt7EM00Cz2oRYndxc/tqaEyxbbTTZZyWFkKgDaKNuQumNRQxZHVJoTVJhXNOmjtOmWvJFN4djRBOfqU2Hicxx4R6uptO3D8BMUXCLG+q0hogW8e/FCqtjx5ZeoXLn5fjzXLqniPH+kA3vt9/WS4a+Dn6ut1WceWRQDbtCB394epWJL97me6xFQjWM2KPQL/8Abt5SqGGwjRZrRa5J/NkZpyjhlumL6RCIAMOTxHgPqm6OF3R6McoRqVMzK7fUGRbCAL8pseZ9eSG8kTY/QIz6jQOKB7SOAz45hBuiwkEmBdcvp20TNJwiJQK4sevqUCTuSGWoheAud5ANzVgWyZWNYg0QtbqIAuoE8LXv+EHDW2kCemXdGp0zvAGwJA8SJRG7sfDJiDaOf27LGudIy6m/TPogNuCOOcEfWFy2gOeZHHLgRBXDnvH8zERoguDiCCT4k58kDe7YdCM/5WjwP1TDGtIkbtoJkjLiPWikMY0G/gn6DAALc5QOFjc/djkR2XDaYOUcQfeAvwPRbFMDIBc1KAcJgINupai3XuLcUF1ATxE24+GZuMl0yjwIKz9i9yYnXNBz7Nzd2KxE9nH+7u6xABgz4dFy8mQJJvmc+6xYgfw+R8UA3mdVtYgDEi+qIVtYgHQdaeKBjD67rFiBAZogC0sQEK6cfIepzWLEA2cVtixYgIzgjs+ixYg2/Jc081pYil6uZXWEeVixEV6FxfUrW6PXVYsQc0s+/kEfMX5LSxANYsWIP//Z'

type AvatarProps = ComponentProps<typeof Avatar>

const meta = {
  argTypes: {
    size: {
      options: Object.values(AvailableSizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(AvailableSizes).join('|') },
      },
    },
  },
  component: Avatar,
  parameters: {
    componentSubtitle: `🧑‍🔬 Jake! Listen to me! You're not used to your avatar body. This is dangerous! - Dr. Max Patel - Avatar`,
  },

  title: 'Molecules/Avatar',
} satisfies Meta<AvatarProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    size: DEFAULT_SIZE,
  },
}

export const Icon: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <Avatar size="s" />
      <Avatar size="m" />
      <Avatar size="l" />
      <Avatar size="xl" />
    </div>
  ),
}

export const Name: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <Avatar name="Luke Skywalker" size="s" />
      <Avatar name="Luke Skywalker" size="m" />
      <Avatar name="Luke Skywalker" size="l" />
      <Avatar name="Luke Skywalker" size="xl" />
    </div>
  ),
}

export const Image: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
      <Avatar imageUrl={IMAGE_URL} name="Luke Skywalker" size="s" />
      <Avatar imageUrl={IMAGE_URL} name="Luke Skywalker" size="m" />
      <Avatar imageUrl={IMAGE_URL} name="Luke Skywalker" size="l" />
      <Avatar imageUrl={IMAGE_URL} name="Luke Skywalker" size="xl" />
    </div>
  ),
}
