import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { tsconfigPaths } from 'vite-plugin-lib'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      name: 'Fractal',
    },

    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },

  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      copyDtsFiles: true,
      outDir: path.resolve(__dirname, 'dist'),
      staticImport: true,
    }),
  ],
})
