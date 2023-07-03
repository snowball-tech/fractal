const { ignoreFiles } = require('@snowball-tech/stylelint-config/base')

module.exports = {
  extends: '@snowball-tech/stylelint-config/full',

  ignoreFiles: [...ignoreFiles, './fractal-panda/**/*'],
}
