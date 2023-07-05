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
  external: ['react', 'react-dom', '@snowball-tech/fractal-panda'],
  format: 'esm',
  minify: true,
  noExternal: [],
  outDir: './dist',
  replaceNodeEnv: true,
  sourcemap: true,
  target: 'esnext',
  treeshake: true,
  tsconfig: path.resolve(__dirname, './tsconfig.build.json'),
}

export default defineConfig([
  {
    ...commonConfig,
    entry: ['./src/components/**/!(*.stories).tsx'],
  },
  {
    ...commonConfig,
    bundle: false,
    entry: [
      './index.ts',
      './src/index.ts',
      './src/components/index.ts',
      './src/components/**/index.ts',
    ],
  },
])
