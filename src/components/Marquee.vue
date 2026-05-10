<script setup lang="ts">
const items = [
  'Rust', 'Go', 'TypeScript', 'Vue', 'Nuxt', 'Astro', 'Bun', 'Flutter',
  'PostgreSQL', 'Tailwind', 'Three.js', 'PyTorch', 'Java', 'Kotlin', 'Dart',
]
</script>

<template>
  <div class="relative border-y border-border bg-background overflow-hidden">
    <div class="flex marquee py-6 whitespace-nowrap">
      <div v-for="dup in 2" :key="dup" class="flex items-center shrink-0">
        <template v-for="item in items" :key="dup + item">
          <span class="px-8 text-3xl md:text-5xl font-bold tracking-tight text-foreground/90">{{ item }}</span>
          <span class="text-foreground/30 text-3xl md:text-5xl">✦</span>
        </template>
      </div>
    </div>
  </div>
</template>
