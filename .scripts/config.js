'use strict'

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '../')
const CODE_PATH = path.resolve(ROOT_PATH, 'src')

const PUB_PATH = './'
const DEV_PATH = '/'
const BUILD_PATH = './'
const PROD_PATH = path.resolve(ROOT_PATH, 'dist')

const FONT_PATH = path.resolve(BUILD_PATH, 'font')
const IMG_PATH = path.resolve(BUILD_PATH, 'image')
const INDEX_PATH = path.resolve(PROD_PATH, 'index.html')


const jsLoader = {
  test: /\.(js|jsx)$/,
  loaders: ['babel?presets=es2015'],
  exclude: /node_modules/
}

const whichStyleLoader = (state) =>{
  let cssM = 'css?modules&localIdentName=[path][name]-[local]_[hash:base64:5]!autoprefixer'
  return {
    test: /\.css$/,
    loader: (state=='dev' && 'style!'+cssM) || (state=='prod' && ExtractTextPlugin.extract('style', cssM))
  }
}

const imageLoader = {
  test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
  loaders: [
    // 小于8KB的图片会自动转成dataUrl
    'url?limit=8192&name='+ IMG_PATH +'/[hash:8].[name].[ext]',
    'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
  ]
}

const fontLoader = {
  test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
  loader: 'url?limit=10000&name='+ FONT_PATH +'/[hash:8].[name].[ext]'
}



let alias = {
  assets: path.resolve(CODE_PATH, 'assets'),
  utils: path.resolve(CODE_PATH, 'utils'),
  components: path.resolve(CODE_PATH, 'components'),
  modules: path.resolve(CODE_PATH, 'modules')
}

let output = {
  ROOT_PATH,
  CODE_PATH,
  PUB_PATH,
  DEV_PATH,
  PROD_PATH,
  INDEX_PATH
}

module.exports = {
  alias,
  output,
  loaders: (which) => [jsLoader, imageLoader, fontLoader, whichStyleLoader(which)],
  assetPath : (nPath)=> path.posix.join(BUILD_PATH, nPath)
}
