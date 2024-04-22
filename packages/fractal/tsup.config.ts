import fs from 'node:fs/promises'
import path from 'node:path'

import { type Options, defineConfig } from 'tsup'

const DIST_PATH = './dist'

async function addDirectivesToChunkFiles(distPath = DIST_PATH) {
  try {
    const files = await fs.readdir(distPath)

    // eslint-disable-next-line no-restricted-syntax
    for (const file of files) {
      if (
        file.startsWith('chunk-') &&
        (file.endsWith('.mjs') || file.endsWith('.js'))
      ) {
        const filePath = path.join(distPath, file)

        // eslint-disable-next-line no-await-in-loop -- We need to wait for each file to be read
        const data = await fs.readFile(filePath, 'utf8')
        if (data.startsWith("'use client';")) {
          // eslint-disable-next-line no-console -- We need to log the result
          console.log(`Directive already exists in ${file}`)
          continue
        }

        const updatedContent = `'use client';\n${data}`

        // eslint-disable-next-line no-await-in-loop -- We need to wait for each file to be written
        await fs.writeFile(filePath, updatedContent, 'utf8')

        // eslint-disable-next-line no-console -- We need to log the result
        console.log(`Directive has been added to ${file}`)
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console -- We need to log the error
    console.error('Error:', error)
  }
}

const commonConfig: Options = {
  // Cleaning of the directory is made by the `build` NPM script
  clean: false,
  dts: true,
  esbuildOptions(options) {
    // eslint-disable-next-line no-param-reassign
    options.outbase = './'
  },
  external: ['react', 'react-dom', '@iconscout/react-unicons'],
  format: 'esm',
  minify: true,
  async onSuccess() {
    await addDirectivesToChunkFiles()
  },
  outDir: DIST_PATH,
  replaceNodeEnv: true,
  sourcemap: true,
  target: 'esnext',
  tsconfig: path.resolve(__dirname, './tsconfig.build.json'),
}

export default defineConfig([
  {
    ...commonConfig,
    entry: [
      './src/components/**/!(*.stories).tsx',
      './src/components/**/!(*.stories).ts',
    ],
  },
  {
    ...commonConfig,
    bundle: false,
    entry: [
      './index.ts',
      './src/index.ts',
      './src/constants.ts',
      './src/types.ts',
      './src/hooks/index.ts',
      './src/styles/helpers.ts',
      './src/components/index.ts',
      './src/ThemeProvider.tsx',
      './src/hooks/*.ts',
      './src/components/**/index.ts',
    ],
  },
])
