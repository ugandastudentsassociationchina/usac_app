const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'USAC | Uganda Students\'s Association in China',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/usac-favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff0000' },

  /*
  ** Global CSS
  */
  css: [
    // node.js module but we specify the pre-processor
    {
      src: 'bulma/bulma.sass',
      lang: 'sass'
    },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/directives.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources'

  ],
  styleResources: {
    scss: [
      './assets/scss/pages/*.scss',
      './assets/scss/components/*.scss',
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
