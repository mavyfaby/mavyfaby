<script setup lang="ts">
import { certificates } from '@/data/portfolio'
import SectionHeader from './ui/SectionHeader.vue'

const categoryMeta: Record<string, { label: string; icon: string }> = {
  award: {
    label: 'Award',
    icon: 'm12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  cert: {
    label: 'Certification',
    icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01l-3-3',
  },
  role: {
    label: 'Role',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  },
  shipped: {
    label: 'Shipped',
    icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96 12 12.01l8.73-5.05 M12 22.08V12',
  },
  education: {
    label: 'Education',
    icon: 'M22 10v6 M2 10l10-5 10 5-10 5L2 10z M6 12v5c3 3 9 3 12 0v-5',
  },
}
</script>

<template>
  <section id="certificates" class="relative py-24 md:py-32 border-t border-border">
    <div class="mx-auto max-w-7xl px-6">
      <div data-sal="fade" data-sal-duration="700">
        <SectionHeader
          kicker="Achievements & Education"
          title="Certificates & milestones."
          description="Recognitions, leadership roles, certifications, shipped systems, and formal education that shaped how I build."
        />
      </div>

      <div class="relative">
        <div class="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-border"></div>
        <div class="space-y-5">
          <div
            v-for="(c, i) in certificates"
            :key="i"
            class="relative pl-12 md:pl-16 group"
            data-sal="slide-right"
            data-sal-duration="600"
            :data-sal-delay="(i % 6) * 80"
          >
            <span
              class="absolute left-0 md:left-1 top-2 grid place-items-center w-7 h-7 rounded-full bg-foreground text-background border-2 border-foreground"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path :d="categoryMeta[c.category]?.icon || categoryMeta.award.icon" />
              </svg>
            </span>
            <div
              class="border border-border rounded-xl p-5 md:p-6 bg-card group-hover:border-foreground/40 transition-colors"
            >
              <div class="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-foreground text-background"
                  >
                    {{ categoryMeta[c.category]?.label || 'Milestone' }}
                  </span>
                  <h3 class="text-lg md:text-xl font-semibold">{{ c.title }}</h3>
                </div>
                <span
                  class="text-xs font-mono text-muted-foreground border border-border rounded-full px-2.5 py-0.5"
                >
                  {{ c.year }}
                </span>
              </div>
              <p class="text-sm font-medium text-foreground/80 mb-2">{{ c.issuer }}</p>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ c.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
