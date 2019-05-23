const path = require('path')

module.exports = {

  port: process.env.PORT || 2000,

  serveDir: path.resolve(__dirname, './build'),

  servePath: path.resolve(__dirname, './build/server.js'),

  webpackConfig: require('./webpack.config'),
}
