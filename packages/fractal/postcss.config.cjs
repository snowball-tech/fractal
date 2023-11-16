module.exports = {
  plugins: {
    /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

    'postcss-import': {},

    tailwindcss: {},

    ...(process.env.NODE_ENV === 'development'
      ? {}
      : { '@csstools/postcss-cascade-layers': { onImportLayerRule: 'warn' } }),

    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },

    'postcss-flexbugs-fixes': {},

    'postcss-logical': {},

    /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
  },
}
