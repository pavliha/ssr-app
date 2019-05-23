const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const app = express()

class Server {

  constructor(config) {
    this.config = config
  }

  setupDevSever() {
    const config = this.config
    const compiler = webpack(config.webpackConfig)
    app.use(webpackDevMiddleware(compiler, {
      serverSideRender: true
    }))
  }

  setupTestingServer() {
    const config = this.config
    const compiler = webpack(config.webpackConfig,)
    compiler.run()
  }

  setupProdServer() {
    const { serveDir, serverPath } = this.config
    const serverRenderer = require(serverPath).default
    const compiler = webpack(config.webpackConfig)
    compiler.run()
    app.use(express.static(serveDir))
    app.use(serverRenderer())
  }

  start(stage) {
    const { port } = this.config

    if (stage.isDevelop) this.setupDevSever()
    if (stage.isTesting) this.setupTestingServer()
    if (stage.isProd) this.setupProdServer()

    app.listen(port, () => console.log(`Listening on http://localhost:${process.env.PORT}`))
  }
}

module.exports = Server
