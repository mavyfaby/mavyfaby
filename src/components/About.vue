<script setup lang="ts">
import { profile, experience } from '@/data/portfolio'
import SectionHeader from './ui/SectionHeader.vue'
import Card from './ui/Card.vue'
</script>

<template>
  <section id="about" class="relative py-24 md:py-32 border-t border-border">
    <div class="mx-auto max-w-7xl px-6">
      <div data-sal="fade" data-sal-duration="700">
        <SectionHeader kicker="About" title="Building things that are fast, secure, and well-crafted." />
      </div>
      <div class="grid lg:grid-cols-5 gap-8 items-start">
        <div class="lg:col-span-3 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground" data-sal="slide-right" data-sal-duration="800">
          <p>{{ profile.longBio }}</p>
          <p>
            I work across the stack — from low-level systems in <span class="text-foreground font-medium">Rust</span>
            and <span class="text-foreground font-medium">Go</span>, to mobile in
            <span class="text-foreground font-medium">Flutter</span>, to polished web experiences with
            <span class="text-foreground font-medium">Vue</span>,
            <span class="text-foreground font-medium">Nuxt</span>, and
            <span class="text-foreground font-medium">Astro</span>. I care about performance budgets,
            clean architecture, and design that respects the user.
          </p>
          <div class="grid sm:grid-cols-2 gap-3 pt-2">
            <div
              v-for="trait in [
                'Performance-first',
                'Security-driven',
                'Systems thinker',
                'Design-minded',
              ]"
              :key="trait"
              class="flex items-center gap-3 p-3 border border-border rounded-md bg-card"
            >
              <span class="grid place-items-center w-8 h-8 rounded bg-foreground text-background text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m5 12 5 5 9-9"/></svg>
              </span>
              <span class="text-foreground text-sm font-medium">{{ trait }}</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2" data-sal="slide-left" data-sal-duration="800">
          <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Experience
          </h3>
          <div class="space-y-3">
            <Card v-for="(e, i) in experience" :key="i" class="p-5" data-sal="slide-up" data-sal-duration="600" :data-sal-delay="i * 100">
              <div class="flex items-start justify-between gap-4 mb-1.5">
                <h4 class="font-semibold">{{ e.role }}</h4>
                <span class="text-xs font-mono text-muted-foreground shrink-0">{{ e.period }}</span>
              </div>
              <p class="text-sm text-foreground/80 mb-2">{{ e.company }}</p>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ e.description }}</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
