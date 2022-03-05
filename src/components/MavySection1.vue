<template>
  <section class="flex justify-center flex-col" id="section-1">
    <div id="name-container">
      <div data-depth="0.6">
        <h1 class="text-center text-3xl md:text-5xl tracking-wide font-extrabold text-slate-800 dark:text-blue-200 mb-3 lg:mb-5 name">Maverick Fabroa</h1>
      </div>
      <div data-depth="0.4">
        <p class="text-center text-md md:text-xl text-slate-800 dark:text-slate-500 tracking-widest main-title uppercase" id="sub-type"></p>
      </div>
    </div>
    <div id="social-container" class="absolute bottom-20">
      <div data-depth="0.6">
        <div class="my-4 social-container" v-for="media in social" :key="media.name" :id="'social-' + media.name">
          <a :href="media.url" target="_blank">
            <mdicon
              class="hidden md:block dark:text-slate-100 text-slate-600 hover:scale-[1.4] hover:rotate-[-360deg] cursor-pointer transition-all ease-in-out duration-500"
              :class="media.class"
              size="42"
              :name="media.name">
            </mdicon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import { startAnimS1 } from "../utils";

import Typed from "typed.js";
import tippy from "tippy.js";

const social = [
  { name: "github", url: "https://github.com/mavyfaby", class: "hover:text-slate-900" },
  { name: "facebook", url: "https://web.facebook.com/mavyfaby", class: "hover:text-blue-600" },
  { name: "linkedin", url: "https://www.linkedin.com/in/mavyfaby", class: "hover:text-blue-700" },
];

let subTyped = null;

onBeforeMount(() => {
  // Set default props for tooltip
  tippy.setDefaultProps({
    arrow: true,
    placement: "right",
    offset: [0, 30],
    animation: "shift-toward"
  });
});

onMounted(() => {
  // Github tooltip
  tippy("#social-github", {
    allowHTML: true,
    theme: "github",
    content: '<span>Github Account <span class="text-slate-400 dark:text-slate-500">&lt;mavyfaby&gt;</span></span>'
  });

  // Facebook tooltip
  tippy("#social-facebook", {
    allowHTML: true,
    theme: "facebook",
    content: '<span>Facebook Account <span class="text-slate-400 dark:text-slate-500">&lt;mavyfaby&gt;</span></span>'
  });

  // LinkedIn tooltip
  tippy("#social-linkedin", {
    allowHTML: true,
    theme: "linkedin",
    content: '<span>LinkedIn Account <span class="text-slate-400 dark:text-slate-500">&lt;mavyfaby&gt;</span></span>'
  });

  // Start section 1 animation
  startAnimS1((cb) => {
    // If has sub-typed, destroy it
    if (subTyped) {
      subTyped.destroy();
    }

    // Flag for social icons animation
    let isAnimIcons = false;

    // Animate subtitle
    subTyped = new Typed("#sub-type", {
      strings: ["FULL-STACK DEVELOPER^2000", "UI/UX DESIGNER^5000"],
      typeSpeed: 75,
      backSpeed: 50,
      loop: true,
      onTypingPaused() {
        if (!isAnimIcons) {
          if (typeof cb === "function") {
            cb();
          }

          isAnimIcons = true;
        }
      },
      showCursor: false
    });
  });
});
</script>

<style scoped>
#social-container {
  pointer-events: all !important;
}
</style>