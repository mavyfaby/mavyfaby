<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const theme = ref<'dark' | 'light'>('dark')

function apply(t: 'dark' | 'light') {
  document.documentElement.classList.toggle('dark', t === 'dark')
  document.documentElement.style.colorScheme = t
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', t === 'dark' ? '#09090b' : '#ffffff')
}

onMounted(() => {
  const saved = (localStorage.getItem('theme') as 'dark' | 'light' | null)
  theme.value = saved === 'light' ? 'light' : 'dark'
  apply(theme.value)
})

watch(theme, (t) => {
  apply(t)
  localStorage.setItem('theme', t)
})

const toggle = () => (theme.value = theme.value === 'dark' ? 'light' : 'dark')
</script>

<template>
  <button
    @click="toggle"
    :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
    :title="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
    class="grid place-items-center w-9 h-9 rounded-md border border-border bg-card hover:bg-accent transition-colors relative overflow-hidden"
  >
    <Transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300 absolute"
      enter-from-class="opacity-0 scale-50 rotate-90"
      leave-to-class="opacity-0 scale-50 -rotate-90"
    >
      <svg v-if="theme === 'dark'" key="moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg v-else key="sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </Transition>
  </button>
</template>
