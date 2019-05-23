const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const Css = require('mini-css-extract-plugin')
const Env = require('dotenv-webpack')
const Stage = require('./lib/Stage')

const universal = {
  devtool: 'source-map',

  mode: Stage.isProd ? 'production' : 'development',

  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, './src'),
      api: path.resolve(__dirname, './src/api'),
      assets: path.resolve(__dirname, './src/assets'),
      config: path.resolve(__dirname, './config'),
      constants: path.resolve(__dirname, './src/constants'),
      components: path.resolve(__dirname, './src/components'),
      containers: path.resolve(__dirname, './src/containers'),
      helpers: path.resolve(__dirname, './helpers'),
      services: path.resolve(__dirname, './src/services'),
      setup: path.resolve(__dirname, './setup'),
      shapes: path.resolve(__dirname, './src/shapes'),
      utils: path.resolve(__dirname, './src/utils')
    }
  },

  context: __dirname,

  performance: {
    maxEntrypointSize: 500000,
    hints: false,
  },

  module: {
    rules: [
      /**
       * Resolve jsx for React components and js for all order javascript code
       */
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      /**
       * Looks for all css imports
       */
      {
        test: /\.css$/,
        use: [
          Css.loader,
          'css-loader',
        ],
      },

      /**
       * With this loader you can import svg icons. And this will convert svg to jsx code
       */
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'react-icon-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        ],
      },
      /**
       * With this loader you can import pictures and it will provide path to them
       */
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name() {
                return '[path][name].[ext]'
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [

    /**
     * Enables support for .env files
     */
    new Env({ safe: true }),

    /**
     * Don't know what is's doing. Please contribute and write explanation comment :)
     */
    new webpack.NoEmitOnErrorsPlugin(),

    /**
     * Bundles all css to separate file
     */
    new Css({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}

const server = merge(universal, {

  /**
   * Name and mode is required for webpack to determine which mode to use
   */
  name: 'server',
  target: 'node',

  entry: './src/server',

  output: {
    path: path.resolve(__dirname, './build'),
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

  entry: {
    client: [
      '@babel/polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/client.js',
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = [server, client]
