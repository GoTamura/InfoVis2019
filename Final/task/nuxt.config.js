const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/InfoVis2019/Final/task/dist/'
  },
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/InfoVis2019/Final/task/dist/favicon.ico' }]
  },
} : {
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  },
}
export default {
  ...routerBase,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
   // script: [
   //   { src: 'http://naohisas.github.io/KVS.js/Build/KVS.min.js' },
   //   { src: 'http://naohisas.github.io/KVS.js/Build/KVS2THREE.min.js'}
   // ],
    //link: [{ rel: 'icon', type: 'image/x-icon', href: '/InfoVis2019/Final/task/dist/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(glsl|frag|vert)$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      })
      config.module.rules.push({
        test: /\.(glsl|frag|vert)$/,
        loader: 'glslify-loader',
        exclude: /node_modules/
      })
    }
  }

}
