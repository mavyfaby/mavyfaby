<template>
  <section class="flex flex-col justify-center items-center not-full mb-10" id="certificates">
    <div class="text-center my-8" id="section-5-heading">
      <div data-depth="0.8" class="mt-36">
        <h2 class="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-200 mb-2" id="section-5-title">Certificates</h2>
      </div>
      <div data-depth="0.5" class="text-center max-w-3xl">
        <p class="text-center max-w-3xl text-slate-600 dark:text-slate-400 text-md md:text-lg" id="section-5-subtitle">
          Completed 13 courses from various top universities all around the world.
        </p>
      </div>
    </div>
    <VuePictureSwipe :options="photoSwipeOptions" :items="courses"></VuePictureSwipe>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import VuePictureSwipe from "vue3-picture-swipe";
import Parallax from "../lib/parallax";
import gsap from "gsap";
import { isTouchscreen } from "../utils";

import mavyCertificate1 from "../assets/img/mavy-certificate-1.png";
import mavyCertificate2 from "../assets/img/mavy-certificate-2.png";
import mavyCertificate3 from "../assets/img/mavy-certificate-3.png";
import mavyCertificate4 from "../assets/img/mavy-certificate-4.png";
import mavyCertificate5 from "../assets/img/mavy-certificate-5.png";
import mavyCertificate6 from "../assets/img/mavy-certificate-6.png";
import mavyCertificate7 from "../assets/img/mavy-certificate-7.png";
import mavyCertificate8 from "../assets/img/mavy-certificate-8.png";
import mavyCertificate9 from "../assets/img/mavy-certificate-9.png";
import mavyCertificate10 from "../assets/img/mavy-certificate-10.png";
import mavyCertificate11 from "../assets/img/mavy-certificate-11.png";
import mavyCertificate12 from "../assets/img/mavy-certificate-12.png";
import mavyCertificate13 from "../assets/img/mavy-certificate-13.png";

const courses = [
  { src: mavyCertificate1, thumbnail: mavyCertificate1, w: 1651, h: 1275, alt: "Java Programming: Solving Problems with Software", },
  { src: mavyCertificate2, thumbnail: mavyCertificate2, w: 1651, h: 1275, alt: "Programming Foundations with JavaScript, HTML, and CSS" },
  { src: mavyCertificate3, thumbnail: mavyCertificate3, w: 1651, h: 1275, alt: "Building a Dynamic Web App using PHP & MySQL" },
  { src: mavyCertificate4, thumbnail: mavyCertificate4, w: 1651, h: 1275, alt: "Enterprise System Management and Security" },
  { src: mavyCertificate5, thumbnail: mavyCertificate5, w: 1651, h: 1275, alt: "Creating an Interactive Story with Flutter" },
  { src: mavyCertificate6, thumbnail: mavyCertificate6, w: 1651, h: 1275, alt: "Create Interactive Dashboards with Streamlit and Python" },
  { src: mavyCertificate7, thumbnail: mavyCertificate7, w: 1651, h: 1275, alt: "Crash Course on Python" },
  { src: mavyCertificate8, thumbnail: mavyCertificate8, w: 1651, h: 1275, alt: "Programming for Everybody (Getting Started with Python)" },
  { src: mavyCertificate9, thumbnail: mavyCertificate9, w: 1651, h: 1275, alt: "Python Data Structures" },
  { src: mavyCertificate10, thumbnail: mavyCertificate10, w: 1651, h: 1275, alt: "Using Python to Access Web Data" },
  { src: mavyCertificate11, thumbnail: mavyCertificate11, w: 1651, h: 1275, alt: "Using Databases with Python" },
  { src: mavyCertificate12, thumbnail: mavyCertificate12, w: 1651, h: 1275, alt: "Capstone: Retrieving, Processing, and Visualizing Data with Python" },
  { src: mavyCertificate13, thumbnail: mavyCertificate13, w: 1651, h: 1275, alt: "Python for Everybody (Specialization)" },
];

const photoSwipeOptions = {
  bgOpacity: 0.8,
};

onMounted(() => {
  setTimeout(() => {
    if (!isTouchscreen()) {
      new Parallax(document.getElementById("section-5-heading"));
    }

    gsap.from("#section-5-title", {
       duration: 1,
       x: -300,
       opacity: 0,
       ease: "power3.out",
       scrollTrigger: {
         trigger: "#section-5-title",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
     });

    gsap.from("#section-5-subtitle", {
       duration: 1,
       x: 300,
       opacity: 0,
       ease: "power3.out",
       scrollTrigger: {
         trigger: "#section-5-subtitle",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
     });

    gsap.from(".my-gallery figure", {
      duration: 1,
      opacity: 0,
      y: -100,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
         trigger: ".my-gallery",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
    })
    
    gsap.utils.toArray(".my-gallery figure").forEach(el => {
      let hover = gsap.to(el, {scale: 0.9, duration: 0.1, paused: true, ease: "power1.inOut"});

      el.addEventListener("mouseenter", () => hover.play());
      el.addEventListener("mouseleave", () => hover.reverse());
    });;
  }, 0);
});
</script>

<style lang="scss">
.my-gallery {
  @apply grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 lg:gap-3 pt-8 md:px-0 lg:px-24;

  figure {
    @apply opacity-80 transition-all duration-200 ease-out shadow-lg hover:scale-95 hover:opacity-100 ;

    img {
      @apply rounded;
    }
  }
}
</style>