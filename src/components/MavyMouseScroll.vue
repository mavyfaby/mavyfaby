<template>
  <div id="mouse-container">
    <div data-depth="4">
      <div class="mouse invisible md:visible"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Parallax from "../lib/parallax";
import { isTouchscreen } from "../utils";

onMounted(() => {
  if (!isTouchscreen()) {
    new Parallax(document.getElementById("mouse-container"), { scalarX: 20 });
  }

  setTimeout(() => {
    const mouseAnim = gsap.from(".mouse", {
        opacity: 0,
        duration: 0.5,
        ease: "power3.out"
    }).progress(1);
  
    let atStart = true;
    
    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if (self.progress === 0) {
            mouseAnim.play();
            atStart = true;
          } else if (atStart) {
            mouseAnim.reverse();
            atStart = false;
          }
        }
    });
  }, 0);
});
</script>

<style lang="scss">
$colorOutline: theme("colors.slate.600");
$colorOutlineFade: theme("colors.slate.500");

$widthMouse: 30px;
$heightMouse: 45px;
$borderMouse: 6px;

$posMouse: 10px;
$posText: 2px;

$sizeTrackball: 10px;
$posTrackball: 10px;
$shrinkTrackball: 0.4;

$animDuration: 5s;

@mixin bgGradient {
  background: $colorOutlineFade linear-gradient(transparent 0%, transparent 50%, $colorOutline 50%, $colorOutline 100%);
}

#mouse-container {
  position: absolute;
  left: calc(50% + calc(calc($widthMouse / 2) * -1));
  bottom: 8%;
}

.mouse {
  @include bgGradient;

  width: $widthMouse;
  height: $heightMouse;
  border-radius: 100px;
  background-size: 100% 200%;
  animation: 
    colorSlide $animDuration linear infinite,
    nudgeMouse $animDuration ease-out infinite;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    margin: auto;
  }
  &:before {
    width: $widthMouse - $borderMouse;
    height: $heightMouse - $borderMouse;
    border-radius: 100px;

    @apply bg-slate-100 dark:bg-slate-900;
  }
  &:after {
    background-color: $colorOutline;
    width: $sizeTrackball;
    height: $sizeTrackball;
    border-radius: 100%;
    animation: trackBallSlide $animDuration linear infinite;
  }
}

@keyframes colorSlide { 
  0% { background-position: 0% 100%; }
  20% { background-position: 0% 0%; }
  21% { background-color: $colorOutlineFade; }
  29.99% { background-color: $colorOutline; background-position: 0% 0%; }
  30% { background-color: $colorOutlineFade; background-position: 0% 100%; }
  50% { background-position: 0% 0%; }
  51% { background-color: $colorOutlineFade; }
  59% { background-color: $colorOutline; background-position: 0% 0%; }
  60% { background-color: $colorOutlineFade; background-position: 0% 100%; }
  80% { background-position: 0% 0%; }
  81% { background-color: $colorOutlineFade; }
  90%, 100% { background-color: $colorOutline; }
}

@keyframes trackBallSlide {
  0% { opacity: 1; transform: scale(1) translateY(-$posTrackball); }
  6% {  opacity: 1; transform: scale(0.9) translateY(calc($posTrackball / 4)); }
  14% { opacity: 0; transform: scale($shrinkTrackball) translateY($posTrackball*2); }
  15%, 19% { opacity: 0; transform: scale($shrinkTrackball) translateY(-$posTrackball); }
  28%, 29.99% { opacity: 1; transform: scale(1) translateY(-$posTrackball); }
  30% { opacity: 1; transform: scale(1) translateY(-$posTrackball); }
  36% {  opacity: 1; transform: scale(0.9) translateY(calc($posTrackball / 4)); }
  44% { opacity: 0; transform: scale($shrinkTrackball) translateY($posTrackball*2); }
  45%, 49% { opacity: 0; transform: scale($shrinkTrackball) translateY(-$posTrackball); }
  58%, 59.99% { opacity: 1; transform: scale(1) translateY(-$posTrackball); }
  60% { opacity: 1; transform: scale(1) translateY(-$posTrackball); }
  66% {  opacity: 1; transform: scale(0.9) translateY(calc($posTrackball / 4)); }
  74% { opacity: 0; transform: scale($shrinkTrackball) translateY($posTrackball*2); }
  75%, 79% { opacity: 0; transform: scale($shrinkTrackball) translateY(-$posTrackball); }
  88%, 100% { opacity: 1; transform: scale(1) translateY(-$posTrackball); }
}

@keyframes nudgeMouse {
  0% { transform: translateY(0); }
  20% { transform: translateY($posMouse); }
  30% { transform: translateY(0); }
  50% { transform: translateY($posMouse); }
  60% { transform: translateY(0); }
  80% { transform: translateY($posMouse); }
  90% { transform: translateY(0); }
}

@keyframes nudgeText {
  0% { transform: translateY(0); }
  20% { transform: translateY($posText); }
  30% { transform: translateY(0); }
  50% { transform: translateY($posText); }
  60% { transform: translateY(0); }
  80% { transform: translateY($posText); }
  90% { transform: translateY(0); }
}

@keyframes colorText { 
  21% { color: $colorOutlineFade; }
  30% { color: $colorOutline; }
  51% { color: $colorOutlineFade; }
  60% { color: $colorOutline; }
  81% { color: $colorOutlineFade; }
  90% { color: $colorOutline; }
}
</style>