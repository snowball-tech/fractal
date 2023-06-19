#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

/**
 * Change the generated index.html document title to "UI Documentation".
 */
try {
  console.log('Rewriting Storybook document title...')

  const filePath = '../storybook-static/index.html'
  const document = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8')

  const output = document.replace(
    /<title>.*<\/title>/,
    "<title>Fractal - Snowball's design system</title>",
  )
  fs.writeFileSync(path.resolve(__dirname, filePath), output)

  console.log('Storybook document title successfully rewritten!')
} catch (error) {
  console.warn('An error occurred while rewriting Storybook document title...')
  console.error(error)
}
