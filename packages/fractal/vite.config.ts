import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      name: 'Fractal',
    },

    rollupOptions: {
      external: ['react', 'react-dom', '@snowball-tech/fractal-panda'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },

  plugins: [react(), tsconfigPaths()],
})
