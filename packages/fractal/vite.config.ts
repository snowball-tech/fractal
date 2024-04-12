import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { type Plugin, defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const muteWarningsPlugin = (warningsToIgnore: string[][]): Plugin => {
  const mutedMessages = new Set()

  return {
    closeBundle() {
      const diff = warningsToIgnore.filter((x) => !mutedMessages.has(x.join()))
      if (diff.length > 0) {
        this.warn(
          'Some of your muted warnings never appeared during the build process:',
        )
        diff.forEach((m) => this.warn(`- ${m.join(': ')}`))
      }
    },
    config: (userConfig) => ({
      build: {
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (warning.code) {
              const muted = warningsToIgnore.find(
                ([code, message]) =>
                  code === warning.code &&
                  warning.message.includes(message ?? ''),
              )

              if (muted) {
                mutedMessages.add(muted.join())

                return
              }
            }

            if (userConfig.build?.rollupOptions?.onwarn) {
              userConfig.build.rollupOptions.onwarn(warning, defaultHandler)
            } else {
              defaultHandler(warning)
            }
          },
        },
      },
    }),
    enforce: 'pre',
    name: 'mute-warnings',
  }
}

const warningsToIgnore = [
  ['SOURCEMAP_ERROR', "Can't resolve original location of error"],
]

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
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

  plugins: [react(), tsconfigPaths(), muteWarningsPlugin(warningsToIgnore)],
})
