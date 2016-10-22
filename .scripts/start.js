'use strict'

var webpack = require('webpack')
var path = require('path')
var WebpackDevServer = require('webpack-dev-server')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const common = require('./config')
const cpath = common.output

var config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/dev-server',
    './src/'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: cpath.PUB_PATH,
    path: cpath.DEV_PATH
  },
  module: {
    loaders: common.loaders('dev')
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: common.alias
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      template: path.resolve(cpath.ROOT_PATH, 'src/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
  ]
}

var compiler = webpack(config)
var server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true,
    inline: true
  }
})
server.listen(8000)
