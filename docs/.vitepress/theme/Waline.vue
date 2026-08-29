<template>
  <div id="waline"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import '@waline/client/style'
import { init } from '@waline/client'

onMounted(() => {
  init({
    el: '#waline',
    serverURL: 'https://moc-three-lovat.vercel.app',
    lang: 'en-US',
    dark: 'html.dark',
    meta: ['nick', 'mail'],

    locale: {
      placeholder:
      'Share a memory, a favorite moment, or your best wishes.',
      comment: 'Memories',
      sofa: 'No memories yet',
      submit: 'Share a Memory',
      nick: 'Name (Optional)',
      mail: 'Email (Optional)',
      optional: 'Optional'
}
  })
})
</script>