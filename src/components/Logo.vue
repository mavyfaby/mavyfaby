<script setup lang="ts">
import { useId } from 'vue'

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 32 },
)

const gid = useId()
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Maverick Fabroa"
    class="shrink-0 logo-mark"
  >
    <defs>
      <linearGradient :id="`a-${gid}`" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="var(--foreground)" stop-opacity="1" />
        <stop offset="100%" stop-color="var(--foreground)" stop-opacity="0.4" />
      </linearGradient>
      <linearGradient :id="`b-${gid}`" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--foreground)" stop-opacity="0.85" />
        <stop offset="100%" stop-color="var(--foreground)" stop-opacity="0.15" />
      </linearGradient>
    </defs>

    <!--
      Abstract: a soft squircle with a diagonal slice.
      Two halves of a rounded square split at an angle, each with its own gradient.
      Reads as: yin-yang, folded paper, infinity, or just a confident abstract mark.
    -->
    <g>
      <!-- Top-left half (slightly bigger, more solid) -->
      <path
        d="
          M 22 4
          C 10 4 4 10 4 22
          L 4 42
          C 4 50 7 55 12 58
          L 56 14
          C 53 8 48 4 42 4
          Z
        "
        :fill="`url(#a-${gid})`"
      />
      <!-- Bottom-right half (counter gradient) -->
      <path
        d="
          M 12 58
          C 16 61 21 60 26 60
          L 42 60
          C 54 60 60 54 60 42
          L 60 22
          C 60 18 58 16 56 14
          Z
        "
        :fill="`url(#b-${gid})`"
      />
      <!-- Razor-thin highlight along the diagonal split -->
      <line
        x1="12"
        y1="58"
        x2="56"
        y2="14"
        stroke="var(--background)"
        stroke-width="1"
        stroke-linecap="round"
        opacity="0.6"
      />
    </g>
  </svg>
</template>

<style scoped>
.logo-mark {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.logo-mark:hover {
  transform: rotate(45deg);
}
</style>
