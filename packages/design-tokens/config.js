const BASE_OPTIONS = {
  basePxFontSize: 16,
  outputReferences: true,
}

module.exports = {
  source: ['tokens/**/*.json', 'tokens/**/*.json5', 'tokens/**/*.js'],

  // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
  platforms: {
    css: {
      ...BASE_OPTIONS,
      buildPath: 'dist/web/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
        {
          // For Font Loading
          destination: 'fonts.css',
          filter: {
            attributes: {
              category: 'asset',
              type: 'font',
            },
          },
          format: 'css/fontface',
        },
      ],
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'size/breakpoint-radius/px',
        'size/other/pxToRem',
        'media-query/quote',
        'time/seconds',
        'content/icon',
        // Use CSS format that will output Hex or RGBA accordingly if the alpha
        // channel is needed.
        'color/css',
      ],
    },
    react: {
      ...BASE_OPTIONS,
      actions: ['react/copy-constants'],
      buildPath: 'dist/web/react/',
      files: [
        {
          destination: 'design-tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
        {
          destination: 'design-tokens.js',
          format: 'javascript/es6',
        },
      ],
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'size/breakpoint-radius/px',
        'size/other/pxToRem',
        // Use HSL instead of HEX to automatically support Alpha channel.
        'color/hsl',
      ],
    },
  },
}
