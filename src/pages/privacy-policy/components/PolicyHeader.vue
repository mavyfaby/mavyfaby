<template>
  <a :href="'#' + props.id" class="flex items-center mb-5">
    <LinkIcon class="link-icon" />
    <h1 :id="props.id">
      <slot></slot>
    </h1>
  </a>
</template>

<script setup>
import LinkIcon from "@heroicons/vue/solid/LinkIcon";

const props = defineProps({
  id: {
    type: String,
    required: true,
    default: '#'
  }
});
</script>

<style scoped>
h1 {
  @apply text-2xl font-bold text-slate-200;
}

a:hover .link-icon {
  @apply opacity-100 scale-100;
}

.link-icon {
  @apply w-6 h-6 absolute -translate-x-10 text-slate-400 transition-all duration-200 scale-0 ease-in-out opacity-0;
}
</style>