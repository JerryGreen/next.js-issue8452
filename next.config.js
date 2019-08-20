const { resolve } = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['~'] = resolve('components')
    return config
  }
}
