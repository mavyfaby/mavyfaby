<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import sal from 'sal.js'

let instance: ReturnType<typeof sal> | null = null

onMounted(() => {
  instance = sal({
    threshold: 0.1,
    once: false,
    rootMargin: '0% 0% -10% 0%',
  })
})

onBeforeUnmount(() => {
  if (instance && typeof (instance as any).disable === 'function') {
    ;(instance as any).disable()
  }
})
</script>

<template>
  <span class="sr-only" aria-hidden="true"></span>
</template>
