import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "bdn007",
  description: "Sailing to the sunset",
  base: '/noc/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //logo: '/logo.svg',
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Notes', link: '/notes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bdn007/noc' }
    ]
  }
})
