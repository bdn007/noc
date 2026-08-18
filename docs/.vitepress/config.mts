import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "bdn007",
  description: "Sailing to the sunset",
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/gettings-started' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Getting Started', link: '/getting_started' },
          { text: 'Why', link: '/why-bdn007' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bdn007/noc' }
    ]
  }
})
