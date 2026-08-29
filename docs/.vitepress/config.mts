import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "bdn007",
  description: "Sailing into the sunset",
  base: '/noc/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/noc/logo-light.svg' }]

        ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //logo: '/logo.svg',
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    // nav: [
    //  { text: 'Home', link: '/' },
    //  { text: 'Getting Started', link: '/getting_started' }
    // ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'It\'s time', link: '/retire' },
          { text: 'Memory Wall', link: '/memwall' },
          // { text: 'Getting Started', link: '/getting_started' },
          // { text: 'Getting Started continued', link: '/getting_started_cont' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          // { text: 'Why', link: '/why-bdn007' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bdn007/noc' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present bdn007'
    }
  }
})
