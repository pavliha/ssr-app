const express = require('express')
const Webpack = require('./Webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()

const log = (message) => {
  console.log(' ')
  console.info(message)
  console.log(' ')
}

class Server {

  constructor(webpackConfig) {
    this.webpackConfig = webpackConfig
  }

  async setupDev() {
    log('Starting development build. Sever side rendering is disabled!')
    const webpack = new Webpack(this.webpackConfig)
    log('Building server for the first time')
    await webpack.buildServer()
    log('Start watching client changes...')
    app.use(webpackDevMiddleware(webpack.clientCompiler, {
      publicPath: '/',
      writeToDisk: true,
    }))
    app.use(webpackHotMiddleware(webpack.clientCompiler))
    const serverRenderer = this.getServerFile(webpack.serverPath)
    app.use(serverRenderer())
  }

  setupTesting() {
  }

  getServerFile(path) {
    return require(path).default
  }

  async setupProd() {
    const webpackConfig = this.webpackConfig
    const webpack = new Webpack(webpackConfig)
    await webpack.build()
    const serverRenderer = this.getServerFile(webpack.serverPath)
    app.use(express.static(webpack.publicPath))
    log(`Serving content from ${webpack.publicPath} `)
    app.use(serverRenderer())
  }

  async start(stage) {
    if (stage.isDevelop) await this.setupDev()
    if (stage.isTesting) this.setupTesting()
    if (stage.isProd) await this.setupProd()

    app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`))
  }
}

module.exports = Server
