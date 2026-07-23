#!/usr/bin/env node
// Validates figma-map.json against the Fractal source code.
// Guards against drift: a PR that renames/removes a component or prop
// without updating the mapping makes this check fail.
//
// Usage: node scripts/validate-figma-map.mjs [path/to/figma-map.json]
// Exit code: 1 if any error, 0 otherwise (warnings do not fail the build).

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const ROOT = resolve(process.cwd())
const MAP_PATH = resolve(process.argv[2] ?? join(ROOT, 'figma-map.json'))

// Tokens that are valid mapping targets but not component props.
const ALLOWED_NON_PROPS = new Set([
  'aria',
  'capping',
  'children',
  'code',
  'derived',
  'element',
  'from',
  'icon',
  'in',
  'inherited',
  'initials',
  'left',
  'limit',
  'no',
  'only',
  'parent',
  'pass',
  'presence',
  'prop',
  'right',
  'selected',
  'side',
  'state',
  'states',
  'the',
  'through',
  'with',
])

const errors = []
const warnings = []

const map = JSON.parse(readFileSync(MAP_PATH, 'utf8'))

/**
 * @param {string} directory
 * @param {string[]} suffixes
 */
const readDirectoryTexts = (directory, suffixes) => {
  let out = ''
  for (const f of readdirSync(directory)) {
    if (suffixes.some((s) => f.endsWith(s))) {
      out += `${readFileSync(join(directory, f), 'utf8')}\n`
    }
  }

  return out
}

/** @param {string} directory */
const collectProps = (directory) => {
  const props = new Set(['children', 'className', 'style'])
  const types = readDirectoryTexts(directory, ['.types.ts'])
  for (const m of types.matchAll(/^\s{2,}([a-zA-Z][a-zA-Z0-9]*)\??:/gm)) {
    props.add(m[1])
  }
  // Props referenced through type composition (Pick<'a' | 'b'>, keyof lists...).
  for (const m of types.matchAll(/'([a-zA-Z][a-zA-Z0-9]*)'/g)) {
    props.add(m[1])
  }

  return props
}

/** @param {string} directory */
const collectEnumValues = (directory) => {
  const values = new Set()
  const constants = readDirectoryTexts(directory, ['.constants.ts'])
  for (const m of constants.matchAll(/=\s*'([a-zA-Z0-9-]+)'/g)) {
    values.add(m[1])
  }

  return values
}

/**
 * @param {string} directory
 * @param {string} name
 */
const hasExport = (directory, name) => {
  const code = readDirectoryTexts(directory, ['.tsx', '.ts'])

  return (
    new RegExp(`export const ${name}\\b`).test(code) ||
    new RegExp(`export function ${name}\\b`).test(code) ||
    new RegExp(`export \\{[^}]*\\b${name}\\b`).test(code)
  )
}

/** @param {string} mapsTo */
const extractPropTokens = (mapsTo) => {
  if (/no code prop|pseudo-state|inherited from/i.test(mapsTo)) {
    return []
  }
  // Strip parenthesised commentary, then keep identifier-looking tokens.
  const stripped = mapsTo.replace(/\([^)]*\)/g, ' ')
  const tokens = stripped.split(/[^a-zA-Z0-9]+/).filter(Boolean)

  return tokens.filter(
    (t) => /^[a-z][a-zA-Z0-9]*$/.test(t) && !ALLOWED_NON_PROPS.has(t),
  )
}

for (const entry of map.components) {
  const directory = join(ROOT, entry.source)
  const label = `${entry.figmaName} -> ${entry.source}`

  if (!existsSync(directory)) {
    errors.push(`${label}: source directory not found`)
    continue
  }

  if (!hasExport(directory, entry.codeComponent)) {
    errors.push(`${label}: no export named '${entry.codeComponent}' found`)
  }

  const props = collectProps(directory)
  const enums = collectEnumValues(directory)

  for (const [figmaProp, definition] of Object.entries(entry.propMap ?? {})) {
    for (const token of extractPropTokens(definition.mapsTo ?? '')) {
      if (!props.has(token)) {
        errors.push(
          `${label}: propMap '${figmaProp}' targets unknown code prop '${token}'`,
        )
      }
    }
    for (const value of Object.keys(definition.values ?? {})) {
      if (!enums.has(value) && !/^(true|false|\d+)$/.test(value)) {
        warnings.push(
          `${label}: variant value '${value}' (prop '${figmaProp}') not found in *.constants.ts enums`,
        )
      }
    }
  }
}

if (map.meta?.fractalVersion) {
  const fractalPackage = JSON.parse(
    readFileSync(join(ROOT, 'packages/fractal/package.json'), 'utf8'),
  )
  if (fractalPackage.version !== map.meta.fractalVersion) {
    warnings.push(
      `map was generated for fractal@${map.meta.fractalVersion}, package is now ${fractalPackage.version} - regenerate the map`,
    )
  }
}

for (const warning of warnings) {
  console.warn(`WARN  ${warning}`)
}
for (const error of errors) {
  console.error(`ERROR ${error}`)
}
console.info(
  `figma-map: ${map.components.length} entries checked - ${errors.length} error(s), ${warnings.length} warning(s)`,
)

if (errors.length > 0) {
  process.exit(1)
}
