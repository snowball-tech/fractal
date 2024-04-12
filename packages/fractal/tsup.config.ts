import path from 'node:path'

import { type Options, defineConfig } from 'tsup'

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
  outDir: './dist',
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
      './src/ThemeProvider.tsx',
      './src/hooks/index.ts',
      './src/hooks/*.ts',
      './src/styles/helpers.ts',
      './src/components/index.ts',
      './src/components/**/index.ts',
    ],
  },
])
