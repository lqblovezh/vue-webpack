const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
// const cdnConfig = require('../app.config').cdn

const isDev = process.env.NODE_ENV === 'development'

const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"',
    },
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html'),
  }),
  new VueClientPlugin(),
]

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: {
    index: '/public/index.html',
  },
  proxy: {
    '/api': 'http://127.0.0.1:3333',
    '/user': 'http://127.0.0.1:3333',
  },
  hot: true,
}

let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(styl|stylus)/,
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
    plugins: defaultPluins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ]),
  })
} else {
  config = merge(baseConfig, {
    mode: 'production',
    entry: {
      app: path.join(__dirname, '../client/client-entry.js'),
      vendor: ['vue'],
    },
    output: {
      filename: '[name].[chunkhash:8].js',
      // publicPath: cdnConfig.host
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(styl|stylus)/,
          use: [
            !isDev
              ? {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '/publick/',
                  },
                }
              : 'vue-style-loader',
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
    plugins: defaultPluins.concat([
      new MiniCssExtractPlugin({
        filename: 'styles.[name].css',
      }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      // }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'runtime',
      // }),
      new webpack.NamedChunksPlugin(),
    ]),
  })
}

config.resolve = {
  alias: {
    model: path.join(__dirname, '../client/model/client-model.js'),
  },
}

module.exports = config
