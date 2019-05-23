const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const Css = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { isProd, isDevelop } = require('./lib/Stage')
const Loadable = require('@loadable/webpack-plugin')

const universal = {
  devtool: 'source-map',

  mode: isProd ? 'production' : 'development',

  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, './src'),
      api: path.resolve(__dirname, './src/api'),
      assets: path.resolve(__dirname, './src/assets'),
      constants: path.resolve(__dirname, './src/constants'),
      components: path.resolve(__dirname, './src/components'),
      containers: path.resolve(__dirname, './src/containers'),
      services: path.resolve(__dirname, './src/services'),
      shapes: path.resolve(__dirname, './src/shapes'),
      utils: path.resolve(__dirname, './src/utils')
    }
  },

  context: __dirname,

  performance: {
    maxEntrypointSize: 500000,
    hints: false,
  },

  /**
   * TerserPlugin. A better minimizer that supports ES6
   */
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
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

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ]
}

const server = merge(universal, {
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
  name: 'client',

  target: 'web',

  entry: {
    client: isDevelop ? [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/client.js',
    ] : [
      './src/client.js',
    ],
  },

  output: {
    path: path.resolve(__dirname, './dist/public'),
    publicPath: '/',
    filename: `client.js`,
  },

  plugins: [
    ...(isDevelop ? [new webpack.HotModuleReplacementPlugin()] : []),

    /**
     * Places loadable stats to public folder. So it would know what chunks to use
     */
    new Loadable({ writeToDisk: true })
  ]
})

module.exports = [server, client]