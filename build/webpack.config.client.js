const path = require('path')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const isDev = process.env.NODE_ENV === 'development'
const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  hot: true,
}

let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            'stylus-loader',
          ],
        },
      ],
    },
    devServer,
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoEmitOnErrorsPlugin(),
    ],
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js'),
      // vendor: ['vue'],
    },
    output: {
      filename: '[name].[chunkhash:8].js',
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                },
              },
              'stylus-loader',
            ],
          }),
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: true,
    },
    plugins: [
      new ExtractPlugin('styles.[name].css'),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      // }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'runtime',
      // }),
    ],
  })
}

module.exports = config
