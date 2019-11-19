require('dotenv').config()

const Server = require('./lib/Server')
const Stage = require('./lib/Stage')
const webpackConfig = require('./webpack.config')

const server = new Server(webpackConfig)

server
  .start(Stage)
  .catch(console.error)
