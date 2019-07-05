const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Blog',
    titleTemplate: 'Abdiel Martinez | %s',
    meta: [
      { charset: 'utf-8' },
      { name   : 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid    : 'description', name: 'description', content: pkg.description },
      // Opengraph -facebook
      {hid:'ogTitle', property: 'og:title', content: 'Abdiel Martinez | Blog'},
      {hid:'ogDescription', property: 'og:description', content: 'Mi blog personal y portafolio'},
      {hid:'ogUrl', property: 'og:url', content: 'http://www.abdielmartinez.com'},
      {hid:'ogImg', property: 'og:image', content: 'http://www.abdielmartinez.com/perfil.jpg'},
      {property: 'og:site_name', content: 'Abdiel Martinez'},
      {property: 'og:type', content: 'website'},
      {property: 'og:locale', content: 'es_ES' },
      
      // Twitter card
      {hid:'twUrl', name: 'twitter:site', content: 'http://www.abdielmartinez.com'},
      {hid:'twTitle', name: 'twitter:title', content: 'Abdiel Martinez | Blog'},
      {hid:'twDescription', name: 'twitter:description', content: 'Mi blog personal y portafolio'},
      {hid:'twImg', name: 'twitter:image:src', content: 'http://www.abdielmartinez.com/perfil.jpg'},
      {name: 'twitter:card', content: 'summary'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.7.2/css/all.css", integrity:"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr", crossorigin:"anonymous"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00A6BE' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/globals.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/directivas.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', { id: 'UA-138699529-1', dev: false }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // console.log('config :', config.module.rules
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      });
    }
  }
}
