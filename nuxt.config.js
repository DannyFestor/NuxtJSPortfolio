import path from 'path';

export default async () => {
  return {
    mode: 'universal',
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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,700&family=Roboto+Slab:wght@400;700&display=swap'
        }
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
      '@/assets/scss/style.scss',
      'node_modules/highlight.js/styles/github.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/fontawesome'],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/markdownit'],
    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      extractCSS: true,
      extend(config, ctx) {
        config.module.rules.push({
          test: /\.md$/,
          include: path.resolve(__dirname, 'content'),
          loader: 'frontmatter-markdown-loader'
        });
      }
    },
    generate: {
      routes() {
        const fs = require('fs');
        const path = require('path');
        return fs.readdirSync('./assets/content/blog').map((file) => {
          return {
            route: `/blog/${path.parse(file).name}`, // Return the slug
            payload: require(`./assets/content/blog/${file}`)
          };
        });
      }
    },
    fontawesome: {
      icons: {
        solid: [
          'faHome',
          'faArchway',
          'faBookOpen',
          'faWindowRestore',
          'faPen',
        ],
        brands: [
          'faJsSquare',
          'faHtml5',
          'faCss3Alt',
          'faNode',
          'faVuejs'
        ]
      }
    },
    markdownit: {
      injected: true,
      highlight(str, lang) {
        const hljs = require('highlight.js');
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str, true).value;
          } catch (_) {}
        }
        return '';
      }
    }
  }
}
