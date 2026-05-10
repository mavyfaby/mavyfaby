<script setup lang="ts">
import { skills, languages } from '@/data/portfolio'
import SectionHeader from './ui/SectionHeader.vue'
import Card from './ui/Card.vue'

const shadeStyle = (shade: number) => ({
  backgroundColor: `color-mix(in oklch, var(--foreground) ${shade}%, var(--background))`,
})
</script>

<template>
  <section id="skills" class="relative py-24 md:py-32 border-t border-border bg-secondary/30">
    <div class="mx-auto max-w-7xl px-6">
      <div data-sal="fade" data-sal-duration="700">
        <SectionHeader
          kicker="Skills & Languages"
          title="Tools I reach for."
          description="A pragmatic toolkit built up over 7+ years of shipping across systems, web, and mobile."
        />
      </div>

      <div class="grid lg:grid-cols-5 gap-8">
        <Card class="lg:col-span-3 p-6 md:p-8" data-sal="slide-right" data-sal-duration="800">
          <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Technologies
          </h3>
          <div class="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            <div v-for="(s, i) in skills" :key="s.name" data-sal="slide-up" data-sal-duration="500" :data-sal-delay="i * 50">
              <div class="flex items-baseline justify-between mb-1.5">
                <span class="text-sm font-medium">{{ s.name }}</span>
                <span class="text-xs font-mono text-muted-foreground">{{ s.level }}%</span>
              </div>
              <div class="h-1 bg-border rounded-full overflow-hidden">
                <div
                  class="h-full bg-foreground rounded-full transition-all duration-1000"
                  :style="{ width: s.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </Card>

        <Card class="lg:col-span-2 p-6 md:p-8" data-sal="slide-left" data-sal-duration="800">
          <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Languages used
          </h3>
          <div class="flex h-3 rounded-full overflow-hidden mb-6 ring-1 ring-border">
            <div
              v-for="l in languages"
              :key="l.name"
              :style="{ width: l.percent + '%', ...shadeStyle(l.shade) }"
              :title="`${l.name} ${l.percent}%`"
            ></div>
          </div>
          <ul class="space-y-2.5">
            <li v-for="l in languages" :key="l.name" class="flex items-center justify-between text-sm">
              <span class="flex items-center gap-2.5">
                <span class="w-2.5 h-2.5 rounded-sm ring-1 ring-border" :style="shadeStyle(l.shade)"></span>
                <span>{{ l.name }}</span>
              </span>
              <span class="font-mono text-muted-foreground text-xs">{{ l.percent }}%</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
</template>
