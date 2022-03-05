<template>
  <section class="flex flex-col justify-center items-center" id="projects">
    <div class="text-center mt-8" id="section-4-heading">
      <div data-depth="0.8" class="mt-36">
        <h2 class="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-200 mb-2" id="section-4-title">Projects</h2>
      </div>
      <div data-depth="0.5" class="text-center max-w-3xl">
        <p class="text-slate-600 text-md md:text-lg dark:text-slate-400 text-center max-w-3xl" id="section-4-subtitle">
          Some of my personal projects I've worked on. Private projects are not included.
        </p>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row p-12 lg:p-24 gap-8 w-full h-full thumbs">

      <div class="w-full h-full flex-1 image-hover-effect thumb-1" id="section-4-image-1">
        <div class="caption">
          <div class="bg-blur"></div>
          <div class="caption-text">
            <h1>Bezier Curves</h1>
            <p>My own implementation of bezier curves.</p>
            <a href="./projects/bezier-curve" target="_blank">Go to project</a>
          </div>
        </div>
      </div>

      <div class="hidden lg:flex flex-col gap-y-8 flex-1">
        <div class="w-full h-full flex-1 image-hover-effect thumb-2">
          <div class="caption">
            <div class="bg-blur"></div>
            <div class="caption-text">
              <h1>Happy Twosday!</h1>
              <p>Celebrating Twosday with Three.js (February 22, 2022).</p>
              <a href="./projects/twosday" target="_blank">Go to project</a>
            </div>
          </div>
        </div>
        <div class="w-full h-full flex-1 image-hover-effect thumb-3">
          <div class="caption">
            <div class="bg-blur"></div>
            <div class="caption-text">
              <h1>Steering Vehicle</h1>
              <p>A steerable triangle with joystick.</p>
              <a href="./projects/steering-vehicle" target="_blank">Go to project</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Small screen -->
      <div class="block lg:hidden w-full h-full flex-1 image-hover-effect thumb-2">
        <div class="caption">
          <div class="bg-blur"></div>
          <div class="caption-text">
            <h1>Happy Twosday!</h1>
            <p>Celebrating Twosday with Three.js (February 26, 2022).</p>
            <a href="./projects/twosday" target="_blank">Go to project</a>
          </div>
        </div>
      </div>
      <div class="block lg:hidden w-full h-full flex-1 image-hover-effect thumb-3">
        <div class="caption">
          <div class="bg-blur"></div>
          <div class="caption-text">
            <h1>Steering Vehicle</h1>
            <p>A steerable triangle with joystick.</p>
            <a href="./projects/steering-vehicle" target="_blank">Go to project</a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Parallax from '../lib/parallax';
import gsap from "gsap";
import { isTouchscreen } from '../utils';

onMounted(() => {
  if (!isTouchscreen()) {
    new Parallax(document.getElementById("section-4-heading"));
  }

  setTimeout(() => {
    gsap.from("#section-4-title", {
       duration: 1,
       x: -300,
       opacity: 0,
       ease: "power3.out",
       scrollTrigger: {
         trigger: "#section-4-title",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
     });

    gsap.from("#section-4-subtitle", {
       duration: 1,
       x: 300,
       opacity: 0,
       ease: "power3.out",
       scrollTrigger: {
         trigger: "#section-4-subtitle",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
     });

     gsap.from(".thumb-1", {
       duration: 0.25,
       opacity: 0,
       left: -400,
       ease: "none",
       scrollTrigger: {
         trigger: ".thumb-1",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
     });

     gsap.from(".thumb-2, .thumb-3", {
       duration: 0.25,
       opacity: 0,
       left: 400,
       ease: "none",
       scrollTrigger: {
         trigger: ".thumb-3",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
     });
  }, 0);
});
</script>

<style lang="scss" scoped>
.image-hover-effect {
  @apply p-0 m-0 relative overflow-hidden rounded-xl transition-all duration-[400ms] ease-in-out shadow-2xl bg-cover bg-center grayscale dark:grayscale-0;

  .caption {
    @apply absolute w-full h-full transition-all duration-500 ease-in-out;
  }

  .bg-blur {
    @apply z-0 absolute w-full h-full bg-slate-100/10 dark:bg-slate-900/50 transition-all duration-500 ease-in-out;
  }

  .caption-text {
    @apply z-10 flex justify-center items-center flex-col -mt-11 w-full h-full text-center opacity-0 transition-all duration-500 ease-in-out scale-50;

    h1 {
      @apply text-slate-200 text-lg md:text-2xl font-extrabold mb-2 z-20;
    }

    p {
      @apply text-slate-300 text-xs md:text-lg mb-4;
    }

    a {
      @apply bg-slate-200 text-slate-900 rounded-full px-4 py-2 font-extrabold text-sm transition-all duration-500 ease-in-out;
    }
  }

  &:hover {
    @apply opacity-100 scale-95 grayscale-0;

    .caption-text {
      @apply opacity-100 scale-100 mt-0;
    }

    .bg-blur {
      @apply dark:bg-slate-900/80;
    }
  }
}

.thumb-1 {
  background-image: url("../assets/img/thumb-1.png");
}

.thumb-2 {
  background-image: url("../assets/img/thumb-2.png");
}

.thumb-3 {
  background-image: url("../assets/img/thumb-3.png");
}
</style>