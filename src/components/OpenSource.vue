<script setup lang="ts">
import { contributions } from '@/data/portfolio'
import SectionHeader from './ui/SectionHeader.vue'
import Card from './ui/Card.vue'
</script>

<template>
  <section id="open-source" class="relative py-24 md:py-32 border-t border-border bg-secondary/30">
    <div class="mx-auto max-w-7xl px-6">
      <div data-sal="fade" data-sal-duration="700">
        <SectionHeader
          kicker="Open Source"
          title="Contributions to projects I rely on."
          description="Giving back to the communities that build the tools I use every day."
        />
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <a
          v-for="(c, i) in contributions"
          :key="c.name"
          :href="c.url"
          target="_blank"
          rel="noreferrer"
          class="group"
          data-sal="slide-up"
          data-sal-duration="600"
          :data-sal-delay="i * 80"
        >
          <Card hover class="p-6 h-full">
            <div class="flex items-start justify-between mb-4">
              <div class="grid place-items-center w-10 h-10 rounded-md bg-foreground text-background group-hover:scale-110 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </div>
              <span class="text-xs font-mono text-muted-foreground border border-border rounded-full px-2 py-0.5">
                {{ c.role }}
              </span>
            </div>
            <h3 class="font-semibold mb-1.5 font-mono group-hover:text-foreground">{{ c.name }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ c.description }}</p>
          </Card>
        </a>
      </div>
    </div>
  </section>
</template>
