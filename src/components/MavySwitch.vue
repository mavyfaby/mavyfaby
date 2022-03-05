<template>
  <div>
      <label for="toggle-example-checked" class="flex items-center cursor-pointer relative">
          <input type="checkbox" id="toggle-example-checked" @change="emit('update:modelValue', $event.target.checked)" class="sr-only" :checked="modelValue" />
          <div class="toggle-bg border-2 border-slate-200 dark:border-blue-200 h-6 w-11 rounded-full"></div>
          <span class="ml-3 text-slate-900 text-sm font-medium select-none dark:text-blue-200">{{ name }}</span>
      </label>
  </div>
</template>

<script setup>
const props = defineProps(["modelValue", "name"]);
const emit = defineEmits(["update:modelValue"]);
</script>