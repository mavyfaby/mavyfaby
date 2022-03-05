import gsap from "gsap";
import { isTouchscreen } from ".";
import Parallax from "../lib/parallax";

/**
 * Start animation in section 3
 * @param callback A callback function when animation is complete
 */
 export function startAnimS3(callback?: Function) {
  if (!isTouchscreen()) {
   new Parallax(document.getElementById("section-3"));
  }

   setTimeout(() => {
     gsap.from("#section-3-title", {
       duration: 1,
       x: -300,
       opacity: 0,
       ease: "power3.out",
       scrollTrigger: {
         trigger: "#section-3-title",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
     });
   
     gsap.from("#section-3-description", {
       duration: 1,
       x: 300,
       opacity: 0,
       ease: "power3.out",
       scrollTrigger: {
         trigger: "#section-3-description",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
     });
 
     gsap.from("#tech-canvas", {
       duration: 1,
       x: 500,
       opacity: 0,
       ease: "power3.out",
       scrollTrigger: {
         trigger: "#tech-canvas",
         start: "center 75%",
         end: "center bottom",
         toggleActions: "play none resume reverse",
       }
     });
   }, 0);
 }