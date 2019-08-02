module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  devServer: {
    // setting host should not be necessary
    // host: '0.0.0.0:8080'
    host: '0.0.0.0',
    port: '8080',
    public: 'tchiao.serveo.net',
    disableHostCheck: true,
  },

}
