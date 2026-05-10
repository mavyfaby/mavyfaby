<script setup lang="ts">
import { cn, type ClassValue } from '@/lib/utils'
defineProps<{ class?: ClassValue; hover?: boolean }>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:shadow-lg hover:border-foreground/30',
        $props.class,
      )
    "
  >
    <slot />
  </div>
</template>
