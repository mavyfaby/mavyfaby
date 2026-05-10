<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  as?: string
  href?: string
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
})

const tag = computed(() => props.as ?? (props.href ? 'a' : 'button'))

const classes = computed(() =>
  cn(
    'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
    {
      default: 'bg-foreground text-background hover:bg-foreground/90 shadow-sm',
      outline: 'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    }[props.variant],
    {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
      icon: 'h-10 w-10',
    }[props.size],
  ),
)
</script>

<template>
  <component :is="tag" :href="href" :class="classes">
    <slot />
  </component>
</template>
