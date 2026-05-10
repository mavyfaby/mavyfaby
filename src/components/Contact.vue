<script setup lang="ts">
import { profile } from '@/data/portfolio'
import Button from './ui/Button.vue'
</script>

<template>
  <section id="contact" class="relative py-24 md:py-32 border-t border-border overflow-hidden">
    <div class="absolute inset-0 grid-bg pointer-events-none opacity-60"></div>
    <div class="relative mx-auto max-w-4xl px-6 text-center" data-sal="zoom-in" data-sal-duration="800">
      <div class="mb-3 flex items-center justify-center gap-3">
        <span class="h-px w-8 bg-foreground"></span>
        <span class="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Contact</span>
        <span class="h-px w-8 bg-foreground"></span>
      </div>
      <h2 class="text-4xl md:text-7xl font-bold tracking-tighter text-balance">
        Let's build something
        <span class="italic font-light text-muted-foreground">remarkable.</span>
      </h2>
      <p class="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-balance">
        Open to collaborations, freelance work, and conversations about engineering, design, and systems.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button :href="`mailto:${profile.email}`" size="lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
          {{ profile.email }}
        </Button>
        <Button :href="profile.socials.linkedin" variant="outline" size="lg">
          LinkedIn
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
        </Button>
        <Button :href="profile.socials.github" variant="ghost" size="lg">
          GitHub
        </Button>
      </div>

      <div class="mt-10 flex items-center justify-center gap-2">
        <a
          v-for="s in [
            { href: profile.socials.github, label: 'GitHub', path: 'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z' },
            { href: profile.socials.linkedin, label: 'LinkedIn', path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z' },
            { href: profile.socials.facebook, label: 'Facebook', path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z' },
            { href: profile.socials.instagram, label: 'Instagram', path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.55-.79.31-1.46.72-2.13 1.39A5.9 5.9 0 0 0 .62 4.14C.33 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.55 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.29 1.63.49 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.29-.76.49-1.63.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.55-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.62C19.1.33 18.23.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z' },
            { href: profile.socials.twitter, label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z' },
            { href: profile.socials.stackoverflow, label: 'Stack Overflow', path: 'M17.36 20.2v-5.38h1.79V22H3v-7.18h1.79v5.38h12.57zM6.77 14.32l8.78 1.83.37-1.76-8.79-1.83-.36 1.76zm1.16-4.21l8.14 3.78.76-1.62-8.14-3.81-.76 1.65zm2.26-4.04l6.88 5.74 1.15-1.36-6.88-5.74-1.15 1.36zm4.45-4.21l-1.43 1.05 5.34 7.18 1.43-1.05L14.64 1.86zM5.65 18.32h8.96v-1.79H5.65v1.79z' },
          ]"
          :key="s.label"
          :href="s.href"
          target="_blank"
          rel="noreferrer"
          :aria-label="s.label"
          :title="s.label"
          class="grid place-items-center w-11 h-11 rounded-full border border-border bg-card hover:bg-foreground hover:text-background hover:border-foreground hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path :d="s.path" /></svg>
        </a>
      </div>
    </div>
  </section>
</template>
