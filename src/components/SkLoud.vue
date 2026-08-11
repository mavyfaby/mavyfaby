<script setup lang="ts">
import { skloud } from '@/data/portfolio'
import SectionHeader from './ui/SectionHeader.vue'
import Card from './ui/Card.vue'
import Badge from './ui/Badge.vue'
import Button from './ui/Button.vue'
import SkLoudLogo from './SkLoudLogo.vue'

const icons: Record<string, string> = {
  award:
    'M12 2 14.5 9 22 9.27 16.18 14.14 18 22 12 17.77 6 22 7.82 14.14 2 9.27 9.5 9 12 2z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  cpu: 'M4 4h16v16H4z M9 1v3 M15 1v3 M9 20v3 M15 20v3 M1 9h3 M1 15h3 M20 9h3 M20 15h3 M9 9h6v6H9z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
}
</script>

<template>
  <section
    id="skloud"
    class="relative py-24 md:py-32 border-t border-border overflow-hidden noise"
  >
    <div class="absolute inset-0 grid-bg pointer-events-none opacity-50"></div>

    <div class="relative mx-auto max-w-7xl px-6">
      <div class="max-w-3xl mb-12" data-sal="fade" data-sal-duration="800">
        <Badge variant="outline" class="mb-4 font-mono">
          <span class="relative flex h-1.5 w-1.5 mr-0.5">
            <span class="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-70 animate-ping"></span>
            <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground"></span>
          </span>
          Currently building
        </Badge>
        <SectionHeader
          class="!mb-0"
          kicker="SKLoud App"
          :title="skloud.tagline"
        />
      </div>

      <div class="grid lg:grid-cols-5 gap-6 mb-6">
        <Card class="lg:col-span-3 p-8 md:p-10 relative overflow-hidden" data-sal="slide-right" data-sal-duration="800">
          <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-foreground/[0.03] pointer-events-none"></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-6">
              <div class="grid place-items-center w-12 h-12 rounded-lg border border-border bg-background text-foreground">
                <SkLoudLogo :size="36" />
              </div>
              <div>
                <h3 class="font-bold text-xl">{{ skloud.name }}</h3>
                <p class="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Civic-Tech Platform
                </p>
              </div>
            </div>
            <p class="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              {{ skloud.description }}
            </p>

            <div class="border-l-2 border-foreground pl-4 py-1 mb-6">
              <p class="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1">My Role</p>
              <p class="font-semibold">{{ skloud.role }}</p>
            </div>

            <ul class="space-y-2.5 mb-6">
              <li
                v-for="(point, i) in skloud.myRole"
                :key="i"
                class="flex items-start gap-3 text-sm leading-relaxed"
              >
                <span class="grid place-items-center w-5 h-5 mt-0.5 rounded-full bg-foreground text-background shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m5 12 5 5 9-9"/></svg>
                </span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-3">
              <Button href="https://skloud.app" size="md">
                Visit SKLoud
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </Button>
              <Badge variant="outline" class="font-mono">DOST-PCIEERD 2025</Badge>
            </div>
          </div>
        </Card>

        <Card
          class="lg:col-span-2 p-8 md:p-10 relative overflow-hidden"
          data-sal="slide-left" data-sal-duration="800"
        >
          <div class="relative h-full flex flex-col">
            <p class="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Research
            </p>
            <h4 class="text-2xl font-semibold tracking-tight mb-2">SKLoud Aurora</h4>
            <p class="text-sm text-muted-foreground leading-relaxed mb-6">
              A financial transparency platform for SK units, built on the SKLoud Blockchain Network.
            </p>

            <dl class="border-t border-border pt-6 mt-auto space-y-4">
              <div>
                <dt class="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  Funding
                </dt>
                <dd class="text-sm">DOST-PCIEERD research grant, 2025</dd>
              </div>
              <div>
                <dt class="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  My role
                </dt>
                <dd class="text-sm">Lead architect</dd>
              </div>
              <div>
                <dt class="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  Status
                </dt>
                <dd class="text-sm">In active development</dd>
              </div>
            </dl>
          </div>
        </Card>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          v-for="(h, i) in skloud.highlights"
          :key="h.title"
          hover
          class="p-6"
          data-sal="slide-up"
          data-sal-duration="700"
          :data-sal-delay="100 + i * 100"
        >
          <div class="grid place-items-center w-10 h-10 rounded-md bg-foreground text-background mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path :d="icons[h.icon]" />
            </svg>
          </div>
          <h4 class="font-semibold mb-2">{{ h.title }}</h4>
          <p class="text-sm text-muted-foreground leading-relaxed">{{ h.description }}</p>
        </Card>
      </div>
    </div>
  </section>
</template>
