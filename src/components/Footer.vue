<script setup lang="ts">
import { profile } from '@/data/portfolio'
import Logo from './Logo.vue'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border">
    <div class="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div class="flex items-center gap-2 font-mono">
        <Logo :size="28" />
        <span>© {{ year }} {{ profile.name }}</span>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs">
        <a :href="profile.socials.github" target="_blank" class="hover:text-foreground transition-colors">GitHub</a>
        <a :href="profile.socials.linkedin" target="_blank" class="hover:text-foreground transition-colors">LinkedIn</a>
        <a :href="profile.socials.twitter" target="_blank" class="hover:text-foreground transition-colors">Twitter</a>
        <a :href="profile.socials.facebook" target="_blank" class="hover:text-foreground transition-colors">Facebook</a>
        <a :href="profile.socials.instagram" target="_blank" class="hover:text-foreground transition-colors">Instagram</a>
        <a :href="profile.socials.stackoverflow" target="_blank" class="hover:text-foreground transition-colors">Stack Overflow</a>
        <a :href="`mailto:${profile.email}`" class="hover:text-foreground transition-colors">Email</a>
      </div>
      <div class="font-mono text-xs text-center">
        <span>Built in Cebu, Philippines.</span>
      </div>
    </div>
  </footer>
</template>
