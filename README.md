
### config

  #vue2.0
  
  #vue-cli3.4.1

### iview config

  #package.json
  "iview": "^3.4.2"
  "less": "^3.10.2",
  "less-loader": "^5.0.0",
  "babel-plugin-import": "^1.11.2"

  #babel.config.js
  plugins: [["import", {
    "libraryName": "iview",
    "libraryDirectory": "src/components"
  }]]

  #vue.config.js
  module.exports = {
    css: {
      loaderOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    chainWebpack(config) {
      config.module
        .rule('iview')
        .test(/iview.src.*?js$/)
        .use('babel')
        .loader('babel-loader')
        .end()
    }
  }

### Vee-validate config
  "vee-validate": "^3.0.3"


### swiper config
  "swiper": "^4.5.0"

### report  -- parsed 159.kb / gzipped 55.98kb


