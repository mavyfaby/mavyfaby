<script setup lang="ts">
import { certificates } from '@/data/portfolio'
import SectionHeader from './ui/SectionHeader.vue'
import { computed } from 'vue'

const categoryMeta: Record<string, { label: string; icon: string }> = {
  award: {
    label: 'Award',
    icon: 'm12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  platform: {
    label: 'Platform',
    icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01l-3-3',
  },
  coursera: {
    label: 'Coursera',
    icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z',
  },
  foundation: {
    label: 'Foundation',
    icon: 'M12 20h9 M12 4h9 M4 9h16 M4 15h16 M4 4h.01 M4 20h.01',
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

const groups = [
  {
    title: 'Recognition',
    description: 'Awards, grants, academic honors, and competition results.',
    categories: ['award'],
  },
  {
    title: 'Certifications',
    description: 'Provider-issued learning credentials grouped so the section stays easy to scan.',
    categories: ['platform', 'coursera', 'foundation'],
  },
  {
    title: 'Built & led',
    description: 'Leadership roles, shipped systems, education, and long-running technical work.',
    categories: ['role', 'shipped', 'education'],
  },
]

const groupedCertificates = computed(() =>
  groups
    .map((group) => ({
      ...group,
      items: certificates.filter((certificate) => group.categories.includes(certificate.category)),
    }))
    .filter((group) => group.items.length),
)
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

      <div class="space-y-8">
        <div
          v-for="(group, groupIndex) in groupedCertificates"
          :key="group.title"
          class="grid lg:grid-cols-12 gap-5 lg:gap-8"
          data-sal="slide-up"
          data-sal-duration="600"
          :data-sal-delay="groupIndex * 100"
        >
          <div class="lg:col-span-3">
            <div class="lg:sticky lg:top-24">
              <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {{ group.title }}
              </h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                {{ group.description }}
              </p>
            </div>
          </div>
          <div class="lg:col-span-9 grid md:grid-cols-2 gap-3">
            <div
              v-for="(c, i) in group.items"
              :key="`${group.title}-${c.title}`"
              class="border border-border rounded-md p-4 bg-card hover:border-foreground/40 transition-colors"
              data-sal="slide-up"
              data-sal-duration="600"
              :data-sal-delay="(i % 4) * 60"
            >
              <div class="flex items-start justify-between gap-3 mb-3">
                <span
                  class="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="shrink-0"
                  >
                    <path :d="categoryMeta[c.category]?.icon || categoryMeta.award.icon" />
                  </svg>
                  {{ categoryMeta[c.category]?.label || 'Milestone' }}
                </span>
                <span class="text-xs font-mono text-muted-foreground shrink-0">{{ c.year }}</span>
              </div>
              <h4 class="font-semibold leading-snug mb-1.5">{{ c.title }}</h4>
              <p class="text-sm font-medium text-foreground/80 mb-2">{{ c.issuer }}</p>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ c.description }}</p>
              <a
                v-if="c.credentialUrl"
                :href="c.credentialUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-center gap-1.5 mt-4 rounded-md border border-foreground bg-foreground px-3 py-2 text-xs font-semibold text-background shadow-sm transition-colors hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Show credentials
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
