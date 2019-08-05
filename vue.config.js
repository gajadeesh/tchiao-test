const path = require('path');

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  devServer: {
    // setting host should not be necessary
    // host: '0.0.0.0:8080',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
    // public: 'tchiao.serveo.net',
    // disableHostCheck: true,
  },
  // dev: {
  //   proxyTable: {},
  //   //env: require('./dev.env'),
  //   port: 4545,
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',
  //   cssSourceMap: false
  // }
}
