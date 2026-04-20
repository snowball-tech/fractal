import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { type UserConfig, defineConfig } from 'tsdown'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const DIST_PATH = './dist'

const commonConfig: UserConfig = {
  // Cleaning of the directory is made by the `build` NPM script
  clean: false,
  deps: {
    neverBundle: [
      'react',
      'react-dom',
      '@tooni/iconscout-unicons-react',
      '@react-hookz/web',
      'lodash',
    ],
  },
  dts: true,
  format: 'esm',
  minify: true,
  outDir: DIST_PATH,
  outExtensions: () => ({ dts: '.d.ts', js: '.js' }),
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
    entry: [
      './index.ts',
      './src/index.ts',
      './src/constants.ts',
      './src/types.ts',
      './src/utils.ts',
      './src/hooks/index.ts',
      './src/styles/helpers.ts',
      './src/components/index.ts',
      './src/ThemeProvider.tsx',
      './src/hooks/*.ts',
      './src/components/**/index.ts',
    ],
    unbundle: true,
  },
])
