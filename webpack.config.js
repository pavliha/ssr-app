const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const Stage = require('./lib/Stage')

const universal = {
  devtool: 'source-map',

  mode: Stage.isProd ? 'production' : 'development',

  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
  },

  context: __dirname,

  performance: {
    maxEntrypointSize: 500000,
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

    ],
  },

  plugins: []
}

const server = merge(universal, {

  mode: 'development',
  name: 'server',

  target: 'node',

  entry: './src/server',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },

  /**
   * LimitChunkCountPlugin is required.
   * Without it dynamic imports would also split server build
   */

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
})

const client = merge(universal, {
  mode: 'development',
  name: 'client',

  entry: {
    client: [
      './src/client.js',
    ],
  },

  output: {
    path: path.resolve(__dirname, './dist/public'),
    publicPath: '/',
    filename: `client.js`,
  },

  plugins: []
})

module.exports = [server, client]
