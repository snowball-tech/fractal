const StyleDictionary = require('style-dictionary')

StyleDictionary.registerFormat({
  formatter: ({ dictionary, options }) => {
    const fontPathPrefix = options.fontPathPrefix || '/assets/fonts/'

    // https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
    const formatsMap = {
      eot: 'embedded-opentype',
      otf: 'opentype',
      svg: 'svg',
      ttf: 'truetype',
      woff: 'woff',
      woff2: 'woff2',
    }

    const extensions = ['woff', 'woff2']

    return dictionary.allTokens
      .reduce((fontList, prop) => {
        const {
          attributes: { item: family },
          display: { value: display },
          styles,
          value: fontName,
          weights,
        } = prop

        const fontCss = weights
          .map((weight) =>
            styles
              .map((style) =>
                [
                  '@font-face {',
                  `\n\tfont-family: "${family}";`,
                  `\n\tfont-style: ${style};`,
                  `\n\tfont-weight: ${weight};`,
                  `\n\tsrc:`,
                  `\n\t\t${extensions
                    .map(
                      (extension) =>
                        `url("${fontPathPrefix}${fontName}-${weight}${
                          style === 'italic' ? '-Italic' : ''
                        }.${extension}") format("${formatsMap[extension]}")`,
                    )
                    .join(',\n\t\t')};`,
                  `\n\tfont-display: ${display};`,
                  '\n}\n',
                ].join(''),
              )
              .join('\n'),
          )
          .join('\n')

        return [...fontList, fontCss]
      }, [])
      .join('\n')
  },
  name: 'css/fontface',
})
