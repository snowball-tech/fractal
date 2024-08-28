#!/usr/bin/env node

import fs from 'fs-extra'
import { globSync } from 'glob'

import _ from 'lodash/fp.js'

function kebabToPascalCase(string_) {
  return string_
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

// Fonction pour transformer les imports
function transformImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const newContent = content.replaceAll(
    /import\s+(\w+)\s+from\s+'@iconscout\/react-un(?:icons\/){2}uil-([\w-]+)'/g,
    (match, p1, p2) => {
      const pascalCaseName = kebabToPascalCase(p2)

      return `import { Uil${pascalCaseName} as ${p1} } from '@tooni/iconscout-unicons-react'`
    },
  )

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8')
    console.log(`Updated imports in: ${filePath}`)
  }
}

try {
  const files = globSync(`src/**/*.tsx`)

  if (_.isEmpty(files)) {
    console.log('No file found.')
  } else {
    files.forEach((filePath) => transformImports(filePath))
    console.log('All imports have been updated.')
  }
} catch (error) {
  console.error('Unable to find TSX file using icons:', error)
}
