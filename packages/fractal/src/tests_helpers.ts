import { userEvent } from 'storybook/test'

import { sleep } from './utils'

export async function slowType(
  text: string,
  target: HTMLElement,
  { strokeDelay = 50 } = {},
) {
  await userEvent.click(target)
  await sleep(100)

  for (let index = 0; index < text.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await userEvent.type(target, text[index]!, { skipClick: true })
    // eslint-disable-next-line no-await-in-loop
    await sleep(strokeDelay)
  }
}
