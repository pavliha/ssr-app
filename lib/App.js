const express = require('express')
const Webpack = require('./Webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const app = express()

const log = (message) => {
  console.log(' ')
  console.info(message)
  console.log(' ')
}

class App {

  constructor(webpackConfig) {
    this.webpackConfig = webpackConfig
  }

  async setupDevSever() {
    log('Starting development build. Sever side rendering is disabled!')
    const webpack = new Webpack(this.webpackConfig)
    log('Building everything for the first time')
    await webpack.build()
    log('Start watching client changes...')
    app.use(webpackDevMiddleware(webpack.clientCompiler, {
      publicPath: '/',
      writeToDisk: true,
    }))
    const serverRenderer = this.getServerFile(webpack.serverPath)
    app.use(serverRenderer())
  }

  setupTestingServer() {
  }

  getServerFile(path) {
    return require(path).default
  }

  async setupProdServer() {
    const webpackConfig = this.webpackConfig
    const webpack = new Webpack(webpackConfig)
    await webpack.build()
    const serverRenderer = this.getServerFile(webpack.serverPath)
    app.use(express.static(webpack.publicPath))
    log(`Serving content from ${webpack.publicPath} `)
    app.use(serverRenderer())
  }

  async start(stage) {
    if (stage.isDevelop) await this.setupDevSever()
    if (stage.isTesting) this.setupTestingServer()
    if (stage.isProd) await this.setupProdServer()

    app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`))
  }
}

module.exports = App
