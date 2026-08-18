<template>
    <div id="waline"></div>
</template>

<script setup>

import { onMounted } from 'vue'
import { init } from '@waline/client'
import '@waline/client/style'

onMounted(() => {
  init({
    el: '#waline',
    serverURL: 'https://bdn007-6fqwhqb24-bdn007.vercel.app/',
    lang: 'en',
  })
})
</script>>