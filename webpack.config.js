const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const Css = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { isDevelop, isTesting } = require('./lib/Stage')
const Loadable = require('@loadable/webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Clean = require('clean-webpack-plugin')
const Copy = require('copy-webpack-plugin')

const universal = {
  devtool: false,
  mode: isDevelop ? 'development' : 'production',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      lib: path.resolve(__dirname, './lib'),
      src: path.resolve(__dirname, './src'),
      api: path.resolve(__dirname, './src/api'),
      assets: path.resolve(__dirname, './src/assets'),
      constants: path.resolve(__dirname, './src/constants'),
      components: path.resolve(__dirname, './src/components'),
      containers: path.resolve(__dirname, './src/containers'),
      services: path.resolve(__dirname, './src/services'),
      shapes: path.resolve(__dirname, './src/shapes'),
      utils: path.resolve(__dirname, './src/utils'),
    }
  },
  context: __dirname,
  performance: {
    maxEntrypointSize: 500000,
    hints: false,
  },
  optimization: {
    namedModules: true,
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, sourceMap: true }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
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
    ],
  },
  plugins: [
    new Css({
      filename: isDevelop ? 'styles/[name].css' : 'styles/[name].[contenthash].css',
      chunkFilename: isDevelop ? '[id].css' : '[id].[contenthash].css',
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
  module: {
    rules: [
      { test: /\.css$/, loader: 'ignore-loader' },
      { test: /\.(jpe?g|png|gif|ico)$/i, loader: 'ignore-loader' }
    ]
  },
  /**
   * LimitChunkCountPlugin is required.
   * Without it dynamic imports would also split server build
   */
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ],
})

const client = merge(universal, {
  name: 'client',
  target: 'web',
  entry: {
    client: [
      '@babel/polyfill',
      ...(isDevelop ? ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'] : []),
      './src/client.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist/public'),
    publicPath: '/',
    filename: isDevelop ? `[name].js` : `[name].[hash:3].js`,
  },
  module: {
    rules: [
      { test: /\.css$/, use: [Css.loader, 'css-loader'] },
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
    ]
  },
  plugins: [
    ...(isDevelop ? [new webpack.HotModuleReplacementPlugin()] : []),
    ...(isTesting ? [new BundleAnalyzerPlugin()] : []),
    new Clean('./public', { root: path.resolve(__dirname, './dist') }),
    new Copy([{ from: './src/assets', to: './' }]),
    new Loadable({ writeToDisk: true }),
  ]
})

module.exports = [server, client]
