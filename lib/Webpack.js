const webpack = require('webpack')

class Webpack {

  constructor(configs) {
    this.compiler = webpack(configs)
    this.configs = configs
  }

  get publicPath() {
    const webpackConfig = this.clientConfig
    return webpackConfig.output.path
  }

  get clientCompiler() {
    return this.compiler.compilers.find(compiler => compiler.name === 'client')
  }

  get serverCompiler() {
    return this.compiler.compilers.find(compiler => compiler.name === 'server')
  }

  get serverConfig() {
    return this.configs[0]
  }

  get clientConfig() {
    return this.configs[1]
  }

  get serverPath() {
    const config = this.serverConfig
    return `${config.output.path}/${config.output.filename}`
  }

  buildServer() {
    return new Promise((resolve, reject) => {
      this.serverCompiler.run((error, stats) => {
        if (error) return reject(error)
        console.log(stats.toString(this.serverConfig.stats))

        resolve(stats)
      })
    })
  }

  buildAll() {
    return new Promise((resolve, reject) => {
      this.compiler.run((error, stats) => {
        if (error) return reject(error)
        console.log(stats.toString(this.serverConfig.stats))

        resolve(stats)
      })
    })
  }
}

module.exports = Webpack
