---
layout: doc
outline: deep
---

# Getting Started cont.

Today, 18 Aug 2026, what a good day for learnign a few more VitePress tricks.

### Step 11 - Adding favicon

Using the same logo for light theme as favicon, as it is an svg file, the code is slightly longer. Not sure why we have to add the `\noc\` base path again in `head` if it's already defined in the `config.mts`.

```ts
head[
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/noc/logo-light.svg'}]
]

```

### Step 11 - Add a footer