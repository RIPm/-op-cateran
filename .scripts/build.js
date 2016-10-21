'use strict'

var fs = require('fs-extra')
var path = require('path')
var mkdirp = require('mkdirp')
var webpack = require('webpack')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var buildPath = path.join(process.cwd(), 'dist')
var publicPath = path.join(process.cwd(), 'public')

const common = require('./config')

mkdirp.sync(buildPath)

var compiler = webpack({
  entry: [
    './src/'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: './',
    path: './dist/'
  },
  module: {
    loaders: common.loaders
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new ExtractTextPlugin('styles.css', { allChunks: true })
  ]
})

compiler.run(function (err, stats) {
  if (err) {
    console.log(err)
  } else {
    fs.copySync(publicPath, buildPath)
  }
})
