const loaders = [
  {
    test: /\.(js|jsx)$/,
    loaders: ['babel?presets=es2015'],
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loader: 'style!css?modules&localIdentName=[path][name]-[local]_[hash:base64:5]!autoprefixer'
  },
  {
    test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
    loaders: [
      // 小于8KB的图片会自动转成dataUrl
      'url?limit=8192&name=img/[hash:8].[name].[ext]',
      'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
    ]
  },
  {
    test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
    loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
  },
]

module.exports = {
  loaders
}
