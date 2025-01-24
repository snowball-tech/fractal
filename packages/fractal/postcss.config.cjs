module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},

    ...(process.env.NODE_ENV === 'development'
      ? {}
      : { '@csstools/postcss-cascade-layers': { onImportLayerRule: 'warn' } }),

    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      features: {
        'custom-properties': false,
      },
      stage: 3,
    },

    'postcss-flexbugs-fixes': {},

    'postcss-logical': {},
  },
}
