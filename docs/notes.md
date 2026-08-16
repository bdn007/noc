---
outline: deep
---

Today, 16 Aug 2026, I try VitePress again. This time I note down the steps, for my own reference.

### Step 1 - Install Vitepress into a project

```bash
npm add -D vitepress@next
```

### Step 2 - Setup Wizard
```bash
npx vitepress init
```


```markdown
┌  **Welcome to VitePress!**
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  **bdn007**
│
◇  Site description:
│  **Sailing into the sunset**
│
◇  Theme:
│  Default Theme + **customization**
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run `pnpm run docs:dev` and start writing.

```

Note or Info, which one is better?

> [!NOTE]
> I later run `npm run docs:dev` instead of `pnpm run docs:dev`

::: info
I later run `npm run docs:dev` instead of `pnpm run docs:dev`
:::

### Step 3 - Install Vue as Peer Dependency

```bash
npm install vue
```
Verify Vue Installation: success!

```TypeScript{7-8}
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "dependencies": {
    "vue": "^3.5.41"
  }
}
```

### Step 4 - Up and Running

Verify the config file `.vitepress/config.mts`. Note: the file extension is `.mts` `(TypeScript)`, not `js` as per the document. However, the config seems to be ok.

Verify `package.json`, the `scripts' are injected properly.

```TypeScript{2-5}
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "dependencies": {
    "vue": "^3.5.41"
  }
}
```
It's time to run
```bash
npm run docs:dev
```
Visit `http://localhost:5173/` and the site is running

Then I added a file named `notes.md` which is this file. 

### Step 5 - Experimenting with editing the `config.mts`
- `nav` is the bar on top right corner. Added link to this file `Notes `
```TypeScript{3}
nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes' }
    ],

```
- `sidebar` is the Menu on left. So this `Notes` also on the Sidebar. Why not?

```TypeScript{7}
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
```

### Step 6 - Front Matter and Line Highlighting in Code Blocks

The `API Examples` uses this outline, so I try it with this page.

```YAML
---
outline: deep
---
```
The Code Blocks Highlighting is quite a nice feature, why not use it for code blocks in Step 3, 4 and 5.


### Step 7 - Build and Test Locally

1. Run this command to build the docs:

```sh
npm run docs:build
```

2. Once built, preview it locally by running:
```
npm run docs:preview
```

### Step 8 - Setting a Public Base Path

My GitHub repository is: `https://github.com/bdn007/noc`

Hence GitHub Pages site will be: `https://bdn007.github.io/noc/`

```TypeScript{4-7}
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/noc/',

  themeConfig: {
    logo: '/logo.png',

    // other theme settings...
  }
})
```
The logo works but not the base, so I had to comment it out using `//`


### Step 9 - GitHub Actions

Create `.github/workflows/deploy.yml`

::: warning
Make sure the `base` option in your VitePress is properly configured. 

My `base` failed in step 8. What shall I do?
:::

### Step 10 - Create GitHub repo and then push.

After creating a GitHub repo and then push, GitHub Action failed.

::: warning
Error: Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions, or consider exploring the `enablement` parameter for this action.`
:::

Silly me, I change `Settings` of `Pages`, selecting `GitHub Actions` for `Build and Deployment`

New error message: `vitepress` package is not listed in your `package.json`. To fix this, I ran:

```sh
npm install -D vitepress
```

GitHub Actions complete, the site went live at `https://bdn007.github.io/noc/`. However, the format looked wrong. So I reinstated `base` in config file. It looks good, but only Home page.

I realized that I need to rebuild it. And ...

### Success!

Finally, to refresh Moilla Firefox, press `Control - Shift -R`

---
it seems there are a few layouts  
The index has layout: home  
the why has outline: deep  