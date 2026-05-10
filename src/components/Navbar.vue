<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import Logo from './Logo.vue'

const scrolled = ref(false)
const open = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 16)
onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const links = [
  { href: '#about', label: 'About' },
  { href: '#skloud', label: 'SKLoud App' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'backdrop-blur-xl bg-background/70 border-b border-border' : 'bg-transparent',
    ]"
  >
    <div class="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2 font-mono font-bold tracking-tight">
        <Logo :size="32" />
        <span class="hidden sm:inline">Mavyfaby</span>
      </a>
      <nav class="hidden md:flex items-center gap-1">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
          >{{ l.label }}</a
        >
      </nav>
      <div class="hidden md:flex items-center gap-2">
        <ThemeToggle />
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90"
          >Get in touch</a
        >
      </div>
      <div class="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button class="p-2" @click="open = !open" aria-label="Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line v-if="!open" x1="3" y1="6" x2="21" y2="6" />
          <line v-if="!open" x1="3" y1="12" x2="21" y2="12" />
          <line v-if="!open" x1="3" y1="18" x2="21" y2="18" />
          <line v-if="open" x1="6" y1="6" x2="18" y2="18" />
          <line v-if="open" x1="6" y1="18" x2="18" y2="6" />
        </svg>
        </button>
      </div>
    </div>
    <div v-if="open" class="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
      <div class="px-6 py-4 flex flex-col gap-1">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          @click="open = false"
          class="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground"
          >{{ l.label }}</a
        >
      </div>
    </div>
  </header>
</template>
