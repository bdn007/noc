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

It's quite straight forward to add a footer. However, it only works on the Home page as all other pages have SideBar.

::: warning
Note that footer will not be displayed when the SideBar is visible.
:::


### Step 12 - Add Waline

::: tip Memory Wall

Thank you for visiting my Memory Wall.

As I prepare to begin the next chapter of life, I would be grateful if you could share a memory, a lesson, a story, or a few words of farewell. The friendships, experiences, and moments we've shared over the years have meant more to me than I can express.

Your message will become part of a collection of memories that I will cherish for years to come.

Every friendship leaves a lasting mark. If we've worked together, crossed paths, or shared a memorable moment, I'd be delighted if you left a message, shared a memory, or simply said hello.

Thank you for being part of my journey.
:::

::: warning **Privacy note:** 
Feel free to post anonymously if you prefer. *Nickname, email address, and website* are all optional.
:::

<Waline />
