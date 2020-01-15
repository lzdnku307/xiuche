
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const THEME_URL = path.join(__dirname, './src/assets/css/theme/index.less');

export default {
  srcDir: 'src/',
  mode: 'spa',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    isDebug:process.env.APP_DEBUG,
    test_token:process.env.TEST_TOKEN
  },
  server: {
    host: '0.0.0.0', // default: localhost
  },
  router: {
    mode: 'hash',
    middleware: ['route', 'breadcrumb'],
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '融印投资',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // 'vant/lib/index.css',
    { src: '~assets/css/common.scss', lang: 'scss'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/adapt',
    '@/plugins/vant',
    '@/plugins/dateFormat',
    '@/plugins/filters',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/dotenv'],
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'https://127.0.0.1',
      secure: false
    }
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath:'https://127.0.0.1',
    transpile: [/^vant/],
    babel: {
      "plugins": [
        ['import', {
          libraryName: 'vant',
          libraryDirectory: 'es',
          // 指定样式路径
          style: name => `${name}/style/less`
        }, 'vant']
      ]
    },
    postcss: {
      plugins: [
        autoprefixer(),
        pxtorem({
          rootValue: 37.5,
          propList: ['*']
        })
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      const LESS_LOADER = {
        loader: 'less-loader',
        options: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            'hack': `true; @import "${THEME_URL}";`
          }
        }
      }
      config.module.rules.forEach(rule => {
        console.log(rule.test.toString())
        if (rule.test.toString().indexOf('/\\.less$/') !== -1) {
          // oneOf 第一个是vue中的style的模块配置，第二个use才是外部less的配置
          rule.oneOf[1].use.push(LESS_LOADER)
        }
      })
    }
  }
}
