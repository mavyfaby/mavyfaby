<script setup lang="ts">
defineProps<{ kicker?: string; title: string; description?: string }>()
</script>

<template>
  <div class="mb-12 max-w-3xl">
    <div v-if="kicker" class="mb-3 flex items-center gap-3">
      <span class="h-px w-8 bg-foreground"></span>
      <span class="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">{{ kicker }}</span>
    </div>
    <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-balance">{{ title }}</h2>
    <p v-if="description" class="mt-4 text-muted-foreground text-base md:text-lg text-balance">
      {{ description }}
    </p>
  </div>
</template>
