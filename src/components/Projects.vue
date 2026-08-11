<script setup lang="ts">
import { projects, profile } from '@/data/portfolio'
import SectionHeader from './ui/SectionHeader.vue'
import Card from './ui/Card.vue'
import Badge from './ui/Badge.vue'
import { computed, ref } from 'vue'

const filter = ref<'featured' | 'all'>('featured')
const visible = computed(() => (filter.value === 'featured' ? projects.filter((p) => p.featured) : projects))

const langShade: Record<string, number> = {
  TypeScript: 100,
  Vue: 85,
  Dart: 70,
  Go: 60,
  Rust: 50,
  Java: 80,
  HTML: 60,
  'Jupyter Notebook': 70,
}
const dotStyle = (lang: string) => ({
  backgroundColor: `color-mix(in oklch, var(--foreground) ${langShade[lang] ?? 60}%, var(--background))`,
})
</script>

<template>
  <section id="projects" class="relative py-24 md:py-32 border-t border-border">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex flex-wrap items-end justify-between gap-6 mb-12" data-sal="fade" data-sal-duration="700">
        <SectionHeader
          class="!mb-0"
          kicker="Selected Work"
          title="Projects."
          description="Civic-tech infrastructure at SKLoud, systems libraries, and side experiments."
        />
        <div class="flex gap-1 p-1 border border-border rounded-md bg-card">
          <button
            v-for="f in ['featured', 'all'] as const"
            :key="f"
            @click="filter = f"
            :class="[
              'px-3 py-1.5 text-xs font-medium rounded transition-colors capitalize',
              filter === f ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground',
            ]"
          >
            {{ f }}
          </button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <a
          v-for="(p, i) in visible"
          :key="p.name"
          :href="p.url"
          target="_blank"
          rel="noreferrer"
          class="group"
          data-sal="slide-up"
          data-sal-duration="600"
          :data-sal-delay="(i % 6) * 80"
        >
          <Card
            hover
            :class="[
              'p-6 h-full flex flex-col',
              p.highlight && 'border-foreground/25',
            ]"
          >
            <div class="flex items-start justify-between mb-4">
              <div
                :class="[
                  'grid place-items-center w-10 h-10 rounded-md border border-border bg-secondary transition-colors',
                  'group-hover:bg-foreground group-hover:text-background group-hover:border-foreground',
                ]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div class="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span v-if="p.status === 'in-progress'" class="flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-foreground/30 bg-background text-foreground">
                  <span class="relative flex h-1.5 w-1.5">
                    <span class="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-70 animate-ping"></span>
                    <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground"></span>
                  </span>
                  In Progress
                </span>
                <span v-else-if="p.stars" class="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  {{ p.stars }}
                </span>
                <svg
                  class="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                ><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </div>
            </div>
            <h3 class="font-semibold text-lg mb-1.5 font-mono">{{ p.name }}</h3>
            <p class="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-1">
              {{ p.description }}
            </p>
            <div class="flex items-center justify-between gap-3 pt-3 border-t border-border">
              <span class="flex items-center gap-1.5 text-xs">
                <span class="w-2 h-2 rounded-full ring-1 ring-border" :style="dotStyle(p.language)"></span>
                <span class="text-muted-foreground">{{ p.language }}</span>
              </span>
              <div class="flex flex-wrap gap-1.5 justify-end">
                <Badge v-for="t in p.tags.slice(0, 2)" :key="t" variant="outline" class="!text-[10px] !py-0 font-mono">{{ t }}</Badge>
              </div>
            </div>
          </Card>
        </a>
      </div>

      <div class="mt-12 text-center">
        <a
          :href="profile.socials.github"
          target="_blank"
          class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          See all repositories on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>
