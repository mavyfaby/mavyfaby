<template>
  <section class="grid grid-rows-1 md:grid-cols-2 justify-center md:justify-between items-center" id="about-me">
      <div class="pointer-events-none hidden md:block" data-depth="1" >
        <img class="h-max pointer-events-none dark:opacity-75" id="section-2-image" :src="image" alt="Hello" />
      </div>
      <div data-depth="0.3">
        <h2 class="font-extrabold text-slate-800 dark:text-blue-300 text-3xl text-center md:text-left md:text-4xl mb-5" id="section-2-title">
          About Me
        </h2>
        <p class="mx-5 md:mx-0 text-md md:text-lg text-slate-600 text-center md:text-left leading-8 md:leading-9 dark:text-slate-400" id="section-2-content">
          Hi, My name is Maverick G. Fabroa, who's currently pursuing a Bachelor's degree in Computer Science at the University of Cebu – Main Campus.
          I reside in Mandaue City, Cebu here at Philippines. I have 3 years of experience in full-stack web development and a knowledge of Ionic Framework and Flutter as mobile app development.
        </p>
      </div>
    </section>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import useEmitter from "../composables/useEmitter";
import { isTheme, isTouchscreen } from "../utils";
import whiteCube from "../assets/img/cube-white.png";
import darkCube from "../assets/img/cube-dark.png";
import gsap from "gsap";
import Parallax from "../lib/parallax";

const image = ref(isTheme("dark") ? darkCube : whiteCube);

onMounted(() => {
  if (!isTouchscreen()) {
    new Parallax(document.getElementById("about-me"));
  }
  
  // Listen on theme change
  useEmitter().on("theme-change", (isDark: boolean) => {
    image.value = isDark ? darkCube : whiteCube;
  });

  setTimeout(() => {
    gsap.from("#section-2-image", {
      duration: 1,
      x: -300,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#section-2-image",
        start: "center 75%",
        end: "center bottom",
        toggleActions: "play none resume reverse",
      }
    });
  
    gsap.from("#section-2-title", {
      duration: 1,
      x: 300,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#section-2-title",
        start: "center 75%",
        end: "bottom bottom",
        toggleActions: "play none resume reverse",
      }
    });
  
    gsap.from("#section-2-content", {
      duration: 1,
      x: 300,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#section-2-content",
        start: "center 75%",
        end: "bottom bottom",
        toggleActions: "play none resume reverse",
      }
    });
  }, 0);
});

</script>