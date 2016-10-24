'use strict'

var path = require('path')
var webpack = require('webpack')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./config')
const cpath = common.output


var compiler = webpack({
   entry: [
    './src/'
  ],
  output: {
    filename: common.assetPath('js/bundle.js'),
    path: cpath.PROD_PATH
  },
  module: {
    loaders: common.loaders('prod')
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: common.alias
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      template: path.resolve(cpath.CODE_PATH, 'index.html'),
      filename: cpath.INDEX_PATH,
      inject: 'body'
    }),
    new ExtractTextPlugin(common.assetPath('css/[name].css'))
  ]
})


compiler.run(function (err, stats) {
  if (err) {
    console.log(err)
  } else {

    console.log('ok')
  }
})
