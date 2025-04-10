const BASE_OPTIONS = {
  basePxFontSize: 16,
  outputReferences: true,
}

module.exports = {
  source: ['tokens/**/*.json', 'tokens/**/*.json5', 'tokens/**/*.js'],

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

    'css-px': {
      ...BASE_OPTIONS,
      buildPath: 'dist/web/css/',
      files: [
        {
          destination: 'variables-px.css',
          format: 'css/variables',
        },
      ],
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'size/px',
        'media-query/quote',
        'time/seconds',
        'content/icon',
        // Use CSS format that will output Hex or RGBA accordingly if the alpha
        // channel is needed.
        'color/css',
      ],
    },

    typescript: {
      ...BASE_OPTIONS,
      actions: ['typescript/copy-constants'],
      buildPath: 'dist/web/typescript/',
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
        'color/css',
      ],
    },

    'typescript-px': {
      ...BASE_OPTIONS,
      actions: ['typescript/copy-constants'],
      buildPath: 'dist/web/typescript/',
      files: [
        {
          destination: 'design-tokens-px.d.ts',
          format: 'typescript/es6-declarations',
        },
        {
          destination: 'design-tokens-px.js',
          format: 'javascript/es6',
        },
      ],
      transforms: ['attribute/cti', 'name/cti/pascal', 'size/px', 'color/css'],
    },

    tailwindcss: {
      ...BASE_OPTIONS,
      actions: ['tailwindcss/copy-config'],
    },
  },
}
