<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'outline' | 'solid'
}
const props = withDefaults(defineProps<Props>(), { variant: 'default' })

const classes = computed(() =>
  cn(
    'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border',
    {
      default: 'bg-secondary text-secondary-foreground border-transparent',
      outline: 'border-border bg-transparent text-foreground',
      solid: 'bg-foreground text-background border-transparent',
    }[props.variant],
  ),
)
</script>

<template>
  <span :class="classes"><slot /></span>
</template>
