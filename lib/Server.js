const express = require('express')
const path = require('path')
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

  constructor(config) {
    this.config = config
  }

  server(path) {
    return (require(path).default)()
  }

  async development() {
    log('Starting development build. Sever side rendering is disabled!')
    const webpack = new Webpack(this.config)
    log('Building server for the first time')
    await webpack.buildServer()
    log('Start watching client changes...')
    app.use(webpackDevMiddleware(webpack.clientCompiler, { publicPath: '/', writeToDisk: true, }))
    app.use(webpackHotMiddleware(webpack.clientCompiler))
    app.use(express.static(webpack.publicPath))
    app.use(this.server(webpack.serverPath))
  }

  async production() {
    const webpack = new Webpack(this.config)
    await webpack.build()
    app.use(express.static(webpack.publicPath))
    log(`Serving content from ${webpack.publicPath} `)
    app.use(this.server(webpack.serverPath))
  }

  async start(stage) {
    const { PORT } = process.env

    if (stage.isDevelop) await this.development()
    if (stage.isTesting) await this.production()
    if (stage.isProd) await this.production()

    app.listen(PORT, () => log(`Listening on http://localhost:${PORT}`))
  }
}

module.exports = Server
