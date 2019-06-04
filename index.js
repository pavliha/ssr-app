const { config: bootDotEnv } = require('dotenv')
const Server = require('./lib/Server')
const Stage = require('./lib/Stage')
const webpackConfig = require('./webpack.config')

bootDotEnv()

const server = new Server(webpackConfig)

server
  .start(Stage)
  .catch(console.error)
