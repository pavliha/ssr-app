require('module-alias/register')
require('@babel/register')
require('@babel/polyfill')
const { config: bootDotEnv } = require('dotenv')
const App = require('./lib/App')
const Stage = require('./lib/Stage')
const webpackConfig = require('./webpack.config')

bootDotEnv()

const app = new App(webpackConfig)

app.start(Stage)
