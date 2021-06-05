require('dotenv').config()
const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  srcDir: __dirname,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'laravel-nuxt-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // hooks: {
  //   generate:{
  //     dir: 'public/_nuxt',
  //     done(generator){
  //       // Copy dist files to public/_nuxt
  //       if (generator.nuxt.options.dev === false && generator.nuxt.options.mode === 'spa') {
  //         const publicDir = join(generator.nuxt.options.rootDir, 'public', '_nuxt')
  //         removeSync(publicDir) //Clear content from previous builds
  //         copySync(join(generator.nuxt.options.generate.dir, '_nuxt'), publicDir)
  //         copySync(join(generator.nuxt.options.generate.dir, '200.html'), join(publicDir, 'index.html'))
  //         removeSync(generator.nuxt.options.generate.dir) //Delete 'Dist' folder from Laravel root
  //       }
  //       console.log("After generate dist folder");
  //     }
  //   }
  // }

}
