<template>
  <main class="container mx-auto px-5">
    <!-- Topbar -->
    <nav class="fixed top-bar z-50 top-0 left-0 w-full px-2 sm:px-4 pt-2 bg-slate-100/50 backdrop-blur dark:bg-slate-900/50">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex">
          <p class="text-slate-900 font-bold text-xl lg:text-2xl app-bar-title dark:text-slate-200">Mavyfaby</p>
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" class="mobile-menu-btn" aria-controls="mobile-menu-2" aria-expanded="false">
          <MenuIcon class="w-6 h-6" />
        </button>
        <div class="hidden w-full lg:block lg:w-auto shadow-md rounded-lg lg:shadow-none" id="mobile-menu">
          <ul class="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:items-center lg:font-medium">
            <li><a href="#about-me" data-collapse-toggle="mobile-menu">About Me</a></li>
            <li><a href="#technologies" data-collapse-toggle="mobile-menu">Technologies</a></li>
            <li><a href="#projects" data-collapse-toggle="mobile-menu">Projects</a></li>
            <li><a href="#certificates" data-collapse-toggle="mobile-menu">Certificates</a></li>
            <li><a href="#contact" data-collapse-toggle="mobile-menu">Contact</a></li>
            <li class="flex justify-center mt-4 pb-4 lg:mt-0 lg:pb-0">
              <MavySwitch name="Dark mode" v-model="isDarkMode" />
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Mouse Icon -->
    <MavyMouseScroll />

    <!-- Sections -->
    <MavySection1 />
    <MavySection2 />
    <MavySection3 />
    <MavySection4 />
    <MavySection5 />
    <MavySection6 />
  </main>

  <!-- Footer -->
  <MavyFooter />
</template>

<script setup>
import { ref, watch, onMounted, onBeforeMount } from "vue";
import { changeTheme, initTheme, isTheme } from "@/utils";
import MenuIcon from "@heroicons/vue/24/solid/Bars3Icon";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useEmitter from "@/composables/useEmitter";

import MavySwitch from '@/components/MavySwitch.vue';
import MavySection1 from '@/components/MavySection1.vue';
import MavySection2 from '@/components/MavySection2.vue';
import MavySection3 from '@/components/MavySection3.vue';
import MavySection4 from '@/components/MavySection4.vue';
import MavySection5 from '@/components/MavySection5.vue';
import MavySection6 from '@/components/MavySection6.vue';
import MavyFooter from '@/components/MavyFooter.vue';
import MavyMouseScroll from '@/components/MavyMouseScroll.vue';

gsap.registerPlugin(ScrollTrigger);

const isDarkMode = ref(isTheme("dark"));

onBeforeMount(() => {
  initTheme();
});

onMounted(() => {
  const emitter = useEmitter();

  watch(isDarkMode, val => {
    changeTheme(val);
    
    // Emit theme change event
    emitter.emit("theme-change", val);
  });
});
</script>

<style scoped>
section:not(.not-full) {
  @apply h-screen;
}

nav a {
  @apply block py-2 pr-4 pl-3 text-slate-700 dark:text-slate-400  rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:text-white font-medium;
}

.mobile-menu-btn {
  @apply inline-flex items-center p-2 my-2 ml-3 text-sm text-slate-500 rounded-lg lg:hidden hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-600;
}
</style>