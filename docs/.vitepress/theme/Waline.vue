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
  })
})
</script>