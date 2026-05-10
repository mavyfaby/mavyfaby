<script setup lang="ts">
import { profile } from '@/data/portfolio'
import ThreeScene from './ThreeScene.vue'
import Button from './ui/Button.vue'
import ClientOnly from './ClientOnly.vue'
import portrait from '@/assets/graduation-pic.jpg'
import SkLoudLogo from './SkLoudLogo.vue'
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden noise">
    <div class="absolute inset-0 grid-bg pointer-events-none"></div>
    <ClientOnly>
      <ThreeScene />
    </ClientOnly>
    <div
      class="absolute inset-0 pointer-events-none bg-linear-to-b from-background/0 via-background/10 to-background/80 dark:via-background/30 dark:to-background"
    ></div>

    <div class="relative mx-auto max-w-7xl px-6 py-32 w-full">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div class="lg:col-span-7 max-w-2xl">
          <a
            href="#skloud"
            class="group inline-flex items-center gap-2 mb-6 pl-1 pr-4 py-1 rounded-full border border-border bg-card hover:border-foreground/40 transition-colors"
          >
            <span class="grid place-items-center w-7 h-7 rounded-full bg-foreground text-background">
              <SkLoudLogo :size="20" />
            </span>
            <span class="grid place-items-center h-6 px-2 rounded-full bg-foreground text-background text-[10px] font-bold tracking-tight whitespace-nowrap">
              CO-FOUNDER · CTO
            </span>
            <span class="text-xs font-medium">SKLoud App</span>
            <span class="hidden sm:inline text-xs font-mono text-muted-foreground">
              · SKLoud Aurora ₱2.9M DOST-PCIEERD Awardee
            </span>
            <svg class="w-3 h-3 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>

          <h1
            class="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-balance"
          >
            Maverick<br />
            <span class="italic font-light text-muted-foreground">Fabroa.</span>
          </h1>

          <p class="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
            {{ profile.bio }}
          </p>

          <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-mono">
            <span class="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ profile.location }}
            </span>
            <span class="opacity-30">/</span>
            <span>{{ profile.title }}</span>
          </div>

          <div class="mt-10 flex flex-wrap gap-3">
            <Button :href="'#projects'" size="lg">
              View my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
            <Button :href="profile.socials.github" variant="outline" size="lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
              GitHub
            </Button>
            <Button :href="profile.socials.linkedin" variant="ghost" size="lg">
              LinkedIn
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </Button>
          </div>

          <div class="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border max-w-2xl">
            <div
              v-for="s in profile.stats"
              :key="s.label"
              class="bg-background p-4 sm:p-5"
            >
              <div class="text-2xl md:text-3xl font-bold tracking-tight">{{ s.value }}</div>
              <div class="text-xs uppercase tracking-wider text-muted-foreground mt-1 font-mono">
                {{ s.label }}
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="relative max-w-sm mx-auto lg:ml-auto portrait-wrap">
            <div
              class="absolute inset-y-0 -left-4 w-px bg-foreground/20 pointer-events-none hidden md:block"
              aria-hidden="true"
            ></div>
            <div
              class="absolute inset-y-0 -right-4 w-px bg-foreground/20 pointer-events-none hidden md:block"
              aria-hidden="true"
            ></div>

            <span
              class="absolute -top-6 left-0 right-0 hidden md:flex items-center justify-between font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground"
              aria-hidden="true"
            >
              <span>◢ N 10°20'</span>
              <span class="opacity-50">— maverick · fabroa —</span>
              <span>E 123°56' ◣</span>
            </span>

            <div
              class="relative aspect-4/5 overflow-hidden bg-card portrait-frame"
            >
              <img
                :src="portrait.src"
                :width="portrait.width"
                :height="portrait.height"
                alt="Maverick Fabroa"
                class="absolute inset-0 w-full h-full object-cover portrait-img"
                fetchpriority="high"
                decoding="async"
              />

              <div
                class="absolute inset-0 pointer-events-none portrait-vignette"
                aria-hidden="true"
              ></div>

              <div
                class="absolute inset-0 pointer-events-none portrait-grain"
                aria-hidden="true"
              ></div>

              <div
                class="absolute inset-0 pointer-events-none mix-blend-screen opacity-30"
                style="background: repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px);"
                aria-hidden="true"
              ></div>

              <span
                class="absolute top-0 left-0 w-6 h-6 border-t border-l border-foreground pointer-events-none"
                aria-hidden="true"
              ></span>
              <span
                class="absolute top-0 right-0 w-6 h-6 border-t border-r border-foreground pointer-events-none"
                aria-hidden="true"
              ></span>
              <span
                class="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-foreground pointer-events-none"
                aria-hidden="true"
              ></span>
              <span
                class="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-foreground pointer-events-none"
                aria-hidden="true"
              ></span>
            </div>

            <div
              class="mt-4 flex items-center justify-between font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
            >
              <span class="flex items-center gap-1.5">
                <span class="relative flex h-1.5 w-1.5">
                  <span class="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-70 animate-ping"></span>
                  <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground"></span>
                </span>
                Currently Available
              </span>
              <span>BS CS · 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground flex flex-col items-center gap-2"
    >
      <span>scroll</span>
      <span class="block w-px h-8 bg-border relative overflow-hidden">
        <span class="absolute inset-x-0 top-0 h-3 bg-foreground animate-bounce"></span>
      </span>
    </div>
  </section>
</template>

<style scoped>
.portrait-frame {
  box-shadow:
    0 0 0 1px var(--border),
    0 30px 80px -20px rgba(0, 0, 0, 0.5);
}

.portrait-img {
  filter: grayscale(100%) contrast(1.08) brightness(0.92);
  transition: filter 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.portrait-wrap:hover .portrait-img {
  filter: grayscale(100%) contrast(1.15) brightness(1);
  transform: scale(1.03);
}

.portrait-vignette {
  background: radial-gradient(
    ellipse at center,
    transparent 55%,
    rgba(0, 0, 0, 0.35) 90%,
    rgba(0, 0, 0, 0.55) 100%
  );
  opacity: 0.8;
}

.portrait-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
  opacity: 0.35;
}
</style>
