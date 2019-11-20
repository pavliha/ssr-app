const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const Dotenv = require('dotenv-webpack')
const Clean = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { isDevelop, isTesting } = require('./lib/Stage')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LoadableWebpackPlugin = require('@loadable/webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const universal = {
  devtool: false,
  mode: isDevelop ? 'development' : 'production',

  stats: {
    chunks: false, // Makes the build much quieter
    colors: true, // Shows colors in the console
    chunkGroups: false,
    chunkModules: false,
    modules: false,
  },

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
      config: path.resolve(__dirname, './src/config'),
      shapes: path.resolve(__dirname, './src/shapes'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  context: __dirname,
  performance: {
    maxEntrypointSize: 500000,
    hints: false,
  },
  optimization: {
    minimize: false,
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
    new LodashModuleReplacementPlugin({
      shorthands: true,
    }),
  ],
}

const server = merge(universal, {
  name: 'server',
  target: 'node',
  entry: './src/server',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'ignore-loader' },
      { test: /\.(jpe?g|png|gif|ico)$/i, loader: 'ignore-loader' },
      { test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'ignore-loader' },
    ],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ],
})

const client = merge(universal, {
  name: 'client',
  target: 'web',
  entry: {
    client: [
      ...(isDevelop ? ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'] : []),
      './src/client.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist/public'),
    publicPath: '/',
    filename: `[name].[hash:3].js`,
  },
  module: {
    rules: [
      {
        sideEffects: true,
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
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
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new Clean('./public', { root: path.resolve(__dirname, './dist') }),
    new MiniCssExtractPlugin({ filename: '[name].[hash:3].css', chunkFilename: '[id].[hash:3].css' }),
    ...(isDevelop ? [new webpack.HotModuleReplacementPlugin()] : []),
    ...(isTesting ? [new BundleAnalyzerPlugin()] : []),
    new CopyWebpackPlugin([{ from: './src/assets', to: './' }]),
    new LoadableWebpackPlugin({ writeToDisk: true }),
  ],
})

module.exports = [server, client]
