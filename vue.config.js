const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      // iview使用less时配置
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack(config) {
    // 解决iview在IE浏览器下报空白字符错误
    config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
      .loader('babel-loader')
      .end(),
    config.resolve.alias
      .set('api', resolve('src/api'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
  }
}